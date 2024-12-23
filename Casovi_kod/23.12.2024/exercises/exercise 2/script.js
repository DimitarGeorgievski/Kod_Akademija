let btn = document.getElementById("btn");
let paragraph = document.getElementById("paragraph");
btn.addEventListener("click", function(){
    paragraph.style.backgroundColor = "red";
    paragraph.style.color = "green";
    paragraph.style.fontSize = "50px";
});