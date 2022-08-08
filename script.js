// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    const formSubmit = this.document.getElementById("formSubmit");
    formSubmit.addEventListener("click", function (event) {
      event.preventDefault();

      const pilot = document.getElementById("pilotName").value;
      const copilot = document.querySelector("input[name=copilotName]").value;
      const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      const cargoMass = document.querySelector("input[name=cargoMass]").value;
      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus = document.getElementById("copilotStatus");
      const fuelStatus = document.getElementById("fuelStatus");
      const cargoStatus = document.getElementById("cargoStatus");
      const launchStatus = document.getElementById("launchStatus")
      const list = [pilotStatus,copilotStatus,fuelStatus,cargoStatus];
    //   const missionTarget = document.getElementById("missionTarget");
    //   console.log(pilot,copilot,fuelLevel,cargoMass);
      formSubmission(launchStatus,list,pilot,copilot,fuelLevel,cargoMass)
    });
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
//   console.log(listedPlanetsResponse)
   listedPlanetsResponse.then(function (listedPlanetsResponse) {
    
       listedPlanets = listedPlanetsResponse;
//      console.log(listedPlanets);
   }).then(function () {
//       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let red = pickPlanet(listedPlanets);
//    console.log(red);
    const missionTarget = this.document.getElementById("missionTarget");
    addDestinationInfo(missionTarget, red.name, red.diameter, red.star, red.distance, red.moons, red.image);
    console.log(red.image);
    


  
    })
   



});
