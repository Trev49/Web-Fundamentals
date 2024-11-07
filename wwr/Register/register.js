

// Import template functions from Templates.js
import { participantTemplate, successTemplate } from './Templates.js';

// Initialize participant count
let participantCount = 1;

// Add event listener to "Add Participant" button
document.getElementById('add').addEventListener('click', addParticipant);

// Function to add a new participant section
function addParticipant() {
    participantCount++; // Increment participant count
    const newParticipantHTML = participantTemplate(participantCount); // Generate new participant HTML
    document.getElementById('add').insertAdjacentHTML('beforebegin', newParticipantHTML); // Insert new HTML before the add button
}

// Add event listener to form submission
document.querySelector('form').addEventListener('submit', submitForm);

// Function to calculate total fees
function totalFees() {
    let feeElements = [...document.querySelectorAll("[id^=fee]")];
    return feeElements.reduce((total, feeInput) => {
        return total + (parseFloat(feeInput.value) || 0); 
    }, 0);
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    
    const adultName = document.getElementById('adult_name').value; // Get adult name
    const totalFeesAmount = totalFees(); // Calculate total fees

    // Create success message using the imported successTemplate function
    const message = successTemplate({
        name: adultName,
        participants: participantCount,
        totalFees: totalFeesAmount
    });

    // Hide form and show summary
    document.querySelector('form').style.display = 'none'; // Hide the form
    const summaryElement = document.getElementById('summary'); // Select the summary element
    summaryElement.textContent = message; // Set summary message
    summaryElement.style.display = 'block'; // Show summary
}
