// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
        testInput.preventDefault()
        let pilot = document.getElementById("pilotName");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        // console.log('This is the input element inside your form: ',pilot);
        // inputTerm = validateTermInput.value;
        if (pilot.value.trim() === "") {
            //  console.log("in if statement")
            alert("Please Enter a pilot's name");
            testInput.preventDefault()
            return;
        }
        if (typeof(pilot.value) !== typeof("String")) {
              console.log(pilot.value.typeof)
            alert("Please do not enter numbers for pilot's name ");
            testInput.preventDefault()
            return;
        }
         if (copilot.value.trim() === "") {
            //  console.log("in 2if statement")
            alert("Please Enter a copilot's name");
            testInput.preventDefault()

            return;
        }
        if (typeof(copilot.value) !== typeof("String")) {
            //  console.log("in if statement")
            alert("Please do not enter numbers for copilot's name ");
            testInput.preventDefault()

            return;
        }
        if (fuelLevel.value.trim() === "") {
            // console.log("in if statement")
           alert("Please Enter a fuel level");
           testInput.preventDefault()

           return;
       }
        if (isNaN(fuelLevel.value)) {
            //  console.log("in if statement")
            alert("Please only enter a numerical value for fuel level");
            testInput.preventDefault()

            return;
        }
        if (cargoMass.value.trim() === "") {
            // console.log("in 2if statement")
           alert("Please Enter a cargo Mass");
           testInput.preventDefault()

           return;
        }
        if (isNaN(cargoMass.value)) {
            //  console.log("in if statement")
            alert("Please only enter a numerical value for cargo mass");
            testInput.preventDefault()

            return;
        }

     }
     window.addEventListener("load", function () {
        let form = document.querySelector("form");
        //  console.log('This is your form: ', form);
        form.addEventListener("submit", validateInput);
    });
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

validPilot = validateInput(pilot);
validCopilot = validateInput(copilot);
validFuelLevel = validateInput(fuelLevel);
validCargoLevel = validateInput(cargoLevel);
    

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
