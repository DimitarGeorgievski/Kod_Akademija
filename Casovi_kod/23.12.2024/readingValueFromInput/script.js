let input = document.getElementById("input");
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let inputValue = input.value;
    console.log(inputValue);
});

input.addEventListener("keypress",function(e){
    if(e.keyCode=== 13){ // 13 e kodot za enter toest ova znaci ako se pricni enter
        let inputValue = e.target.value;
        console.log(inputValue);
    }
})