import { rudiments } from "./forty-essential-rudiments.js";
import { selectRandomRudiments } from "./rudiment-selector-logic.js";

const container = document.getElementById("img-container");
const form = document.getElementById("form");
const fragment = document.createDocumentFragment(); // See https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment#usage_notes

const onSubmit = (event) => {
  event.preventDefault();

  // Clear the images when form is submitted again without a page refresh. That way, the newly generated rudiments won't appear after the previously generated list.
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const formData = new FormData(form); // Extract the submitted form's data.
  const data = Object.fromEntries(formData); // Convert form's data to an object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
  const numberOfRudiments = Number(data["number-of-rudiments"]); // Convert string to number to enable numerical operations and prevent type-errors.

  const categories = Object.keys(data); // Step one to isolate in an array the categories checked by the user.
  categories.shift(); // Step two: Easy way to eliminate "number-of-rudiments" from the array of keys in order to isolate just the keys pertaining to the categories selected in the checklist.

  // Prevent program from running needlessly if no category is checked. Effectively sidesteps hairy implementation of a "required" attribute on checkboxes.
  if (categories.length > 0) {
    const finalSelections = selectRandomRudiments(
      categories,
      numberOfRudiments
    );

    // DOM manipulation if the randomized generation is successful.
    if (finalSelections) {
      finalSelections.forEach((finalSelection) => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        img.src = rudiments[finalSelection]["src"];
        img.alt = rudiments[finalSelection]["name"];
        figcaption.textContent = `${rudiments[finalSelection]["id"]}. ${rudiments[finalSelection]["name"]}`;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        fragment.appendChild(figure);
      });
      container.appendChild(fragment);
    }
  } else {
    alert("Please check at least one category.");
  }
  form.reset();
};

form.addEventListener("submit", onSubmit);
