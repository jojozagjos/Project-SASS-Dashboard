document.addEventListener('mousemove', (event) => {
    
    const ripple = document.createElement('div');
    ripple.className = 'ripple';

    
    const x = event.clientX;
    const y = event.clientY;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    
    document.body.appendChild(ripple);

    
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});