'use strict'

window.onload = () => {
  // polifyfill "window.scroll"
  polyfill();
  
  // crea un portfolio
  const portfolioContainer = document.querySelector('#portfolio-container');
  portfolioContainer.innerHTML = createPortfolio(portfolioData);

  // listeners
  setMenuLinksListener();
  setToggleMenuListener();
  setFixHeaderOnScrollListener();
};
