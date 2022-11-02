
const apply = function() {
    let redBorder = document.getElementById("RedBorder").value;
    let greenBorder = document.getElementById("GreenBorder").value;
    let blueBorder = document.getElementById("BlueBorder").value;
    let borderThick = document.getElementById("BorderWidth").value;
    
    /*document.querySelector("body").style.position = "absolute"
    document.querySelector("body").style.width = window.innerWidth - (2*borderThick);
    document.querySelector("body").style.height = window.innerHeight - (2*borderThick);*/
    document.querySelector("body").style.border = `${borderThick}px solid rgb(${redBorder}, ${greenBorder}, ${blueBorder})`;

    let redBack = document.getElementById("RedBackground").value;
    let greenBack = document.getElementById("GreenBackground").value;
    let blueBack = document.getElementById("BlueBackground").value;

    document.querySelector("body").style.background = `rgb(${redBack}, ${greenBack}, ${blueBack})`

}