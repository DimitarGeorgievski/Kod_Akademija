// console.log(this);
// window.console.log("with use of window object");
// this.console.log("with use of this as window object");
let obj = {
    whatsThis: this
};
// console.log(obj.whatsThis);
function testFunc(){
    console.log(this);
}
// testFunc();
let obj2 = {
    whatsThis: this,
    whatIsThisInMethod: function(){
        console.log(this);
    }
}
// obj2.whatIsThisInMethod();
function Pet(name){
    console.log(this);
    this.name = name;
    this.eat = function(){
        console.log(this);
    }
}
// let a = new Pet("Jeki");
// a.eat();
let obj3 = {
    self: this,
    whatIsThis: () => {
        console.log(this);
    }
}

function testFnc2(){
    obj3.whatIsThis();
}
testFnc2();