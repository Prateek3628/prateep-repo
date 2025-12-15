/**
 * SCROLL ANIMATIONS
 * Handles scroll-triggered animations throughout the website
 */

document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
    initHeaderScrollEffect();
    initCounterAnimations();
});

// Initialize scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Add stagger effect to children if they exist
                const children = entry.target.querySelectorAll('.scroll-animate, .scroll-fade-left, .scroll-fade-right, .scroll-scale');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('active');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-fade-left, .scroll-fade-right, .scroll-scale');
    animatedElements.forEach(el => observer.observe(el));
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Animated counter for stats
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stats-container .text-4xl');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const number = parseInt(text.replace(/\D/g, ''));

    if (isNaN(number)) return;

    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = number + (hasPlus ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
        }
    }, duration / steps);
}

// Add scroll animations to dynamically loaded content
function addScrollAnimationsToElement(element) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    observer.observe(element);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add entrance animations to service cards when they're loaded
const serviceObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
                if (node.classList.contains('service-card') ||
                    node.classList.contains('service-card-overlay')) {
                    node.classList.add('scroll-animate');
                    addScrollAnimationsToElement(node);
                }

                // Also check children
                const serviceCards = node.querySelectorAll('.service-card, .service-card-overlay');
                serviceCards.forEach((card, index) => {
                    card.classList.add('scroll-animate', `stagger-${Math.min(index + 1, 6)}`);
                    addScrollAnimationsToElement(card);
                });
            }
        });
    });
});

// Observe the services container for dynamic content
const servicesContainer = document.getElementById('services-container');
if (servicesContainer) {
    serviceObserver.observe(servicesContainer, {
        childList: true,
        subtree: true
    });
}
