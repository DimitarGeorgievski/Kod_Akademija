const myName = "Dimitar";
console.log(`Hello my name is ${myName}.This is my first name`);
console.log("GLOBAL", global) // vo node.js nema window element bidejki web browser ne postoj vo node.js tuku rabotime na globalno nivo
console.log("PROCESS", process);
const sayHello = (name) => {
    console.log(`Hello ${name}`);
}
// setTimeout(() => {
//    console.log("Delayed for 1 second"); 
// }, 1000);
// sayHello("Dimitar");
// process.exit(); // ako sakame da go isklucime serverot da ne raboti celo vreme se pravi process.exit() ama poarno e da ne go koristime ova bidejki ke se zatvori servero a ako imame timeout nema da raboti
process.stdout.write("Enter Something:")
process.stdin.on("data", (input) => {
    const userInput = input.toString().trim();
    console.log(`You Entered: ${userInput}`);
})