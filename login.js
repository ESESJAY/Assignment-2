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
	  $.ajax({
		type: 'POST',
		url: "https://assignment2-2816.restdb.io/rest/contact",
		headers: {
		  'Content-Type': 'application/json',
		  'x-apikey': '63e1075d3bc6b255ed0c46fe'
		},
		data: JSON.stringify({
		  name: $("input[name='name']").val(),
		  email: $("input[name='email']").val(),
		  password: $("input[name='password']").val()
		}),
		success: function(data) {
		  console.log(data);
		}
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
	$("button").click(function() {
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