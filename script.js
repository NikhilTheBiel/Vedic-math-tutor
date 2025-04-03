document.addEventListener("DOMContentLoaded", () => {
    // Parallax Scrolling Effect
    const hero = document.querySelector(".hero");
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Background Color Transition
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let scrollPercent = scrollTop / maxScroll;
        let greenIntensity = Math.max(255 - scrollPercent * 255, 90);
        document.body.style.background = `rgb(${greenIntensity}, 139, 87)`;
    });

    // Bubble Effect in Footer
    const bubblesContainer = document.querySelector(".bubbles-container");
    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${2 + Math.random() * 3}s`;
        bubblesContainer.appendChild(bubble);
        setTimeout(() => bubble.remove(), 5000);
    }
    setInterval(createBubble, 500);

    // Our Journey Section Animation
    const journey = document.querySelector(".our-journey");
    journey.innerHTML = `
        <div class="journey-step">🚀 Started in 2010</div>
        <div class="journey-step">📚 First 100 students</div>
        <div class="journey-step">🏆 Reached 10,000 students</div>
        <div class="journey-step">👑 Leading Vedic Math Tutoring</div>
    `;

    journey.querySelectorAll(".journey-step").forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = "1";
            step.style.transform = "translateY(0)";
        }, index * 500);
    });

    // Review Navigation
    let reviewIndex = 0;
    const reviews = document.querySelectorAll(".review-box");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    function showReview(index) {
        reviews.forEach((review, i) => {
            review.style.display = (i === index) ? "block" : "none";
        });
    }

    nextBtn.addEventListener("click", () => {
        reviewIndex = (reviewIndex + 1) % reviews.length;
        showReview(reviewIndex);
    });

    prevBtn.addEventListener("click", () => {
        reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
        showReview(reviewIndex);
    });

    // Initial review visibility
    showReview(reviewIndex);
});
