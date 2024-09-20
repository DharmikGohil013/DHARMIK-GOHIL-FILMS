// Get the elements
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle dropdown menu visibility on click
menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active'); // Toggle 'active' class
});
// Show the notification after 5 seconds
setTimeout(() => {
    const notification = document.getElementById('notification');
    notification.style.display = 'block'; // Show the notification
}, 2000);

// Close the notification when the close button is clicked
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
        const notification = document.getElementById('notification');
        notification.style.display = 'none'; // Hide the notification
    });
});
