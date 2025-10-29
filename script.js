// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add pulse animation to featured cards
document.querySelectorAll('.featured').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
        card.style.transform = 'translateY(-3px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
        card.style.transform = 'none';
    });
});
