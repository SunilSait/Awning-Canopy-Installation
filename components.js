/* ===================================================
   SHADECRAFT — COMPONENTS.JS
   Shared navbar, footer, dark/RTL toggles, utilities
   =================================================== */

// Immediate Theme & Direction Initialization (prevents theme flash)
(function() {
    try {
        const savedDark = localStorage.getItem('sc-dark');
        if (savedDark === '1') {
            document.documentElement.classList.add('dark');
        } else if (savedDark === '0') {
            document.documentElement.classList.remove('dark');
        }
        const savedDir = localStorage.getItem('sc-rtl');
        if (savedDir === '1') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else if (savedDir === '0') {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    } catch (e) {}
})();

/* ---- LOGO SVG ---- */
const LOGO_SVG = `<svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A3C40"/>
      <stop offset="100%" stop-color="#2D6A5A"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#logoBg)"/>
  <path d="M20 55 L50 25 L80 55" stroke="#D4A853" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M20 55 L50 45 L80 55" stroke="#D4A853" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.6"/>
  <rect x="30" y="55" width="40" height="25" rx="3" fill="none" stroke="white" stroke-width="4"/>
  <rect x="44" y="62" width="12" height="18" rx="2" fill="white" opacity="0.7"/>
</svg>`;

/* ---- SOCIAL SVGs ---- */
const GOOGLE_SVG = `<svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.9 33.5 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.8 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.8-3.5-11.3-8.3l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.2-2.7-.4-3.9z"/></svg>`;
const APPLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.96 4.41-3.74 4.25z"/></svg>`;
const FACEBOOK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>`;

/* ---- CURRENT PAGE ---- */
function getCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
}

/* ---- NAVBAR ---- */
function renderNavbar() {
    const page = getCurrentPage();
    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'products.html', label: 'Products' },
        { href: 'gallery.html', label: 'Gallery' },
        { href: 'pricing.html', label: 'Pricing' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHtml = links.map(l =>
        `<a href="${l.href}" class="nav-link${page === l.href ? ' active' : ''}">${l.label}</a>`
    ).join('');

    const mobLinksHtml = links.map(l =>
        `<a href="${l.href}" class="mob-link${page === l.href ? ' active' : ''}">
            <span class="mob-link-content"><span>${l.label}</span></span>
        </a>`
    ).join('');

    const html = `
    <nav class="navbar" id="mainNavbar">
        <div class="nav-inner">
            <a href="index.html" class="nav-logo" aria-label="ShadeCraft Home">
                ${LOGO_SVG}
                <span class="nav-logo-text">
                    <span class="brand-top">Awning & Canopy</span>
                    <span class="brand-bottom">ShadeCraft</span>
                </span>
            </a>
            <div class="nav-links">${navLinksHtml}</div>
            <div class="nav-actions">
                <button class="nav-icon-btn" id="rtlToggleNav" aria-label="Toggle layout direction / RTL" title="Toggle RTL">
                    <span class="dir-indicator">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <button class="nav-icon-btn" id="darkToggleNav" aria-label="Toggle dark mode" title="Toggle dark mode">
                    <i class="fas ${isDark ? 'fa-sun' : 'fa-moon'}"></i>
                </button>
                <a href="login.html" class="btn btn-primary btn-sm nav-cta-btn">Sign In</a>
                <a href="contact.html" class="btn btn-secondary btn-sm nav-cta-secondary">Get Quote</a>
                <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
                    <span class="mobile-menu-icon"><i class="fas fa-bars"></i></span>
                </button>
            </div>
        </div>

        <!-- Mobile Backdrop -->
        <div class="mobile-backdrop" id="mobileBackdrop" aria-hidden="true"></div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobileMenu" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div class="mob-links-list">
                ${mobLinksHtml}
            </div>
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
                <a href="contact.html" class="btn btn-secondary w-full">Get Quote</a>
            </div>
            <div class="mob-toggles">
                <button class="nav-icon-btn" id="rtlToggleMob" aria-label="Toggle layout direction / RTL" title="Toggle Direction">
                    <span class="dir-indicator">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <button class="nav-icon-btn" id="darkToggleMob" aria-label="Toggle dark mode" title="Toggle Theme">
                    <i class="fas ${isDark ? 'fa-sun' : 'fa-moon'}"></i>
                </button>
            </div>
        </div>
    </nav>
    <div class="navbar-spacer"></div>`;

    const container = document.getElementById('navbar-placeholder');
    if (container) container.innerHTML = html;
    else document.body.insertAdjacentHTML('afterbegin', html);

    initNavbar();
}

function initNavbar() {
    /* Scroll effect */
    const nav = document.getElementById('mainNavbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 15);
        }, { passive: true });
    }

    /* Mobile menu */
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    const backdrop = document.getElementById('mobileBackdrop');

    function toggleMobileMenu(e) {
        if (e && e.stopPropagation) e.stopPropagation();
        if (!menu) return;
        const isOpen = menu.classList.contains('open');
        if (isOpen) closeMobileMenu();
        else openMobileMenu();
    }

    function openMobileMenu() {
        if (!menu) return;
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (btn) {
            btn.setAttribute('aria-expanded', 'true');
            const icon = btn.querySelector('i');
            if (icon) icon.className = 'fas fa-times';
        }
    }

    function closeMobileMenu() {
        if (!menu) return;
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (btn) {
            btn.setAttribute('aria-expanded', 'false');
            const icon = btn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    }

    if (btn) btn.addEventListener('click', toggleMobileMenu);
    if (backdrop) backdrop.addEventListener('click', closeMobileMenu);

    if (menu) {
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', closeMobileMenu);
        });
    }

    document.addEventListener('click', function(e) {
        if (!menu || !menu.classList.contains('open')) return;
        if (btn && (btn === e.target || btn.contains(e.target))) return;
        if (menu.contains(e.target)) return;
        closeMobileMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu && menu.classList.contains('open')) closeMobileMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && menu && menu.classList.contains('open')) closeMobileMenu();
    }, { passive: true });

    /* Dark toggles */
    ['darkToggleNav', 'darkToggleMob'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', toggleDark);
    });

    /* RTL toggles */
    ['rtlToggleNav', 'rtlToggleMob'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', toggleRTL);
    });

    updateDarkIcons();
    updateRTLIndicators();
}

/* ---- FOOTER ---- */
function renderFooter() {
    const html = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="ShadeCraft Home">
                        ${LOGO_SVG}
                        <span class="nav-logo-text">
                            <span class="brand-top">Awning & Canopy</span>
                            <span class="brand-bottom">ShadeCraft</span>
                        </span>
                    </a>
                    <p>Premium awning and canopy installation services. From retractable shade solutions to permanent patio covers, we craft perfect outdoor living spaces.</p>
                    <div class="footer-socials">
                        <a href="https://instagram.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="LinkedIn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Twitter / X" title="Twitter / X"><i class="fab fa-x-twitter"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="footer-col-title">QUICK LINKS</h4>
                    <div class="footer-links">
                        <a href="index.html">Home</a>
                        <a href="home2.html">Home 2 — Premium</a>
                        <a href="products.html">Products</a>
                        <a href="gallery.html">Gallery</a>
                        <a href="pricing.html">Pricing</a>
                        <a href="contact.html">Contact Us</a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="footer-col-title">RESOURCES</h4>
                    <div class="footer-links">
                        <a href="coming-soon.html">Coming Soon</a>
                        <a href="404.html">404 Page</a>
                        <a href="login.html">Sign In</a>
                        <a href="signup.html">Sign Up</a>
                    </div>
                </div>
                <div class="footer-col footer-col-newsletter">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Stay Updated</h4>
                        <p class="footer-newsletter-desc">Get the latest shade solutions, seasonal promotions & outdoor living ideas delivered to your inbox.</p>
                        <form class="footer-newsletter-form" onsubmit="event.preventDefault(); alert('Thank you! You are now subscribed to ShadeCraft updates.'); this.reset();">
                            <input type="email" class="footer-newsletter-input" placeholder="your@email.com" aria-label="Email address" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} SHADECRAFT. ALL RIGHTS RESERVED.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">PRIVACY</a>
                    <a href="coming-soon.html">TERMS</a>
                    <a href="tel:18001234567">+1 (800) 123-4567</a>
                </div>
            </div>
        </div>
    </footer>`;

    const container = document.getElementById('footer-placeholder');
    if (container) container.innerHTML = html;
    else document.body.insertAdjacentHTML('beforeend', html);
}

/* ---- BACK TO TOP ---- */
function renderBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'backToTop';
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ---- DARK MODE ---- */
let _isDarkToggling = false;
function toggleDark() {
    if (_isDarkToggling) return;
    _isDarkToggling = true;
    setTimeout(() => { _isDarkToggling = false; }, 80);

    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    if (document.body) document.body.classList.toggle('dark', isDark);
    try {
        localStorage.setItem('sc-dark', isDark ? '1' : '0');
    } catch (e) {}
    updateDarkIcons();
}

function updateDarkIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('#darkToggleNav, #darkToggleMob, .auth-dark-toggle, .auth-toggle-btn').forEach(btn => {
        const icon = btn.querySelector('i');
        if (icon && (icon.classList.contains('fa-moon') || icon.classList.contains('fa-sun') || btn.id === 'darkToggleNav' || btn.id === 'darkToggleMob')) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
        if (btn.id === 'darkToggleNav' || btn.id === 'darkToggleMob' || btn.classList.contains('auth-toggle-btn')) {
            if (icon && !btn.querySelector('.dir-indicator')) {
                btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
                btn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
            }
        }
    });
}

function initDark() {
    const saved = localStorage.getItem('sc-dark');
    if (saved === '1') {
        document.documentElement.classList.add('dark');
        if (document.body) document.body.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        if (document.body) document.body.classList.remove('dark');
    }
    updateDarkIcons();
}

/* ---- RTL ---- */
function updateRTLIndicators() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    document.querySelectorAll('.dir-indicator, .dir-label').forEach(el => {
        el.textContent = isRTL ? 'LTR' : 'RTL';
    });
}

let _isRTLToggling = false;
function toggleRTL() {
    if (_isRTLToggling) return;
    _isRTLToggling = true;
    setTimeout(() => { _isRTLToggling = false; }, 80);

    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    const newDir = isRTL ? 'ltr' : 'rtl';
    html.setAttribute('dir', newDir);
    try {
        localStorage.setItem('sc-rtl', isRTL ? '0' : '1');
    } catch (e) {}
    updateRTLIndicators();
}

function initRTL() {
    if (localStorage.getItem('sc-rtl') === '1') {
        document.documentElement.setAttribute('dir', 'rtl');
    }
    updateRTLIndicators();
}

/* ---- SCROLL ANIMATIONS ---- */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .fade-in, .scale-in, .slide-left, .slide-right').forEach(el => {
        observer.observe(el);
    });
}

/* ---- FAQ TOGGLE ---- */
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

/* ---- PASSWORD TOGGLE ---- */
function togglePasswordVisibility(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const icon = btnEl ? btnEl.querySelector('i, svg, .pw-icon') : null;
    if (icon) {
        if (icon.tagName === 'I' || icon.classList.contains('fa-eye') || icon.classList.contains('fa-eye-slash') || icon.classList.contains('fas')) {
            icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
        }
    }
}

function initPasswordToggle() {
    document.querySelectorAll('.password-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.closest('.password-wrap, .password-wrapper')?.querySelector('input') || btn.previousElementSibling;
            if (!input) return;
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
            }
        });
    });
}

/* ---- COUNTER ANIMATION ---- */
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const prefix = el.dataset.prefix || '';
                let current = 0;
                const step = Math.max(1, Math.floor(target / 60));
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = prefix + current.toLocaleString() + suffix;
                }, 20);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.3 });
    counters.forEach(c => observer.observe(c));
}

/* ---- COUNTDOWN (coming-soon) ---- */
function initCountdown() {
    const target = new Date();
    target.setDate(target.getDate() + 30);
    target.setHours(target.getHours() + 14);
    target.setMinutes(target.getMinutes() + 25);
    function update() {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) return;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        const dEl = document.getElementById('cd-days');
        const hEl = document.getElementById('cd-hours');
        const mEl = document.getElementById('cd-mins') || document.getElementById('cd-minutes');
        const sEl = document.getElementById('cd-secs') || document.getElementById('cd-seconds');
        if (dEl) dEl.textContent = String(d).padStart(2, '0');
        if (hEl) hEl.textContent = String(h).padStart(2, '0');
        if (mEl) mEl.textContent = String(m).padStart(2, '0');
        if (sEl) sEl.textContent = String(s).padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
}

// Global aliases
window.toggleTheme = toggleDark;
window.toggleDark = toggleDark;
window.toggleDir = toggleRTL;
window.toggleRTL = toggleRTL;
window.togglePasswordVisibility = togglePasswordVisibility;
window.initAuthPage = function() {
    initDark();
    initRTL();
};

/* ---- AUTH TOPBAR (for login & signup pages) ---- */
function renderAuthTopbar() {
    const html = `
    <header class="auth-topbar">
        <div class="auth-topbar-inner">
            <div class="auth-topbar-actions">
                <button class="auth-toggle-btn" id="rtlToggleNav" aria-label="Toggle layout direction / RTL" title="Toggle RTL / LTR direction">
                    <span class="dir-indicator">RTL</span>
                </button>
                <button class="auth-toggle-btn" id="darkToggleNav" aria-label="Toggle dark mode" title="Toggle dark mode">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>
    </header>`;
    const container = document.getElementById('auth-topbar-placeholder');
    if (container) container.innerHTML = html;
    
    setTimeout(() => {
        const darkBtn = document.getElementById('darkToggleNav');
        const rtlBtn = document.getElementById('rtlToggleNav');
        if (darkBtn && !darkBtn.hasAttribute('onclick') && !darkBtn.onclick) {
            darkBtn.addEventListener('click', toggleDark);
        }
        if (rtlBtn && !rtlBtn.hasAttribute('onclick') && !rtlBtn.onclick) {
            rtlBtn.addEventListener('click', toggleRTL);
        }
        updateDarkIcons();
        updateRTLIndicators();
    }, 0);
}

/* ---- FULLSCREEN TOPBAR (404, coming-soon) ---- */
function renderFullscreenTopbar() {
    const html = `
    <header class="fullscreen-topbar">
        <div class="fullscreen-topbar-inner">
            <a href="index.html" class="nav-logo" aria-label="ShadeCraft Home">
                ${LOGO_SVG}
                <span class="nav-logo-text">
                    <span class="brand-top">Awning & Canopy</span>
                    <span class="brand-bottom">ShadeCraft</span>
                </span>
            </a>
            <div class="fullscreen-topbar-actions">
                <button class="auth-toggle-btn" id="rtlToggleNav" aria-label="Toggle layout direction / RTL" title="Toggle RTL / LTR direction">
                    <span class="dir-indicator">RTL</span>
                </button>
                <button class="auth-toggle-btn" id="darkToggleNav" aria-label="Toggle dark mode" title="Toggle dark mode">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>
    </header>`;
    const container = document.getElementById('fullscreen-topbar-placeholder');
    if (container) container.innerHTML = html;

    setTimeout(() => {
        const darkBtn = document.getElementById('darkToggleNav');
        const rtlBtn = document.getElementById('rtlToggleNav');
        if (darkBtn && !darkBtn.hasAttribute('onclick') && !darkBtn.onclick) {
            darkBtn.addEventListener('click', toggleDark);
        }
        if (rtlBtn && !rtlBtn.hasAttribute('onclick') && !rtlBtn.onclick) {
            rtlBtn.addEventListener('click', toggleRTL);
        }
        updateDarkIcons();
        updateRTLIndicators();
    }, 0);
}

/* ---- HERO SLIDER ---- */
function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const dots = slider.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    const counterBadge = document.getElementById('heroSlideCounter');
    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;
    let isPaused = false;
    const duration = 5000;

    function animateSlideStat(slide) {
        const counter = slide.querySelector('.stat-num[data-count]');
        if (!counter) return;
        const target = parseInt(counter.dataset.count, 10);
        const suffix = counter.dataset.suffix || '';
        const prefix = counter.dataset.prefix || '';
        let current = 0;
        const step = Math.max(1, Math.floor(target / 30));
        const countTimer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(countTimer);
            }
            counter.textContent = prefix + current.toLocaleString() + suffix;
        }, 25);
    }

    function updateSlide(index) {
        currentIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            const isActive = i === currentIndex;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', !isActive);
            if (isActive) animateSlideStat(slide);
        });

        dots.forEach((dot, i) => {
            const isActive = i === currentIndex;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
            const fill = dot.querySelector('.hero-dot-fill');
            if (fill) {
                fill.style.animation = 'none';
                if (isActive) {
                    void fill.offsetWidth;
                    fill.style.animation = `heroProgress ${duration}ms linear forwards`;
                }
            }
        });

        if (counterBadge) {
            counterBadge.innerHTML = `0${currentIndex + 1} <span class="sep">/</span> 0${slides.length}`;
        }
    }

    function nextSlide() { updateSlide(currentIndex + 1); }
    function prevSlide() { updateSlide(currentIndex - 1); }

    function startTimer() {
        stopTimer();
        timer = setInterval(() => { if (!isPaused) nextSlide(); }, duration);
    }

    function stopTimer() {
        if (timer) { clearInterval(timer); timer = null; }
    }

    function resetTimer() { startTimer(); }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            if (currentIndex !== i) { updateSlide(i); resetTimer(); }
        });
    });

    slider.addEventListener('mouseenter', () => {
        isPaused = true;
        const activeFill = slider.querySelector('.hero-dot.active .hero-dot-fill');
        if (activeFill) activeFill.style.animationPlayState = 'paused';
    });

    slider.addEventListener('mouseleave', () => {
        isPaused = false;
        const activeFill = slider.querySelector('.hero-dot.active .hero-dot-fill');
        if (activeFill) activeFill.style.animationPlayState = 'running';
    });

    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 45) {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            if (diff > 0) { isRTL ? prevSlide() : nextSlide(); }
            else { isRTL ? nextSlide() : prevSlide(); }
            resetTimer();
        }
    }, { passive: true });

    window.addEventListener('keydown', (e) => {
        if (document.activeElement && ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        const rect = slider.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            if (e.key === 'ArrowRight') { nextSlide(); resetTimer(); }
            else if (e.key === 'ArrowLeft') { prevSlide(); resetTimer(); }
        }
    });

    updateSlide(0);
    startTimer();
}

/* ---- GALLERY FILTER ---- */
function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const items = document.querySelectorAll('.gallery-item');
    if (!filterBtns.length || !items.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = '';
                    item.classList.add('fade-in', 'animate-in');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* ---- LIGHTBOX ---- */
function initLightbox() {
    const items = document.querySelectorAll('.gallery-item img, .lightbox-trigger');
    if (!items.length) return;

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.id = 'lightboxOverlay';
    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close"><i class="fas fa-times"></i></button>
        <img class="lightbox-img" id="lightboxImg" alt="">
        <p class="lightbox-caption" id="lightboxCaption"></p>
    `;
    document.body.appendChild(lightbox);

    items.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const img = item.tagName === 'IMG' ? item : item.querySelector('img');
            if (!img) return;
            document.getElementById('lightboxImg').src = img.src;
            document.getElementById('lightboxCaption').textContent = img.alt || '';
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.closest('.lightbox-close')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
    initDark();
    initRTL();

    const page = getCurrentPage();
    const authPages = ['login.html', 'signup.html'];
    const fullscreenPages = ['404.html', 'coming-soon.html'];

    if (authPages.includes(page)) {
        renderAuthTopbar();
    } else if (fullscreenPages.includes(page)) {
        renderFullscreenTopbar();
    } else {
        renderNavbar();
        renderFooter();
        renderBackToTop();
    }

    initScrollAnimations();
    initFAQ();
    initPasswordToggle();
    animateCounters();
    initHeroSlider();
    initGalleryFilter();
    initLightbox();
    initExplorerTabs();
    initBeforeAfterSlider();

    if (page === 'coming-soon.html') initCountdown();
});

/* ---- Product Explorer Tabs ---- */
function initExplorerTabs() {
    const tabs = document.querySelectorAll('.explorer-tab');
    const panels = document.querySelectorAll('.explorer-panel');
    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const targetPanel = document.querySelector(`.explorer-panel[data-panel="${target}"]`);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });
}

/* ---- Before & After Slider ---- */
function initBeforeAfterSlider() {
    const sliders = document.querySelectorAll('.ba-slider');
    if (!sliders.length) return;

    sliders.forEach(slider => {
        const range = slider.querySelector('.ba-slider-range');

        const updatePosition = (percent) => {
            const clamped = Math.max(0, Math.min(100, percent));
            slider.style.setProperty('--ba-position', clamped + '%');
            if (range && Math.abs(parseFloat(range.value) - clamped) > 0.5) {
                range.value = clamped;
            }
        };

        if (range) {
            range.addEventListener('input', (e) => {
                updatePosition(parseFloat(e.target.value));
            });
        }

        let isDragging = false;

        const handlePointer = (e) => {
            const rect = slider.getBoundingClientRect();
            const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            let percent;
            if (isRTL) {
                percent = ((rect.right - clientX) / rect.width) * 100;
            } else {
                percent = ((clientX - rect.left) / rect.width) * 100;
            }
            updatePosition(percent);
        };

        slider.addEventListener('pointerdown', (e) => {
            isDragging = true;
            if (slider.setPointerCapture) {
                try { slider.setPointerCapture(e.pointerId); } catch (err) {}
            }
            handlePointer(e);
        });

        slider.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            handlePointer(e);
        });

        const stopDrag = (e) => {
            if (isDragging) {
                isDragging = false;
                if (slider.releasePointerCapture) {
                    try { slider.releasePointerCapture(e.pointerId); } catch (err) {}
                }
            }
        };

        slider.addEventListener('pointerup', stopDrag);
        slider.addEventListener('pointercancel', stopDrag);
    });
}

