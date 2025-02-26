import { printGreen,printRed,printYellow } from "./chalk.js";
//Chalk
function simulateServerOperations(){
    const isServerRunning = false;
    const isDatabaseConnected = true;
    const isCacheLow = true;
    if(isServerRunning){
        printGreen("Success: Server is running on port 3000");
    }
    else{
        printRed("Error: Server failed to start.")
    }
    if(!isDatabaseConnected){
        printRed("Error: Unable to connect to database");
    }
    else{
        printGreen("Success: Database is connected.")
    }
    if(isCacheLow){
        printYellow("Warning: The Cache is very low");
    }
}
simulateServerOperations();