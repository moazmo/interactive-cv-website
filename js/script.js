// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
        
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        // Mobile menu toggle
        navToggle.addEventListener('click', () => this.toggleMobileMenu());
        
        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Smooth scrolling for navigation links
        this.initSmoothScrolling();

        // Active link highlighting
        this.initActiveLinks();

        // Navbar scroll effect
        this.initNavbarScrollEffect();
    }

    toggleMobileMenu() {
        navMenu.classList.toggle('active');
        this.animateHamburger();
    }

    closeMobileMenu() {
        navMenu.classList.remove('active');
        this.resetHamburger();
    }

    animateHamburger() {
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                this.resetHamburger();
            }
        });
    }

    resetHamburger() {
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }

    initSmoothScrolling() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initActiveLinks() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    initNavbarScrollEffect() {
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 70) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// Animations and Scroll Effects
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollAnimations();
        this.animateCounters();
        this.animateSkillBars();
        this.initTypingEffect();
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        const animateElements = document.querySelectorAll('.experience-card, .project-card, .skill-category');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;

        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / speed;
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    animateCounter(counter);
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.7 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');

        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const width = skillBar.getAttribute('data-width');
                    setTimeout(() => {
                        skillBar.style.width = width;
                    }, 200);
                    skillObserver.unobserve(skillBar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    initTypingEffect() {
        const subtitle = document.querySelector('.hero-subtitle');
        const text = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        setTimeout(typeWriter, 1000);
    }
}

// Form Management
class FormManager {
    constructor() {
        this.init();
    }

    init() {
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
            this.initFormValidation();
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate form submission
        this.showLoading();
        
        setTimeout(() => {
            this.showSuccess();
            contactForm.reset();
        }, 2000);
    }

    showLoading() {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showSuccess() {
        const notification = this.createNotification('Message sent successfully!', 'success');
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    createNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#48bb78' : '#f56565'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        
        return notification;
    }

    initFormValidation() {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearValidation(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        } else if (field.type === 'email' && value && !this.isValidEmail(value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }

        this.showFieldValidation(field, isValid, message);
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFieldValidation(field, isValid, message) {
        this.clearValidation(field);

        if (!isValid) {
            field.style.borderColor = '#f56565';
            const errorElement = document.createElement('span');
            errorElement.className = 'field-error';
            errorElement.textContent = message;
            errorElement.style.cssText = `
                color: #f56565;
                font-size: 0.8rem;
                margin-top: 5px;
                display: block;
            `;
            field.parentNode.appendChild(errorElement);
        } else {
            field.style.borderColor = '#48bb78';
        }
    }

    clearValidation(field) {
        field.style.borderColor = '';
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
}

// Particle System for Hero Background
class ParticleSystem {
    constructor() {
        this.canvas = this.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        this.init();
    }

    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        document.querySelector('.hero').appendChild(canvas);
        return canvas;
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        const hero = document.querySelector('.hero');
        this.canvas.width = hero.offsetWidth;
        this.canvas.height = hero.offsetHeight;
    }

    createParticles() {
        const particleCount = 50;
        this.particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.y > this.canvas.height) particle.y = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
}

// Mouse Move Effect
class MouseMoveEffect {
    constructor() {
        this.init();
    }

    init() {
        const hero = document.querySelector('.hero');
        const profileCard = document.querySelector('.profile-card');
        
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const moveX = (x - 0.5) * 20;
            const moveY = (y - 0.5) * 20;
            
            profileCard.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        hero.addEventListener('mouseleave', () => {
            profileCard.style.transform = 'translate(0, 0)';
        });
    }
}

// Initialize Application
class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        // Initialize all managers
        new ThemeManager();
        new NavigationManager();
        new AnimationManager();
        new FormManager();
        new ParticleSystem();
        new MouseMoveEffect();
        
        // Add smooth scroll behavior
        this.initSmoothScroll();
        
        // Add loading screen removal
        this.removeLoadingScreen();
        
        console.log('🚀 Interactive CV website initialized successfully!');
    }

    initSmoothScroll() {
        // Prevent default anchor behavior and use custom smooth scroll
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    removeLoadingScreen() {
        // If there's a loading screen, remove it after everything is loaded
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 500);
    }
}

// Start the application
new App();

// Add CSS for notifications and loaded state
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification {
        animation: slideInRight 0.3s ease;
    }
    
    body.loaded {
        /* Add any post-load styles here */
    }
    
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);
