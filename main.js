import { rudiments } from "./forty-essential-rudiments.js";
import { selectRandomRudiments } from "./rudiment-selector-logic.js";

const logData = (data) => console.log(data);
logData(rudiments);

const container = document.getElementById("img-container");
const fragment = document.createDocumentFragment(); // See https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment#usage_notes

rudiments.forEach((rudiment) => {
  /*if (rudiment["id"] === "01" || rudiment["id"] === "02") {*/
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  img.src = rudiment["src"];
  figcaption.textContent = `${rudiment["id"]}. ${rudiment["name"]}`;
  figure.appendChild(img);
  figure.appendChild(figcaption);
  fragment.appendChild(figure);
  /*} else {
    return;
  }*/
});
//console.log(fragment);
container.appendChild(fragment);

const form = document.getElementById("form");
console.log(form);

const onSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = Object.fromEntries(formData); // convert form's data to object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
  console.log(data);

  const numberOfRudiments = Number(data["number-of-rudiments"]);
  console.log(typeof numberOfRudiments);

  const categories = Object.keys(data);
  categories.shift(); // Easiest way to eliminate "number-of-rudiments" from the array of keys in order to isolate just the keys pertaining to the categories selected in the checklist.
  console.log(categories);

  selectRandomRudiments(categories, numberOfRudiments);

  form.reset();
};

form.addEventListener("submit", onSubmit);
