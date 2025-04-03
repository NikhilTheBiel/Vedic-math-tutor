document.addEventListener("DOMContentLoaded", () => {

    console.log("Script Loaded Successfully!");

    // ✅ Parallax Scrolling Effect
    const hero = document.querySelector(".hero");
    if (hero) {
        window.addEventListener("scroll", () => {
            let scrollPosition = window.scrollY;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }

    // ✅ Background Color Transition (Smooth Effect)
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let scrollPercent = scrollTop / maxScroll;
        let greenIntensity = Math.max(255 - scrollPercent * 255, 90);
        document.body.style.background = `rgb(${greenIntensity}, 139, 87)`;
    });

    // ✅ Bubble Effect in Footer
    const bubblesContainer = document.querySelector(".bubbles-container");
    if (bubblesContainer) {
        function createBubble() {
            const bubble = document.createElement("div");
            bubble.classList.add("bubble");
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.animationDuration = `${2 + Math.random() * 3}s`;
            bubblesContainer.appendChild(bubble);
            setTimeout(() => bubble.remove(), 5000);
        }
        setInterval(createBubble, 500);
    }

    // ✅ Animated "Our Journey" Section
    const journey = document.querySelector(".our-journey");
    if (journey) {
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
    }

    // ✅ Scroll Button Logic
    const scrollBtn = document.querySelector('.scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            alert('Scrolling through tutoring options!');
        });
    }

    // ✅ Contact Form Validation (Recaptcha Integration)
    const contactForm = document.getElementById("contact_form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent normal form submission
            grecaptcha.execute();
        });
    }

    // ✅ Recaptcha Callback Function
    window.submitForm = function (token) {
        if (contactForm) contactForm.submit();
    };

    // ✅ Load News Section (AJAX)
    const newsContainer = document.getElementById("news");
    if (newsContainer) {
        fetch("includes/home-news.php")
            .then(response => response.text())
            .then(data => newsContainer.innerHTML = data)
            .catch(error => console.error("Error loading news:", error));
    }

});
