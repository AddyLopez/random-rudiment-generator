import { rudiments } from "./forty-essential-rudiments.js";
import { getRandomIndex } from "./helper-function.js";

const logData = (data) => console.log(data);
logData(rudiments);

const selectRandom = (categories) => {
  const indicesSelected = [];

  categories.forEach((category) => {
    /* category1 (roll rudiments): indices 0 to 14,
       category2 (diddle rudiments): indices 15 to 18,
       category3 (flam rudiments): indices 19 to 29,
       category4 (drag rudiments): indices 30 to 39 
       max adjusted by +1 to account for the flooring function in getRandomIndex helper function */

    switch (category) {
      case "category1":
        const rollIndex = getRandomIndex(0, 15);
        indicesSelected.push(rollIndex);
        break;
      case "category2":
        const diddleIndex = getRandomIndex(15, 19);
        indicesSelected.push(diddleIndex);
        break;
      case "category3":
        const flamIndex = getRandomIndex(19, 30);
        indicesSelected.push(flamIndex);
        break;
      case "category4":
        const dragIndex = getRandomIndex(30, 40);
        indicesSelected.push(dragIndex);
        break;
      default:
        console.log("Error: no checkboxes selected.");
    }
  });
  console.log(indicesSelected);

  return indicesSelected;
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

  selectRandom(categories);

  form.reset();
};

form.addEventListener("submit", onSubmit);
