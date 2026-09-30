/* @ds-bundle: {"format":4,"namespace":"SpaceXAIDesignSystem_f8c95e","components":[{"name":"BOT_COLORS","sourcePath":"components/chat/BotAvatar.jsx"},{"name":"BotAvatar","sourcePath":"components/chat/BotAvatar.jsx"},{"name":"ChatBubble","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"SystemNote","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"ThinkingRow","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"Composer","sourcePath":"components/chat/Composer.jsx"},{"name":"ThreadListItem","sourcePath":"components/chat/ThreadListItem.jsx"},{"name":"AnnouncementPill","sourcePath":"components/core/AnnouncementPill.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"GradientRule","sourcePath":"components/core/GradientRule.jsx"},{"name":"SpectrumWord","sourcePath":"components/core/GradientRule.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SplitButton","sourcePath":"components/core/SplitButton.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"CodeBlock","sourcePath":"components/marketing/CodeBlock.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"NewsCard","sourcePath":"components/marketing/NewsCard.jsx"},{"name":"PlanCard","sourcePath":"components/marketing/PlanCard.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"Wordmark","sourcePath":"components/navigation/NavBar.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"}],"sourceHashes":{"components/chat/BotAvatar.jsx":"8a66223fed9a","components/chat/ChatBubble.jsx":"c096c872fe37","components/chat/Composer.jsx":"0debdd72fe7c","components/chat/ThreadListItem.jsx":"56461a9a404b","components/core/AnnouncementPill.jsx":"ea2c6c29c39f","components/core/Badge.jsx":"b2b38e42d098","components/core/Button.jsx":"f1a0db707bad","components/core/Card.jsx":"f6a667809779","components/core/GradientRule.jsx":"c859fdf84766","components/core/Icon.jsx":"8ff0049b8706","components/core/IconButton.jsx":"df8611913956","components/core/Input.jsx":"23946bfe40ee","components/core/SplitButton.jsx":"4b2081c5a5fa","components/core/Tabs.jsx":"1c27e6c145aa","components/marketing/CodeBlock.jsx":"21100f2979f6","components/marketing/FeatureCard.jsx":"0259b3cd9abd","components/marketing/NewsCard.jsx":"7bffa5e69afd","components/marketing/PlanCard.jsx":"55d756e07cf6","components/marketing/SectionHeading.jsx":"53e445525d56","components/marketing/StatBlock.jsx":"515214fb490a","components/navigation/NavBar.jsx":"e7bb5a37534c","components/navigation/SiteFooter.jsx":"027906cd50a6","ui_kits/grok-bot/Conversation.jsx":"58df9bf6d27d","ui_kits/grok-bot/Sidebar.jsx":"9b7f5f1624e9","ui_kits/grok-bot/data.js":"0fb31523c6c7","ui_kits/website/Hero.jsx":"9ace19d23a2f","ui_kits/website/Sections.jsx":"226e04261a81"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SpaceXAIDesignSystem_f8c95e = window.SpaceXAIDesignSystem_f8c95e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chat/BotAvatar.jsx
try { (() => {
/* The Bot roster uses flat two-tone discs: a saturated ground with a lighter
   inner shape. Colours are drawn from the accent set. */
const BOT_COLORS = {
  teal: 'var(--teal)',
  brown: 'var(--brown)',
  indigo: 'var(--indigo)',
  violet: 'var(--violet)',
  blue: 'var(--blue)',
  orange: 'var(--orange-bright)'
};
function BotAvatar({
  color = 'teal',
  size = 30,
  badge,
  shape = 'bars',
  style
}) {
  const bg = BOT_COLORS[color] || color;
  const s = size;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: s,
      height: s,
      flex: '0 0 auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: s,
      height: s,
      borderRadius: 'var(--radius-circle)',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s * 0.08,
      overflow: 'hidden'
    }
  }, shape === 'bars' && [0, 1].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: s * 0.13,
      height: s * 0.34,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,.92)'
    }
  })), shape === 'wedge' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderLeft: `${s * 0.17}px solid transparent`,
      borderRight: `${s * 0.17}px solid transparent`,
      borderBottom: `${s * 0.3}px solid rgba(255,255,255,.92)`
    }
  }), shape === 'disc' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s * 0.36,
      height: s * 0.36,
      borderRadius: 'var(--radius-circle)',
      background: 'rgba(255,255,255,.92)'
    }
  })), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -1,
      right: -1,
      width: s * 0.28,
      height: s * 0.28,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--orange-bright)',
      border: '2px solid var(--ink-2)'
    }
  }));
}
Object.assign(__ds_scope, { BOT_COLORS, BotAvatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/BotAvatar.jsx", error: String((e && e.message) || e) }); }

// components/chat/ChatBubble.jsx
try { (() => {
function ChatBubble({
  children,
  from = 'bot',
  maxWidth = 420,
  style
}) {
  const mine = from === 'user';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: mine ? 'flex-end' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth,
      padding: '11px 15px',
      borderRadius: 'var(--radius-lg)',
      background: mine ? 'var(--paper-1)' : 'var(--ink-5)',
      color: mine ? 'var(--ink-0)' : 'var(--text-secondary)',
      font: 'var(--weight-regular) var(--size-body-sm)/1.55 var(--font-sans)',
      letterSpacing: 'var(--tracking-body)',
      textWrap: 'pretty'
    }
  }, children));
}
function SystemNote({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      font: 'var(--weight-regular) var(--size-caption)/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)',
      padding: '6px 0',
      ...style
    }
  }, children);
}
function ThinkingRow({
  label = 'Thinking',
  color = 'orange',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-circle)',
      background: `var(--${color === 'orange' ? 'orange-bright' : color})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-body-sm)/1 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, label));
}
Object.assign(__ds_scope, { ChatBubble, SystemNote, ThinkingRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/chat/ThreadListItem.jsx
try { (() => {
function ThreadListItem({
  name,
  preview,
  time,
  color = 'teal',
  shape = 'bars',
  unread = false,
  active = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 11,
      width: '100%',
      textAlign: 'left',
      border: 0,
      cursor: 'pointer',
      padding: '9px 11px',
      borderRadius: 'var(--radius-sm)',
      background: active ? 'var(--ink-5)' : hover ? 'var(--ink-4)' : 'transparent',
      transition: 'var(--transition-control)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BotAvatar, {
    color: color,
    shape: shape,
    size: 30,
    badge: unread
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      font: 'var(--weight-medium) var(--size-body-sm)/1.3 var(--font-sans)',
      color: 'var(--white)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-caption)/1 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, time)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 3,
      font: 'var(--weight-regular) var(--size-caption)/1.35 var(--font-sans)',
      color: 'var(--text-tertiary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, preview)));
}
Object.assign(__ds_scope, { ThreadListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ThreadListItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  accent: {
    background: 'var(--orange-tint)',
    color: 'var(--orange-bright)'
  },
  neutral: {
    background: 'var(--ink-5)',
    color: 'var(--text-secondary)'
  },
  violet: {
    background: 'var(--violet-tint)',
    color: 'var(--violet)'
  },
  live: {
    background: 'rgba(47,191,106,.14)',
    color: 'var(--status-live)'
  },
  bare: {
    background: 'transparent',
    color: 'var(--text-tertiary)',
    padding: 0
  }
};
function Badge({
  children,
  tone = 'accent',
  style
}) {
  const t = TONES[tone] || TONES.accent;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--weight-medium) var(--size-caption)/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-body)',
      whiteSpace: 'nowrap',
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'surface',
  padding = 'var(--card-pad)',
  radius = 'var(--radius-xl)',
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const TONES = {
    surface: {
      background: 'var(--surface-card)',
      border: '1px solid transparent'
    },
    recessed: {
      background: 'var(--ink-2)',
      border: '1px solid var(--border-hairline)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-hairline)'
    },
    raised: {
      background: 'var(--ink-5)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      borderRadius: radius,
      padding,
      transition: 'var(--transition-control)',
      cursor: interactive ? 'pointer' : undefined,
      ...TONES[tone],
      ...(interactive && hover ? {
        background: 'var(--ink-4)'
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/GradientRule.jsx
try { (() => {
function GradientRule({
  height = 3,
  width = '100%',
  radius = 'var(--radius-pill)',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height,
      width,
      borderRadius: radius,
      background: 'var(--gradient-spectrum)',
      ...style
    }
  });
}
function SpectrumWord({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '0.08em',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '0.055em',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--gradient-spectrum)'
    }
  }));
}
Object.assign(__ds_scope, { GradientRule, SpectrumWord });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GradientRule.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
const cache = new Map();
const listeners = new Set();
function load(name) {
  if (cache.has(name)) return cache.get(name);
  const p = fetch(CDN + name + '.svg').then(r => r.ok ? r.text() : '').then(txt => {
    cache.set(name, txt);
    listeners.forEach(fn => fn());
    return txt;
  }).catch(() => {
    cache.set(name, '');
    return '';
  });
  cache.set(name, p);
  return p;
}

/* Lucide is a documented substitution for the site's in-house stroke set.
   The SVG source is injected inline so the glyph inherits currentColor. */
function Icon({
  name,
  size = 16,
  strokeWidth,
  style,
  ...rest
}) {
  const [, tick] = React.useReducer(n => n + 1, 0);
  React.useEffect(() => {
    listeners.add(tick);
    const v = cache.get(name);
    if (v === undefined || typeof v.then === 'function') load(name).then(tick);
    return () => listeners.delete(tick);
  }, [name]);
  const raw = cache.get(name);
  const svg = typeof raw === 'string' ? raw : '';
  const markup = svg ? svg.replace(/<svg([^>]*)>/, (m, attrs) => '<svg' + attrs.replace(/\swidth="[^"]*"/, '').replace(/\sheight="[^"]*"/, '').replace(/\sstroke="[^"]*"/, '') + ` width="${size}" height="${size}" stroke="currentColor" fill="none" style="display:block">`) : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    role: "img"
  }, rest, {
    dangerouslySetInnerHTML: {
      __html: markup
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      color: 'currentColor',
      opacity: strokeWidth === 'light' ? 0.7 : 1,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/AnnouncementPill.jsx
try { (() => {
function AnnouncementPill({
  badge = 'New',
  title,
  detail,
  href = '#',
  icon = 'play',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      height: 40,
      padding: '0 6px 0 8px',
      borderRadius: 'var(--radius-pill)',
      background: hover ? 'var(--ink-4)' : 'var(--ink-3)',
      border: '1px solid var(--border-hairline)',
      transition: 'var(--transition-control)',
      textDecoration: 'none',
      ...style
    }
  }, badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent"
  }, badge), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--size-body-sm)/1 var(--font-sans)',
      color: 'var(--white)'
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-body-sm)/1 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, detail), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--ink-5)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  })));
}
Object.assign(__ds_scope, { AnnouncementPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AnnouncementPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 34,
    padding: '0 16px',
    font: 'var(--size-body-sm)'
  },
  md: {
    height: 40,
    padding: '0 20px',
    font: 'var(--size-body-sm)'
  },
  lg: {
    height: 48,
    padding: '0 26px',
    font: 'var(--size-body)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--white)',
    color: 'var(--ink-0)',
    border: '1px solid var(--white)'
  },
  secondary: {
    background: 'var(--ink-4)',
    color: 'var(--white)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--white)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent'
  }
};
const HOVER = {
  primary: {
    background: 'var(--grey-4)',
    borderColor: 'var(--grey-4)'
  },
  secondary: {
    background: 'var(--ink-6)'
  },
  outline: {
    background: 'var(--ink-4)'
  },
  ghost: {
    color: 'var(--white)',
    background: 'var(--ink-4)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  }, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.height,
      padding: s.padding,
      borderRadius: 'var(--radius-pill)',
      font: `var(--weight-medium) ${s.font}/1 var(--font-sans)`,
      letterSpacing: 'var(--tracking-body)',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      transform: down && !disabled ? 'scale(var(--press-scale))' : 'scale(1)',
      transition: 'var(--transition-control), transform var(--duration-instant) var(--ease-standard)',
      textDecoration: 'none',
      ...v,
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }), icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name,
  size = 36,
  variant = 'ghost',
  label,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = variant === 'solid' ? {
    background: 'var(--ink-5)',
    color: 'var(--white)'
  } : variant === 'inverse' ? {
    background: 'var(--paper-1)',
    color: 'var(--ink-0)'
  } : {
    background: 'transparent',
    color: 'var(--text-tertiary)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      borderRadius: 'var(--radius-circle)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...base,
      ...(hover ? {
        background: variant === 'inverse' ? 'var(--white)' : 'var(--ink-4)',
        color: variant === 'inverse' ? 'var(--ink-0)' : 'var(--white)'
      } : null),
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.44)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/chat/Composer.jsx
try { (() => {
function Composer({
  placeholder = 'Message',
  value,
  onChange,
  onSend,
  style
}) {
  const [internal, setInternal] = React.useState('');
  const v = value !== undefined ? value : internal;
  const set = t => {
    setInternal(t);
    onChange && onChange(t);
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (v.trim()) {
        onSend && onSend(v);
        set('');
      }
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 52,
      padding: '0 8px 0 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-5)',
      border: '1px solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "plus",
    size: 30,
    label: "Attach"
  }), /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => set(e.target.value),
    placeholder: placeholder,
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      color: 'var(--text-primary)',
      font: 'var(--weight-regular) var(--size-body-sm)/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-body)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: v.trim() ? 'arrow-up' : 'mic',
    size: 34,
    variant: "inverse",
    label: v.trim() ? 'Send' : 'Voice',
    onClick: () => {
      if (v.trim()) {
        onSend && onSend(v);
        set('');
      }
    }
  }));
}
Object.assign(__ds_scope, { Composer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/Composer.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  value,
  onChange,
  placeholder,
  icon,
  type = 'text',
  tone = 'recessed',
  size = 'md',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'lg' ? 48 : size === 'sm' ? 32 : 38;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      borderRadius: 'var(--radius-sm)',
      background: tone === 'recessed' ? 'var(--ink-2)' : 'var(--ink-5)',
      border: `1px solid ${focus ? 'var(--border-strong)' : 'var(--border-hairline)'}`,
      transition: 'var(--transition-control)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    style: {
      color: 'var(--text-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      color: 'var(--text-primary)',
      font: 'var(--text-copy)',
      fontSize: 'var(--size-body-sm)',
      letterSpacing: 'var(--tracking-body)'
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SplitButton.jsx
try { (() => {
function SplitButton({
  children,
  items = [],
  onSelect,
  size = 'md',
  style
}) {
  const [open, setOpen] = React.useState(false);
  const h = size === 'sm' ? 34 : 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'stretch',
      background: 'var(--white)',
      color: 'var(--ink-0)',
      borderRadius: 'var(--radius-pill)',
      height: h,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: 0,
      background: 'transparent',
      color: 'inherit',
      padding: '0 18px',
      font: `var(--weight-medium) var(--size-body-sm)/1 var(--font-sans)`,
      cursor: 'pointer'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      background: 'rgba(10,10,10,.18)',
      margin: '8px 0'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-expanded": open,
    style: {
      border: 0,
      background: 'transparent',
      color: 'inherit',
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15,
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  }))), open && items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: h + 8,
      right: 0,
      minWidth: 220,
      background: 'var(--ink-3)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-float)',
      padding: 6,
      zIndex: 40
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    onClick: () => {
      onSelect && onSelect(it);
      setOpen(false);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 0,
      background: 'transparent',
      color: 'var(--text-secondary)',
      padding: '9px 12px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-copy)',
      fontSize: 'var(--size-body-sm)',
      cursor: 'pointer'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--ink-5)';
      e.currentTarget.style.color = 'var(--white)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-secondary)';
    }
  }, it))));
}
Object.assign(__ds_scope, { SplitButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SplitButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(items[0]);
  const active = value !== undefined ? value : internal;
  const set = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      ...style
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      role: "tab",
      "aria-selected": on,
      onClick: () => set(it),
      style: {
        border: 0,
        cursor: 'pointer',
        height: 34,
        padding: '0 16px',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--ink-5)' : 'transparent',
        color: on ? 'var(--white)' : 'var(--text-tertiary)',
        font: `var(--weight-medium) var(--size-body-sm)/1 var(--font-sans)`,
        letterSpacing: 'var(--tracking-body)',
        transition: 'var(--transition-control)'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CodeBlock.jsx
try { (() => {
const TOKEN_COLOR = {
  keyword: '#e06c5b',
  string: '#e2b565',
  fn: '#6d8fd6',
  plain: 'var(--grey-4)',
  comment: 'var(--grey-1)',
  number: '#b89cf0'
};
function CodeBlock({
  lines = [],
  copyable = true,
  windowChrome = true,
  style
}) {
  const [copied, setCopied] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-code)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      ...style
    }
  }, windowChrome && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7
    }
  }, ['#ff5f57', '#febc2e', '#28c840'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 11,
      height: 11,
      borderRadius: 'var(--radius-circle)',
      background: c
    }
  }))), copyable && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      border: 0,
      background: 'transparent',
      color: 'var(--text-tertiary)',
      font: 'var(--weight-regular) var(--size-caption)/1 var(--font-sans)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: copied ? 'check' : 'copy',
    size: 13
  }), copied ? 'Copied' : 'Copy')), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: '6px 18px 20px',
      font: 'var(--text-code)',
      overflowX: 'auto'
    }
  }, lines.map((ln, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      whiteSpace: 'pre',
      minHeight: '1.65em'
    }
  }, (Array.isArray(ln) ? ln : [[ln, 'plain']]).map(([t, k], j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      color: TOKEN_COLOR[k] || TOKEN_COLOR.plain
    }
  }, t))))));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
function FeatureCard({
  title,
  body,
  children,
  footerLabel,
  footerHref,
  padding = 24,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: "surface",
    padding: padding,
    radius: "var(--radius-xl)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: `var(--weight-medium) var(--size-h4)/1.4 var(--font-sans)`,
      letterSpacing: 'var(--tracking-body)',
      color: 'var(--white)'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) var(--size-body)/1.5 var(--font-sans)',
      letterSpacing: 'var(--tracking-body)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty',
      marginTop: -8
    }
  }, body), children && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, children), footerLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--size-body-sm)/1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, footerLabel), /*#__PURE__*/React.createElement("a", {
    href: footerHref || '#',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--weight-regular) var(--size-body-sm)/1 var(--font-sans)',
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, "Explore ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14
  }))));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/NewsCard.jsx
try { (() => {
const ART = {
  ember: 'var(--gradient-ember)',
  abyss: 'var(--gradient-abyss)',
  halo: 'var(--gradient-halo)',
  paper: 'var(--paper-1)'
};
function NewsCard({
  artwork = 'ember',
  artworkLabel,
  category,
  date,
  title,
  href = '#',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const light = artwork === 'paper';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      textDecoration: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/11',
      borderRadius: 'var(--radius-md)',
      background: ART[artwork] || artwork,
      display: 'flex',
      alignItems: 'center',
      padding: 22,
      overflow: 'hidden'
    }
  }, artworkLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-medium) 21px/1.2 var(--font-sans)`,
      letterSpacing: 'var(--tracking-heading)',
      color: light ? 'var(--ink-0)' : 'var(--white)'
    }
  }, artworkLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--weight-regular) var(--size-caption)/1 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, category && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, category), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7")), /*#__PURE__*/React.createElement("span", null, date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: `var(--weight-medium) var(--size-h4)/1.35 var(--font-sans)`,
      letterSpacing: 'var(--tracking-body)',
      color: hover ? 'var(--text-secondary)' : 'var(--white)',
      transition: 'var(--transition-control)',
      textWrap: 'pretty'
    }
  }, title, " ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 13,
    style: {
      verticalAlign: '-1px',
      opacity: .65
    }
  })));
}
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/NewsCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PlanCard.jsx
try { (() => {
function PlanCard({
  title,
  body,
  features = [],
  action,
  actionVariant = 'primary',
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: "surface",
    padding: 32,
    radius: "var(--radius-xl)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: `var(--weight-medium) var(--size-h2)/1.2 var(--font-sans)`,
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--white)'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: 'var(--weight-regular) var(--size-body)/1.5 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hairline)',
      margin: '26px 0 22px'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flex: 1
    }
  }, features.map(ft => /*#__PURE__*/React.createElement("li", {
    key: ft,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      font: 'var(--weight-regular) var(--size-body)/1.4 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    style: {
      color: 'var(--text-tertiary)'
    }
  }), ft))), action && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: actionVariant,
    size: "lg",
    fullWidth: true,
    onClick: onAction,
    style: {
      marginTop: 34
    }
  }, action));
}
Object.assign(__ds_scope, { PlanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PlanCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  size = 'lg',
  action,
  style
}) {
  const fs = size === 'xl' ? 'var(--size-display-2)' : size === 'lg' ? 'var(--size-display-3)' : 'var(--size-h1)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: align === 'center' ? 'var(--content-narrow)' : undefined,
      margin: align === 'center' ? '0 auto' : undefined
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) var(--size-body-sm)/1 var(--font-sans)',
      color: 'var(--text-tertiary)',
      marginBottom: 18
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: `var(--weight-medium) ${fs}/var(--leading-heading) var(--font-sans)`,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-primary)',
      textWrap: 'balance'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      maxWidth: 480,
      font: 'var(--weight-regular) var(--size-body-lg)/var(--leading-body) var(--font-sans)',
      letterSpacing: 'var(--tracking-body)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, body)), action);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function StatBlock({
  stats = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${stats.length || 1},1fr)`,
      ...style
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      padding: '0 40px',
      borderLeft: i === 0 ? 'none' : '1px solid var(--border-hairline)',
      ...(i === 0 ? {
        paddingLeft: 0
      } : null)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--weight-medium) var(--size-stat)/1 var(--font-sans)`,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-primary)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      font: 'var(--weight-regular) var(--size-body-sm)/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, s.label))));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function Wordmark({
  size = 20,
  style
}) {
  /* No redistributable logo asset exists — the brand guidelines forbid
     reconstructing the mark. The wordmark is set in type. */
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: `var(--weight-semibold) ${size}px/1 var(--font-sans)`,
      letterSpacing: '-0.04em',
      color: 'var(--white)',
      textDecoration: 'none',
      ...style
    }
  }, "SpaceXAI");
}
function NavBar({
  items = [],
  actions,
  sticky = true,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 50,
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '0 28px',
      background: 'rgba(10,10,10,.82)',
      backdropFilter: 'var(--blur-chrome)',
      WebkitBackdropFilter: 'var(--blur-chrome)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      flex: 1
    }
  }, items.map(it => {
    const label = typeof it === 'string' ? it : it.label;
    const caret = typeof it === 'object' && it.menu;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: "#",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '8px 12px',
        borderRadius: 'var(--radius-sm)',
        font: `var(--weight-regular) var(--size-body-sm)/1 var(--font-sans)`,
        letterSpacing: 'var(--tracking-body)',
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        transition: 'var(--transition-control)'
      },
      onMouseEnter: e => e.currentTarget.style.color = 'var(--white)',
      onMouseLeave: e => e.currentTarget.style.color = 'var(--text-secondary)'
    }, label, caret && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 13,
      style: {
        opacity: .7
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, actions || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "md"
  }, "Contact Sales"), /*#__PURE__*/React.createElement(__ds_scope.SplitButton, {
    items: ['Grok', 'API Console', 'Documentation']
  }, "Try for free"))));
}
Object.assign(__ds_scope, { Wordmark, NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  columns = [],
  note = '© 2026 SpaceXAI LLC',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      padding: '56px 28px 72px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(180px,1fr) 3fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      font: 'var(--weight-regular) var(--size-caption)/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))',
      gap: '36px 24px'
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--size-caption)/1 var(--font-sans)',
      color: 'var(--white)'
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: 'var(--weight-regular) var(--size-caption)/1 var(--font-sans)',
      color: 'var(--text-tertiary)',
      textDecoration: 'none',
      transition: 'var(--transition-control)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--white)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-tertiary)'
  }, l)))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/grok-bot/Conversation.jsx
try { (() => {
const {
  BotAvatar,
  ChatBubble,
  SystemNote,
  ThinkingRow,
  Composer,
  IconButton
} = window.SpaceXAIDesignSystem_f8c95e;
function Conversation({
  thread,
  onSend
}) {
  const endRef = React.useRef(null);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--ink-0)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(BotAvatar, {
    color: thread.color,
    shape: thread.shape,
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--weight-medium) 14px/1 var(--font-sans)',
      color: 'var(--white)'
    }
  }, thread.name), /*#__PURE__*/React.createElement(IconButton, {
    name: "monitor",
    size: 30,
    label: "Open computer"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '22px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, thread.messages.map((m, i) => {
    if (m.stamp) return /*#__PURE__*/React.createElement(SystemNote, {
      key: i
    }, m.stamp);
    if (m.note) return /*#__PURE__*/React.createElement(SystemNote, {
      key: i
    }, m.note);
    if (m.thinking) return /*#__PURE__*/React.createElement(ThinkingRow, {
      key: i,
      label: "Thinking",
      color: thread.color === 'orange' ? 'orange' : thread.color
    });
    return /*#__PURE__*/React.createElement(ChatBubble, {
      key: i,
      from: m.from,
      maxWidth: 440,
      style: {
        whiteSpace: 'pre-wrap'
      }
    }, m.text);
  }), /*#__PURE__*/React.createElement("div", {
    ref: endRef
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 28px 20px'
    }
  }, /*#__PURE__*/React.createElement(Composer, {
    placeholder: 'Message ' + thread.name,
    onSend: onSend
  })));
}
Object.assign(window, {
  Conversation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/grok-bot/Conversation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/grok-bot/Sidebar.jsx
try { (() => {
const {
  Input,
  IconButton,
  ThreadListItem
} = window.SpaceXAIDesignSystem_f8c95e;
function Sidebar({
  threads,
  activeId,
  onSelect,
  query,
  onQuery
}) {
  const shown = threads.filter(t => t.name.toLowerCase().includes(query.toLowerCase()));
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 282,
      flex: '0 0 282px',
      background: 'var(--ink-2)',
      borderRight: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 14px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 7
    }
  }, ['#ff5f57', '#febc2e', '#28c840'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: c
    }
  }))), /*#__PURE__*/React.createElement(IconButton, {
    name: "plus",
    size: 28,
    label: "New Bot"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px 10px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search",
    value: query,
    onChange: e => onQuery(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 8px'
    }
  }, shown.map(t => /*#__PURE__*/React.createElement(ThreadListItem, {
    key: t.id,
    name: t.name,
    preview: t.preview,
    time: t.time,
    color: t.color,
    shape: t.shape,
    unread: t.unread,
    active: t.id === activeId,
    onClick: () => onSelect(t.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--ink-5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--weight-medium) 10px/1 var(--font-sans)',
      color: 'var(--grey-4)'
    }
  }, "AS"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) 13px/1 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "Armand Segall")));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/grok-bot/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/grok-bot/data.js
try { (() => {
window.BOT_THREADS = [{
  id: 'chief',
  name: 'Chief',
  color: 'teal',
  shape: 'bars',
  time: 'Yesterday',
  preview: 'booked the venue and sent the confirmation',
  messages: [{
    from: 'bot',
    text: 'booked the venue and sent the confirmation. deposit clears friday.'
  }]
}, {
  id: 'sales',
  name: 'Sales Outbound',
  color: 'orange',
  shape: 'bars',
  time: '2:17 pm',
  preview: 'Typing…',
  messages: [{
    stamp: '2:17 pm'
  }, {
    from: 'bot',
    text: 'Hey Armand, good to meet you. What do you want me around for? Anything concrete, or more of a general sidekick?'
  }, {
    from: 'user',
    text: 'Overnight pipeline generation and outbound.\n\nPick eligible prospects from this Google Sheet, research them on the web, grab context on contacts and accounts from Hex, Sumble, and Salesforce. Draft email and LinkedIn sequences in my voice.'
  }, {
    note: 'Renamed to Sales Outbound'
  }, {
    thinking: true
  }]
}, {
  id: 'inbox',
  name: 'Inbox Manager',
  color: 'indigo',
  shape: 'wedge',
  time: '10:22 am',
  unread: true,
  preview: 'sent. inbox at zero, 5 drafts parked …',
  messages: [{
    from: 'bot',
    text: 'sent. inbox at zero, 5 drafts parked for your review.'
  }]
}, {
  id: 'account',
  name: 'Account Manager',
  color: 'violet',
  shape: 'bars',
  time: '8:22 am',
  preview: "invite's out to vicky. qlobex note he…",
  messages: [{
    from: 'bot',
    text: "invite's out to vicky. qlobex note here — they only sign annual, and Dana approves."
  }]
}, {
  id: 'talent',
  name: 'Talent Scout',
  color: 'blue',
  shape: 'disc',
  time: '5:22 am',
  preview: '3 intros drafted in your voice, held f…',
  messages: [{
    from: 'bot',
    text: '3 intros drafted in your voice, held for your go-ahead.'
  }]
}, {
  id: 'expense',
  name: 'Expense Manager',
  color: 'orange',
  shape: 'disc',
  time: '9:22 am',
  preview: 'report filed. 9 receipts, nothing out…',
  messages: [{
    from: 'bot',
    text: 'the harbor hotel charged $412 on the 12th and again on the 14th. double-billed, or two separate nights?'
  }, {
    from: 'user',
    text: 'two nights, mia stayed the second one'
  }, {
    from: 'bot',
    text: 'that clears it. report filed: 9 receipts matched, $2,340 across 3 trips, nothing outstanding.'
  }]
}, {
  id: 'offsite',
  name: 'Offsite crew',
  color: 'teal',
  shape: 'disc',
  time: '7:22 am',
  preview: 'that leaves the pipeline. i\'d spin up …',
  messages: [{
    from: 'bot',
    text: "that leaves the pipeline. i'd spin up a second bot for outbound."
  }]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/grok-bot/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  AnnouncementPill,
  Button,
  SpectrumWord,
  FeatureCard,
  CodeBlock,
  Tabs,
  SectionHeading,
  StatBlock,
  NewsCard,
  PlanCard,
  Card,
  Icon,
  ChatBubble
} = window.SpaceXAIDesignSystem_f8c95e;
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0 64px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 34
    }
  }, /*#__PURE__*/React.createElement(AnnouncementPill, {
    badge: "New",
    title: "Meet Grok 4.6",
    detail: "Our new model"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      maxWidth: 980,
      textAlign: 'center',
      font: 'var(--weight-medium) 72px/1.04 var(--font-sans)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--white)'
    }
  }, "Frontier AI models", /*#__PURE__*/React.createElement("br", null), "for everything you ", /*#__PURE__*/React.createElement(SpectrumWord, null, "ship"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) 18px/1.5 var(--font-sans)',
      letterSpacing: 'var(--tracking-body)',
      color: 'var(--grey-4)',
      textAlign: 'center'
    }
  }, "Reasoning, code, voice, images, and video. Trained on the world's largest supercluster."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "chevron-right",
    onClick: onCta
  }, "Get API Access"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "View Documentation")));
}
function ChatMock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement(ChatBubble, {
    from: "bot",
    maxWidth: 300
  }, "\u2026collapse the core into a singularity."), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "user",
    maxWidth: 280
  }, "What causes aurora borealis?"), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "bot",
    maxWidth: 300
  }, "Solar particles hit atmospheric gases near the poles, exciting them to glow."), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "user",
    maxWidth: 280
  }, "Explain quantum entanglement simply"), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "bot",
    maxWidth: 300
  }, "Two particles become linked \u2014 measuring one instantly determines the other, regardless of distance."));
}
function BuildMock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-code)',
      border: '1px solid var(--border-hairline)',
      overflow: 'hidden',
      font: 'var(--text-code)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '9px 12px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, ['#ff5f57', '#febc2e', '#28c840'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: c
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-3)'
    }
  }, "projects/main")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      color: 'var(--grey-3)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Find session references ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-1)'
    }
  }, "explore"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      float: 'right',
      color: 'var(--status-live)'
    }
  }, "[done]")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      color: 'var(--violet)'
    }
  }, "\u25C6 Thought for 4.1s"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      color: 'var(--grey-4)'
    }
  }, "\u25C6 Edit ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue)'
    }
  }, "src/middleware/auth.ts")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-1)'
    }
  }, "42 "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#e06c5b'
    }
  }, "export async function "), "handler(req) ", '{'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-1)'
    }
  }, "43 "), "  const token = extractBearer(req);"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(47,191,106,.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-1)'
    }
  }, "47 "), "    const session = await getSession(req);"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(47,191,106,.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--grey-1)'
    }
  }, "48 "), "    req.user = payload;"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      color: 'var(--grey-4)'
    }
  }, "\u203A Add rate limiting to all API routes.")));
}
function BotMock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ChatBubble, {
    from: "bot",
    maxWidth: 330
  }, "the harbor hotel charged $412 on the 12th and again on the 14th. double-billed, or two separate nights?"), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "user",
    maxWidth: 280
  }, "two nights, mia stayed the second one"), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "bot",
    maxWidth: 330
  }, "that clears it. report filed: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--white)'
    }
  }, "9 receipts"), " matched, ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--white)'
    }
  }, "$2,340"), " across 3 trips, nothing outstanding."));
}
function ProductGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    footerLabel: "Chat",
    padding: 20
  }, /*#__PURE__*/React.createElement(ChatMock, null)), /*#__PURE__*/React.createElement(FeatureCard, {
    footerLabel: "Build",
    padding: 20
  }, /*#__PURE__*/React.createElement(BuildMock, null)), /*#__PURE__*/React.createElement(FeatureCard, {
    footerLabel: "Bot",
    padding: 20
  }, /*#__PURE__*/React.createElement(BotMock, null)));
}
function MediaGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "surface",
    padding: 0,
    radius: "var(--radius-xl)",
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: 240,
      background: 'var(--gradient-ember)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      bottom: 18,
      font: 'var(--weight-medium) 15px/1 var(--font-sans)',
      color: 'var(--white)'
    }
  }, "Imagine"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      position: 'absolute',
      right: 22,
      bottom: 18,
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center',
      font: 'var(--weight-regular) 14px/1 var(--font-sans)',
      color: 'var(--grey-4)'
    }
  }, "Explore ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "surface",
    padding: 0,
    radius: "var(--radius-xl)",
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: 240,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 170,
      height: 170,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 38% 32%, #3a2f52 0%, #16121f 55%, #050508 100%)',
      boxShadow: 'var(--shadow-glow-spectrum)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      bottom: 18,
      font: 'var(--weight-medium) 15px/1 var(--font-sans)',
      color: 'var(--white)'
    }
  }, "Voice"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      position: 'absolute',
      right: 22,
      bottom: 18,
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center',
      font: 'var(--weight-regular) 14px/1 var(--font-sans)',
      color: 'var(--grey-4)'
    }
  }, "Explore ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  }))));
}
Object.assign(window, {
  Hero,
  ProductGrid,
  MediaGrid,
  ChatMock,
  BuildMock,
  BotMock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const {
  SectionHeading,
  StatBlock,
  NewsCard,
  PlanCard,
  CodeBlock,
  Tabs,
  Button
} = window.SpaceXAIDesignSystem_f8c95e;
const SAMPLES = {
  Python: [[['import', 'keyword'], [' os', 'plain']], [['from', 'keyword'], [' xai_sdk ', 'plain'], ['import', 'keyword'], [' Client', 'plain']], [['from', 'keyword'], [' xai_sdk.chat ', 'plain'], ['import', 'keyword'], [' user', 'plain']], [['client = Client(', 'plain']], [['    api_key=os.getenv(', 'plain'], ['"XAI_API_KEY"', 'string'], [')', 'plain']], [[')', 'plain']], [['chat = client.chat.create(model=', 'plain'], ['"grok-4.6"', 'string'], [')', 'plain']], [['chat.append(user(', 'plain'], ['"Explain quantum computing"', 'string'], ['))', 'plain']], [['response = chat.sample()', 'plain']], [['print', 'fn'], ['(response.content)', 'plain']]],
  TypeScript: [[['import', 'keyword'], [' { Client } ', 'plain'], ['from', 'keyword'], [' ', 'plain'], ['"@xai/sdk"', 'string']], [['const', 'keyword'], [' client = ', 'plain'], ['new', 'keyword'], [' Client({ apiKey: process.env.XAI_API_KEY });', 'plain']], [['const', 'keyword'], [' chat = client.chat.create({ model: ', 'plain'], ['"grok-4.6"', 'string'], [' });', 'plain']], [['chat.append(user(', 'plain'], ['"Explain quantum computing"', 'string'], ['));', 'plain']], [['const', 'keyword'], [' response = ', 'plain'], ['await', 'keyword'], [' chat.sample();', 'plain']], [['console.', 'plain'], ['log', 'fn'], ['(response.content);', 'plain']]],
  cURL: [[['curl https://api.x.ai/v1/chat/completions \\', 'plain']], [['  -H ', 'plain'], ['"Authorization: Bearer $XAI_API_KEY"', 'string'], [' \\', 'plain']], [['  -H ', 'plain'], ['"Content-Type: application/json"', 'string'], [' \\', 'plain']], [['  -d ', 'plain'], ['\'{"model":"grok-4.6","messages":[...]}\'', 'string']]]
};
function DeveloperSection() {
  const [lang, setLang] = React.useState('Python');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "For developers",
    size: "lg",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "One API.", /*#__PURE__*/React.createElement("br", null), "Every modality."),
    body: "Text, code, voice, images, and video \u2014 all through a single unified API. Start building in seconds."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Get API Key"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Read Docs")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    stats: [{
      value: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 20
        }
      }, "1M+"),
      label: 'API calls per day'
    }, {
      value: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 20
        }
      }, "<200ms"),
      label: 'Median latency'
    }, {
      value: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 20
        }
      }, "5+"),
      label: 'Model families'
    }]
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CodeBlock, {
    lines: SAMPLES[lang]
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Python', 'TypeScript', 'cURL'],
    value: lang,
    onChange: setLang,
    style: {
      marginTop: 16,
      justifyContent: 'center'
    }
  })));
}
function ProofSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    stats: [{
      value: '400M+',
      label: 'queries processed daily'
    }, {
      value: '200K',
      label: 'GPUs in Colossus'
    }, {
      value: '122',
      label: 'days to build Colossus'
    }]
  }));
}
function NewsSection() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "md",
    title: "Latest news",
    action: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        font: 'var(--weight-regular) 14px/1 var(--font-sans)',
        color: 'var(--grey-4)'
      }
    }, "All posts \u203A")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(NewsCard, {
    artwork: "ember",
    artworkLabel: "Grok Voice Transcribe 2.0",
    date: "Sep 18, 2026",
    title: "Introducing Grok Voice Transcribe 2.0"
  }), /*#__PURE__*/React.createElement(NewsCard, {
    artwork: "abyss",
    artworkLabel: "Memory in Grok Build",
    category: "Product",
    date: "Sep 16, 2026",
    title: "Memory in Grok Build"
  }), /*#__PURE__*/React.createElement(NewsCard, {
    artwork: "halo",
    artworkLabel: "Grok Bot for Procurement",
    category: "Product",
    date: "Sep 4, 2026",
    title: "Setting Grok Bot loose on procurement"
  }), /*#__PURE__*/React.createElement(NewsCard, {
    artwork: "paper",
    category: "Product",
    date: "Sep 3, 2026",
    title: "Designing Grok Bot for a world of persistent agents"
  })));
}
function GetStarted({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      font: 'var(--weight-medium) 40px/1.15 var(--font-sans)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--white)'
    }
  }, "Choose how to get started"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(PlanCard, {
    title: "Build on your own",
    body: "Launch your AI-powered product with:",
    features: ['Access to all Grok models', 'Usage-based pricing', 'Automatically increasing rate limits', 'Comprehensive documentation and guides'],
    action: "Start Building",
    actionVariant: "primary"
  }), /*#__PURE__*/React.createElement(PlanCard, {
    title: "Get extra support",
    body: "Custom rate limits and hands-on support for your team.",
    features: ['Dedicated onboarding support', 'Custom rate limits', 'Billing via monthly invoices', 'Single sign-on and audit logging', 'Data residency options'],
    action: "Contact Sales",
    actionVariant: "outline",
    onAction: onContact
  })));
}
Object.assign(window, {
  DeveloperSection,
  ProofSection,
  NewsSection,
  GetStarted
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BOT_COLORS = __ds_scope.BOT_COLORS;

__ds_ns.BotAvatar = __ds_scope.BotAvatar;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.SystemNote = __ds_scope.SystemNote;

__ds_ns.ThinkingRow = __ds_scope.ThinkingRow;

__ds_ns.Composer = __ds_scope.Composer;

__ds_ns.ThreadListItem = __ds_scope.ThreadListItem;

__ds_ns.AnnouncementPill = __ds_scope.AnnouncementPill;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GradientRule = __ds_scope.GradientRule;

__ds_ns.SpectrumWord = __ds_scope.SpectrumWord;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SplitButton = __ds_scope.SplitButton;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.PlanCard = __ds_scope.PlanCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

})();
