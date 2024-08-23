const containerEl = document.querySelector(".grade");

const careers = ["Développeur Web", "Développeur Mobile", "Freelancer", "Développeur FullStack Créatif"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <p class="title">${careers[careerIndex].slice(0, 1) === "" ? "" : ""} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</p>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}


