'use strict'

const fixHeader = () => {
  const header = document.querySelector('.header-bg');
  header.classList.add('header-bg--fixed');
};

const unfixHeader = () => {
  const menu = document.querySelector('.menu');

  // esconde el encabezado si el menú no está activo
  if (!menu.classList.contains('menu--active')) {
    const header = document.querySelector('.header-bg');
    header.classList.remove('header-bg--fixed');
  }
};

// listener del scroll
const setFixHeaderOnScrollListener = () => {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const actualScroll = window.pageYOffset;

    // fija el menú cuando el usuario sube la página
    if (actualScroll < lastScroll && actualScroll > 250) {
      fixHeader();
    } else {
      unfixHeader();
    }
    lastScroll = actualScroll;
  });
};
