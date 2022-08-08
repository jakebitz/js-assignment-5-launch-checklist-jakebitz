// Write your helper functions here!
 require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src=${imageUrl}>`
   
}

function validateInput(testInput) {
      
        if (testInput === "" || testInput == null) {
    
            return "Empty";
        }
        if (isNaN(testInput)) {
              
            return "is not a number";
        }
        if (!isNaN(testInput)) {
            
            return "is a number";
        }
        
}
    
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

const validPilot = validateInput(pilot);
const validCopilot = validateInput(copilot);
const validFuelLevel = validateInput(fuelLevel);
const validCargoLevel = validateInput(cargoLevel);
const results = [validPilot,validCopilot,validFuelLevel,validCargoLevel];
const text = [];
for(let i = 0; i<list.length;i++){
list[i].style.visibility = "visible";
}

for(let i = 0; i<results.length;i++){
    if(results[i] === "Empty"){
        alert("All fields required");
        text.push("hi");
        break;
    }
}
if(text.includes("hi")){
    document.innerHTML = "Shuttle not ready for launch";
    document.style.color = "rgb(199, 37, 78)";
}else{
    document.innerHTML = "Shuttle is ready for launch";
    document.style.color = "rgb(65, 159, 106)";
}
if(validPilot === "is a number" || validPilot === "is a number" ){
    alert("make sure pilot and copilot are valid inputs");
    list[0].innerHTML = `Pilot ${pilot} is not ready for launch`;
    list[1].innerHTML = `Co-pilot ${copilot} is not ready for launch`;
    text.push("hi");
}else if(validPilot === "is not a number" || validPilot === "is not a number" ){
    list[0].innerHTML = `Pilot ${pilot} is ready for launch`;
    list[1].innerHTML = `Co-pilot ${copilot} is ready for launch`;
}if(validFuelLevel === "is not a number" || validCargoLevel === "is not a number" ){
   alert("Make sure your fuel and cargo are valid inputs")
}if(fuelLevel < 10000){
    list[2].innerHTML = `Fuel level to low for launch`
    text.push("hi");
}else{
    list[2].innerHTML = `Fuel level high enough for launch` 
}if(cargoLevel > 10000){
    list[3].innerHTML = `Cargo mass to high for launch`
    text.push("hi");
}else{
    list[3].innerHTML = `Cargo mass low enough for launch`
}



}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    //get random number max planets.length [8]
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
