function numbersDivisableByThree(){
    let arr1 = [];
    for(let i=1;i<=1000; i++){
        if(i%3===0){
            arr1.push(i);
        }
    }
    return arr1;
}
function evenNumbersAndDivisibleByFour(){
    let arr2=[];
    let i=1;
    while(i<=1000){
            if(i%4===0){
                arr2.push(i);
            }
        i++;
    }
   return arr2;
}
function numbersThatEndWithOne(){
    let arr3=[];
    let i=1;
    do{
        if(i%10===1){
        arr3.push(i);
        }
        i++;
    } while(i<=1000);
    return arr3;
}
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
function cleanArrayThatIsDifferentThatString(arr){
    let arr1 = []
    for(let values of arr){
        if(typeof(values) === "string"){
            arr1.push(values);
        }
    }
    return arr1;
}
function cleanArrayThatIsDifferentThatNumber(arr){
    let arr1 = [];
    for(let i=0;i<arr.length;i++){
        let element = arr[i];
        if(typeof(element) === "number" && !Number.isNaN(element)){
            arr1.push(element);
        }
    }
    return arr1;
}
function cleanedArrayOnlyTruthyValues(arr){
    let arr1 = [];
    let i =0;
    while(i < arr.length){
    let element = arr[i];
        if(element){
            arr1.push(element);
        }
    i++;
    }
    return arr1;
}
function RandomColorPage(){
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);
    let prozorce = document.getElementById("prozorce");
    prozorce.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    prozorce.innerHTML += `<p>RGB : ${color1},${color2}, ${color3}</p>`
}
function TitleGenerator(){
    let btn = document.getElementById("btn");
    btn.addEventListener("click", function(){
        let container = document.getElementById("container");
        let inputColor = document.getElementById("color").value;
        let inputFontSize = document.getElementById("fontSize").value;
        let inputText = document.getElementById("text").value;
        container.innerHTML += `<h1>${inputText}</h1>`;
        container.style.color += `${inputColor}`;
        container.style.fontSize += `${inputFontSize}px`;
    })
}

    function Student(firstName,lastName,birthYear,academy,grades){
        this.name = firstName; 
        this.surname = lastName; 
        this.birth = birthYear; 
        this.academy = academy ? academy : "N/A"; 
        this.grades = grades ? grades : [];
        this.getAge = function(){
            let date = new Date();
            let year = date.getFullYear();
            return year - birthYear;
        };
        this.getInfo = function(){
            let academyInfo = "";
            if(this.academy === "N/A"){
                academyInfo = "and its not part of any academy";
            }
            else{
                academyInfo = `from the academy ${academy}!`
            }
            return `this is student ${firstName} ${lastName}, ${academyInfo}`;
        }
        this.getGradesAverage = function(){
            if(this.grades.length === 0){
                return 0;
            }
            let average = 0;
            for(let grade of this.grades){
                average += grade;
            }
            return Math.floor(average / this.grades.length);
        }
    }

console.log(numbersDivisableByThree());
console.log(evenNumbersAndDivisibleByFour());
console.log(numbersThatEndWithOne());
console.log(cleanArrayThatIsDifferentThatString(test));
console.log(cleanArrayThatIsDifferentThatNumber(test));
console.log(cleanedArrayOnlyTruthyValues(test));
RandomColorPage();
TitleGenerator();
let student1 = new Student("Dimitar","Georgievski",2005,"Qinshift",[5,3,5,2,1]);
let student2 = new Student("Dimitara","Georgievska",2005,"Qinshiftaa",[3,2,1,2,1]);
let studentsArray = [student1,student2];
for(let student of studentsArray){
    console.log("Student age: " + student.getAge());
    console.log("Student info: " + student.getInfo());
    console.log("Student average grades: " + student.getGradesAverage());
}