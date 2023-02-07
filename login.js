const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	});
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

<<<<<<< HEAD

$(document).ready(function(){
	$("button").click(function(){
	  var name = $("input[name='name']").val();
	  var email = $("input[name='email']").val();
	  var password = $("input[name='password']").val();
	  
	  var data = {
		"name": name,
		"email": email,
		"password": password
	  };
	  
	  var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://assignment2-a9b2.restdb.io/rest/contact",
		"method": "POST",
		"headers": {
		  "content-type": "application/json",
		  "x-apikey": "63e1cd3d3bc6b255ed0c473d",
		  "cache-control": "no-cache"
		},
		"processData": false,
		"data": JSON.stringify(data)
	  }
	  
	  $.ajax(settings).done(function (response) {
		alert("Data has been posted to the database");
	  });
	});
  });
=======
$(document).ready(function() {
	const APIKEY = "63e1500c3bc6b255ed0c471e";
	$("#Button-SignUp").on("click", function () {

	  let name = $("#nameSignUp").val();
	  let email = $("#emailSignUp").val();
	  let password = $("#passwordSignUp").val();

	  let jsondata = {"name": name,"email": email,"password": password};
	  var settings = {
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
		"data": JSON.stringify(jsondata)
	  }
	  
	  console.log(settings.data)
	  $.ajax(settings).done(function (response) {
		console.log(response);
	  });
	});
});

  
//   var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://assignment2-2816.restdb.io/rest/contact",
// 	"method": "GET",
// 	"headers": {
// 	  "content-type": "application/json",
// 	  "x-apikey": "63e1500c3bc6b255ed0c471e",
// 	  "cache-control": "no-cache"
// 	}
//   }



//   $(document).ready(function() {
// 	$("ButtonSignIn").click(function() {
// 	var email = $("input[name='email']").val();
// 	var password = $("input[name='password']").val();
//   $.ajax(settings).done(function (response) {
// 	var found = false;
// 	for (var i = 0; i < response.length; i++) {
// 	  if (JSON.stringify(response[i].email) == JSON.stringify(email) && JSON.stringify(response[i].password)== JSON.stringify(password)) {
// 		found = true;
// 		break;
// 	  }
// 	}
// 	if (found) {
// 	  alert("Welcome back!");
// 	  window.location.href = "index.html";
// 	} else {
// 	  alert("Wrong username or password!");
// 	}
//   });
//   });
//   });
>>>>>>> 58ccabac0d7e93d5bd252ce6cb0e6f052e8b2dd6
