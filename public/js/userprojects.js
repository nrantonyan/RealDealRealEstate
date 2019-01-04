var url = window.location.search;

// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;

function submitProject(project) {
  $.post("/projects/new", project, function() {
    window.location.href = "/projects";
  });
}

function updateProject(project) {
    $.ajax({
      method: "PUT",
      url: "/projects",
      data: project
    })
    .done(function() {
      window.location.href = "/projects";
    });
  };