export const getRandomIndex = (min, max) => {
  const randomIndex = Math.floor(Math.random() * max);
  if (randomIndex >= min) {
    return randomIndex;
  } else {
    return getRandomIndex(min, max);
  }
};
