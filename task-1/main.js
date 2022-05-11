
let myName = "Chris";
let newString = " is now a legend";


function makeLegend () {
  return myName + newString;
}
makeLegend (myName, newString);

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

for (let n of celebs){
  console.log(n + newString);
};


function legendaryCelebs (celebs, newString){
  return celebs + newString;
}
legendaryCelebs(celebs, newString);

/*///////////////////////////////////////////////*
const legendaryCelebs = celebs.map(newString => {
return celebs + newString;
})
const legendaryCelebs = '<ul>' + display.join('');
console.log(legendaryCelebs);
*/////////////////////////////////////////////////
