let firstname = "Dimitar";

// Primitive data types in typescript

const lastname: string = "Georgievski";
let age: number = 19;
console.log(age);

const isStudentReady: boolean = true;
const empty = null;
let academyName;

// Objects and arrays

const user: { firstname: String; title: String; age: Number } = {
  firstname: "Dimitar",
  title: "Developer",
  age: 19,
};

type User = {
  firstname: string;
  title: string;
  age: number;
  city?: string;
  example?: void;
};

const userTwo: User = {
  firstname: "Dimitar",
  title: "designer",
  age: 19,
  city: "Bitola",
};
const userThree: User = {
  firstname: "Dimitar",
  title: "designer",
  age: 19,
};

// Arrays

const fruits: string[] = ["apples", "oranges", "lemons"];
const grades: number[] = [1, 2, 3, 4, 5, 6, 7];

const combined: number[] = [...grades];

combined.push(100);

const users: User[] = [userTwo, userThree];
users.push({
  firstname: "Rob",
  title: "QA",
  age: 25,
});

console.log(users);

// Union types
let academyTitle: string | number = "Sedc";

type AcademyTitle = "Programming" | "design" | "network";
const acaTitle: AcademyTitle = "design";

const mixedArray: (string | number)[] = [1, 2, 3, 4];

enum Classic {
  TYPE_ONE,
  TYPE_TWO,
  TYPE_THREE,
}

enum Status {
  ACTIVE = "active",
  ON_HOLD = "on-hold",
  CANCELLED = "cancelled",
}

type Device = {
  title: string;
  status: Status;
};

//  Functions

const addTwoNumbers = (numOne: number, numTwo: number) => {
  return numOne + numTwo;
};

function multiplyTwoNumbers(numOne: number, numTwo: number): string {
  return `The result of multiplying the number ${numOne * numTwo}`;
}

const pritnFullName = (firstName: string, lastName: string) => {
  console.log(`${firstname}, ${lastName}`);
};

const sayHello = (name?: string) => {
  console.log(`${name || "User"} says hello`);
};

const printAcademy = (academy: AcademyTitle, length = 15) => {
  console.log(`The academy ${academy} lasts for ${length} months`);
};
printAcademy("Programming", 2);

// Interfaces

interface Product {
  title: string;
  stock: number;
  description: string;
  category: string;
  price: number;
  rating?: number;
  printInfo: () => void; // najubo e da se vraka void bidejki mozi da se smeni podolu vo tipot na funkcijata osven ako ni treba odreden specificen tip
}

const shoes: Product = {
  title: "Dress shoes",
  stock: 120,
  description: "Very fancy shoes",
  category: "Footwear",
  price: 199.99,
  rating: 8.4,
  printInfo() {
    console.log(`${this.title} : ${this.description}`);
  },
};

shoes.printInfo();

interface Person {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

interface Professional extends Person {
  jobTitle: string;
  salary: number;
}
const mechanic: Professional = {
  firstName: "John",
  lastName: "Doe",
  jobTitle: "Car Mechanic",
  salary: 99999,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(mechanic);
console.log(mechanic.getFullName());

type Programmer = Person &
  Professional & {
    programmingLanguage: string;
  };

const Dimitar: Programmer = {
  firstName: "Dimiar",
  lastName: "Georgievski",
  jobTitle: "Software Engineer",
  salary: 30000,
  programmingLanguage: "Javascript",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(Dimitar);

// Classes

class Laptop implements Product {
  readonly productionYear = 2023;
  private serialNum = "L21312412312";

  constructor(
    public title: string,
    public stock: number,
    public description: string,
    public category: string,
    public price: number,
    public rating: number,
    public countryOfOrigin: string
  ) {}

  printInfo() {
    console.log(
      `The laptop was made in ${this.countryOfOrigin}, has a rating of ${this.rating} and has a stock of: ${this.stock}`
    );
  }

  getSerialNum(): string {
    return this.serialNum;
  }
  updateSerialNum(newSerialNum: string){
    if(newSerialNum[0] !== 'L') return;
    this.serialNum = newSerialNum;
  }
}


const hpLaptop = new Laptop("Legion", 12300, "Gaming Laptop", "Portable Computers", 1200, 8.4, "China");

console.log(hpLaptop);

hpLaptop.updateSerialNum("A31241242141");
console.log("After update", hpLaptop.getSerialNum());

console.log("Reading the readonly property" , hpLaptop.productionYear);