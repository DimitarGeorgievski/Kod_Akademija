import fs from "fs";

// Function to read existing suers from users.json file
try {
    const existingUsers = fs.readFileSync("users.json", "utf-8");
    const parsedUsers = JSON.parse(existingUsers);
    console.log(parsedUsers);
}
catch{
    console.log("Eror reading file", error);
}
const getUserById = (userId) => {
    const existingUser = fs.readFileSync("users.json", "utf-8");
    const parsedUsers = JSON.parse(existingUser);
    const foundUser = parsedUsers.find(user => user.id === userId); // razlika izmegju find i filter e to so filter vraka array
    return foundUser ?? {} // nulish coalescing operator
    // return foundUser ? foundUser : {} - ternary operator 
}
const foundUser = getUserById(5);
console.log(foundUser);
const addUser = (user) =>{
    const existingUser = fs.readFileSync("users.json", "utf-8");
    const parsedUsers = JSON.parse(existingUser);
    const newUserId = parsedUsers.length +1;
    const newUser = {
        id: newUserId,
        name: user.name,
        userName: user.userName,
        email: user.email
    }
    parsedUsers.push(newUser);
    fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
}
const newUser = {
    name: "Bob",
    userName: "bobbobsky",
    email: "bob@email.com"
}
addUser(newUser);