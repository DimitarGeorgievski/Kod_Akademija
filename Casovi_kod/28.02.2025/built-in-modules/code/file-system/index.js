// Importing built-in Node.js modules
import path, { parse } from "path"; // Handles file and directory paths
import fs from "fs"; // Provides file system operations(read/write files,directories, etc.)
import os from "os"; // Retrieves operating system information
import querystring from "querystring"; // Retrieves data from api query parameters
import { fileURLToPath } from "url";

// Importing NPM packages
import { v4 as uuidv4 } from "uuid";
import { dir } from "console";
// File moudle
// Get __filename and __ dirname equivalents for ES modules
const __filename = fileURLToPath(import.meta.url); // za dinamicko da go zemi filepath za fajlot na koj rabotime i raboti na site kompjuteri
console.log(__filename); // mozi da se ima kakvo sakame ime na promenlivite
const __dirname = path.dirname(__filename);
console.log(__dirname);
const fileExtenstion = path.extname(__filename);
console.log(fileExtenstion);
const FileName = path.basename(__filename);
console.log("File Name", FileName);
const dirPath = path.join(__dirname, "test-folder"); // define directory path
console.log(dirPath);
// how to create file 
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath); // Creates a new directory synchronously 
    console.log("Directory Successfully Created.");
}
else{
    console.log("Folder already exists");
}

// Define a file path inside the newly created folder
const filePath = path.join(dirPath, "hello.txt");
// Write text content to file
fs.writeFileSync(filePath, "Hello, this text has been written via js code!");
// Read file content synchronously
const content = fs.readFileSync(filePath, "utf-8"); // Reads the content of the file
console.log(content);
// List all files in the current directory
const files = fs.readdirSync(__dirname);
console.log(files);

// OS module
const platform = os.platform(); // OS Platform
console.log(platform);
const architecture = os.arch(); // CPU architecture
console.log(architecture);
const cpuCores = os.cpus(); // list of all cpu cores
console.log(cpuCores);
const cpuCoresNumber = os.cpus().length; // number of cpu cores
console.log(cpuCoresNumber);
const totalMemory = (os.totalmem()/ 1024/1024/1024).toFixed(2); // show total memory in GB
console.log(totalMemory);
const userHomeDirectory = os.homedir();
console.log(userHomeDirectory);

// UUID
const UniqueId = uuidv4();
console.log(UniqueId);
// querystring moduel
 const myquerystring = "sort=price&order=desc&page=2&category=electronics&brand=Apple";
 const parsedValues = querystring.parse(myquerystring);
 console.log(parsedValues);
 const sort = parsedValues.sort;
 console.log(sort);
 const category = parsedValues.category;
 console.log(category);
//  const normalObject = Object.assign({}, parsedValues);
const normalObject ={ ...parsedValues}
 console.log(normalObject);
 