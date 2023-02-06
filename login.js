const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	});
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

$(document).ready(function(){
	const APIKEY = "63e1075d3bc6b255ed0c46fe";
	$("#Button-SignUp").click(function(){
		let signUpName = $("#nameSignUp").val();
		let signUpEmail = $("#emailSignUp").val();
		let signUpPassword = $("#passwordSignUp").val();

		let jsondata = {
			"name": signUpName,
			"email": signUpEmail,
			"password": signUpPassword,
		};
		console.log(jsondata)

		let settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://assignment2-2816.restdb.io/rest/contact",
			"method": "POST", 
			"headers": {
				"content-type": "application/json",
				"x-apikey": APIKEY,
				"cache-control": "no-cache"
			},
		"processData": false,
		"data": JSON.stringify(jsondata),
		}

		$.ajax(settings).done(function (response) {
			console.log(response);
		});
	});
  });

  
  var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://assignment2-2816.restdb.io/rest/contact",
	"method": "GET",
	"headers": {
	  "content-type": "application/json",
	  "x-apikey": "63e1075d3bc6b255ed0c46fe",
	  "cache-control": "no-cache"
	}
  }



  $(document).ready(function() {
	$("ButtonSignIn").click(function() {
	var email = $("input[name='email']").val();
	var password = $("input[name='password']").val();
  $.ajax(settings).done(function (response) {
	var found = false;
	for (var i = 0; i < response.length; i++) {
	  if (JSON.stringify(response[i].email) == JSON.stringify(email) && JSON.stringify(response[i].password)== JSON.stringify(password)) {
		found = true;
		break;
	  }
	}
	if (found) {
	  alert("Welcome back!");
	  window.location.href = "index.html";
	} else {
	  alert("Wrong username or password!");
	}
  });
  });
  });