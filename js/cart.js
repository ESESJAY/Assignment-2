


$(document).ready(function(){
    var items = "items";
    var price = "price";
    var Quantity = "Quantity";
    var total = 0;
    for(var number = 0; number < 8; number++ )
    {
        items = "items" + number;
        price = "price" + number;
        Quantity = "Quantity" + number;
        console.log(localStorage.getItem(items));
        console.log(localStorage.getItem(price));
        console.log(localStorage.getItem(Quantity));
        
        if(localStorage.getItem(price) != null)
        {
            total+=parseInt(localStorage.getItem(price));
        }

        if($("#items0").html() == "")
        {
            $("#items0").html(localStorage.getItem(items));
            $("#Price0").html("SGD$" + localStorage.getItem(price));
            $("#Quantity0").html(localStorage.getItem(Quantity));
        }
        else if($("#items1").html() == "")
        {
            $("#items1").html(localStorage.getItem(items));
            $("#Price1").html("SGD$" + localStorage.getItem(price));
            $("#Quantity1").html(localStorage.getItem(Quantity));
        }
        else if($("#items2").html() == "")
        {
            $("#items2").html(localStorage.getItem(items));
            $("#Price2").html("SGD$" + localStorage.getItem(price));
            $("#Quantity2").html(localStorage.getItem(Quantity));
        }
        else if($("#items3").html() == "")
        {
            $("#items3").html(localStorage.getItem(items));
            $("#Price3").html("SGD$" + localStorage.getItem(price));
            $("#Quantity3").html(localStorage.getItem(Quantity));
        }
        else if($("#items4").html() == "")
        {
            $("#items4").html(localStorage.getItem(items));
            $("#Price4").html("SGD$" + localStorage.getItem(price));
            $("#Quantity4").html(localStorage.getItem(Quantity));
        }
        else if($("#items5").html() == "")
        {
            $("#items5").html(localStorage.getItem(items));
            $("#Price5").html("SGD$" + localStorage.getItem(price));
            $("#Quantity5").html(localStorage.getItem(Quantity));
        }
        else if($("#items6").html() == "")
        {
            $("#items6").html(localStorage.getItem(items));
            $("#Price6").html("SGD$" + localStorage.getItem(price));
            $("#Quantity6").html(localStorage.getItem(Quantity));
        }
        else if($("#items7").html() == "")
        {
            $("#items7").html(localStorage.getItem(items));
            $("#Price7").html("SGD$" + localStorage.getItem(price));
            $("#Quantity7").html(localStorage.getItem(Quantity));
        }
    }
    $("#totalPrice").html("SGD$" + total);
})