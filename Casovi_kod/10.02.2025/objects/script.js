function Dog(color,age,name,favoriteFoods){
    this.name = name === undefined ? "unnamed" : name;
    this.color = color;
    this.age = age;
    this.hasOwner = false;
    this.owner = null;
    // mozi da se koristat i falsy vrednosti za da se proveri undefined
    this.favoriteFoods = favoriteFoods === undefined ? [new Food("bacon", "red")] : favoriteFoods; 
    this.bark = function(){
        console.log("bark bark bark");
    }
    this.adopt = function(owner){
        if(!this.hasOwner){
            this.hasOwner = true;
            this.owner = owner;
            this.owner.hasDog = true;
            console.log(`the dog ${this.name} has a new owner ${this.owner.name}`);
        }
        else{
            console.log("this dog is already adopted");
        }
    }
    this.eat = function(food){
        this.favoriteFoods.forEach(fav => {
            if(fav.name.toLowerCase() === food.name.toLowerCase()){
                console.log("** My favorite food **");
                console.log("");
            }  
        });
        console.log("Nom nom nom")
    }
};
// za da iskoristime constructor funkcija treba so new i imeto na funkcijata i paramtetrite da se popolnat

function Food(name,color){
    this.name = name;
    this.color = color;
}
function Owner(name,age,hasDog = false){
    this.name = name;
    this.age = age;
    this.hasDog = hasDog;
}
let sparky = new Dog("brown",1, "Sparky", [
    new Food("apple", "red"),
    new Food("beef", "yellow")
]);
let doggy= new Dog();
console.log(doggy);
let owner = new Owner('Dimitar',23);
sparky.adopt(owner);
let food = new Food("beef", "green");
sparky.eat(food)
console.log(sparky);