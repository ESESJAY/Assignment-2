var ChineseZodiac = "";
var IndiaZodiac = "";
var ItalianZodiac = "";
var FrenchZodiac = "";
var JapanZodiac = "";

$(document).ready(function(){
    const sign = [0,0,0,0]
    $("#answer").hide();
    // Chinese Zodiac1
    $("#ChineseZodiac1").click(function(){
        $("#ChineseZodiac1").css({
            "background-color": "Black", 
            "color": "White"})
        
        ChineseZodiac = "ChineseZodiac1";
        $("#ChineseZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#ChineseZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#ChineseZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })
    
    $("#ChineseZodiac2").click(function(){
        $("#ChineseZodiac2").css({
            "background-color": "Black", 
            "color": "White"})

        ChineseZodiac = "ChineseZodiac2";
        $("#ChineseZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#ChineseZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#ChineseZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#ChineseZodiac3").click(function(){
        $("#ChineseZodiac3").css({
            "background-color": "Black", 
            "color": "White"})

        ChineseZodiac = "ChineseZodiac3";
        $("#ChineseZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#ChineseZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#ChineseZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#ChineseZodiac4").click(function(){
        $("#ChineseZodiac4").css({
            "background-color": "Black", 
            "color": "White"})

        ChineseZodiac = "ChineseZodiac4";
        $("#ChineseZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#ChineseZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#ChineseZodiac3").css({"background-color": "gainsboro", "color": "Black"})
    })

    // India Zodiac1
    $("#IndiaZodiac1").click(function(){
        $("#IndiaZodiac1").css({
            "background-color": "Black", 
            "color": "White"})
         
        IndiaZodiac = "IndiaZodiac1";
        $("#IndiaZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#IndiaZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#IndiaZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })
    
    $("#IndiaZodiac2").click(function(){
        $("#IndiaZodiac2").css({
            "background-color": "Black", 
            "color": "White"})

        IndiaZodiac = "IndiaZodiac2";
        $("#IndiaZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#IndiaZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#IndiaZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#IndiaZodiac3").click(function(){
        $("#IndiaZodiac3").css({
            "background-color": "Black", 
            "color": "White"})

        IndiaZodiac = "IndiaZodiac3";
        $("#IndiaZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#IndiaZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#IndiaZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#IndiaZodiac4").click(function(){
        $("#IndiaZodiac4").css({
            "background-color": "Black", 
            "color": "White"})

        IndiaZodiac = "IndiaZodiac4";
        $("#IndiaZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#IndiaZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#IndiaZodiac3").css({"background-color": "gainsboro", "color": "Black"})
    })

    // Italian Zodiac
    $("#ItalianZodiac1").click(function(){
        $("#ItalianZodiac1").css({
            "background-color": "Black", 
            "color": "White"})
      
        ItalianZodiac = "ItalianZodiac1";
        $("#ItalianZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#ItalianZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#ItalianZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#ItalianZodiac2").click(function(){
        $("#ItalianZodiac2").css({
            "background-color": "Black", 
            "color": "White"})

        ItalianZodiac = "ItalianZodiac2";
        $("#ItalianZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#ItalianZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#ItalianZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#ItalianZodiac3").click(function(){
        $("#ItalianZodiac3").css({
            "background-color": "Black", 
            "color": "White"})

        ItalianZodiac = "ItalianZodiac3";
        $("#ItalianZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#ItalianZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#ItalianZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#ItalianZodiac4").click(function(){
        $("#ItalianZodiac4").css({
            "background-color": "Black", 
            "color": "White"})

        ItalianZodiac = "ItalianZodiac4";
        $("#ItalianZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#ItalianZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#ItalianZodiac1").css({"background-color": "gainsboro", "color": "Black"})
    })

    //French Zodiac
    $("#FrenchZodiac1").click(function(){
        $("#FrenchZodiac1").css({
            "background-color": "Black", 
            "color": "White"})
                  
        FrenchZodiac = "FrenchZodiac1";
        console.log(FrenchZodiac)
        $("#FrenchZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#FrenchZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#FrenchZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#FrenchZodiac2").click(function(){
        $("#FrenchZodiac2").css({
            "background-color": "Black", 
            "color": "White"})

        FrenchZodiac = "FrenchZodiac2";
        $("#FrenchZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#FrenchZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#FrenchZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#FrenchZodiac3").click(function(){
        $("#FrenchZodiac3").css({
            "background-color": "Black", 
            "color": "White"})

        FrenchZodiac = "FrenchZodiac3";
        $("#FrenchZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#FrenchZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#FrenchZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#FrenchZodiac4").click(function(){
        $("#FrenchZodiac4").css({
            "background-color": "Black", 
            "color": "White"})

        FrenchZodiac = "FrenchZodiac4";
        $("#FrenchZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#FrenchZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#FrenchZodiac1").css({"background-color": "gainsboro", "color": "Black"})
    })


    //Japan Zodiac
    $("#JapanZodiac1").click(function(){
        $("#JapanZodiac1").css({
            "background-color": "Black", 
            "color": "White"})
        
        JapanZodiac = "JapanZodiac1";
        $("#JapanZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#JapanZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#JapanZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#JapanZodiac2").click(function(){
        $("#JapanZodiac2").css({
            "background-color": "Black", 
            "color": "White"})

        JapanZodiac = "JapanZodiac2";
        $("#JapanZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#JapanZodiac3").css({"background-color": "gainsboro", "color": "Black"})
        $("#JapanZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#JapanZodiac3").click(function(){
        $("#JapanZodiac3").css({
            "background-color": "Black", 
            "color": "White"})

        JapanZodiac= "JapanZodiac3";
        $("#JapanZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#JapanZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#JapanZodiac4").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#JapanZodiac4").click(function(){
        $("#JapanZodiac4").css({
            "background-color": "Black", 
            "color": "White"})

        JapanZodiac = "JapanZodiac4";
        $("#JapanZodiac1").css({"background-color": "gainsboro", "color": "Black"})
        $("#JapanZodiac2").css({"background-color": "gainsboro", "color": "Black"})
        $("#JapanZodiac3").css({"background-color": "gainsboro", "color": "Black"})
    })

    $("#buttonZodiac").click(function(){
        if(ChineseZodiac != "" && IndiaZodiac!= "" && ItalianZodiac != "" && FrenchZodiac != "" && JapanZodiac != "")
        {
            if(ChineseZodiac == "ChineseZodiac1")
            {
                sign[0]+=1;
            }
            else if(ChineseZodiac == "ChineseZodiac2")
            {
                sign[1]+=1;
            }
            else if(ChineseZodiac == "ChineseZodiac3")
            {
                sign[2]+=1;
            }
            else if(ChineseZodiac == "ChineseZodiac4")
            {
                sign[3]+=1;
            }
        
            if(IndiaZodiac == "IndiaZodiac1")
            {
                sign[0]+=1;
            }
            else if(IndiaZodiac == "IndiaZodiac2")
            {
                sign[1]+=1;
            }
            else if(IndiaZodiac == "IndiaZodiac3")
            {
                sign[2]+=1;
            }
            else if(IndiaZodiac == "IndiaZodiac4")
            {
                sign[3]+=1;
            }

            if(ItalianZodiac == "ItalianZodiac1")
            {
                sign[0]+=1;
            }
            else if(ItalianZodiac == "ItalianZodiac2")
            {
                sign[1]+=1;
            }
            else if(ItalianZodiac == "ItalianZodiac3")
            {
                sign[2]+=1;
            }
            else if(ItalianZodiac == "ItalianZodiac4")
            {
                sign[3]+=1;
            }

            if(FrenchZodiac == "FrenchZodiac1")
            {
                sign[0]+=1;
            }
            else if(FrenchZodiac == "FrenchZodiac2")
            {
                sign[1]+=1;
            }
            else if(FrenchZodiac == "FrenchZodiac3")
            {
                sign[2]+=1;
            }
            else if(FrenchZodiac == "FrenchZodiac4")
            {
                sign[3]+=1;
            }

            if(JapanZodiac == "JapanZodiac1")
            {
                sign[0]+=1;
            }
            else if(JapanZodiac == "JapanZodiac2")
            {
                sign[1]+=1;
            }
            else if(JapanZodiac == "JapanZodiac3")
            {
                sign[2]+=1;
            }
            else if(JapanZodiac == "JapanZodiac4")
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
                $("#titleOfAnswer").html("Your Zodiac Signs: Aries/Leo/sagittarius");
                document.getElementById('imgZodiac').src = 'Images/firesign.png'

            }
            else if(number == 1)
            {
                $("#titleOfAnswer").html("Your Zodiac Signs: Cancer/Scorpio/Pisces");
                document.getElementById('imgZodiac').src = 'Images/watersign.png'

            }
            else if(number == 2)
            {
                $("#titleOfAnswer").html("Your Zodiac Signs: Gemini/Libra/Aquarius.");
                document.getElementById('imgZodiac').src = 'Images/airsign.png'

            }
            else if(number == 3)
            {
                $("#titleOfAnswer").html("Your Zodiac Signs: Capricorn/Taurus/Virgo.");
                document.getElementById('imgZodiac').src = 'Images/earthsign.png'

            }

            $("#answer").show();
        }
    })
});