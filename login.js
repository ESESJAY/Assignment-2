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
