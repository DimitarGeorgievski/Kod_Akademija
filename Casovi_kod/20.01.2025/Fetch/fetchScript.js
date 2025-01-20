document.getElementById("sendRequest").addEventListener("click",function(){
    fetch("https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(response){
        console.log(response);
        console.log("the request has failed: " + response.status);
        console.log(response.responseText)
    })
})