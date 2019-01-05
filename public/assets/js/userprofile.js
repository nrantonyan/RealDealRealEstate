var url = window.location.search;


function submitUsers(Users) {
  $.post("/user/new", Users, function() {
    window.location.href = "/user";
  });
}

function updateUser(Users) {
    $.ajax({
      method: "PUT",
      url: "/users",
      data: Users
    })
    .done(function() {
      window.location.href = "/users";
    });
  };