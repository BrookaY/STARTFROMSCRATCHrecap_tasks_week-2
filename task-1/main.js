

function makeLegend (name) {
  return name + " is now a legend";
}
makeLegend("Chris");


let celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];


var legendaryCelebs = []
for (let celeb of celebs) {
  legendaryCelebs.push(makeLegend(celeb));
};


function isFirstLetterVowel(s) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(s[0].toLowerCase()) !== -1
};


var vowelCelebs = []
for (let celeb of celebs) {
  if (isFirstLetterVowel(celeb)) {
    vowelCelebs.push(celeb);
  }
};
