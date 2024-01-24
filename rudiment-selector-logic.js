/* The max and min range here ensures that the index generated applies to its proper category within the entire set of rudiments.*/
const getRandomIndex = (min, max) => {
  const randomIndex = Math.floor(Math.random() * max);
  // Base case for recursive call below:
  if (randomIndex >= min) {
    return randomIndex;
  } else {
    return getRandomIndex(min, max); // Recursive function call.
  }
};

/* Randomized indices will be generated and returned as an array based on the categories checked in the form when submitted. */
export const selectRandomRudiments = (categories, numberOfRudiments) => {
  let indicesSelected = [];
  let count = numberOfRudiments;

  /* The array indicesSelected will collect numberOfRudiments per each category selected. So if the value of numberOfRudiments is 10 and four categories are selected, then 10 indices per category will be generated; that's 40 total indices. */
  while (count) {
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
          return;
      }
    });
    count--;
  }

  /* When multiple categories are checked, the number of randomized indices collected in indicesSelected will exceed the number of rudiments selected in the form submitted. This larger randomized set ensures that the final set of pared down selections contains no bias toward any given category of rudiments. */
  if (indicesSelected.length > numberOfRudiments) {
    let finalIndicesSelected = [];

    // The loop ensures that the proper number of indices is returned based on numberOfRudiments.
    for (let i = 0; i < numberOfRudiments; i++) {
      const selectIndexFromSet = () => {
        const indexSelected = Math.floor(
          Math.random() * indicesSelected.length
        );
        // This logic ensures that no redundancies--only unique indices--will be added to the array named finalIndicesSelected.
        if (!finalIndicesSelected.includes(indexSelected)) {
          finalIndicesSelected.push(indexSelected);
        } else {
          return selectIndexFromSet();
        }
      };
      selectIndexFromSet();
    }
    indicesSelected = finalIndicesSelected; // This reassignment ensures that the proper number of rudiments selected is being respected.
  }
  console.log(indicesSelected);

  return indicesSelected;
};
