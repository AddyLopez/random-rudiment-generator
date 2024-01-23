import { rudiments } from "./forty-essential-rudiments.js";

const logData = (data) => console.log(data);
logData(rudiments);

const selectRandom = (category) => {
  const rudimentsSelected = [];

  const getRandomIndex = (min, max) => {
    const randomIndex = Math.floor(Math.random() * max);
    if (randomIndex >= min) {
      return randomIndex;
    } else {
      getRandomIndex(min, max);
    }
  };

  /* roll rudiments: indices 0 to 14,
     diddle rudiments: indices 15 to 18,
     flam rudiments: indices 19 to 29,
     drag rudiments: indices 30 to 39 
     max adjusted by +1 to account for the flooring function above */

  switch (category) {
    case "Roll Rudiments":
      const rollIndex = getRandomIndex(0, 15);
      rudimentsSelected.push(rollIndex);
      break;
    case "Diddle Rudiments":
      const diddleIndex = getRandomIndex(15, 19);
      rudimentsSelected.push(diddleIndex);
      break;
    case "Flam Rudiments":
      const flamIndex = getRandomIndex(19, 30);
      rudimentsSelected.push(flamIndex);
    case "Drag Rudiments":
      const dragIndex = getRandomIndex(30, 40);
      rudimentsSelected.push(dragIndex);
      break;
    default:
      console.log("Error: no checkboxes selected.");
  }

  return rudimentsSelected;
};

const container = document.getElementById("img-container");
const fragment = document.createDocumentFragment(); // See https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment#usage_notes

rudiments.forEach((rudiment) => {
  if (rudiment["id"] === "01" || rudiment["id"] === "02") {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    img.src = rudiment["src"];
    figcaption.textContent = `${rudiment["id"]}. ${rudiment["name"]}`;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    fragment.appendChild(figure);
  } else {
    return;
  }
});
//console.log(fragment);
container.appendChild(fragment);

const form = document.getElementById("form");
console.log(form);

const onSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const data = Object.fromEntries(formData); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
  console.log(data);

  const categories = Object.keys(data);
  categories.shift();
  console.log(categories);

  form.reset();
};

form.addEventListener("submit", onSubmit);
