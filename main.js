import { rudiments } from "./forty-essential-rudiments.js";

const logData = (data) => console.log(data);
logData(rudiments);

const container = document.getElementById("img-container");
const fragment = document.createDocumentFragment();

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
