const btnEnSavoirPlus = document.querySelector('.en-savoir-plus');

function animLivreVolant() {
  const livre = document.createElement('div');
  livre.classList.add('livre');
  document.body.appendChild(livre);

  anime({
    targets: livre,
    translateX: [-400, 0],
    translateY: [-400, 0],
    scale: [0, 1],
    rotate: [180, 0],
    duration: 2000,
    easing: 'easeOutElastic'
  }).finished.then(() => {
    livre.classList.add('livre-bouton');
    livre.innerHTML = "Portefolio Claudia Ceccaldi";
    livre.addEventListener('click', () => {
      window.open('https://votre-portefolio.com', '_blank');
    });
  });
}

btnEnSavoirPlus.addEventListener('click', animLivreVolant);
