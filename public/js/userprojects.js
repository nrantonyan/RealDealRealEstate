$(document).ready(function() {
    /* global moment */
  
    // blogContainer holds all of our posts
    var projectContainer = $(".project-container");
    var postCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handleProjectDelete);
    $(document).on("click", "button.edit", handlePostEdit);
    // Variable to hold our posts
    var projects;
  
    // The code below handles the case where we want to get blog posts for a specific author
    // Looks for a query param in the url for author_id
    var url = window.location.search;
    var userId;
    if (url.indexOf("?user_id=") !== -1) {
      userId = url.split("=")[1];
      getProjects(userId);
    }
    // If there's no authorId we just get all posts as usual
    else {
      getProjects();
    }
  
  
    // This function grabs posts from the database and updates the view
    function getPosts(user) {
      userId = user || "";
      if (userId) {
        userId = "/?user_id=" + userId;
      }
      $.get("/api/projects" + userId, function(data) {
        console.log("Projects", data);
        projects = data;
        if (!projects || !projects.length) {
          displayEmpty(user);
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function does an API call to delete posts
    function deleteProject(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/projects/" + id
      })
        .then(function() {
          getProjects(postCategorySelect.val());
        });
    }
  
    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
      projectContainer.empty();
      var projectsToAdd = [];
      for (var i = 0; i < projects.length; i++) {
        projectsToAdd.push(createNewRow(projects[i]));
      }
      projectsContainer.append(projectsToAdd);
    }
  
    // This function constructs a post's HTML
    function createNewRow(project) {
      var formattedDate = new Date(project.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      var newProjectCard = $("<div>");
      newProjectCard.addClass("card");
      var newProjectCardHeading = $("<div>");
      newProjectCardHeading.addClass("card-header");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-info");
      var newProjectTitle = $("<h2>");
      var newProjectDate = $("<small>");
      var newProjectUser = $("<h5>");
      newProjectUser.text("Written by: " + project.user.name);
      newProjectUser.css({
        float: "right",
        color: "blue",
        "margin-top":
        "-10px"
      });
      var newProjectCardBody = $("<div>");
      newProjectCardBody.addClass("card-body");
      var newProjectBody = $("<p>");
      newProjectTitle.text(project.projectname + " ");
      newProjectBody.text(project.projectaddress);
      newProjectDate.text(formattedDate);
      newProjectTitle.append(newprojectDate);
      newProjectCardHeading.append(deleteBtn);
      newProjectCardHeading.append(editBtn);
      newProjectCardHeading.append(newprojectTitle);
      newProjectCardHeading.append(newprojectAuthor);
      newProjectCardBody.append(newprojectBody);
      newProjectCard.append(newprojectCardHeading);
      newProjectCard.append(newprojectCardBody);
      newProjectCard.data("Project", project);
      return newProjectCard;
    }
  
    // This function figures out which post we want to delete and then calls deletePost
    function handleProjectDelete() {
      var currentProject = $(this)
        .parent()
        .parent()
        .data("post");
      deleteProject(currentProject.id);
    }
  
    // This function figures out which post we want to edit and takes it to the appropriate url
    function handlePostEdit() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post");
      window.location.href = "/cms?post_id=" + currentPost.id;
    }
  
    // This function displays a message when there are no posts
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for Author #" + id;
      }
      projectContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
      "'>here</a> in order to get started.");
      projectContainer.append(messageH2);
    }
  
  });
  