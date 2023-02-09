const countryArray = [
    { name: "Argentina", image: "Images/Argentina.jpg" },
    { name: "Australia", image: "Images/Australia.jpg" },
    { name: "Brazil", image: "Images/Brazil.jpg"},
    { name: "Canada", image: "Images/Canada.jpg" },
    { name: "China", image: "Images/China.jpg"},
    { name: "France", image: "Images/France.jpg"},
    { name: "Germany", image: "Images/Germany.jpg" },
    { name: "India", image: "Images/India.jpg"},
    { name: "Italy", image: "Images/Italy.jpg"},
    { name: "Japan", image: "Images/Japan.jpeg"},
    { name: "Mexico", image: "Images/Mexico.webp"},
    { name: "Russia", image: "Images/Russia.jpg" },
    { name: "Spain", image: "Images/Spain.jpg" },
    { name: "Sweden", image: "Images/Sweden.jpg" },
    { name: "Switzerland", image: "Images/Switzerland.jpg" },
    { name: "United Kingdom", image: "Images/UK.jpg" },
    { name: "America", image: "Images/America.jpg" },
    { name: "Vietnam", image: "Images/Vietnam.webp"},
    { name: "South Africa", image: "Images/South-Africa.webp" }
  ];
  
  let randomCountry = countryArray[Math.floor(Math.random() * countryArray.length)];
  let countryName = randomCountry.name;
  let countryImage = randomCountry.image;
  
  document.getElementById("countryImage").src = countryImage;
  
  let score = 0;
  
  document.getElementById("submitBtn").addEventListener("click", function() {
  let userGuess = document.getElementById("userGuess").value;
  if (userGuess === countryName) {
  score += 100;
  result.innerHTML = "Correct!!!" + "  Score: " + score;
  winchecker();
  } else {
    result.innerHTML = "Wrong!" + "   Score: " + score;
    winchecker();

  }
  randomCountry = countryArray[Math.floor(Math.random() * countryArray.length)];
  countryName = randomCountry.name;
  countryImage = randomCountry.image;
  document.getElementById("countryImage").src = countryImage;
  });

  function winchecker()
  {
  if (score == 1500)
  {
    alert("You have reached 1500 points!! You have won the game!! Click on okay button to restart!")
    window.location.href = "Prolocation.html";
  }
}