function myFunction() {
    var x = document.getElementById("MYnavigationBar");
        if (x.className === "navigationBar") 
        {
            x.className += " responsive";
        } 
        else 
        {
            x.className = "navigationBar";
        } 
    }