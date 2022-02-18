// create Constructor for user AND dinos
// class Human {
//   constructor(name, height_feet, height_inches, user_weight, user_diet, image) {
//     this.name = name
//     this.heightFeet = height_feet
//     this.heightInches = height_inches
//     this.weight = user_weight
//     this.diet = user_diet
//     this.image = image
//   }
// };

class Creature {
  constructor(species, height, weight, image, diet, fact, name) {
    this.species = species
    this.height = height
    this.weight = weight
    this.image = image
    this.diet = diet
    this.fact = fact
    this.name = name
  }
};

//array of dino objects manually ported to js file (do not yet know fetch/await/async/promises, etc.)
const creatureArray = [
  triceratops = new Creature("triceratops", 114, 13000, "images/triceratops.png", "herbivore", "First discovered in 1889 by Othniel Charles Marsh", ""),
  tyrannosaurus = new Creature("tyrannosaurus", 144, 11905, "images/tyrannosaurus rex.png", "carnivore", "The largest known skull measures in at 5 feet long.", ""),
  anklyosaurus = new Creature("anklyosaurus", 55, 10500, "images/anklyosaurus.png", "herbavore", "Anklyosaurus survived for approximately 135 million years.", ""),
  brachiosaurus = new Creature("brachiosaurus", 372, 70000, "images/brachiosaurus.png", "herbavore", "An asteroid was named 9954 Brachiosaurus in 1991.", "" ),
  stegosaurus = new Creature("stegosaurus", 79, 11600, "images/stegosaurus.png", "herbivore", "The Stegosaurus had between 17 and 22 seperate places and flat spines.", "" ),
  elasmosaurus = new Creature("elasmosaurus", 59, 16000, "images/elasmosaurus.png", "carnivore", "Elasmosaurus was a marine reptile first discovered in Kansas.", ""),
  pteranodon = new Creature("pteranodon", 20, 40, "images/pteranodon.png", "carnivore", "Actually a flying reptile, the Pteranodon is not a dinosaur.", ""),
  // pigeon = new Creature("pigeon", 9, 0.5, "images/pigeon.png", "herbavore", "All birds are living dinosaurs.", "")
]

// add event listener to 'compare me' btn
// listener sets off a chain of functions 
const form = document.getElementById('form')
form.addEventListener('submit', function (event) {
  event.preventDefault()
  buildHuman()
  buildPigeon()
  clearForm()
});

//instantiate Human object from user input
function buildHuman () {
  let name = document.querySelector("#user_name").value
  let heightFeet = parseFloat(document.getElementById("height_feet").value)
  let heightInches = parseFloat(document.getElementById("height_inches").value)
  let height = heightFeet * 12 + heightInches
  let weight = document.getElementById("user_weight").value
  let diet = document.getElementById("user_diet").value
  let image = "images/human.png"
  let species = "human"
  let fact = ""
  const userData = new Creature(species, height, weight, image, diet, fact, name);
  // creatureArray.push(userData)
  // showMeHuman(userData)
  return populateGrid(userData)
};

function buildPigeon() {
  const pigeon = new Creature("pigeon", 9, 0.5, "images/pigeon.png", "herbavore", "All birds are living dinosaurs.", "")
  return creatureArray.push(pigeon)
}

// let user = creatureArray[9]

//clear form upon submission
function clearForm() {
  const eraser = document.getElementById('form_container')
  eraser.outerHTML=''
};

function shuffleCreatures () {
  creatureArray.sort((a,b) => 0.5 - Math.random())
}


//display userData to the DOM via the table ('grid') ele
//applying template literals to streamline process and make code more readable
// function showMeHuman (humanSpecs) {
//   let renderedUserData = 
//   `<div class="grid-content"">
//     <h3>${humanSpecs.name}</h3>
//     <p><img src="${humanSpecs.image}"</p>
//     <p>Height: ${parseFloat(humanSpecs.height)} inches</p>
//     <p>Weight: ${humanSpecs.weight} lbs</p>
//     <p>Diet: ${humanSpecs.diet}</p>
//   </div>`
  
//   const container=document.getElementById("grid");
//       container.innerHTML=renderedUserData;
// };

//a function to dynamically generate a 3x3 grid dispalying user and dino data
function populateGrid(humanSpecs) {
  shuffleCreatures()
  creatureArray.splice(4, 0, humanSpecs)
  buildPigeon()
  
  let infoGraphic = document.getElementById('grid')
  let index = 0
  for (let r = 0; r < 3; r++) {
  let newRow = document.createElement('tr')
  infoGraphic.appendChild(newRow)
    for (let c = 0; c < 3; c++) {
      let newCell = document.createElement('td')
      let newFrame = newRow.appendChild(newCell)
      let newPic = document.createElement('img')
      newPic.src = creatureArray[index].image
      newCell.innerHTML+= `<h3>${creatureArray[index].species}</h3> `
      newFrame.appendChild(newPic)
      newCell.innerHTML+= "<br>" + creatureArray[index].fact
      index += 1
    }
  }
};



// function shuffleCreatures() {
//   let arr = shuffledArray
//   let index = arr.length, j, temp;
//   while(--index > 0) {
//     j = Math.floor(Math.random() * (i+1))
//   } 
//   console.log(arr)
// }






