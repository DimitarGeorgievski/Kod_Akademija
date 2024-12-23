// let mainDiv = document.getElementById("mainDiv");
// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// mainDiv.addEventListener(
//   "click",
//   function (e) {
//     console.log("Main div click");
//   },
//   false
// ); //true= gi dava site eventi odozgora nadolu t.e. od parent do child a so false go dava prvo eventot shto e napraven pa odi nagore t.e. od childs do parent po default e false
// btn1.addEventListener("click", function (e) {
//   e.stopPropagation(); //so ova prestanva da gi vika drugite eventi t.e. stop bubling praj
//   console.log("btn one click");
// });
// btn2.addEventListener("click", function (e) {
//   console.log("btn two click");
// });

//capturing

// document.getElementById("black")
//     .addEventListener("click",function(e){
//         console.log("Black div is called")
//     },true);

// document.getElementById("red")
//     .addEventListener("click",function(e){
//         console.log("Red div is called")
//     },true);

// document.getElementById("yellow")
//     .addEventListener("click",function(e){
//         console.log("Yellow div is called")
//     },true);

// document.getElementById("blue")
//     .addEventListener("click",function(e){
//         console.log("Blue div is called")
//     },true);

//bubbling

document.getElementById("black")
    .addEventListener("click",function(e){
        console.log("Black div is called")
    });

document.getElementById("red")
    .addEventListener("click",function(e){
        console.log("Red div is called")
    });

document.getElementById("yellow")
    .addEventListener("click",function(e){
        console.log("Yellow div is called")
    });

document.getElementById("blue")
    .addEventListener("click",function(e){
        console.log("Blue div is called")
    });