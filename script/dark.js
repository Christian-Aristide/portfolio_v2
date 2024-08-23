// dark.js

// Fonction pour basculer entre les modes sombre et clair
function toggleDarkMode() {
  var body = document.body;

  // Basculez entre les modes sombre et clair
  body.classList.toggle('dark-mode');
}

// Sélectionnez l'interrupteur par son ID
var toggleSwitch = document.getElementById('toggle-mode');

// Ajoutez un écouteur d'événements pour détecter le changement d'état de l'interrupteur
toggleSwitch.addEventListener('change', toggleDarkMode);




