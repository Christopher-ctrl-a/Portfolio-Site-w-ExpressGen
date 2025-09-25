// email.js Christopher Esguerra 301483615 September 24, 2025

// Initialize EmailJS with your user ID
(function() {
    emailjs.init('vSBbvBEdH_Xn3dvp1'); // Your public key
})();

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', sendEmail);
    }
});

function sendEmail(e) {
    e.preventDefault();
    
    // Get the form element
    const form = e.target;
    
    // Show loading state (optional)
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Send the form using EmailJS
    emailjs.sendForm('service_ejosgwk', 'template_w0uk10p', form)
        .then(function(result) {
            console.log('Success:', result.text);
            alert('Message submitted successfully!');
            form.reset(); // Clear the form
            window.location.href = '/'; // Redirect to home
        })
        .catch(function(error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        })
        .finally(function() {           
            // Restore button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
}