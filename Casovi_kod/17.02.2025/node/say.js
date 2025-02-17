function hello(name){
    return `Hey there ${name}`
}
function bye(name){
    return `Goodbye There ${name}`
}
module.exports = {
    sayHello: hello,
    sayBye: bye,
}