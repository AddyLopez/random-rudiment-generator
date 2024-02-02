import { rudiments } from "./forty-essential-rudiments.js";
import { selectRandomRudiments } from "./rudiment-selector-logic.js";

const logData = (data) => console.log(data);
logData(rudiments);

const container = document.getElementById("img-container");
const fragment = document.createDocumentFragment(); // See https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment#usage_notes

const form = document.getElementById("form");
console.log(form);

const onSubmit = (event) => {
  event.preventDefault();
  // Clear the images when form is submitted again without a page refresh. That way, the newly generated rudiments won't appear after the previously generated list.
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const formData = new FormData(form);

  const data = Object.fromEntries(formData); // convert form's data to object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
  console.log(data);

  const numberOfRudiments = Number(data["number-of-rudiments"]);
  console.log(typeof numberOfRudiments);

  const categories = Object.keys(data);
  categories.shift(); // Easiest way to eliminate "number-of-rudiments" from the array of keys in order to isolate just the keys pertaining to the categories selected in the checklist.
  console.log(categories);

  const finalSelections = selectRandomRudiments(categories, numberOfRudiments);
  console.log(finalSelections);
  if (finalSelections) {
    finalSelections.forEach((finalSelection) => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      img.src = rudiments[finalSelection]["src"];
      figcaption.textContent = `${rudiments[finalSelection]["id"]}. ${rudiments[finalSelection]["name"]}`;
      figure.appendChild(img);
      figure.appendChild(figcaption);
      fragment.appendChild(figure);
    });
    container.appendChild(fragment);
  }
  form.reset();
};

form.addEventListener("submit", onSubmit);
