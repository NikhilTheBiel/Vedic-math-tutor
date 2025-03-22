// Handle form submission with AJAX (optional)
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    const formData = new FormData(form);

    fetch('signup.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Sign Up Successful!');
        } else {
            alert('Something went wrong, please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred, please try again later.');
    });
});
