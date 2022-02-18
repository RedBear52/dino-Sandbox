
// Class/Constructor for BOTH user and dinos
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

// array of dino object literals, manually curted and imported from .json file
const creatureArray = [
  triceratops = new Creature("triceratops", 114, 13000, "images/triceratops.png", "herbivore", "First discovered in 1889 by Othniel Charles Marsh", ""),
  tyrannosaurus = new Creature("tyrannosaurus", 144, 11905, "images/tyrannosaurus rex.png", "carnivore", "The largest known skull measures in at 5 feet long.", ""),
  anklyosaurus = new Creature("anklyosaurus", 55, 10500, "images/anklyosaurus.png", "herbavore", "Anklyosaurus survived for approximately 135 million years.", ""),
  brachiosaurus = new Creature("brachiosaurus", 372, 70000, "images/brachiosaurus.png", "herbavore", "An asteroid was named 9954 Brachiosaurus in 1991.", "" ),
  stegosaurus = new Creature("stegosaurus", 79, 11600, "images/stegosaurus.png", "herbivore", "The Stegosaurus had between 17 and 22 seperate places and flat spines.", "" ),
  elasmosaurus = new Creature("elasmosaurus", 59, 16000, "images/elasmosaurus.png", "carnivore", "Elasmosaurus was a marine reptile first discovered in Kansas.", ""),
  pteranodon = new Creature("pteranodon", 20, 40, "images/pteranodon.png", "carnivore", "Actually a flying reptile, the Pteranodon is not a dinosaur.", ""),
]

// grabs the 'form' element and stores it in the 'form' variable
const form = document.getElementById('form')
//eventListener added to 'compare me' (form submit) btn
/* eventListener sets off initial functions: 
      prevent rendered elements from immediately being cleared off screen
      invoke buildHuman function
      invoke buildPigeon function
      invoke clearForm function to remove form upon submission
*/
form.addEventListener('submit', function (event) {
  event.preventDefault()
  buildHuman()
  buildPigeon()
  clearForm()
// TODO need to validate input or, at very least, require input in all fields 
});

//instantiates Human object from user input
//then calls the random comparison function
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
  randComp(userData) 
}; 

//invokes one of three comparison functions randomly by way of a switch statement
function randComp(humanSpecs) {
  const randomNumber = parseFloat(Math.floor(Math.random() * 4))
  switch (randomNumber) {
    case 0: 
      compareDiet(humanSpecs);
      break;
    case 1: 
      compareWeight(humanSpecs);
      break;
    case 2: 
      compareHeight(humanSpecs);
      break;
    case 3:
      populateFacts(humanSpecs)
  }
}

// instantiate separate pigeon object
// pushes pigeon to the end of creatureArray
/*NOTE: seems better to keep pigeon static at the end of the grid + I thought I remembered that 
being a part of the assignment (although I can no longer locate that instruction?!)*/
function buildPigeon() {
  const pigeon = new Creature("pigeon", 9, 0.5, "images/pigeon.png", "herbavore", "All birds are living dinosaurs.", "")
  return creatureArray.push(pigeon)
}

//clear form upon submission
function clearForm() {
  document.getElementById('form_container').outerHTML=''
};

//Shuffle array using sort method
//in this case, seems a cleaner approach than the Fisher-Yates modern shuffle algorithm 
function shuffleCreatures () {
  creatureArray.sort((a,b) => 0.5 - Math.random())
}


//defines a function to dynamically generate a 3x3 grid and populate it with facts
//shuffles creatureArray 
//splices human into center of grid
// builds a pigeon (have not yet figured out how to separate pigeon build from grid generators while still being able to reference its properties)
//dynamically generated grid (table, rows, and cells)
// dynamically populate the grid
function populateFacts(humanSpecs) {
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
        if (index === 4) {
          newCell.innerHTML+= `<h3>${creatureArray[index].name}</h3> `
          newFrame.appendChild(newPic)
          newCell.innerHTML+= "<br>" + `${humanSpecs.fact}`
          index +=1
        } else {
          newCell.innerHTML+= `<h3>${creatureArray[index].species}</h3> `
          newFrame.appendChild(newPic)
          newCell.innerHTML+= "<br>" + creatureArray[index].fact
          index += 1          
      }
    }
  }
};

//defines function (like fact populator above) 
//this one compares height and inches and serves up comparisons to the user
function compareHeight(humanSpecs) {
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
      if (index === 4) {
        newCell.innerHTML+= `<h3>${creatureArray[index].name}</h3> `
        newFrame.appendChild(newPic)
        newCell.innerHTML+= "<br>" + creatureArray[index].fact
        index +=1
      } else {
        newCell.innerHTML+= `<h3>${creatureArray[index].species}</h3> `
        newFrame.appendChild(newPic)
          if (humanSpecs.height === creatureArray[index].height) {
            newCell.innerHTML+= "<br>" + "What are the chances?!" + "<br>" + `Both you and ${creatureArray[index].species} are exactly ${humanSpecs.height} inches tall`
            index += 1
          } else if (humanSpecs.height > creatureArray[index].height) {
            newCell.innerHTML+= 
            "<br>" + `You are ${humanSpecs.height - creatureArray[index].height} inches taller than ${creatureArray[index].species}`
            index +=1
          } else if (humanSpecs.height < creatureArray[index].height) {
            newCell.innerHTML+= 
            "<br>" + `A ${creatureArray[index].species} measures ${creatureArray[index].height - humanSpecs.height} inches taller than you`
            index += 1           
        }
      }
    }
  }
};

//defines function (like fact populator above) 
//this one compares diet preferences and serves up comparisons to the user
function compareDiet(humanSpecs) {
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
        if (index === 4) {
          newCell.innerHTML+= `<h3>${creatureArray[index].name}</h3> `
          newFrame.appendChild(newPic)
          newCell.innerHTML+= "<br>" + creatureArray[index].fact
          index +=1
        } else {
          newCell.innerHTML+= `<h3>${creatureArray[index].species}</h3> `
          newFrame.appendChild(newPic)
            if (humanSpecs.diet.toLowerCase() === creatureArray[index].diet) {
              newCell.innerHTML+= "<br>" + `You and ${creatureArray[index].species} share the same eating style as both of you are ${humanSpecs.diet}s`
              index +=1
            } else {
              newCell.innerHTML+= "<br>" + `Contrary to your ${humanSpecs.diet}'s diet, ${creatureArray[index].species} is all about that ${creatureArray[index].diet} life`
              index += 1           
            }
      }
    }
  }
};

//defines function (like fact populator above) 
//this one compares weight and shares comparison with the user
function compareWeight(humanSpecs) {
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
      if (index === 4) {
        newCell.innerHTML+= `<h3>${creatureArray[index].name}</h3> `
        newFrame.appendChild(newPic)
        newCell.innerHTML+= "<br>" + creatureArray[index].fact
        index +=1
      } else {
        newCell.innerHTML+= "<br>" + `<h3>${creatureArray[index].species}</h3> `
        newFrame.appendChild(newPic)
        newCell.innerHTML += "<br>" + `${creatureArray[index].species} weighs in at ${creatureArray[index].weight} pounds compared to you at ${humanSpecs.weight}`
        index += 1          
    }
  }
}
};  
      










