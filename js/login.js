const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	});
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

    // Handle sign up form submit
    $("#Button-SignUp").click(function(event) {
      event.preventDefault();
      let name = $("#nameSignUp").val();
      let email = $("#emailSignUp").val();
      let password = $("#passwordSignUp").val();

      // Make API call to sign up user
      $.ajax({
        type: "POST",
        url: "https://assignment2-a9b2.restdb.io/rest/contact",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": "63e1cd3d3bc6b255ed0c473d"
        },
        data: JSON.stringify({
          name: name,
          email: email,
          password: password
        }),
        success: function(response) {
          alert("User signed up successfully!");
        },
        error: function(error) {
          console.log(error);
        }
      });
    });

    // Handle sign in form submit
    $("#ButtonSignIn").click(function(event) {
      event.preventDefault();
      let email = $("#emailSignIn").val();
      let password = $("#passwordSignIn").val();

      // Make API call to sign in user
      $.ajax({
        type: "GET",
        url:
          "https://assignment2-a9b2.restdb.io/rest/contact",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": "63e1cd3d3bc6b255ed0c473d"
        },
        success: function(data) {
          let user = data.find(
            user => user.email == email && user.password == password
          );
          if (user) {
            alert("Welcome back!!! " + user.name);
			window.location.href = "/html_logout/index1.html";
          } else {
            alert("Invalid email or password");
          }
        },
        error: function(error) {
          console.log(error);
        }
      });
    });

    
 