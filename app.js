// create Constructors for user and dinos
class Human {
  constructor(name, height_feet, height_inches, user_weight, user_diet, image) {
    this.name = name
    this.heightFeet = height_feet
    this.heightInches = height_inches
    this.weight = user_weight
    this.diet = user_diet
    this.image = image
  }
};

const form = document.getElementById('form')
form.addEventListener('submit', function (event) {
  event.preventDefault()
  buildHuman()
  clearForm()
});

function buildHuman () {
  let fullName = document.querySelector("#user_name").value
  let height = document.getElementById("height_feet").value
  let heightInches = document.getElementById("height_inches").value
  let weight = document.getElementById("user_weight").value
  let diet = document.getElementById("user_diet").value
  let image = "images/human.png"
  const userData = new Human(fullName, height, heightInches, weight, diet, image);
  return showMeHuman(userData) 
};

function clearForm() {
  const eraser = document.getElementById('form_container')
  eraser.outerHTML=''
};

//display humanData on the DOM
function showMeHuman (humanSpecs) {
  
  let renderedUserData = 
  `<div class="grid-content"">
    <h3>${humanSpecs.name}</h3>
    <p><img src="${humanSpecs.image}"</p>
    <p>Height: ${humanSpecs.heightFeet} ft ${humanSpecs.heightInches} in</p>
    <p>Weight: ${humanSpecs.weight} lbs</p>
    <p>Diet: ${humanSpecs.diet}</p>
  </div>`
  
  const container=document.getElementById("grid");
      container.innerHTML=renderedUserData;
};







