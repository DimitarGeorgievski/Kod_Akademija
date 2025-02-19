// ----------------------------------session storage-----------------------------------

sessionStorage.setItem("username","Dimitar");
let obj = {
    firstName: "Trajan",
    lastName: "Stevkovski",

};
sessionStorage.setItem("userInfo", JSON.stringify(obj));
let userinfo = sessionStorage.getItem("userInfo");
console.log(userinfo);

// ----------------------------------local storage-----------------------------------
localStorage.setItem("UserToken", "asdjaskljasklsjaflkasf");
let userToken = localStorage.getItem("UserToken");
console.log(userToken);

let localStorageService = {
    setItem: function(key,value ){
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: function(key){
        return JSON.parse(localStorage.getItem(key));
    }
};
localStorageService.setItem("currentUser", {
    firstName: "name",
    lastName: "lastname",
    age: 123,
    canDance: false,
    academy: "QA"
})
localStorageService.setItem("name", "Trajan");
localStorageService.setItem("age", 123);
localStorageService.setItem("canDance", false);
console.log(localStorageService.getItem("name"));
console.log(localStorageService.getItem("age"));
console.log(localStorageService.getItem("canDance"));