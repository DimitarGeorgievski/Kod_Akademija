let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let inputs = document.getElementsByTagName("input");
    for(let input of inputs){
        console.log(input.name,input.value);
    }
});


// za da zemime site inputi najlesno e za da gi zemime so query selectori 