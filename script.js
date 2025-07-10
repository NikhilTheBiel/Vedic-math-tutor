// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.awesome-nav');
    
hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
});

// Header Scroll Effect
const header = document.querySelector('.wow-header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Hero Carousel
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Reset animation for hero content
    const heroContent = slides[currentSlide].querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startCarousel() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopCarousel() {
    clearInterval(slideInterval);
}

// Initialize carousel
showSlide(0);
startCarousel();

// Event listeners for carousel controls
nextBtn.addEventListener('click', () => {
    stopCarousel();
    nextSlide();
    startCarousel();
});

prevBtn.addEventListener('click', () => {
    stopCarousel();
    prevSlide();
    startCarousel();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopCarousel();
        showSlide(index);
        startCarousel();
    });
});

// Pause carousel on hover
const carousel = document.querySelector('.hero-carousel');
carousel.addEventListener('mouseenter', stopCarousel);
carousel.addEventListener('mouseleave', startCarousel);

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const tDots = document.querySelectorAll('.t-dot');
let currentTestimonial = 0;
let testimonialInterval;

function showTestimonial(n) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    tDots.forEach(dot => dot.classList.remove('active'));
    
    currentTestimonial = (n + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
    tDots[currentTestimonial].classList.add('active');
}

function nextTestimonial() {
    showTestimonial(currentTestimonial + 1);
}

function startTestimonialCarousel() {
    testimonialInterval = setInterval(nextTestimonial, 6000);
}

// Initialize testimonial carousel
showTestimonial(0);
startTestimonialCarousel();

tDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(testimonialInterval);
        showTestimonial(index);
        startTestimonialCarousel();
    });
});

// Animate elements when scrolling
function animateOnScroll() {
    const elements = document.querySelectorAll('.course-card, .benefit');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top + scrollY;
        const elementHeight = element.offsetHeight;
        
        // Check if element is in viewport
        if (scrollY > (elementPosition - windowHeight + elementHeight / 2)) {
            element.classList.add('animated');
        }
    });

    // Back to top button
    if (scrollY > 500) {
        document.querySelector('.back-to-top').classList.add('show');
    } else {
        document.querySelector('.back-to-top').classList.remove('show');
    }
}

// Set initial state for animations
const courseCards = document.querySelectorAll('.course-card');
const benefits = document.querySelectorAll('.benefit');
    
courseCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
});
    
benefits.forEach(benefit => {
    benefit.style.opacity = '0';
    benefit.style.transform = 'translateY(30px)';
});

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Back to top button
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Audio Player
const audio = document.getElementById('bgMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
let isPlaying = false;

playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        this.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        this.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // In a real implementation, you would send this to your backend
            // For demo purposes, we'll simulate an API call
            console.log('Form data to be sent:', formObject);
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            alert(`Thank you, ${formObject.name}! We've received your message about the ${formObject.select} course and will contact you soon at ${formObject.email}.`);
            
            // Reset form
            this.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again later.');
        } finally {
            // Reset button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}