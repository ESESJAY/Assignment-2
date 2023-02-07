// variables to store the product details
var proameTshirtYellow = {
    name: 'Proame T-shirt',
    color: 'Yellow',
    price: 35
  };
  
  var proameTshirtGrey = {
    name: 'Proame T-shirt',
    color: 'Grey',
    price: 35
  };
  
  var proameHoodieWhite = {
    name: 'Proame Hoodie',
    color: 'White',
    price: 60
  };
  
  var proameHoodiePink = {
    name: 'Proame Hoodie',
    color: 'Pink',
    price: 60
  };
  
  var proameDadCapBlack = {
    name: 'Proame Dad Cap',
    color: 'Black',
    price: 29
  };
  
  var proameDadCapLightBlue = {
    name: 'Proame Dad Cap',
    color: 'Light Blue',
    price: 29
  };
  
  var proameTotebagBeige = {
    name: 'Proame Totebag',
    color: 'Beige',
    price: 25
  };

  var proameTotebagBlack = {
    name: 'Proame Totebag',
    color: 'Black',
    price: 25
  };
  
  var shoppingCart = [];
  
  // function to add product to the shopping cart
  function addToCart(product) {
    shoppingCart.push(product);
    console.log(product.name + ' in ' + product.color + ' has been added to the cart.');
    console.log('Total items in the cart: ' + shoppingCart.length);
    console.log('Total cost of the items in the cart: $' + calculateTotalCost());
  }
  
  // function to calculate the total cost of items in the cart
  function calculateTotalCost() {
    var totalCost = 0;
    for (var i = 0; i < shoppingCart.length; i++) {
      totalCost += shoppingCart[i].price;
    }
    return totalCost;
  }
  
  // Add to cart buttons click event listeners
  $('.add-cart cart1').click(function() {
    addToCart(proameTshirtYellow);
  });
  
  $('.add-cart cart2').click(function() {
    addToCart(proameTshirtGrey);
  });
  
  $('.add-cart cart3').click(function() {
    addToCart(proameHoodieWhite);
  });
  
  $('.add-cart cart4').click(function() {
    addToCart(proameHoodiePink);
  });
  
  $('.add-cart cart5').click(function() {
    addToCart(proameDadCapBlack);
  });
  
  $('.add-cart cart6').click(function() {
    addToCart(proameDadCapLightBlue);
  });
  
  $('.add-cart cart7').click(function() {
    addToCart(proameTotebagBeige);
  });
  $('.add-cart cart8').click(function() {
    addToCart(proameTotebagBlack);

  });