// Get the feedback and form elements
const feedbackElement = document.getElementById('feedback');
const formElement = document.forms[0];

// Function to validate the form fields
function validateForm(name, email, message) {
    const nameRegex = /^[a-zA-Z\s]+$/;

    // Validate Name
    if (!name || !nameRegex.test(name)) {
        return "Please enter a valid name (letters and spaces only).";
    }

    // Validate Email
    if (!email || !email.includes("@") || !email.includes(".")) {
        return "Please enter a valid email address.";
    }

    // Validate Message
    if (!message || message.length < 10) {
        return "Your message must be at least 10 characters long.";
    }

    
    return "";
}

// Add event listener for form submission
formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    // Extract form values
    const name = formElement.user_name.value.trim();
    const email = formElement.user_email.value.trim();
    const message = formElement.user_message.value.trim();
    const validationMessage = validateForm(name, email, message);

    if (validationMessage) {
        // Show error feedback if validation fails
        feedbackElement.innerHTML = `<span style="color: red;">${validationMessage}</span>`;
        feedbackElement.style.display = "block";
    } else {
        // Show success feedback if validation passes
        feedbackElement.innerHTML = `Hello ${name}! Thank you for your message. We will get back with you as soon as possible!`;
        feedbackElement.style.display = "block";

        // Optionally clear the form after success
        formElement.reset();

        // Add class to move everything down (if needed)
        document.body.classList.toggle('moveDown');
    }
});
