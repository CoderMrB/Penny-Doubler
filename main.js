let pennies = 1;

function handleClick() {
  pennies = pennies*2
  document.querySelector("output").textContent = `${pennies} pennies`
}

let additionalTips = [
  "Keep your pennies is a glass jar",
  "Pick up every penny you find on the ground!",
  "Don't let your partner know...",
];

let quote = document.querySelector(".quote")
quote.textContent = "I am very busy and important."

let heading = document.querySelector("h1")
heading.style.textDecoration = "overline"

document.title = "Easy-peasy"

let newParagraph = document.createElement("p")
newParagraph.textContent = "The penny doubler's effing amazing"
document.querySelector("#proof-section").append(newParagraph)