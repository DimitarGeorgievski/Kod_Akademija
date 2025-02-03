let url = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json';
let studentsUrl = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
let bandsUrl = "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/bands/bands.json";
let libraryUrl = "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/library/books.json";

function getDocumentsCallback(resolve,reject){
    $.ajax({
        url: url,
        success: function(response){
            let data = JSON.parse(response);
            resolve(data);
        },
        error: function(error){
            reject(error);
        }
    })
}
// getDocumentsCallback((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error)
// })

function getDocuments(url){
    return new Promise((resolve, reject) =>{
        $.ajax({
            url: url,
            success: function(response){
                let data = JSON.parse(response);
                console.log("resolved");
                resolve(data);
            },
            error: function(error){
                console.log("Rejected");
                reject(error);
            }
        })
    })
}
// console.log(getDocuments(url))
// getDocuments(url)
//     .then(data => {console.log(data)})
//     .catch(error =>{console.log(error)})

let delay = function(ms,text){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let isResolved = Math.random() < 0.7;
            if(isResolved){
                resolve(text);
            }
            else{
                reject("You have bad luck");
            }
        }, ms);
    });
}
// delay(1000, "resolved")
    // .then(text => console.log(text))
    // .catch(error => console.log(error));

// let response = delay(500, "some text that we want to show");
// response.then(x => console.log(x))

// getDocuments(url)
//     .then(data => {
//         let html = `<ul>`
//         for(let document of data){
//             html += `<li>${document.name}</li>`
//         }
//         html += `<ul>`
//         document.getElementById("content").innerHTML = html;   
//     })
//     .catch(error => console.log(error))
//     .finally(() => {
//         console.log("Im always executed")
//     })
let numbers = [1,2,3,4,5,6,7,8,9,10,11];
function getEvenNumbers(arr){
    let evenNumbers = arr.filter(x => x%2===0);
    return new Promise((resolve,reject) => {
        if(evenNumbers.length > 0){
            resolve(evenNumbers)
        }
        else{
            reject("Processing was not complete")
        }
    })
}
// getEvenNumbers(numbers)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
    
    let delay1 = function(ms,text){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                let isResolved = Math.random() < 0.9;
                if(isResolved){
                    resolve(text);
                }
                else{
                    reject("You have bad luck");
                }
            }, ms);
        });
    }
let promises = [];
for(let i =0;i<20;i++){
    promises.push(delay1(500 * i,`This is ${i} turn`));
}
// Promise.all(promises)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

let promiseData = [];
promiseData.push(fetch(url).then(response => response.json()))
promiseData.push(fetch(studentsUrl).then(response => response.json()))
promiseData.push(fetch(bandsUrl).then(response => response.json()))
promiseData.push(fetch(libraryUrl).then(response => response.json()))

Promise.all(promiseData)
    .then(([documents,students,bands,books]) => {
        console.log(documents);
        console.log(students);
        console.log(bands);
        console.log(books);
    })