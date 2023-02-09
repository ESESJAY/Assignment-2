const store = 
[["Proame T-shirt Yellow",35],
["Proame T-shirt Grey",35],
["Proame Hoodie White",60],
["Proame Hoodie Pink",60],
["Proame Dad Cap black",29],
["Proame Dad Cap blue",29],
["Proame Totebag Biege",35],
["Proame Totebag Black",35]];

$("#cart1").click(function(){
    const totalPrice = store[0][1] * document.getElementById("Quantity1").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[0][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity1").value);

    localStorage.setItem("items",store[0][0]);
    localStorage.setItem("price",totalPrice);
    localStorage.setItem("Quantity",document.getElementById("Quantity1").value);
})

$("#cart2").click(function(){
    const totalPrice = store[1][1] * document.getElementById("Quantity2").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[1][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity2").value);

    localStorage.setItem("items",store[1][0]);
    localStorage.setItem("price",totalPrice);
    localStorage.setItem("Quantity",document.getElementById("Quantity2").value);
})

$("#cart3").click(function(){
    const totalPrice = store[2][1] * document.getElementById("Quantity3").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[2][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity3").value);

    localStorage.setItem("items",store[2][0]);
    localStorage.setItem("price",totalPrice);
    localStorage.setItem("Quantity",document.getElementById("Quantity3").value);
})

$("#cart4").click(function(){
    const totalPrice = store[3][1] * document.getElementById("Quantity4").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[3][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity4").value);

    localStorage.setItem("items",store[3][0]);
    localStorage.setItem("price",totalPrice);
    localStorage.setItem("Quantity",document.getElementById("Quantity4").value);
})

$("#cart5").click(function(){
    const totalPrice = store[4][1] * document.getElementById("Quantity5").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[4][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity5").value);

    localStorage.setItem("items",store[4][0]);
    localStorage.setItem("price",totalPrice);
    localStorage.setItem("Quantity",document.getElementById("Quantity5").value);
})

$("#cart6").click(function(){
    const totalPrice = store[5][1] * document.getElementById("Quantity6").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[5][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity6").value);

    localStorage.setItem("items",store[5][0]);
    localStorage.setItem("price",totalPrice);
    localStorage.setItem("Quantity",document.getElementById("Quantity6").value);
})

$("#cart7").click(function(){
    const totalPrice = store[6][1] * document.getElementById("Quantity7").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[6][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity7").value);

    localStorage.setItem("items",store[6][0]);
    localStorage.setItem("price",totalPrice);
    localStorage.setItem("Quantity",document.getElementById("Quantity7").value);
})

$("#cart8").click(function(){
    const totalPrice = store[7][1] * document.getElementById("Quantity8").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[7][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity8").value);

    localStorage.setItem("items",store[7][0]);
    localStorage.setItem("price",totalPrice);
    localStorage.setItem("Quantity",document.getElementById("Quantity8").value);
})