document.getElementById("get-sw-people").addEventListener("click", function(){
    getSwapiPeoples('https://swapi.dev/api/people');
});
document.getElementById("prev").addEventListener("click",function(event){
    let url = event.target.value;
    getSwapiPeoples(url);
})
document.getElementById("next").addEventListener("click",function(event){
    let url = event.target.value;
    getSwapiPeoples(url);
});
document.getElementById("content").addEventListener("click", function(event){ // ova vazi samo ako naprajme button od javascript i da sakame da mu dajme event listener ova se praj
    event.stopPropagation();
    if(event.target.tagName === "BUTTON"){
        let url = event.target.value;
        getInformationsFromSwapiPeople(url);
    }
})
function showPrevNextPageBtn(data){
    // console.log(data);
    let prevBtn = document.getElementById("prev");
    prevBtn.style.display = "block";
    let nextBtn = document.getElementById("next");
    nextBtn.style.display = "block";
    if(data.previous){
        prevBtn.disabled = false;
        prevBtn.value = data.previous;
    }
    else{
        prevBtn.disabled = true;
    }
    if(data.next){
        nextBtn.disabled = false;
        nextBtn.value = data.next;
    }
    else{
        nextBtn.disabled = true;
    }
}
function showSwapiPeople(people){
    let html = "<ol>";
    for(let person of people){
        let li = `
            <li>
                ${person.name} has appeared in ${person.films.length} films 
                <button value="${person.url}">Show Informations</button>.
            </li>
            <br>
        `;
    html += li;
    }
    html += "</ol>"
    document.getElementById("content").innerHTML = html;
}
function getSwapiPeoples(url){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        showSwapiPeople(data.results);
        showPrevNextPageBtn(data);
    })
}
function getInformationsFromSwapiPeople(url){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(chracter){
        console.log(chracter);
        let text = `This chracter is ${chracter.name}, his weight is ${chracter.mass} kilograms, also he is ${chracter.height}cm, he got ${chracter.hair_color} hair.
        `
        document.getElementById("contentInfo").innerHTML = text;
    })
}