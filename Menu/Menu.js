
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.forEach(element => {
  element.addEventListener('click', toggleMenu)
})
