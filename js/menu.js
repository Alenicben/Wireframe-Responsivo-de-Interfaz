'use strict'
// === MENU RESPONSIVO ===

// cambia el icono del menú de la hamburguesa
const changeToggleButtonIcon = () => {
  const menuIcon = document.querySelector('#toggle-menu > i');

  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
};

// activa el menú responsivo
const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu--active');
  changeToggleButtonIcon();
};

// listener botón de toggle del menú
const setToggleMenuListener = () => {
  const toggleButton = document.querySelector('#toggle-menu');
  toggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenu();    
  });
};

// === NAVEGACIÓN ===

// función de desplazamiento suave
const smoothScrollTo = target => {
 const targetPos = document.querySelector(target).getBoundingClientRect();

  window.scrollBy({
    top: targetPos.top,
    left: 0,
    behavior: 'smooth'
  })

 console.log(targetPos.top);
    
}

// listener enlaces scroll suave
const setMenuLinksListener = menuLinks => {
  const links = document.querySelectorAll('.menu__link');
  links.forEach( link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      let scrollTarget = link.getAttribute('href');
      smoothScrollTo(scrollTarget);      
    });   
  });
}