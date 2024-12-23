let counter = 0;
let body = document.getElementsByTagName("body");
body[0].onmousemove = function(){
    console.log("moving" + counter);
    counter++;
}

let mainDiv = document.getElementById("main");

function changeBgColorWhenIn(){
    mainDiv.style.backgroundColor = "orange";
}
function changeBgColorWhenOut(){
    mainDiv.style.backgroundColor = "black";
}
mainDiv.onmouseleave = changeBgColorWhenOut;
mainDiv.onmouseover = changeBgColorWhenIn;
mainDiv.onclick = function(){
    mainDiv.style.backgroundColor = "yellow";
}