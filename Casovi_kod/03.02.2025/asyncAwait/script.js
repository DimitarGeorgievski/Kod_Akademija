let url = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json';
let studentsUrl = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
let bandsUrl = "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/bands/bands.json";
let libraryUrl = "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/library/books.json";

function getData(url){
    let promise= fetch(url);
    promise
        .then(x => x.json())
        .then(data => console.log(data))
        .catch(x => console.log(x));

}
async function getDataAsync(url){
    let response = await fetch(url);
    let data = await response.json();
    let html = `<ul>`
    for(let document of data){
        html += `<li>${document.name}</li>`
    }
        html += `<ul>`
        document.getElementById("content").innerHTML = html; 
    console.log(data);
}
// getDataAsync(url);

// async function getDocumentsAsync(){
//     try{
//         let data = await fetch(url).then(x => x.json());
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         console.log("this block will execute always")
//     }
// }
// getDocumentsAsync();
async function getStudents() {
    let response = await fetch(studentsUrl);
    let data = await response.json();
    return data;
}
async function showDataAsync(){
    let data = await getStudents();
    let html = `<ul>`
    for(let document of data){
        html += `<li>${document.firstName}</li>`
    }
        html += `<ul>`
        document.getElementById("content").innerHTML = html; 
}
showDataAsync();