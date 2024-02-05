const pathPrefix = "./src/images/40_International_Drum_Rudiments/";
const types = [
  "Roll_Rudiments",
  "Diddle_Rudiments",
  "Flam_Rudiments",
  "Drag_Rudiments",
];

const formatURL = (array) => {
  return array.map((element) => {
    return (element.src =
      `${pathPrefix}${element["type"]}` +
      "/rudiment-" +
      `${element["id"]}` +
      ".png");
  });
};

export let rudiments = [
  {
    id: "01",
    name: "Single Stroke Roll",
    type: types[0],
  },
  {
    id: "02",
    name: "Single Stroke Four",
    type: types[0],
  },
  {
    id: "03",
    name: "Single Stroke Seven",
    type: types[0],
  },
  {
    id: "04",
    name: "Multiple Bounce Roll",
    type: types[0],
  },
  {
    id: "05",
    name: "Triple Stroke Roll",
    type: types[0],
  },
  {
    id: "06",
    name: "Double Stroke Open Roll",
    type: types[0],
  },
  {
    id: "07",
    name: "Five Stroke Roll",
    type: types[0],
  },
  {
    id: "08",
    name: "Six Stroke Roll",
    type: types[0],
  },
  {
    id: "09",
    name: "Seven Stroke Roll",
    type: types[0],
  },
  {
    id: "10",
    name: "Nine Stroke Roll",
    type: types[0],
  },
  {
    id: "11",
    name: "Ten Stroke Roll",
    type: types[0],
  },
  {
    id: "12",
    name: "Eleven Stroke Roll",
    type: types[0],
  },
  {
    id: "13",
    name: "Thirteen Stroke Roll",
    type: types[0],
  },
  {
    id: "14",
    name: "Fifteen Stroke Roll",
    type: types[0],
  },
  {
    id: "15",
    name: "Seventeen Stroke Roll",
    type: types[0],
  },
  {
    id: "16",
    name: "Single Paradiddle",
    type: types[1],
  },
  {
    id: "17",
    name: "Double Paradiddle",
    type: types[1],
  },
  {
    id: "18",
    name: "Triple Paradiddle",
    type: types[1],
  },
  {
    id: "19",
    name: "Single Paradiddle-Diddle",
    type: types[1],
  },
  {
    id: "20",
    name: "Flam",
    type: types[2],
  },
  {
    id: "21",
    name: "Flam Accent",
    type: types[2],
  },
  {
    id: "22",
    name: "Flam Tap",
    type: types[2],
  },
  {
    id: "23",
    name: "Flamacue",
    type: types[2],
  },
  {
    id: "24",
    name: "Flam Paradiddle",
    type: types[2],
  },
  {
    id: "25",
    name: "Single Flammed Mill",
    type: types[2],
  },
  {
    id: "26",
    name: "Flam Paradiddle-Diddle",
    type: types[2],
  },
  {
    id: "27",
    name: "Pataflafla",
    type: types[2],
  },
  {
    id: "28",
    name: "Swiss Army Triplet",
    type: types[2],
  },
  {
    id: "29",
    name: "Inverted Flam Tap",
    type: types[2],
  },
  {
    id: "30",
    name: "Flam Drag",
    type: types[2],
  },
  {
    id: "31",
    name: "Drag",
    type: types[3],
  },
  {
    id: "32",
    name: "Single Drag Tap",
    type: types[3],
  },
  {
    id: "33",
    name: "Double Drag Tap",
    type: types[3],
  },
  {
    id: "34",
    name: "Lesson 25",
    type: types[3],
  },
  {
    id: "35",
    name: "Single Dragadiddle",
    type: types[3],
  },
  {
    id: "36",
    name: "Drag Paradiddle #1",
    type: types[3],
  },
  {
    id: "37",
    name: "Drag Paradiddle #2",
    type: types[3],
  },
  {
    id: "38",
    name: "Single Ratamacue",
    type: types[3],
  },
  {
    id: "39",
    name: "Double Ratamacue",
    type: types[3],
  },
  {
    id: "40",
    name: "Triple Ratamacue",
    type: types[3],
  },
];

formatURL(rudiments);
