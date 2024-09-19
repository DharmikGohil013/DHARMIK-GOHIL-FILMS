// Get the elements
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle dropdown menu visibility on click
menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active'); // Toggle 'active' class
});
