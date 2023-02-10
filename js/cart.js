


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
            $("#Price0").html(localStorage.getItem(price));
            $("#Quantity0").html(localStorage.getItem(Quantity));
        }
        else if($("#items1").html() == "")
        {
            $("#items1").html(localStorage.getItem(items));
            $("#Price1").html(localStorage.getItem(price));
            $("#Quantity1").html(localStorage.getItem(Quantity));
        }
        else if($("#items2").html() == "")
        {
            $("#items2").html(localStorage.getItem(items));
            $("#Price2").html(localStorage.getItem(price));
            $("#Quantity2").html(localStorage.getItem(Quantity));
        }
        else if($("#items3").html() == "")
        {
            $("#items3").html(localStorage.getItem(items));
            $("#Price3").html(localStorage.getItem(price));
            $("#Quantity3").html(localStorage.getItem(Quantity));
        }
        else if($("#items4").html() == "")
        {
            $("#items4").html(localStorage.getItem(items));
            $("#Price4").html(localStorage.getItem(price));
            $("#Quantity4").html(localStorage.getItem(Quantity));
        }
        else if($("#items5").html() == "")
        {
            $("#items5").html(localStorage.getItem(items));
            $("#Price5").html(localStorage.getItem(price));
            $("#Quantity5").html(localStorage.getItem(Quantity));
        }
        else if($("#items6").html() == "")
        {
            $("#items6").html(localStorage.getItem(items));
            $("#Price6").html(localStorage.getItem(price));
            $("#Quantity6").html(localStorage.getItem(Quantity));
        }
        else if($("#items7").html() == "")
        {
            $("#items7").html(localStorage.getItem(items));
            $("#Price7").html(localStorage.getItem(price));
            $("#Quantity7").html(localStorage.getItem(Quantity));
        }
    }
    $("#totalPrice").html("SGD$" + total);

    $("#clearCart").click(function(){
        var items1 = "items";
        var price1 = "price";
        var Quantity1 = "Quantity";

        for(var number1 = 0 ; number1 < 8 ; number1++)
        {
            items1 = "items" + number1;
            price1 = "price" + number1;
            Quantity1 = "Quantity" + number1;

            localStorage.removeItem(items1);
            localStorage.removeItem(price1);
            localStorage.removeItem(Quantity1);
        }
    })


    $("#checkoutButton").click(function(){
        
        if(total == 0)
        {
            alert("CART EMPTY");
        }
        else
        {
            if(document.getElementById("CheckoutName").value == "")
            {
                document.getElementById("valiCheckoutName").innerHTML = "Please enter a something";
            }
            else
            {
                document.getElementById("valiCheckoutName").innerHTML = "";
                empty1 = false;
            }


            if(document.getElementById("checkoutContactNo").value == "")
            {
                document.getElementById("valicheckoutContactNo").innerHTML = "Please enter a something";
            }
            else
            {
                document.getElementById("valicheckoutContactNo").innerHTML = "";
                if(isNaN(document.getElementById("checkoutContactNo").value))
                {
                    document.getElementById("valicheckoutContactNo").innerHTML = "Please enter a Numeric Number";
                }
                else
                {
                    document.getElementById("valicheckoutContactNo").innerHTML = "";
                    empty2 = false;
                }
                
            }

            if(document.getElementById("postal").value == "" )
            {
                document.getElementById("valipostal").innerHTML = "Please enter a something";
            }
            else
            {
                document.getElementById("valipostal").innerHTML = "";
                if(isNaN(document.getElementById("postal").value))
                {
                    document.getElementById("valipostal").innerHTML = "Please enter a Numeric Number";
                }
                else
                {
                    document.getElementById("valipostal").innerHTML = "";
                    if(document.getElementById("postal").value.length != 6)
                    {
                        document.getElementById("valipostal").innerHTML = "Number length up to 6";
                    }
                    else
                    {
                        document.getElementById("valipostal").innerHTML = "";
                        empty3 = false;
                    }
                }
                
            }

            if(document.getElementById("address").value == "" )
            {
                document.getElementById("valiaddress").innerHTML = "Please enter a something";
            }
            else
            {   
                document.getElementById("valiaddress").innerHTML = "";
                empty4 = false;
            }

            if(document.getElementById("Delivery").elements["Delivery"].value == "" )
            {
                document.getElementById("validel").innerHTML = "Please select something";
            }
            else
            {
                document.getElementById("validel").innerHTML = "";
                empty5 = false;
            }

            if(document.getElementById("CreditCard").elements["cc"].value == "" )
            {
                document.getElementById("ValiCreditCard").innerHTML = "Please select something";
            }
            else
            {
                document.getElementById("ValiCreditCard").innerHTML = "";
                empty6 = false;
            }

            if(document.getElementById("PaymentCArd").value == "")
            {
                document.getElementById("valiPaymentCArd").innerHTML = "Please select something";
            }
            else
            {
                document.getElementById("valiPaymentCArd").innerHTML = "";
                if(isNaN(document.getElementById("PaymentCArd").value))
                {
                    document.getElementById("valiPaymentCArd").innerHTML = "Please enter a Numeric Number";
                }
                else
                {
                    document.getElementById("valiPaymentCArd").innerHTML = "";
                    if(document.getElementById("PaymentCArd").value.length != 16)
                    {
                        document.getElementById("valiPaymentCArd").innerHTML = "Number length up to 16";
                    }
                    else
                    {
                        document.getElementById("valiPaymentCArd").innerHTML = "";
                        empty7 = false;
                    }
                }
            }

            if(document.getElementById("PaymentName").value == "")
            {
                document.getElementById("valiPaymentName").innerHTML = "Please select something";
            }
            else
            {
                document.getElementById("valiPaymentName").innerHTML = "";
                empty8 = false;
            }


            if(empty1 != true && empty2 != true && empty3 != true && empty4 != true && empty5 != true && empty6 != true && empty7 != true && empty8 != true)
            {
                if(document.getElementById("Delivery").elements["Delivery"].value == "Express Delivery")
                {
                    total = total + 5 
                }
                alert("Name: " + document.getElementById("CheckoutName").value+"\n"+
                "ContactNo: " + document.getElementById("checkoutContactNo").value +"\n"+
                "Country: " + document.getElementById("Country").value +"\n"+
                "Address: " + document.getElementById("address").value +"("+ document.getElementById("postal").value + ")" + "\n"+
                "Payment: " + document.getElementById("CreditCard").elements["cc"].value + " (Approved)" + "\n"+
                "Total Amount payed: " +"SGD$"+ total + "\n"+"\n"+
                "Thanks for shopping!! Hope to see u again!!!")

                var items1 = "items";
                var price1 = "price";
                var Quantity1 = "Quantity";
        
                for(var number1 = 0 ; number1 < 8 ; number1++)
                {
                    items1 = "items" + number1;
                    price1 = "price" + number1;
                    Quantity1 = "Quantity" + number1;
        
                    localStorage.removeItem(items1);
                    localStorage.removeItem(price1);
                    localStorage.removeItem(Quantity1);
                }
            }
        }
    })
})