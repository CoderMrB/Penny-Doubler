let pennies = 1;

let pageTitles =[
  "Umbongo",
  "Vimto",
  "Nutella",
  "Coventry City",
]

function changeTitle(newTitle){
  document.title = newTitle
}

let i = 0

function handleClick() {
  pennies = pennies*2
  document.querySelector("output").textContent = `${pennies} pennies`
  if (i === 3){
    i = 0
  }else{
    i++
  }
  changeTitle(pageTitles[i])
}

let additionalTips = [
  "Keep your pennies is a glass jar",
  "Pick up every penny you find on the ground!",
  "Don't let your partner know...",
];

for(i=0;i<additionalTips.length;i++){
  let newItem =document.createElement("li")
  newItem.textContent=(additionalTips[i])
  document.querySelector("ul").appendChild(newItem)
}

let lastItem = document.querySelector("ul").lastElementChild
document.querySelector("ul").removeChild(lastItem)

let quote = document.querySelector(".quote")
quote.textContent = "I am very busy and important."

let heading = document.querySelector("h1")
heading.style.textDecoration = "overline"





let newParagraph = document.createElement("p")
newParagraph.textContent = "The penny doubler's effing amazing"
document.querySelector("#proof-section").append(newParagraph)