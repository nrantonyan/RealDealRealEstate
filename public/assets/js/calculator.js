import { createProject } from "../../../controllers/calculator_controller";

$(document).ready(function () {

  // setting varibles for the purchases
  var nextBtn = $("#next");
  var projectName = $("#projectName");
  var projectAddress = $("#projectAddressName");
  var projectCity = $("#projectCity");
  var projectState = $("#projectState");
  var projectZip = $("#projectZip");

  nextBtn.on("click", function (event) {
    event.preventDefault();
    var projectData = {
      projectName: projectName.val().trim(),
      projectAddress: projectAddress.val().trim(),
      projectCity: projectCity.val().trim(),
      projectState: projectState.val().trim(),
      projectZip: projectZip.val().trim(),
    };

    if (!projectDate.projectName || !projectDate.projectAddress || !projectDate.projectCity || !projectDate.projectState || !projectDate.projectZip) {
      return alert("Please fill in the missing information for " + projectData + " and try again.");
    }

    createProject(projectDate.projectName, projectDate.projectAddress, projectDate.projectCity, projectDate.projectState, projectDate.projectZip);
    projectName.val("");
    projectAddress.val("");
    projectCity.val("");
    projectState.val("");
    projectZip.val("");

  });

  function createProject(projectName, projectAddress, projectCity, projectState, projectZip) {
    $.post("/project/info", {
      projectName: projectName,
      projectAddress: projectAddress,
      projectCity: projectCity,
      projectState: projectState,
      projectZip: projectZip,
    }).then(function (data) {
      if (data.duplicateProjectName) {
        alert("You have already created a project with this name.")
      } else {
        res.render('calculator/purchase')
      }
    }).catch(function (err) {
      console.log(err);
    })
  }

});