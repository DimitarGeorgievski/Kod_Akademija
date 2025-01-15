//variables
let form = document.getElementById("add-todo-form");
let todoInMemory = {
    todo: [],
    todoIdCounter: 1
}

//functions
function Todo(id,title,description){
    this.id = id;
    this.title = title;
    this.description = description;
    this.isComplete = false;
};
function createTodo(title,description){
    let todo = new Todo(todoInMemory.todoIdCounter,title,description);
    todoInMemory.todoIdCounter += 1;
    return todo;
}
function resetInputs(parentElement){
    let inputs = parentElement.getElementsByTagName("input");
    for(let input of inputs){
        input.value = "";
    }
}
function getValuesFromInputs(parentElement){
    let inputs = parentElement.getElementsByTagName("input");
    let inputValues = {};
    for(let input of inputs){
        inputValues[input.name] = input.value;
    }
    return inputValues;
}
function showHideElement(element, isHiden){
    // if(isHiden){
    //     element.style.display = "none";
    // }
    // else{
    //     element.style.display = "block";
    // } istoto e ova
    element.style.display = isHiden ? "none" : "block";
}

document.querySelector("#add-todo").addEventListener("click", function(){
    showHideElement(form,true);
});
document.getElementById("reset-todo").addEventListener("click", function(){
    resetInputs(form);
});
document.getElementById("save-todo").addEventListener("click", function(){
    let inputValues = getValuesFromInputs(form);
    let todo = createTodo(inputValues.title,inputValues.description);
    todoInMemory.todo.push(todo);
    resetInputs(form);
    console.log(todo);
    showHideElement(form,true);
});