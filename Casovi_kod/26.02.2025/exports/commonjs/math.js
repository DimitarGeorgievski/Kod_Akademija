function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

// opcija 1 za da eksporitrame nekoja funkcija vo drug .js fajl
module.exports = {add, subtract};

//opcija 2 edno posebno i mora za sekoe posebno ama najubav e tret nacin
exports.add = add;
exports.subtract = subtract;