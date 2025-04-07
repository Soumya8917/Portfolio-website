(function() {
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('contact-message').textContent = 'Message sent successfully!';
            document.getElementById('contact-form').reset();
        }, (err) => {
            document.getElementById('contact-message').textContent = 'Failed to send message: ' + JSON.stringify(err);
        });
});
