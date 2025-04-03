$(document).ready(function() {
  // Load News Section dynamically
  $("#news").load("includes/home-news.php");

  // Contact Form Validation
  $('#contact_form').validator({
    disable: false
  }).on('submit', function(e) {
    if (e.isDefaultPrevented()) {
      // Handle invalid form
    } else {
      // Form is valid, prevent default submit and trigger captcha
      e.preventDefault();
      grecaptcha.execute();
    }
  });
});

function submitForm(token) {
  document.getElementById("contact_form").submit();
}
