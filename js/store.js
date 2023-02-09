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

    localStorage.setItem("items0",store[0][0]);
    localStorage.setItem("price0",totalPrice);
    localStorage.setItem("Quantity0",document.getElementById("Quantity1").value);
})

$("#cart2").click(function(){
    const totalPrice = store[1][1] * document.getElementById("Quantity2").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[1][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity2").value);

    localStorage.setItem("items1",store[1][0]);
    localStorage.setItem("price1",totalPrice);
    localStorage.setItem("Quantity1",document.getElementById("Quantity2").value);
})

$("#cart3").click(function(){
    const totalPrice = store[2][1] * document.getElementById("Quantity3").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[2][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity3").value);

    localStorage.setItem("items2",store[2][0]);
    localStorage.setItem("price2",totalPrice);
    localStorage.setItem("Quantity2",document.getElementById("Quantity3").value);
})

$("#cart4").click(function(){
    const totalPrice = store[3][1] * document.getElementById("Quantity4").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[3][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity4").value);

    localStorage.setItem("items3",store[3][0]);
    localStorage.setItem("price3",totalPrice);
    localStorage.setItem("Quantity3",document.getElementById("Quantity4").value);
})

$("#cart5").click(function(){
    const totalPrice = store[4][1] * document.getElementById("Quantity5").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[4][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity5").value);

    localStorage.setItem("items4",store[4][0]);
    localStorage.setItem("price4",totalPrice);
    localStorage.setItem("Quantity4",document.getElementById("Quantity5").value);
})

$("#cart6").click(function(){
    const totalPrice = store[5][1] * document.getElementById("Quantity6").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[5][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity6").value);

    localStorage.setItem("items5",store[5][0]);
    localStorage.setItem("price5",totalPrice);
    localStorage.setItem("Quantity5",document.getElementById("Quantity6").value);
})

$("#cart7").click(function(){
    const totalPrice = store[6][1] * document.getElementById("Quantity7").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[6][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity7").value);

    localStorage.setItem("items6",store[6][0]);
    localStorage.setItem("price6",totalPrice);
    localStorage.setItem("Quantity6",document.getElementById("Quantity7").value);
})

$("#cart8").click(function(){
    const totalPrice = store[7][1] * document.getElementById("Quantity8").value
    alert("ADDED TO CART!!" + "\n" +
    "Product Name: " + store[7][0]+ "\n" + "Product Price: $" + totalPrice + "\n" + "Product Quantity: " + document.getElementById("Quantity8").value);

    localStorage.setItem("items7",store[7][0]);
    localStorage.setItem("price7",totalPrice);
    localStorage.setItem("Quantity7",document.getElementById("Quantity8").value);
})