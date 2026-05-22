document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigation Scroll Effect ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change icon based on state
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animation has triggered
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Select all elements to animate
    const animateElements = document.querySelectorAll('.fade-in-up, .fade-in');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // --- Dynamic Dashboard Bar Chart Animation (Simulated) ---
    // Make bars rise smoothly when dashboard comes into view
    const dashboardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.bar');
                bars.forEach((bar, index) => {
                    // Reset to 0 then animate to set height
                    const targetHeight = bar.style.height;
                    bar.style.height = '0%';
                    setTimeout(() => {
                        bar.style.height = targetHeight;
                    }, 100 + (index * 150));
                });
                dashboardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const dashboard = document.querySelector('.dashboard-mockup');
    if (dashboard) {
        dashboardObserver.observe(dashboard);
    }
});
