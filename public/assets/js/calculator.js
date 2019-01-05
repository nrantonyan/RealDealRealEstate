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
      projectAddressName: projectAddress.val().trim(),
      projectCity: projectCity.val().trim(),
      projectState: projectState.val().trim(),
      projectZip: projectZip.val().trim(),
    };

    if (!projectDate.projectName || !projectDate.projectAddressName || !projectDate.projectCity || !projectDate.projectState || !projectDate.projectZip) {
      return alert("Please fill in the missing information for " + projectData + " and try again.");
    }

    purchase(projectDate.projectName, projectDate.projectAddressName, projectDate.projectCity, projectDate.projectState, projectDate.projectZip);
    projectName.val("");
    projectAddress.val("");
    projectCity.val("");
    projectState.val("");
    projectZip.val("");

  });

  function purchase(projectName, projectAddress, projectCity, projectState, projectZip) {
    $.post("/calculator/purchase", {
      projectName: projectName,
      projectAddress: projectAddress,
      projectCity: projectCity,
      projectState: projectState,
      projectZip: projectZip,
    }).then(function (data) {
      if (data.duplicateProjectName) {
        alert("You have already created a project with this name.")
      } else {
        window.location = data.redirect;
      }
    }).catch(function (err) {
      console.log(err);
    })
  }

});