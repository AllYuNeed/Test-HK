@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Share+Tech+Mono&display=swap');

:root {
  --font-display: 'Rajdhani', sans-serif;
  --font-body: 'Barlow', sans-serif;
  --font-mono: 'Share Tech Mono', monospace;

  --color-bg: #0a0b0d;
  --color-surface: #111318;
  --color-surface-2: #1a1d24;
  --color-surface-3: #232830;
  --color-border: rgba(255,255,255,0.07);
  --color-steel: #8a9ab0;
  --color-accent-blue: #1e6bff;
  --color-accent-orange: #ff6b1e;
  --color-accent-teal: #00d4aa;
  --color-text: #e8ecf0;
  --color-text-muted: #6b7a8d;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  overflow-x: hidden;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--color-bg);
}
::-webkit-scrollbar-thumb {
  background: var(--color-accent-blue);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #4d8fff;
}

/* Selection */
::selection {
  background: rgba(30, 107, 255, 0.3);
  color: white;
}

/* Typography */
.font-display {
  font-family: var(--font-display);
}

.font-mono {
  font-family: var(--font-mono);
}

/* Industrial text gradient */
.text-gradient-blue {
  background: linear-gradient(135deg, #1e6bff 0%, #4d8fff 50%, #00d4aa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-orange {
  background: linear-gradient(135deg, #ff6b1e 0%, #ff8f4d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-steel {
  background: linear-gradient(135deg, #c4d0de 0%, #8a9ab0 50%, #c4d0de 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glassmorphism */
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.glass-dark {
  background: rgba(10, 11, 13, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Metal shimmer */
.metal-surface {
  background: linear-gradient(135deg, 
    rgba(255,255,255,0.08) 0%, 
    rgba(255,255,255,0.03) 40%, 
    rgba(255,255,255,0.06) 100%
  );
  border: 1px solid rgba(255,255,255,0.08);
}

/* 3D card effect */
.card-3d {
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease;
}

.card-3d:hover {
  transform: perspective(1000px) rotateX(-4deg) rotateY(4deg) translateZ(10px);
  box-shadow: 
    -10px 20px 40px rgba(0,0,0,0.6),
    0 0 0 1px rgba(255,255,255,0.06),
    inset 0 1px 0 rgba(255,255,255,0.1);
}

/* Industrial grid pattern */
.grid-pattern {
  background-image: 
    linear-gradient(rgba(30, 107, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(30, 107, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Noise texture overlay */
.noise-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
}

/* Glow effects */
.glow-blue {
  box-shadow: 0 0 30px rgba(30, 107, 255, 0.2), 0 0 60px rgba(30, 107, 255, 0.1);
}

.glow-orange {
  box-shadow: 0 0 30px rgba(255, 107, 30, 0.2), 0 0 60px rgba(255, 107, 30, 0.1);
}

/* Animated underline */
.hover-underline {
  position: relative;
}
.hover-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent-blue);
  transition: width 0.3s ease;
}
.hover-underline:hover::after {
  width: 100%;
}

/* Specular highlight sweep */
.specular-card {
  position: relative;
  overflow: hidden;
}
.specular-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.04),
    transparent
  );
  transition: left 0.6s ease;
  pointer-events: none;
  z-index: 1;
}
.specular-card:hover::before {
  left: 150%;
}

/* Animated blob */
.blob {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: blob-morph 8s ease-in-out infinite;
}

@keyframes blob-morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 50% 60% 40% 70% / 40% 50% 60% 50%; }
  75% { border-radius: 40% 50% 60% 40% / 70% 40% 50% 30%; }
}

/* Section spacing */
.section-padding {
  padding: 6rem 0;
}

@media (max-width: 768px) {
  .section-padding {
    padding: 4rem 0;
  }
}

/* Industrial stripe accent */
.stripe-accent {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    rgba(255, 107, 30, 0.05) 10px,
    rgba(255, 107, 30, 0.05) 20px
  );
}

/* Button base */
.btn-base {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  border: none;
  outline: none;
}

/* Magnetic button hover area */
.magnetic-btn {
  position: relative;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Focus styles */
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--color-accent-blue);
  outline-offset: 3px;
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Image placeholder */
.img-placeholder {
  background: linear-gradient(135deg, #1a1d24 0%, #232830 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Stats counter */
.stat-number {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, #ffffff 0%, #8a9ab0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Industrial divider */
.divider-industrial {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(30, 107, 255, 0.5), transparent);
}

/* Breadcrumb */
.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.breadcrumb-item a:hover {
  color: var(--color-accent-blue);
}

/* Tag badge */
.tag-badge {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: 2px;
  background: rgba(30, 107, 255, 0.1);
  border: 1px solid rgba(30, 107, 255, 0.3);
  color: #4d8fff;
}
