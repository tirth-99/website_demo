document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.demo-card');
    
    // Staggered fade in for cards
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 300 + (index * 150));
    });

    // Subtle mouse move parallax effect on cards
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Limit the rotation angle
            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});
