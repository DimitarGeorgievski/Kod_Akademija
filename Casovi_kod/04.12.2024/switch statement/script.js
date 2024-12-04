let day = 2;
// if (day === 1){
//     console.log("Monday");
// }
// else if (day ===2){
//     console.log("Tuesday");
// }
// else if (day ===3){
//     console.log("Wednesday");
// }
// else if (day ===4){
//     console.log("Thursday");
// }
// else if (day ===5){
//     console.log("Friday");
// }
// else if (day ===6){
//     console.log("Saturday");
// }
// else if (day ===7){
//     console.log("Sunday");
// }
// else{
//     console.log("Not valid day");
// }

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//         default:
//             console.log("Not a valid day")
//             break;
// }
switch(day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Its workday");
        break;
    case 6:
        console.log("Its weekend");
        break;
    case 7:
        console.log("Its weekend");
        break;
        default:
            console.log("Not a valid day")
            break;
}