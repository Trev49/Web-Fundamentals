const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

// Function to toggle the menu visibility
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Open modal
function viewerTemplate(src, alt) {
    const modal = document.getElementById("Modal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption"); // If I use this later on.

    modal.style.display = "block"; // Show the modal
    modalImage.src = src.replace("sm", "full"); // Adjust to load the larger image
    caption.innerHTML = alt; // Set the caption
}

// Close modal
function closeModal() {
    const modal = document.getElementById("Modal");
    modal.style.display = "none"; 
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById("Modal");
    if (event.target === modal) {
        closeModal();
    }
}

// Function to handle window resize
function handleResize() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 1000) {
        navLinks.classList.remove('hide'); // Remove 'hide' class for larger screens
    } else {
        navLinks.classList.add('hide'); // Add 'hide' class for smaller screens
    }
}

// Add event listener for window resize
window.addEventListener('resize', handleResize);

// Call handleResize on page load
handleResize();
