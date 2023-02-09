var kpop1 = "";
var kpop2 = "";
var kpop3 = "";
var kpop4 = "";
var kpop5 = "";

$(document).ready(function(){
    const sign = [0,0,0,0]
    $("#answer").hide();
    // QUESTION 1
    $("#kpopQ1-0").click(function(){
        $("#kpopQ1-0").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop1 = "kpopQ1-0";
        $("#kpopQ1-1").css({"background-color": "black", "color": "white"})
        $("#kpopQ1-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ1-3").css({"background-color": "black", "color": "white"})
    })
    
    $("#kpopQ1-1").click(function(){
        $("#kpopQ1-1").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop1 = "kpopQ1-2";
        $("#kpopQ1-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ1-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ1-3").css({"background-color": "black", "color": "white"})
    })

    $("#kpopQ1-2").click(function(){
        $("#kpopQ1-2").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop1 = "kpopQ1-2";
        $("#kpopQ1-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ1-3").css({"background-color": "black", "color": "white"})
        $("#kpopQ1-1").css({"background-color": "black", "color": "white"})
    })

    $("#kpopQ1-3").click(function(){
        $("#kpopQ1-3").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop1 = "kpopQ1-3";
        $("#kpopQ1-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ1-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ1-1").css({"background-color": "black", "color": "white"})
    })

    // QUESTIOn 2
    $("#kpopQ2-0").click(function(){
        $("#kpopQ2-0").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop2 = "kpopQ2-0";
        $("#kpopQ2-1").css({"background-color": "black", "color": "white"})
        $("#kpopQ2-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ2-3").css({"background-color": "black", "color": "white"})
    })
    
    $("#kpopQ2-1").click(function(){
        $("#kpopQ2-1").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop2 = "kpopQ2-1";
        $("#kpopQ2-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ2-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ2-3").css({"background-color": "black", "color": "white"})
    })

    $("#kpopQ2-2").click(function(){
        $("#kpopQ2-2").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop2 = "kpopQ2-2";
        $("#kpopQ2-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ2-3").css({"background-color": "black", "color": "white"})
        $("#kpopQ2-1").css({"background-color": "black", "color": "white"})
    })

    $("#kpopQ2-3").click(function(){
        $("#kpopQ2-3").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop2 = "kpopQ2-3";
        $("#kpopQ2-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ2-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ2-1").css({"background-color": "black", "color": "white"})
    })

    // Question 3
    $("#kpopQ3-0").click(function(){
        $("#kpopQ3-0").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop3 = "kpopQ3-0";
        $("#kpopQ3-1").css({"background-color": "black", "color": "white"})
        $("#kpopQ3-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ3-3").css({"background-color": "black", "color": "white"})
    })
    
    $("#kpopQ3-1").click(function(){
        $("#kpopQ3-1").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop3 = "kpopQ3-1";
        $("#kpopQ3-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ3-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ3-3").css({"background-color": "black", "color": "white"})
    })

    $("#kpopQ3-2").click(function(){
        $("#kpopQ3-2").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop3 = "kpopQ3-2";
        $("#kpopQ3-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ3-3").css({"background-color": "black", "color": "white"})
        $("#kpopQ3-1").css({"background-color": "black", "color": "white"})
    })

    $("#kpopQ3-3").click(function(){
        $("#kpopQ3-3").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop3 = "kpopQ3-3";
        $("#kpopQ3-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ3-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ3-1").css({"background-color": "black", "color": "white"})
    })

    //Question 4
    $("#kpopQ4-0").click(function(){
        $("#kpopQ4-0").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop4 = "kpopQ4-0";
        $("#kpopQ4-1").css({"background-color": "black", "color": "white"})
        $("#kpopQ4-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ4-3").css({"background-color": "black", "color": "white"})
    })
    
    $("#kpopQ4-1").click(function(){
        $("#kpopQ4-1").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop4 = "kpopQ4-1";
        $("#kpopQ4-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ4-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ4-3").css({"background-color": "black", "color": "white"})
    })

    $("#kpopQ4-2").click(function(){
        $("#kpopQ4-2").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop4 = "kpopQ4-2";
        $("#kpopQ4-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ4-3").css({"background-color": "black", "color": "white"})
        $("#kpopQ4-1").css({"background-color": "black", "color": "white"})
    })

    $("#kpopQ4-3").click(function(){
        $("#kpopQ4-3").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop4 = "kpopQ4-3";
        $("#kpopQ4-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ4-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ4-1").css({"background-color": "black", "color": "white"})
    })

    //Question 5
    $("#kpopQ5-0").click(function(){
        $("#kpopQ5-0").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop5 = "kpopQ5-0";
        $("#kpopQ5-1").css({"background-color": "black", "color": "white"})
        $("#kpopQ5-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ5-3").css({"background-color": "black", "color": "white"})
    })
    
    $("#kpopQ5-1").click(function(){
        $("#kpopQ5-1").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop5 = "kpopQ5-1";
        $("#kpopQ5-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ5-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ5-3").css({"background-color": "black", "color": "white"})
    })

    $("#kpopQ5-2").click(function(){
        $("#kpopQ5-2").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop5 = "kpopQ5-2";
        $("#kpopQ5-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ5-3").css({"background-color": "black", "color": "white"})
        $("#kpopQ5-1").css({"background-color": "black", "color": "white"})
    })

    $("#kpopQ5-3").click(function(){
        $("#kpopQ5-3").css({
            "background-color": "pink", 
            "color": "black"})
        
        kpop5 = "kpopQ5-3";
        $("#kpopQ5-0").css({"background-color": "black", "color": "white"})
        $("#kpopQ5-2").css({"background-color": "black", "color": "white"})
        $("#kpopQ5-1").css({"background-color": "black", "color": "white"})
    })

    

    $("#buttonKpop").click(function(){
        if(kpop1 != "" && kpop2 != "" && kpop3 != "" && kpop4 != "" && kpop5 != "")
        {
            if(kpop1 == "kpopQ1-0")
            {
                sign[0]+=1;
            }
            else if(kpop1 == "kpopQ1-1")
            {
                sign[1]+=1;
            }
            else if(kpop1 == "kpopQ1-2")
            {
                sign[2]+=1;
            }
            else if(kpop1 == "kpopQ1-3")
            {
                sign[3]+=1;
            }
        
            if(kpop2 == "kpopQ2-0")
            {
                sign[0]+=1;
            }
            else if(kpop2 == "kpopQ2-1")
            {
                sign[1]+=1;
            }
            else if(kpop2 == "kpopQ2-2")
            {
                sign[2]+=1;
            }
            else if(kpop2 == "kpopQ2-3")
            {
                sign[3]+=1;
            }

            if(kpop3 == "kpopQ3-0")
            {
                sign[0]+=1;
            }
            else if(kpop3 == "kpopQ3-1")
            {
                sign[1]+=1;
            }
            else if(kpop3 == "kpopQ3-2")
            {
                sign[2]+=1;
            }
            else if(kpop3 == "kpopQ3-3")
            {
                sign[3]+=1;
            }

            if(kpop4 == "kpopQ4-0")
            {
                sign[0]+=1;
            }
            else if(kpop4 == "kpopQ4-1")
            {
                sign[1]+=1;
            }
            else if(kpop4 == "kpopQ4-2")
            {
                sign[2]+=1;
            }
            else if(kpop4 == "kpopQ4-3")
            {
                sign[3]+=1;
            }

            if(kpop5 == "kpopQ5-0")
            {
                sign[0]+=1;
            }
            else if(kpop5 == "kpopQ5-1")
            {
                sign[1]+=1;
            }
            else if(kpop5 == "kpopQ5-2")
            {
                sign[2]+=1;
            }
            else if(kpop5 == "kpopQ5-3")
            {
                sign[3]+=1;
            }

            console.log(sign)
            var value = Math.max(sign[0],sign[1],sign[2],sign[3])
            console.log(value)
            var number = 0;
            for(var searchingForHighest = 0; searchingForHighest < sign.length; searchingForHighest++)
            {
                if(sign[searchingForHighest] == value)
                {
                    number = searchingForHighest;
                }
            }

            console.log(number)
            if(number == 0)
            {
                $("#titleOfAnswer").html("Your Favorite BLACKPINK Song: Stay");
            }
            else if(number == 1)
            {
                $("#titleOfAnswer").html("Your Favorite BLACKPINK Song: Play with fire");
            }
            else if(number == 2)
            {
                $("#titleOfAnswer").html("Your Favorite BLACKPINK Song: How you like that");
            }
            else if(number == 3)
            {
                $("#titleOfAnswer").html("Your Favorite BLACKPINK Song: Kill This Love");
            }

            $("#answer").show();
        }
    })
});