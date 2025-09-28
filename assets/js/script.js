    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').style.padding = '10px 0';
            document.querySelector('.navbar').style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            document.querySelector('.navbar').style.padding = '15px 0';
            document.querySelector('.navbar').style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in animation on scroll
    function checkFade() {
        const fadeElements = document.querySelectorAll('.fade-in');

        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    window.addEventListener('load', checkFade);

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });