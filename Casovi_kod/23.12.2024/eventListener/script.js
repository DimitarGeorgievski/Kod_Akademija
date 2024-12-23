let element = document.getElementById("btn");

element.addEventListener("click",function(){
    console.log("Hello World");
});

function greet(){
    console.log("Hello again");
}

element.addEventListener("dblclick", greet);

let input = document.getElementById("mainInput");
// input.addEventListener('keypress', function(event){
//     console.log(event.target.value);
//     // so ova event.target.value se pokazva 1 bukva pomalce od inputot
//     console.log("Change Event");
// })
function handleClick(e){
    console.log(e);
}
input.addEventListener("blur", handleClick);

let btn2 = document.getElementById("btn2");

//za ova da raboti treba da se kazi tocno koja funkcija da ja izbrisi
// btn2.addEventListener("click", function(){
//     element.removeEventListener("click",function(){
//         console.log("Removed click event");
//     })
// })

btn2.addEventListener("click", function(){
    element.removeEventListener("dblclick",greet);
});

// function removingEventListener(){
//     console.log("MouseOut")
//     btn2.removeEventListener("mouseout",removingEventListener);
// }

// btn2.addEventListener("mouseout", removingEventListener);
let content = document.getElementById("content");
function checkWordLength(word){
    if(word.length >= 10){
        let text = "The length of the word is too long";
        content.innerHTML = `<p>${text}</p>`;
    }
    else{
        content.innerHTML = "";
    }
}
document.getElementById("textInput")
    .addEventListener("keydown",function(e){
        let value = e.target.value;
        checkWordLength(value);
    });