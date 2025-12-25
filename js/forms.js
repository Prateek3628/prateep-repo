// Forms Handler - Google Sheets Integration

// ========================================
// CONFIGURATION - REPLACE WITH YOUR GOOGLE APPS SCRIPT URLS
// ========================================

const GOOGLE_SCRIPT_URLS = {
    serviceBookings: 'https://script.google.com/macros/s/AKfycbwQYmqAGf_o82LP1Esja6DC29ljnWlHcCiT0QYDGIStAlmGbnhY7_EIJUyEyqCYQ3HT/exec',
    appointments: 'https://script.google.com/macros/s/AKfycbwQYmqAGf_o82LP1Esja6DC29ljnWlHcCiT0QYDGIStAlmGbnhY7_EIJUyEyqCYQ3HT/exec',
    contacts: 'https://script.google.com/macros/s/AKfycbwQYmqAGf_o82LP1Esja6DC29ljnWlHcCiT0QYDGIStAlmGbnhY7_EIJUyEyqCYQ3HT/exec'
};

// ========================================
// SERVICE BOOKING FORM HANDLER
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    const serviceBookingForm = document.getElementById('serviceBookingForm');

    if (serviceBookingForm) {
        serviceBookingForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const messageDiv = document.getElementById('serviceFormMessage');

            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            messageDiv.classList.add('hidden');

            // Get form data
            const formData = new FormData(this);
            const data = {
                service: formData.get('service'),
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message'),
                timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
            };

            try {
                // Validate data
                if (!validateEmail(data.email)) {
                    throw new Error('Please enter a valid email address');
                }

                if (!validatePhone(data.phone)) {
                    throw new Error('Please enter a valid 10-digit phone number');
                }

                // Send to Google Sheets
                const response = await fetch(GOOGLE_SHEETS_CONFIG.serviceBookings, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                // Show success message
                showMessage(messageDiv, 'success', 'Thank you! Your service booking request has been received. We will contact you shortly.');
                this.reset();

                // Close modal after 2 seconds
                setTimeout(() => {
                    closeServiceModal();
                }, 2000);

            } catch (error) {
                console.error('Error:', error);
                showMessage(messageDiv, 'error', error.message || 'Something went wrong. Please try again or contact us directly.');
            } finally {
                // Remove loading state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });
    }
});

// ========================================
// APPOINTMENT BOOKING FORM HANDLER
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const messageDiv = document.getElementById('appointmentFormMessage');

            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            messageDiv.classList.add('hidden');

            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                preferredDate: formData.get('preferredDate'),
                preferredTime: formData.get('preferredTime'),
                serviceType: formData.get('serviceType'),
                message: formData.get('message'),
                timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
            };

            try {
                // Validate data
                if (!validateEmail(data.email)) {
                    throw new Error('Please enter a valid email address');
                }

                if (!validatePhone(data.phone)) {
                    throw new Error('Please enter a valid 10-digit phone number');
                }

                if (!data.preferredDate || !data.preferredTime) {
                    throw new Error('Please select both date and time for your appointment');
                }

                // Send to Google Sheets
                const response = await fetch(GOOGLE_SHEETS_CONFIG.appointments, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                // Show success message
                showMessage(messageDiv, 'success', 'Appointment request received! We will confirm your appointment via email or phone within 24 hours.');
                this.reset();

                // Scroll to message
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            } catch (error) {
                console.error('Error:', error);
                showMessage(messageDiv, 'error', error.message || 'Something went wrong. Please try again or call us directly.');
            } finally {
                // Remove loading state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });
    }
});

// ========================================
// CONTACT FORM HANDLER
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const messageDiv = document.getElementById('contactFormMessage');

            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            messageDiv.classList.add('hidden');

            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
            };

            try {
                // Validate data
                if (!validateEmail(data.email)) {
                    throw new Error('Please enter a valid email address');
                }

                if (!validatePhone(data.phone)) {
                    throw new Error('Please enter a valid 10-digit phone number');
                }

                if (!data.message || data.message.trim().length < 10) {
                    throw new Error('Please enter a detailed message (at least 10 characters)');
                }

                // Send to Google Sheets
                const response = await fetch(GOOGLE_SHEETS_CONFIG.contacts, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                // Show success message
                showMessage(messageDiv, 'success', 'Thank you for contacting us! We will get back to you within 24 hours.');
                this.reset();

                // Scroll to message
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            } catch (error) {
                console.error('Error:', error);
                showMessage(messageDiv, 'error', error.message || 'Something went wrong. Please try again or reach out via phone.');
            } finally {
                // Remove loading state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });
    }
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

function showMessage(element, type, message) {
    if (!element) return;

    element.classList.remove('hidden', 'message-success', 'message-error');
    element.classList.add(type === 'success' ? 'message-success' : 'message-error');

    const icon = type === 'success'
        ? '<i class="fas fa-check-circle mr-2"></i>'
        : '<i class="fas fa-exclamation-circle mr-2"></i>';

    element.innerHTML = icon + message;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}
