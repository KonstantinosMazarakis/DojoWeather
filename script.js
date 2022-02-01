function alertBox(){
    alert("Loading weather report....")
}

var delete1 = document.querySelector("#delete");

function deleted(){
    delete1.remove();
}

var firstRed = document.querySelector("#firstRed")
var firstBlue = document.querySelector("#firstBlue")

var secondRed = document.querySelector("#secondRed")
var secondBlue = document.querySelector("#secondBlue")

var thirdRed = document.querySelector("#thirdRed")
var thirdBlue = document.querySelector("#thirdBlue")

var forthRed = document.querySelector("#forthRed")
var forthBlue = document.querySelector("#forthBlue")


function Fselected(element){
    console.log(element.value)
    if( element.value == "F"){
        console.log("F")
        firstRed.innerText = "75°";
        firstBlue.innerText = "65°";

        secondRed.innerText = "80°";
        secondBlue.innerText = "66°";

        thirdRed.innerText = "69°";
        thirdBlue.innerText = "61°";

        forthRed.innerText = "78°";
        forthBlue.innerText = "70°";
        
    }else if(element.value == "C"){
    console.log("C")
    firstRed.innerText = "24°";
    firstBlue.innerText = "18°";

    secondRed.innerText = "27°";
    secondBlue.innerText = "19°";

    thirdRed.innerText = "21°";
    thirdBlue.innerText = "16°";

    forthRed.innerText = "26°";
    forthBlue.innerText = "21°";
    }
}

