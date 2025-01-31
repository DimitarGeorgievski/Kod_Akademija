let first = 5;
// call stack execution order

function second(){
    let a=1;
    let b = third(1,2);
    return a+b;
}
function third(a,b){
    let c = 3;
    return a + b + c;
}
let fourt = second();
// console.log(fourt);


setTimeout(() =>{
    // console.log("Hi from timeout")
}, 3000)

function printName(name,callback){
    console.log('Hello ' + name);
    setTimeout(() => {
        callback();
    }, 2000);
}
printName("Dimitar", () => {
    // console.log("Im a simple callback");
})

 let itnval = setInterval(() => {
    // console.log("interval")
}, 500);
document.getElementById("btn").addEventListener("click", function(){
    clearInterval(itnval)
})


setTimeout(() => {
    console.log("first")
    setTimeout(() => {
        console.log("second");
        setTimeout(() => {
            console.log("third")
            setTimeout(() => {
                console.log("fourth");
                setTimeout(() => {
                    console.log("fifth");
                    setTimeout(() => {
                        console.log("a")
                        setTimeout(() => {
                            console.log("b")
                        }, 1000);
                    }, 2000);
                }, 5000);
            }, 500);
        }, 1000);    
    }, 2000);
}, 1000);