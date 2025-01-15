// ------------------------ Objects ----------------------------------
let obj = {

}; // prazen objekt
obj.firstName = "Dimitar"; // za dodavanje propertiranja
obj["lastname"] = "Georgievski"; // dodavanje so square bracked notation
let obj2 = {
    title: "Title",
    duration: 102,
    getTitle: function(){
        return this.title; // mora da ima vo funkcijata this.nesto za da raboti
    }
};
let obj3 = new Object();  // so koristenje na new object...isto taka se koristi edniot nacin ili drugiot nacin nemozi ednas da se upotrebi edniot posle drugiot za eden ist objekt
obj3.firstname = "Filip"; // square bracket notation e ova
obj3["lastname"] = "Zlatanovski";
obj3.movieInfo = obj2;

// ------------------------ Constructor funkcii ----------------------------------
// se prat so function Student - mora imeto na funkcijat ada e so golema bukva
function Student(firstName,lastName,dob,address,town){
    this.firstName = firstName; //  ova levo e za imeto na promenlivata da recham i mora da ima this. vo constructor funkcijata
    this.lastName = lastName;
    this.dateOfBirth = dob;
    this.address = !address ? "N/A" : address; // ova prasalnik znaci ako e tocno prvoto da se desi to,a so dve tocki ako ne e tocno prvoto da e to...slicno kako if ciklus no sepak poporefisonalno i pomalce kod
    this.town = town;
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    };
};
function getFUllName(student){
    return `${student.firstName} ${student.lastName}`;
};
let student = new Student("Bob", "bobski", 1999);
let fullName = student.getFullName();

student["grades"] = [1,2,3,4];
student.academy = {
    name: "QA",
    address: "Some adress",
    studentCapacity: 1001
};
delete student.firstName; // za da izbrisime property nekoe od objekt
