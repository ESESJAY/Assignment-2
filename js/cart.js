
$(document).ready(function(){
    var items = "items"
    var price = "price"
    var Quantity = "Quantity"
    for(var number = 0; number < 9; number++ )
    {
        items = "items" + number;
        price = "price" + number;
        Quantity = "Quantity" + number;
        console.log(localStorage.getItem(items)) 

        if(localStorage.getItem(Checking) != null)
        {
            var 
            ("#CartCol").append('<div class="containerRow"> <strong class="ProductCol">Product Infomation</strong> <strong class="PriceCol">Price</strong> <strong class="QuantityCol">Quantity</strong></div>')
        }
    }
})