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

//Currently showing via console
//NEXT STEP: will need to render via DOM!!
function showMeHuman (humanSpecs) {
  
  let renderedUserData = `<div class="grid-container" id="grid-table">
    <h2>${humanSpecs.name}</h2>
    <p>${humanSpecs.heightFeet}</p>
    <p>${humanSpecs.heightInches}</p>
    <p>${humanSpecs.weight}</p>
    <p>${humanSpecs.diet}</p>
  </div>`
  
  const container=document.getElementById("grid");
      container.innerHTML=renderedUserData;

  // {/* humanSpecs.weight  
      // humanSpecs.heightFeet  
      // humanSpecs.heightInches  
      // humanSpecs.diet  */}
      // <img src="images/human.png">

  // let nameEle = document.createElement("p")
  // let heightEle = document.createElement("p").innerHTML+=humanSpecs.heightFeet
  // let heightInchesEle = document.createElement("p").innerHTML+=humanSpecs.heightInches
  // let weightEle = document.createElement("p").innerHTML+=humanSpecs.weight
  // let dietEle = document.createElement("p").innerHTML+=humanSpecs.diet
  // let imageEle = document.createElement("p").innerHTML+=humanSpecs.diet

  // nameEle.innerHTML="humanSpecs.name"
  // // nameEle.appendChild(nameNode)
  // heightEle
  // heightInchesEle
  // weightEle
  // dietEle
  // imageEle

};







