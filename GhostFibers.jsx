/* GhostFibers — React Bits (JS-CSS variant), ported to raw WebGL2 so it needs no bundler/ogl.
   Shader source is unchanged from the registry item. */

const VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uLayers;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uWaveSpeed;
uniform float uLayerSpeed;
uniform float uTwist;
uniform float uTwistFrequency;
uniform float uTwistSpeed;
uniform float uLineFrequency;
uniform float uLineSpacing;
uniform float uLineSharpness;
uniform float uGlowFalloff;
uniform float uGlowIntensity;
uniform float uBrightness;
uniform float uBlueBoost;
uniform float uVignette;
uniform float uGrain;
uniform float uRotationSpeed;
uniform float uLightMode;
uniform vec3 uLineColor;
uniform vec3 uGlowColor;

out vec4 fragColor;

#define MAX_LAYERS 10

mat2 rotate2d(float angle) {
  float sine = sin(angle);
  float cosine = cos(angle);
  return mat2(cosine, -sine, sine, cosine);
}

float grainHash(vec2 point) {
  point = floor(point);
  float hash = 52.9829189 * fract(dot(point, vec2(0.065, 0.005)));
  return fract(hash);
}

float layeredGrain(vec2 fragmentPixel) {
  vec2 point = mod(fragmentPixel + vec2(uTime * 30.0, -uTime * 21.0), 1024.0);
  vec2 rotated = mat2(0.8, -0.5, 0.5, 0.8) * point;
  float grain = 0.0;
  grain += 0.40 * grainHash(rotated);
  grain += 0.25 * grainHash(rotated * 2.0 + 17.0);
  grain += 0.20 * grainHash(rotated * 4.0 + 47.0);
  grain += 0.10 * grainHash(rotated * 8.0 + 113.0);
  grain += 0.05 * grainHash(rotated * 16.0 + 191.0);
  return grain;
}

void main() {
  vec2 resolution = max(uResolution, vec2(1.0));
  vec2 uv = (2.0 * gl_FragCoord.xy - resolution) / resolution.y;
  float time = uTime * uSpeed;
  vec3 backdrop = mix(vec3(0.070588, 0.058824, 0.090196), vec3(1.0), step(0.5, uLightMode));
  vec3 centerTone = max(uLineColor * 0.85567 - uGlowColor * 0.06186, vec3(0.0));
  vec3 cloudTone = uLineColor * 0.19588 + uGlowColor * 0.2268;
  vec2 p = uv;
  p /= max(uScale, 0.05);
  p = rotate2d(radians(uRotation) + time * uRotationSpeed) * p;
  vec3 color = vec3(0.0);
  float fiberField = 0.0;

  for (int index = 0; index < MAX_LAYERS; index++) {
    float fi = float(index) + 1.0;
    if (fi > uLayers) break;

    p += uWaveAmplitude * sin(p.yx * fi * uWaveFrequency + time * (uWaveSpeed + fi * uLayerSpeed));

    float radius = length(p);
    float polarAngle = atan(p.y, p.x);
    polarAngle += sin(radius * uTwistFrequency - time * uTwistSpeed + fi) * uTwist;
    p = vec2(cos(polarAngle), sin(polarAngle)) * radius;

    float lines = abs(sin(p.x * (uLineFrequency + fi * uLineSpacing) + sin(p.y * 3.0 + time)));
    lines = pow(max(0.0, 1.0 - lines), uLineSharpness);
    fiberField += lines / fi;
    color += uLineColor * lines / fi;

    float glow = exp(-uGlowFalloff * abs(sin(p.x * 3.0 + time + fi)));
    color += uGlowColor * glow * uGlowIntensity / (fi * 2.0);
  }

  float center = exp(-2.2 * dot(uv, uv));
  color += centerTone * center;

  float cloud = exp(-1.5 * length(uv + vec2(sin(time * 0.3) * 0.25, cos(time * 0.25) * 0.18)));
  color += cloudTone * cloud;

  float vignette = 1.0 - smoothstep(0.35, 1.45, length(uv));
  color *= mix(1.0 - uVignette, 1.0, vignette);
  color = 1.0 - exp(-color * uBrightness);
  color.b *= uBlueBoost;

  vec3 outputColor;
  if (uLightMode > 0.5) {
    float edgeFade = mix(1.0 - uVignette, 1.0, vignette);
    float fibers = pow(smoothstep(0.12, 1.05, fiberField) * edgeFade, 1.5);
    float atmosphere = (center * 0.025 + cloud * 0.015) * edgeFade;
    vec3 fiberInk = mix(backdrop, uLineColor, 0.52);
    vec3 airColor = mix(backdrop, uGlowColor, 0.16);

    outputColor = mix(backdrop, airColor, atmosphere);
    outputColor = mix(outputColor, fiberInk, fibers * 0.3);
  } else {
    outputColor = backdrop + color;
  }

  float noise = (layeredGrain(gl_FragCoord.xy) - 0.5) * uGrain;
  outputColor = clamp(outputColor + noise, 0.0, 1.0);
  fragColor = vec4(outputColor, 1.0);
}
`;

const FLOATS = [
  ['uSpeed', 'speed', 0.2], ['uScale', 'scale', 2], ['uRotation', 'rotation', 0],
  ['uRotationSpeed', 'rotationSpeed', 0.25], ['uLayers', 'layers', 4],
  ['uWaveAmplitude', 'waveAmplitude', 0.015], ['uWaveFrequency', 'waveFrequency', 3],
  ['uWaveSpeed', 'waveSpeed', 0.15], ['uLayerSpeed', 'layerSpeed', 0.08],
  ['uTwist', 'twist', 0.1], ['uTwistFrequency', 'twistFrequency', 5], ['uTwistSpeed', 'twistSpeed', 1.2],
  ['uLineFrequency', 'lineFrequency', 5], ['uLineSpacing', 'lineSpacing', 2],
  ['uLineSharpness', 'lineSharpness', 16], ['uGlowFalloff', 'glowFalloff', 10],
  ['uGlowIntensity', 'glowIntensity', 1.6], ['uBrightness', 'brightness', 2],
  ['uBlueBoost', 'blueBoost', 1.25], ['uVignette', 'vignette', 0.8], ['uGrain', 'grain', 0.05]
];

function hexToRgb(hex) {
  const v = String(hex || '').trim().replace(/^#/, '');
  const n = v.length === 3 ? v.replace(/./g, c => c + c) : v;
  const m = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
  if (!m) return [1, 1, 1];
  return [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255];
}

function compile(gl, type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error('GhostFibers shader error:', gl.getShaderInfoLog(sh));
  }
  return sh;
}

function GhostFibers(props) {
  const ref = React.useRef(null);
  const propsRef = React.useRef(props);
  propsRef.current = props;
  const dpr = props.dpr || 1;

  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'width:100%;height:100%;display:block';
    host.appendChild(canvas);

    const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, powerPreference: 'low-power' });
    if (!gl) { host.style.background = '#0d0a17'; return; }

    const program = gl.createProgram();
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const U = name => gl.getUniformLocation(program, name);
    const uniforms = { uResolution: U('uResolution'), uTime: U('uTime'), uLightMode: U('uLightMode'), uLineColor: U('uLineColor'), uGlowColor: U('uGlowColor') };
    FLOATS.forEach(([u]) => { uniforms[u] = U(u); });

    const ratio = Math.min(Math.max(dpr, 0.5), 2);
    let raf = 0, elapsed = 0, prev = performance.now();
    let visible = true, pageVisible = !document.hidden;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    const pushUniforms = () => {
      const p = propsRef.current || {};
      gl.useProgram(program);
      FLOATS.forEach(([u, key, dflt]) => {
        const val = p[key] === undefined ? dflt : Number(p[key]);
        gl.uniform1f(uniforms[u], u === 'uLayers' ? Math.min(Math.max(Math.round(val), 1), 10) : val);
      });
      gl.uniform1f(uniforms.uLightMode, p.lightMode ? 1 : 0);
      gl.uniform3fv(uniforms.uLineColor, hexToRgb(p.lineColor || '#140E35'));
      gl.uniform3fv(uniforms.uGlowColor, hexToRgb(p.glowColor || '#3437A0'));
    };

    const draw = () => {
      gl.uniform1f(uniforms.uTime, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const resize = () => {
      const r = host.getBoundingClientRect();
      const w = Math.max(1, Math.floor(r.width * ratio));
      const h = Math.max(1, Math.floor(r.height * ratio));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; canvas.height = h;
        gl.viewport(0, 0, w, h);
        gl.useProgram(program);
        gl.uniform2f(uniforms.uResolution, w, h);
      }
      pushUniforms();
      draw();
    };

    const running = () => visible && pageVisible && !propsRef.current.paused && !reduced.matches;
    const loop = now => {
      raf = 0;
      if (!running()) return;
      elapsed += Math.min((now - prev) / 1000, 0.1);
      prev = now;
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => { if (running() && !raf) { prev = performance.now(); raf = requestAnimationFrame(loop); } };
    const stop = () => { if (raf) cancelAnimationFrame(raf); raf = 0; };
    const toggle = () => { running() ? start() : (stop(), draw()); };

    const ro = new ResizeObserver(resize); ro.observe(host);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; toggle(); }, { threshold: 0 });
    io.observe(host);
    const onVis = () => { pageVisible = !document.hidden; toggle(); };
    document.addEventListener('visibilitychange', onVis);
    reduced.addEventListener('change', toggle);

    resize();
    start();

    return () => {
      stop(); ro.disconnect(); io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      reduced.removeEventListener('change', toggle);
      if (canvas.parentNode === host) host.removeChild(canvas);
      const lose = gl.getExtension('WEBGL_lose_context');
      if (lose) lose.loseContext();
    };
  }, [dpr]);

  React.useEffect(() => {
    const host = ref.current;
    if (host) host.dispatchEvent(new Event('ghostfibers:props'));
  });

  return React.createElement('div', {
    ref,
    style: { position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }
  });
}

if (typeof window !== 'undefined') window.GhostFibers = GhostFibers;
if (typeof module !== 'undefined') module.exports = { GhostFibers, default: GhostFibers };
