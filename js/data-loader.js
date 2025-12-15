/**
 * DATA LOADER
 * Dynamically loads content from config.js into all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    loadBusinessInfo();
    loadPageSpecificContent();
});

// Load business information (header, footer, contact info)
function loadBusinessInfo() {
    const { business } = CONFIG;
    
    // Update company name in header
    document.querySelectorAll('.company-name').forEach(el => {
        el.textContent = business.companyName;
    });
    
    // Update tagline
    document.querySelectorAll('.company-tagline').forEach(el => {
        el.textContent = business.tagline;
    });
    
    // Update phone numbers
    document.querySelectorAll('.phone-display').forEach(el => {
        el.textContent = business.phone.display;
    });
    
    document.querySelectorAll('.phone-link').forEach(el => {
        el.href = `tel:${business.phone.link}`;
    });
    
    document.querySelectorAll('.whatsapp-link').forEach(el => {
        el.href = `https://wa.me/${business.phone.whatsapp}`;
    });
    
    // Update email
    document.querySelectorAll('.email-link').forEach(el => {
        el.href = `mailto:${business.email.primary}`;
        if (!el.textContent || el.textContent.trim() === '') {
            el.textContent = business.email.primary;
        }
    });
    
    document.querySelectorAll('.email-support').forEach(el => {
        el.href = `mailto:${business.email.support}`;
        el.textContent = business.email.support;
    });
    
    // Update address
    document.querySelectorAll('.address-full').forEach(el => {
        el.textContent = business.address.full;
    });
    
    // Update business hours
    const hoursContainer = document.querySelector('.business-hours');
    if (hoursContainer) {
        hoursContainer.innerHTML = `
            <p><strong>Weekdays:</strong> ${business.hours.weekdays}</p>
            <p><strong>Saturday:</strong> ${business.hours.saturday}</p>
            <p><strong>Sunday:</strong> ${business.hours.sunday}</p>
        `;
    }
}

// Load page-specific content
function loadPageSpecificContent() {
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            loadHomePage();
            break;
        case 'services':
            loadServicesPage();
            break;
        case 'appointment':
            loadAppointmentPage();
            break;
        case 'contact':
            loadContactPage();
            break;
        case 'faq':
            loadFAQPage();
            break;
    }
}

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0] || 'index';
    return page;
}

// Load home page content
function loadHomePage() {
    const { home, showcaseServices, faqs } = CONFIG;
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = home.hero.title;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = home.hero.subtitle;
    
    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) heroTagline.textContent = home.hero.tagline;
    
    // Load stats
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        statsContainer.innerHTML = home.stats.map(stat => `
            <div class="text-center">
                <div class="text-4xl font-bold text-blue-900 mb-2">${stat.number}</div>
                <div class="text-gray-600">${stat.label}</div>
            </div>
        `).join('');
    }
    
    // Load showcase services overview (display only, no links to service pages)
    const servicesContainer = document.querySelector('.services-grid');
    if (servicesContainer && showcaseServices) {
        servicesContainer.innerHTML = `
            <div class="services-slideshow relative max-w-7xl mx-auto px-4">
                <!-- Slides Container -->
                <div class="slides-container relative rounded-xl bg-white shadow-2xl overflow-hidden" style="min-height: 650px;">
                    ${showcaseServices.map((service, index) => `
                        <div class="slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                            <div class="grid md:grid-cols-2 gap-12 p-10 items-center h-full">
                                <!-- Content Side -->
                                <div class="flex flex-col justify-center order-2 md:order-1">
                                    <h3 class="text-4xl font-bold text-blue-900 mb-6 border-b-4 border-blue-600 pb-4 inline-block">${service.name}</h3>
                                    <ul class="space-y-4 mt-6">
                                        ${service.features.map(feature => `
                                            <li class="flex items-start">
                                                <i class="fas fa-check-circle text-blue-600 mr-4 mt-1 text-xl"></i>
                                                <span class="text-gray-700 text-lg leading-relaxed">${feature}</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                                <!-- Image Side -->
                                <div class="flex items-center justify-center order-1 md:order-2">
                                    <div class="w-full max-w-md bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                                        <img src="${service.image}" alt="${service.name}" class="w-full h-auto object-contain" style="max-height: 400px;" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=text-blue-900 text-6xl text-center><i class=fas fa-briefcase></i></div>'">
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Dots Indicator -->
                <div class="slide-dots flex justify-center items-center gap-3 mt-8">
                    ${showcaseServices.map((_, index) => `
                        <button class="dot w-4 h-4 rounded-full transition-all ${index === 0 ? 'bg-blue-900 scale-125' : 'bg-gray-300'}" data-slide="${index}"></button>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Initialize slideshow
        initializeSlideshow();
    }
    
    // Load Why Choose Us
    const whyChooseContainer = document.querySelector('.why-choose-grid');
    if (whyChooseContainer) {
        whyChooseContainer.innerHTML = `
            <div class="why-choose-slideshow relative max-w-5xl mx-auto px-4">
                <!-- Slides Container -->
                <div class="why-slides-container relative rounded-xl bg-white shadow-2xl overflow-hidden" style="min-height: 350px;">
                    ${home.whyChooseUs.map((item, index) => `
                        <div class="why-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                            <div class="flex flex-col items-center justify-center text-center p-12">
                                <div class="text-blue-900 text-6xl mb-6">
                                    <i class="${item.icon}"></i>
                                </div>
                                <h3 class="text-3xl font-bold text-blue-900 mb-4">${item.title}</h3>
                                <p class="text-gray-600 text-lg max-w-2xl">${item.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Dots Indicator -->
                <div class="why-slide-dots flex justify-center items-center gap-3 mt-8">
                    ${home.whyChooseUs.map((_, index) => `
                        <button class="why-dot w-4 h-4 rounded-full transition-all ${index === 0 ? 'bg-blue-900 scale-125' : 'bg-gray-300'}" data-slide="${index}"></button>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Initialize Why Choose slideshow
        initializeWhyChooseSlideshow();
    }
    
    // Load Process
    const processContainer = document.querySelector('.process-grid');
    if (processContainer) {
        processContainer.innerHTML = home.process.map(step => `
            <div class="text-center">
                <div class="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    ${step.step}
                </div>
                <div class="text-blue-900 text-3xl mb-3">
                    <i class="${step.icon}"></i>
                </div>
                <h3 class="text-xl font-bold text-blue-900 mb-2">${step.title}</h3>
                <p class="text-gray-600">${step.description}</p>
            </div>
        `).join('');
    }
    
    // Load Process Trust Points
    const processTrustContainer = document.querySelector('.process-trust');
    if (processTrustContainer) {
        processTrustContainer.innerHTML = home.processTrust.map(point => `
            <li class="flex items-center">
                <i class="fas fa-check-circle text-blue-600 mr-2"></i>
                <span>${point}</span>
            </li>
        `).join('');
    }
    
    // Load FAQs
    loadFAQs();
}

// Load services page
function loadServicesPage() {
    const { services } = CONFIG;
    
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer && services && services.length > 0) {
        servicesContainer.innerHTML = services.map(service => `
            <div class="service-card-overlay rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="relative h-80 overflow-hidden">
                    <img src="${service.image}" alt="${service.name}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center\\'><i class=\\'${service.icon} text-8xl text-white\\'></i></div>'">
                    
                    <!-- Gradient Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-transparent"></div>
                    
                    <!-- Text Content Overlay -->
                    <div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <div class="flex items-center mb-3">
                            <i class="${service.icon} text-3xl mr-3"></i>
                            <h3 class="text-2xl font-bold">${service.name}</h3>
                        </div>
                        <p class="text-white/90 mb-4 text-sm leading-relaxed">${service.shortDesc}</p>
                        <a href="${service.page}" class="inline-block w-full text-center bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-semibold shadow-lg">
                            Explore Service <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Load Services FAQs
    loadServicesFAQs();
}

// Load Services FAQs (limited to 3 for services page)
function loadServicesFAQs() {
    const { servicesFaqs } = CONFIG;
    const faqContainer = document.querySelector('.services-faq-container');
    
    if (faqContainer && servicesFaqs && servicesFaqs.length > 0) {
        // Show only first 3 FAQs on services page
        const limitedFaqs = servicesFaqs.slice(0, 3);
        faqContainer.innerHTML = limitedFaqs.map((faq, index) => `
            <div class="faq-item bg-white rounded-lg shadow-md overflow-hidden">
                <button class="faq-question w-full text-left px-6 py-4 font-semibold text-blue-900 hover:bg-gray-50 transition flex justify-between items-center" onclick="toggleFAQ(${index})">
                    <span class="flex items-center">
                        <i class="${faq.icon} mr-3 text-blue-600"></i>
                        ${faq.question}
                    </span>
                    <i class="fas fa-chevron-down faq-icon transition-transform" id="faq-icon-${index}"></i>
                </button>
                <div class="faq-answer px-6 py-4 bg-gray-50 text-gray-700 hidden" id="faq-answer-${index}">
                    ${faq.answer}
                </div>
            </div>
        `).join('');
        
        // Add "View All FAQs" button
        if (servicesFaqs.length > 3) {
            faqContainer.innerHTML += `
                <div class="text-center mt-8">
                    <a href="faq.html" class="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition shadow-lg font-semibold">
                        View All FAQs <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            `;
        }
    }
}


// Load appointment page
function loadAppointmentPage() {
    loadServiceOptions();
}

// Load contact page
function loadContactPage() {
    // Additional contact page specific loading if needed
}

// Load service options for dropdowns
function loadServiceOptions() {
    const { services, showcaseServices } = CONFIG;
    const serviceSelects = document.querySelectorAll('.service-select');
    
    // Use actual services if available, otherwise use showcase services for contact forms
    const servicesToUse = (services && services.length > 0) ? services : showcaseServices;
    
    serviceSelects.forEach(select => {
        // Keep the first option (placeholder)
        const firstOption = select.querySelector('option');
        select.innerHTML = firstOption ? firstOption.outerHTML : '<option value="">Select a service</option>';
        
        // Add service options
        if (servicesToUse && servicesToUse.length > 0) {
            servicesToUse.forEach(service => {
                const option = document.createElement('option');
                option.value = service.name;
                option.textContent = service.name;
                select.appendChild(option);
            });
        }
    });
}

// Load FAQs (for home page - limited to 3)
function loadFAQs() {
    const { faqs } = CONFIG;
    const faqContainer = document.querySelector('.faq-container');
    
    if (faqContainer) {
        // Show only first 3 FAQs on home page
        const homeFaqs = faqs.slice(0, 3);
        faqContainer.innerHTML = homeFaqs.map((faq, index) => `
            <div class="faq-item bg-white rounded-lg shadow-md overflow-hidden">
                <button class="faq-question w-full text-left px-6 py-4 font-semibold text-blue-900 hover:bg-gray-50 transition flex justify-between items-center" onclick="toggleFAQ(${index})">
                    <span class="flex items-center">
                        <i class="${faq.icon} mr-3 text-blue-600"></i>
                        ${faq.question}
                    </span>
                    <i class="fas fa-chevron-down faq-icon transition-transform" id="faq-icon-${index}"></i>
                </button>
                <div class="faq-answer px-6 py-4 bg-gray-50 text-gray-700 hidden" id="faq-answer-${index}">
                    ${faq.answer}
                </div>
            </div>
        `).join('');
        
        // Add "View All FAQs" button
        if (faqs.length > 3) {
            faqContainer.innerHTML += `
                <div class="text-center mt-8">
                    <a href="faq.html" class="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition shadow-lg font-semibold">
                        View All FAQs <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            `;
        }
    }
}

// Load FAQ Page (all FAQs)
function loadFAQPage() {
    const { universalFaqs } = CONFIG;
    const faqContainer = document.querySelector('.faq-container-full');
    
    if (faqContainer && universalFaqs) {
        // Group FAQs by category
        const categories = {};
        universalFaqs.forEach(faq => {
            if (!categories[faq.category]) {
                categories[faq.category] = [];
            }
            categories[faq.category].push(faq);
        });
        
        let html = '';
        let globalIndex = 0;
        
        // Generate HTML for each category
        Object.keys(categories).forEach(categoryName => {
            html += `
                <div class="mb-12">
                    <h3 class="text-2xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">
                        ${categoryName}
                    </h3>
                    <div class="space-y-4">
            `;
            
            categories[categoryName].forEach(faq => {
                html += `
                    <div class="faq-item bg-white rounded-lg shadow-md overflow-hidden">
                        <button class="faq-question w-full text-left px-6 py-4 font-semibold text-blue-900 hover:bg-gray-50 transition flex justify-between items-center" onclick="toggleFAQ(${globalIndex})">
                            <span class="flex items-center">
                                <i class="${faq.icon} mr-3 text-blue-600"></i>
                                ${faq.question}
                            </span>
                            <i class="fas fa-chevron-down faq-icon transition-transform" id="faq-icon-${globalIndex}"></i>
                        </button>
                        <div class="faq-answer px-6 py-4 bg-gray-50 text-gray-700 hidden" id="faq-answer-${globalIndex}">
                            ${faq.answer}
                        </div>
                    </div>
                `;
                globalIndex++;
            });
            
            html += `
                    </div>
                </div>
            `;
        });
        
        faqContainer.innerHTML = html;
    }
}

// Toggle FAQ
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        answer.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

// Initialize and manage slideshow functionality
function initializeSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let autoPlayInterval;
    
    // Show specific slide
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Update dots
        dots.forEach(dot => {
            dot.classList.remove('bg-blue-900', 'scale-125');
            dot.classList.add('bg-gray-300');
        });
        
        // Show current slide
        slides[index].classList.add('active');
        if (dots[index]) {
            dots[index].classList.remove('bg-gray-300');
            dots[index].classList.add('bg-blue-900', 'scale-125');
        }
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Start auto-play (5 seconds)
    function startAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
    
    // Stop auto-play
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoPlay();
            currentSlide = index;
            showSlide(currentSlide);
            startAutoPlay();
        });
    });
    
    // Initialize first slide and start auto-play
    showSlide(0);
    startAutoPlay();
    
    // Pause auto-play on hover
    const slideshowContainer = document.querySelector('.services-slideshow');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopAutoPlay);
        slideshowContainer.addEventListener('mouseleave', startAutoPlay);
    }
}

// Initialize and manage Why Choose slideshow functionality
function initializeWhyChooseSlideshow() {
    const slides = document.querySelectorAll('.why-slide');
    const dots = document.querySelectorAll('.why-dot');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let autoPlayInterval;
    
    // Show specific slide
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Update dots
        dots.forEach(dot => {
            dot.classList.remove('bg-blue-900', 'scale-125');
            dot.classList.add('bg-gray-300');
        });
        
        // Show current slide
        slides[index].classList.add('active');
        if (dots[index]) {
            dots[index].classList.remove('bg-gray-300');
            dots[index].classList.add('bg-blue-900', 'scale-125');
        }
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Start auto-play (5 seconds)
    function startAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
    
    // Stop auto-play
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoPlay();
            currentSlide = index;
            showSlide(currentSlide);
            startAutoPlay();
        });
    });
    
    // Initialize first slide and start auto-play
    showSlide(0);
    startAutoPlay();
    
    // Pause auto-play on hover
    const slideshowContainer = document.querySelector('.why-choose-slideshow');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopAutoPlay);
        slideshowContainer.addEventListener('mouseleave', startAutoPlay);
    }
}

// Open service booking modal
function openServiceModal(serviceName) {
    const modal = document.getElementById('serviceModal');
    const serviceInput = document.getElementById('serviceSelected');
    
    if (modal && serviceInput) {
        serviceInput.value = serviceName;
        modal.classList.remove('hidden');
    } else {
        // If modal doesn't exist, redirect to appointment page
        sessionStorage.setItem('selectedService', serviceName);
        window.location.href = 'appointment.html';
    }
}

// Close service booking modal
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Pre-select service on appointment page
if (getCurrentPage() === 'appointment') {
    const selectedService = sessionStorage.getItem('selectedService');
    if (selectedService) {
        setTimeout(() => {
            const serviceSelect = document.querySelector('.service-select');
            if (serviceSelect) {
                serviceSelect.value = selectedService;
            }
            sessionStorage.removeItem('selectedService');
        }, 100);
    }
}
