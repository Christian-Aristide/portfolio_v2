
document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.querySelector('.menu');
  const nav = document.getElementById('nav');
  const closeBtn = document.getElementById('close');
  
  const navLinks = document.querySelectorAll('.nav a'); // Sélectionnez tous les liens de la navigation

  burgerIcon.addEventListener('click', function () {
    nav.classList.toggle('active');
  });

  closeBtn.addEventListener('click', function () {
    nav.classList.remove('active');
  });

  // Ajoutez un écouteur d'événements à chaque lien de la navigation
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('active');
    });
  });
});






document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.fade-in');

  function checkVisibility() {
    sections.forEach(function (section) {
      const bounding = section.getBoundingClientRect();

      // Vérifiez si la section est partiellement visible
      if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  } 

  // Ajoutez un écouteur d'événements pour vérifier la visibilité au chargement de la page et lors du défilement
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('DOMContentLoaded', checkVisibility);
});









// PROJET SECTION 
const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");

const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();

