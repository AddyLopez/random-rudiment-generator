import { rudiments } from "./forty-essential-rudiments.js";

const logData = (data) => console.log(data);
logData(rudiments);

const selectRandom = (category) => {
  const getRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    if (randomNumber > min) {
      return randomNumber.toString();
    } else {
      getRandomNumber(min, max);
    }
  };

  switch (category) {
    case "Roll Rudiments":
      return getRandomNumber(0, 15);
    case "Diddle Rudiments":
      return getRandomNumber(15, 19);
    case "Flam Rudiments":
      return getRandomNumber(19, 30);
    case "Drag Rudiments":
      return getRandomNumber(30, 40);
    default:
      return;
  }
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

  form.reset();
};

form.addEventListener("submit", onSubmit);
