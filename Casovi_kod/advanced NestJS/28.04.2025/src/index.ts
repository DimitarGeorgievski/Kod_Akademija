// Type assertion

interface Student{
    firstName: string;
    lastName: string;
    email:string;
    address: {
        city: string;
        street: string;
    }
}

const studentJohn: Student = {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    address: {
        city: "Orlando",
        street: "Street",
    },
};

const studentJSON = JSON.stringify(studentJohn);
const parsedStudent = JSON.parse(studentJSON) as Student;
const parsedStudent2 = <Student>JSON.parse(studentJSON); // ne ova bidejki posle vo react ke ima drugo znacenje ova

// Generics

const getProducts = async () => {
    return ["shoes","machines", "books"]
}

const getStock = async (): Promise<number> => {
    return 2;
} 

interface Product<T> {
    title: string;
    stock: number;
    metaData: T;
}

interface DishWasherMetaData{
    serialNumber: string;
    capacity: number;
}

interface BlenderMetaData {
    rpm: 1000 | 12000 | 20000;
    gears: 1 | 3 | 5;
}

const washingMachine: Product<DishWasherMetaData> = {
    title: "Whirpool Dishwasher",
    stock: 1200,
    metaData: {
        serialNumber: "D12301231",
        capacity: 123,
    }
}

const Blender: Product<BlenderMetaData> = {
    title: "Tefal Blender",
    stock: 120,
    metaData: {
        rpm: 1000,
        gears: 3,
    }
}

// partials

interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

const userOne: User = {
    firstName: "Jane",
    lastName: "Doe",
    email: "habe@gmail.com",
    age: 32,
}

const updateData: Partial<User> = {
    email: "updated@gmail.com",
};

const dataObj: {[key: string]: string | number} = {}; // ova znaci deka key mora da bidi sekogas string a value mora da bidi string ili number 

// keyof

const readUserProperty = (user: User, property: keyof User) => {
    return user[property];
}

console.log(readUserProperty(userOne, "firstName"));
console.log(readUserProperty(userOne, "lastName"));
console.log(readUserProperty(userOne, "age"));