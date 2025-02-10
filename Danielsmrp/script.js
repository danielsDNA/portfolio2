// Initialize EmailJS
(function() {
    emailjs.init("your_user_id"); // Replace with your EmailJS user ID
})();

// Handle the contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields before submitting.");
                return;
            }

            const templateParams = {
                name: name,
                email: email,
                message: message
            };

            emailjs.send('service_id', 'template_id', templateParams)
                .then(function(response) {
                    alert("Your message has been sent successfully!");
                    contactForm.reset();
                }, function(error) {
                    alert("Oops! Something went wrong, please try again.");
                });
        });
    }

    // Handle the service request form
    const requestForm = document.getElementById('request-form');
    if (requestForm) {
        requestForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const serviceType = document.getElementById('service-type').value.trim();
            const userEmail = document.getElementById('user-email').value.trim();

            if (serviceType === "" || userEmail === "") {
                alert("Please select a service and enter your email.");
                return;
            }

            alert("Service request submitted successfully!");
            requestForm.reset();
        });
    }

    // Homepage Logo Animation
    const logo = document.querySelector('.logo h1');
    if (logo) {
        setTimeout(() => {
            logo.classList.add('fade-in');
        }, 3000); // Delay before animation
    }

    // Smooth Scroll Animation for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in Animation for Sections
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (sectionPosition < screenPosition) {
                section.classList.add('fade-in');
            }
        });
    });
});