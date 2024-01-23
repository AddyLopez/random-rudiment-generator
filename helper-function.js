export const getRandomIndex = (min, max) => {
  const randomIndex = Math.floor(Math.random() * max);
  if (randomIndex >= min) {
    return randomIndex;
  } else {
    return getRandomIndex(min, max);
  }
};

/* The max and min range here ensures that the index generated applies to its proper category within the entire set of rudiments.*/
