// Form validation script
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const passwordInput = document.querySelector("input[name='password']");
    const confirmPasswordInput = document.querySelector("input[name='confirm_password']");

    form.addEventListener("submit", function (e) {
        // Check if passwords match
        if (passwordInput.value !== confirmPasswordInput.value) {
            e.preventDefault(); // Prevent form submission
            alert("Passwords do not match! Please check your entries.");
        } else {
            alert("Sign-up successful!");
        }
    });
});
