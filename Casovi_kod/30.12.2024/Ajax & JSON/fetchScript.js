let button = document.getElementById("btn");
button.addEventListener("click", function(){
    // -----------FETCH--------
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
    console.log("Called from fetch as success");
        console.log(response);
        return response.json();
    })
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log("Called from fetch as error");
        console.log(error)
    })
    // -----------FETCH--------
})