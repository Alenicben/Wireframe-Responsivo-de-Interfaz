'use strict'

// cambie los datos de la cartera en el archivo 'portfolioData.js'

// comprueba si el vínculo no está vacío
// y crea el html con el enlace al elemento de la portfolio
const hasLink = (link, title) => {
  if (link) {
    const icon = (title === 'github') ? 'fa fa-github' : 'fa fa-external-link-square';

    return (`
      <a href="${link}" class="button button--small" title="${title}" target="_blank">
        <i class="${icon}" ></i>
      </a>
    `);
  } else {
    return '';
  }
};

// devuelve html con los elementos del portfolio
const createPortfolio = (portfolioData) => {
  let portfolioHtml = '';

  portfolioData.forEach(item => {
    const {img, title, description, github, link} = item;
    const githubHtml = hasLink(github, 'github');
    const linkHtml = hasLink(link, 'link');

    portfolioHtml += `
      <div class="card">
        <img src="${img}" class="card__img" >          
        <article class="card__info">
          <h3 class="card__info__title">${title}</h3>
          <p class="card__info__desc">${description}</p>
          <div class="card__info__links">
            ${githubHtml}           
            ${linkHtml}           
          </div>         
        </article>
      </div>    
    `;
  });

  return portfolioHtml;
};
