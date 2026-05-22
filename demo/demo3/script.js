document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle (Brutalist style) ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navAction = document.querySelector('.nav-action');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // For a brutalist theme, we'll just violently toggle display styles
            const isHidden = window.getComputedStyle(navLinks).display === 'none';
            
            if (isHidden) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.width = '100%';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.backgroundColor = 'var(--c-bg)';
                navLinks.style.borderBottom = 'var(--border-thick)';
                
                navAction.style.display = 'block';
                navAction.style.position = 'absolute';
                navAction.style.top = '100%';
                navAction.style.right = '0';
                navAction.style.marginTop = navLinks.offsetHeight + 'px'; // push below links
            } else {
                navLinks.style.display = 'none';
                navAction.style.display = 'none';
            }
        });
    }

    // --- Glitch Text Hover Sound Effect (Simulated visually) ---
    // In a real brutalist site, hover effects are stark.
    const glitchTexts = document.querySelectorAll('.glitch-text');
    
    glitchTexts.forEach(text => {
        text.addEventListener('mouseenter', () => {
            document.body.style.backgroundColor = '#f0f0f0'; // Slight flicker
            setTimeout(() => {
                document.body.style.backgroundColor = 'var(--c-bg)';
            }, 50);
        });
    });

    // --- Terminal Typing Effect ---
    const terminalLines = document.querySelectorAll('.term-line:not(.blink-cursor)');
    const cursorLine = document.querySelector('.blink-cursor');
    
    if (terminalLines.length > 0 && cursorLine) {
        // Hide all initially
        terminalLines.forEach(line => line.style.display = 'none');
        
        let currentLine = 0;
        
        const typeNextLine = () => {
            if (currentLine < terminalLines.length) {
                terminalLines[currentLine].style.display = 'block';
                currentLine++;
                // Randomize typing speed for mechanical feel
                setTimeout(typeNextLine, Math.random() * 800 + 200);
            }
        };
        
        // Start typing after a short delay
        setTimeout(typeNextLine, 1000);
    }
});
