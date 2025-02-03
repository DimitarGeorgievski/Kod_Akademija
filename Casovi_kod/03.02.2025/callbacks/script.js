function printInConsole(data){
    console.log(data);
}

function sum(num,num1){
    return num + num1;
}

// let result = sum(2,2);
// printInConsole(result);

function sumAndPrint(num,num1){
    let result = num + num1;
    printInConsole(result);
}
// sumAndPrint(3,5);

function sumWithCallback(num,num1,callbackFnc){
    let result = num + num1;
    callbackFnc(result);
}
sumWithCallback(4,10, function(data){
    console.log(data);
});
sumWithCallback(2,8,function(data){
    if(data % 2===0){
        console.log("even number");
    }
    else{
        console.log("odd number")
    }
});
// function substractWithCallback(a,b,callbackFnc){
//     let result = a-b;
//     return callbackFnc(result);
// }
// let result = substractWithCallback(10,5, data => {
//     if(data % 3 === 0){
//         return data;
//     }
//     else{
//         return data + 10;
//     }
// })
// console.log(result);