// Welcome Modal Functions
function showWelcomeModal() {
    // Check if user has already seen the modal in this session
    if (!sessionStorage.getItem('welcomeModalShown')) {
        const modal = document.getElementById('welcomeModal');
        if (modal) {
            // Show modal after a short delay
            setTimeout(() => {
                modal.classList.remove('hidden');
            }, 1000);
        }
    }
}

function closeWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
        modal.classList.add('hidden');
        // Mark as shown so it doesn't appear again in this session
        sessionStorage.setItem('welcomeModalShown', 'true');
    }
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    successDiv.innerHTML = `
        <div class="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-8 text-center transform animate-bounce">
            <div class="mb-4">
                <svg class="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p class="text-gray-600 text-lg">We've received your inquiry and will contact you soon.</p>
        </div>
    `;
    document.body.appendChild(successDiv);
    setTimeout(() => successDiv.remove(), 3000);
}

function showErrorMessage() {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    errorDiv.innerHTML = `
        <div class="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-8 text-center">
            <div class="mb-4">
                <svg class="w-20 h-20 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Oops!</h3>
            <p class="text-gray-600 text-lg">There was an error. Please try again or contact us directly.</p>
        </div>
    `;
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
}

// Handle welcome form submission
document.addEventListener('DOMContentLoaded', function () {
    const welcomeForm = document.getElementById('welcomeForm');

    if (welcomeForm) {
        welcomeForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const formData = {
                formType: 'welcomePopup',
                name: this.name.value,
                email: this.email.value,
                phone: this.phone.value,
                query: this.query.value
            };

            // Using the same Google Apps Script URL as other forms
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQYmqAGf_o82LP1Esja6DC29ljnWlHcCiT0QYDGIStAlmGbnhY7_EIJUyEyqCYQ3HT/exec';


            try {
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;

                // Send data to Google Sheets
                const response = await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                // Show beautiful success message
                showSuccessMessage();

                // Close the modal after delay
                setTimeout(() => closeWelcomeModal(), 3000);

                // Reset form
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

            } catch (error) {
                console.error('Error submitting form:', error);
                showErrorMessage();

                // Re-enable submit button
                const submitBtn = this.querySelector('button[type="submit"]');
                submitBtn.textContent = 'Submit';
                submitBtn.disabled = false;
            }
        });
    }

    // Show welcome modal on page load
    showWelcomeModal();
});

// Close modal when clicking outside
document.addEventListener('click', function (e) {
    const modal = document.getElementById('welcomeModal');
    if (e.target === modal) {
        closeWelcomeModal();
    }
});
