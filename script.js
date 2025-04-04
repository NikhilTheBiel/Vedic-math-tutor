document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Review Slider
    const reviewSlider = document.querySelector('.reviews-slider');
    const reviewCards = document.querySelectorAll('.review-card');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentIndex = 0;
    
    // Create dots
    reviewCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    function goToSlide(index) {
        reviewSlider.scrollTo({
            left: reviewCards[index].offsetLeft - reviewSlider.offsetLeft,
            behavior: 'smooth'
        });
        
        currentIndex = index;
        updateDots();
    }
    
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + reviewCards.length) % reviewCards.length;
        goToSlide(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % reviewCards.length;
        goToSlide(currentIndex);
    });
    
    // Auto-scroll for courses
    let isDown = false;
    let startX;
    let scrollLeft;
    const coursesSlider = document.querySelector('.courses-slider');
    
    coursesSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - coursesSlider.offsetLeft;
        scrollLeft = coursesSlider.scrollLeft;
    });
    
    coursesSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    coursesSlider.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    coursesSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - coursesSlider.offsetLeft;
        const walk = (x - startX) * 2;
        coursesSlider.scrollLeft = scrollLeft - walk;
    });
    
    // Bubble effect
    const bubblesContainer = document.querySelector('.bubbles-container');
    
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random size between 10 and 40px
        const size = Math.random() * 30 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random position
        bubble.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 10 + 5;
        bubble.style.animationDuration = `${duration}s`;
        
        // Random delay
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        
        bubblesContainer.appendChild(bubble);
        
        // Remove bubble after animation completes
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }
    
    // Create initial bubbles
    for (let i = 0; i < 15; i++) {
        setTimeout(createBubble, i * 500);
    }
    
    // Continue creating bubbles periodically
    setInterval(createBubble, 2000);
    
    // Parallax effect for hero
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }
});
