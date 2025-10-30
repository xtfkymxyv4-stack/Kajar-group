// ================================
// KAJAR GROUP - Website Scripts
// ================================

// ===== LANGUAGE MANAGEMENT =====
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('kajar-lang') || 'fr';
        this.init();
    }

    init() {
        // Set initial language
        this.setLanguage(this.currentLang, false);
        
        // Add event listeners to language buttons
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang, save = true) {
        this.currentLang = lang;
        
        // Save preference
        if (save) {
            localStorage.setItem('kajar-lang', lang);
        }
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });
        
        // Update all translatable elements
        this.updateContent(lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    updateContent(lang) {
        // Update all elements with data-[lang] attributes
        const elements = document.querySelectorAll(`[data-${lang}]`);
        
        elements.forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            if (translation) {
                // Check if element is input/textarea
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }
}

// ===== MOBILE MENU =====
class MobileMenu {
    constructor() {
        this.toggle = document.getElementById('mobileMenuToggle');
        this.menu = document.getElementById('navMenu');
        this.init();
    }

    init() {
        if (!this.toggle || !this.menu) return;

        this.toggle.addEventListener('click', () => {
            this.menu.classList.toggle('active');
            this.toggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const menuLinks = this.menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.menu.classList.remove('active');
                this.toggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.menu.contains(e.target) && !this.toggle.contains(e.target)) {
                this.menu.classList.remove('active');
                this.toggle.classList.remove('active');
            }
        });
    }
}

// ===== NAVBAR SCROLL EFFECT =====
class NavbarScroll {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.init();
    }

    init() {
        if (!this.navbar) return;

        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                this.navbar.classList.remove('scrolled');
                return;
            }
            
            if (currentScroll > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                
                // Don't prevent default for empty hash
                if (href === '#' || href === '') return;
                
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.value-card, .domain-card, .approach-card, .team-card, .rse-card, .vm-card'
        );
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// ===== CONTACT FORM HANDLER =====
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Get current language for messages
        const lang = localStorage.getItem('kajar-lang') || 'fr';
        
        const messages = {
            fr: {
                success: 'Merci pour votre message ! Nous vous contacterons bientôt.',
                error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
            },
            en: {
                success: 'Thank you for your message! We will contact you soon.',
                error: 'Error sending message. Please try again.'
            },
            pt: {
                success: 'Obrigado pela sua mensagem! Entraremos em contacto em breve.',
                error: 'Erro ao enviar mensagem. Por favor, tente novamente.'
            }
        };

        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', data);
        
        // Show success message
        alert(messages[lang].success);
        
        // Reset form
        this.form.reset();
        
        // In production, you would send this to a backend or email service:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert(messages[lang].success);
            this.form.reset();
        })
        .catch(error => {
            alert(messages[lang].error);
            console.error('Error:', error);
        });
        */
    }
}

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
class ActiveNavigation {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        this.init();
    }

    init() {
        if (this.sections.length === 0) return;

        window.addEventListener('scroll', () => {
            this.highlightActiveSection();
        });
    }

    highlightActiveSection() {
        const scrollPos = window.scrollY + 150;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ===== PAGE LOADER =====
class PageLoader {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }
}

// ===== UTILITIES =====
const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Format phone numbers
    formatPhone(phone) {
        return phone.replace(/\D/g, '').replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $// 
    }
};
// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    const languageManager = new LanguageManager();
    const mobileMenu = new MobileMenu();
    const navbarScroll = new NavbarScroll();
    const smoothScroll = new SmoothScroll();
    const scrollAnimations = new ScrollAnimations();
    const contactForm = new ContactForm();
    const activeNavigation = new ActiveNavigation();
    const pageLoader = new PageLoader();

    // Log initialization
    console.log('🌍 KAJAR GROUP Website Initialized');
    console.log('Current Language:', languageManager.currentLang);

    // ============================================
    // SWIPER CAROUSELS INITIALIZATION
    // ============================================
    
    // Vérifier que Swiper est disponible
    if (typeof Swiper !== 'undefined') {
        // Configuration commune pour tous les carousels
        const commonConfig = {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                968: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        };

        // Initialiser le carousel "Notre Approche" (4 slides)
        if (document.querySelector('.approche-swiper')) {
            const approcheSwiper = new Swiper('.approche-swiper', {
                ...commonConfig,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }
            });
            console.log('✅ Approche carousel initialized');
        }

        // Initialiser le carousel "Domaines d'Intervention" (7 slides)
        if (document.querySelector('.domaines-swiper')) {
            const domainesSwiper = new Swiper('.domaines-swiper', {
                ...commonConfig,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }
            });
            console.log('✅ Domaines carousel initialized');
        }

        // Initialiser le carousel "RSE" (4 slides)
        if (document.querySelector('.rse-swiper')) {
            const rseSwiper = new Swiper('.rse-swiper', {
                ...commonConfig,
                autoplay: {
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }
            });
            console.log('✅ RSE carousel initialized');
        }

        console.log('✅ All Swiper carousels initialized successfully!');
    } else {
        console.error('❌ Swiper library not loaded!');
    }
});

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageManager,
        MobileMenu,
        NavbarScroll,
        SmoothScroll,
        ScrollAnimations,
        ContactForm,
        ActiveNavigation,
        Utils
    };
}
