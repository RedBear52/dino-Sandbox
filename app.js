
// create Constructors for user and dinos
class Human {
  constructor(fact, height_feet, height_inches, user_weight, user_diet) {
    this.fact = fact
    this.heightFkeet = height_feet
    this.heightInches = height_inches
    this.weight = user_weight
    this.diet = user_diet
  }
};

class Creature {
  constructor(species, height, weight, image, diet, fact) {
    this.species = species
    this.height = height
    this.weight = weight
    this.image = image
    this.diet = diet
    this.fact = fact
  }
};

const submitForm = document.getElementById("form")

submitForm.addEventListener('submit', function(event) {
  event.preventDefault()
    buildHuman()
    return makeGrid()
});


/*for testing purposes, a simple array of images for iterating through and posting to the
dynamically generated dinogrid*/
let dinoCatalog = [
  "images/tyrannosaurus rex.png",
  "images/triceratops.png",
  "images/anklyosaurus.png",
  "images/brachiosaurus.png",
  "images/human.png",
  "images/stegosaurus.png",
  "images/elasmosaurus.png",
  "images/pteranodon.png",
  "images/pigeon.png"
]

let dinoArray = [
  triceratops = new Creature("Triceratops", 114, 13000, "images/triceratops.png", "herbivore", "First discovered in 1889 by Othniewl Charles Marsh." ),
  tyrannosaurus = new Creature("Tyrannosaurus Rex", 144, 11905, "images/triceratops.png", "carnivore", "The largest known skull measures in at 5 feet long." ),
  anklyosaurus = new Creature("Anklyosaurus", 55, 10500, "images/anklyosaurus.png", "herbavore", "Anklyosaurus survived for approximately 135 million years." ),
  brachiosaurus = new Creature("Brachiosaurus", 372, 70000, "images/brachiosaurus.png", "herbavore", "An asteroid was named 9954 Brachiosaurus in 1991." ),
  stegosaurus = new Creature("Stegosaurus", 79, 11600, "images/stegosaurus.png", "herbivore", "The Stegosaurus had between 17 and 22 seperate plates and flat spines." ),
  elasmosaurus = new Creature("Elasmosaurus", 59, 16000, "images/elasmosaurus.png", "carnivore", "Elasmosaurus was a marine reptile first discovered in Kansas." ),
  pteranodon = new Creature("Pteranodon", 20, 40, "images/pteranodon.png", "carnivore", "Actually a flying reptile, the Pteranodon is not a dinosaur." ),
  pigeon = new Creature("Pigeon", 9, 0.5, "images/pigeon.png", "herbavore", "All birds are living dinosaurs." ),
]

function insertHuman() {
  console.log("someday I'm a gonna figure this shit out")
}

//a function to dynamically generate a 3x3 grid AND remove form upon submission
function makeGrid() {
  let formDiv = document.getElementById("form_container")
  formDiv.outerHTML=""
  let dinoGrid = document.getElementById('grid')
  let index = 0
  for (var r = 0; r < 3; r++) {
    let newRow = document.createElement('tr')
    dinoGrid.appendChild(newRow)
    for (var c = 0; c < 3; c++) {
      let newCell = document.createElement('td')
      // let randomNumber = Math.floor(Math.random() * 8)
      let newFrame = newRow.appendChild(newCell)
      let newPic = document.createElement('img')
      newPic.src = dinoCatalog[index]
      newFrame.appendChild(newPic)
      newCell.innerHTML+= "<br>" + dinoArray[index].weight
      index += 1
      if (index === 4) {
        newCell.innerHTML+= "<p>Help!</p>"
      }
    }
  }
};

// find form element by id and store it in a variable (submitform)
// add event listener ... target=submitForm  type='submit'    event=anonymous function
// prevent rendered images from immediately disappearing w preventDefault method
//

// function buildHuman (object) {
//   const humanName = submitForm.user_name.value
//   const humanHeightFeet = submitForm.height_feet.value
//   const humanHeightInches = submitForm.height_inches.value
//   const humanWeight = submitForm.user_weight.value
//   const humanDiet = submitForm.user_diet.value
// }
