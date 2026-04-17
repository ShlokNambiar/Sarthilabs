document.addEventListener('DOMContentLoaded', () => {

    // --- Page Transitions ---
    // --- Page Transitions ---
    // EXPECTS: <div class="page-transition-overlay active"></div> in the HTML
    const overlay = document.querySelector('.page-transition-overlay');

    if (overlay) {
        // Fade In (Reveal Page)
        // Small delay to ensure the browser has rendered the black screen first
        requestAnimationFrame(() => {
            overlay.classList.remove('active');
        });

        function navigateTo(href) {
            // Fade Out (Exit Page)
            overlay.classList.add('active');
            setTimeout(() => {
                window.location.href = href;
            }, 600);
        }

        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('#') && !href.startsWith('mailto:') && link.target !== '_blank') {
                    e.preventDefault();
                    navigateTo(href);
                }
            });
        });
    }

    // --- Advanced Cursor Physics (LERP + Velocity) ---
    const orb = document.getElementById('cursor-orb');
    const aura = document.getElementById('cursor-aura');

    if (orb && aura) {
        // State
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let orbX = mouseX;
        let orbY = mouseY;

        let auraX = mouseX;
        let auraY = mouseY;

        // Configuration
        const ORB_SPEED = 0.2; // "Slightest" lag (higher = faster/less lag)
        const AURA_SPEED = 0.12; // Slightly slower for the "trail" feel
        const MAX_SCALE = 1.3; // Limit size ("dont let it look big as fuck")

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function updateCursor() {
            // LERP (Linear Interpolation) for smoothness
            // current = current + (target - current) * fraction

            // Calculate velocity for the orb before updating position
            const distX = mouseX - orbX;
            const distY = mouseY - orbY;

            // Move Orb
            orbX += distX * ORB_SPEED;
            orbY += distY * ORB_SPEED;

            // Move Aura
            auraX += (mouseX - auraX) * AURA_SPEED;
            auraY += (mouseY - auraY) * AURA_SPEED;

            // Velocity-based scaling
            // Speed is the distance we moved this frame (roughly) keying off the distance to target
            // Hypotenuse of the distance vector give us "pixels remaining to target"
            // We can use that as a proxy for speed.
            const velocity = Math.hypot(distX, distY);

            // Map velocity to scale: 0 velocity -> 1 scale. High velocity -> MAX_SCALE.
            // Clamped to avoid "big as fuck"
            let scale = 1 + (velocity * 0.005);
            if (scale > MAX_SCALE) scale = MAX_SCALE;

            // Apply transforms
            // Note: -10 is half width/height to center it
            orb.style.transform = `translate(${orbX - 10}px, ${orbY - 10}px) scale(${scale})`;

            // Aura follows independently
            aura.style.left = `${auraX}px`;
            aura.style.top = `${auraY}px`;

            requestAnimationFrame(updateCursor);
        }

        updateCursor();
    }

    // --- Fluid Canvas Interaction ---
    const canvas = document.getElementById('fluid-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 2 + 1;
                // Add minor random velocity so they don't just sit there if created still
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.opacity > 0) this.opacity -= 0.005;
            }

            draw() {
                ctx.fillStyle = `rgba(0, 242, 255, ${this.opacity * 0.2})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function createParticles(e) {
            // Create particles at exact mouse position, not interpolated orb position
            // This makes the trail feel responsive to the hand, even if the orb lags slightly
            for (let i = 0; i < 2; i++) {
                particles.push(new Particle(e.clientX, e.clientY));
            }
        }

        window.addEventListener('mousemove', createParticles);

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].opacity <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
            }
            requestAnimationFrame(animate);
        }
        animate();
    }

    // --- Parallax Effect on Typography ---
    const heroTitle = document.querySelector('h1.parallax-target');
    if (heroTitle) {
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

            heroTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }

    // Ambient Labels Parallax
    const labels = document.querySelectorAll('.ambient-label');
    if (labels.length > 0) {
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

            labels.forEach((label, index) => {
                const depth = (index + 1) * 2;
                label.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
            });
        });
    }

    // --- Active Link Highlight ---
    let currentPath = window.location.pathname.split('/').pop();
    if (!currentPath || currentPath === 'index.html') currentPath = '/';
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) link.classList.add('active');
    });

});
