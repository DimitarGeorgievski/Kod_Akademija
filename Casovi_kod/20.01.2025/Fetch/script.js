// creating json
let javascriptObj = { // javscript object
    name: "Trajan",
    getName: function(){
        console.log("Hello");
    }
}
let jsonObj = { // json object
    "name": "Trajan",
    "lastName": "Stevkovski",
}
// fukcija so pomos na json
let jsObj = JSON.stringify(javascriptObj);
let jsonObjString = JSON.stringify(jsonObj);

console.log(jsObj);
console.log(jsonObjString);
console.log(JSON.parse(jsObj));
console.log(JSON.parse(jsonObjString));