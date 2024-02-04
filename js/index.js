let toggleMenu = document.querySelector('.header__menu-toggle');
const menu = document.querySelector('.menu');
let closeMenu = document.querySelector('.close__btn');

menu.style.display = 'none';

function openMenu() {
  if (menu.style.display == 'none') {
    toggleMenu.addEventListener('click', () => {
      menu.style.display = 'flex';
    });
  } else {
    menu.style.display = 'flex';
  }
}

openMenu();

function close() {
  closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
  });
}

close();
