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
  const indicesSelected = [];

  while (numberOfRudiments) {
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
    numberOfRudiments--;
  }
  console.log(indicesSelected);

  return indicesSelected;
};
