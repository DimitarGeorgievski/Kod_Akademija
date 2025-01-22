//functions
function showTopic(place){
    let text = document.getElementById(place);
    let topic = document.getElementById("selectGenre").value;
    text.innerText = `Here is your topic: ${topic}`;
}
function newJoke(){
    let topic = document.getElementById("selectGenre").value;
    let url = `https://api.chucknorris.io/jokes/random?category=${topic}`;
    if(topic === "default"){
        alert("it could be cool if you select some topic");
        return;
    }
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let joke = data.value;
        let jokeText = document.getElementById("joke");
        jokeText.innerText = joke;
    })
}

document.getElementById("selectGenre").addEventListener("change", function(event){
    showTopic("topic");
});
document.getElementById("newJoke").addEventListener("click",function(){
    newJoke();
})