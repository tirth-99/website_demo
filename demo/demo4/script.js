document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Simple animation for hamburger lines
            const lines = menuBtn.querySelectorAll('.hamburger-line');
            if (navLinks.classList.contains('active')) {
                lines[0].style.transform = 'translateY(3.5px) rotate(45deg)';
                lines[1].style.transform = 'translateY(-3.5px) rotate(-45deg)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.transform = 'none';
            }
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const lines = menuBtn.querySelectorAll('.hamburger-line');
                lines[0].style.transform = 'none';
                lines[1].style.transform = 'none';
            });
        });
    }

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.fade-in-up');
    revealElements.forEach(el => revealObserver.observe(el));

    // --- Chart Mockup Animation ---
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lines = entry.target.querySelectorAll('.chart-line');
                lines.forEach((line, index) => {
                    const targetHeight = line.style.height;
                    line.style.height = '0';
                    line.style.transition = 'height 1s ease-out';
                    
                    // Delay each line slightly for a cascading effect
                    setTimeout(() => {
                        line.style.height = targetHeight;
                    }, 200 + (index * 150));
                });
                chartObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const chart = document.querySelector('.chart-container');
    if (chart) {
        chartObserver.observe(chart);
    }
});
