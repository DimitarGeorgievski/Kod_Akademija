// require module to work with fil system 
const fs = require("fs");

// file path 

const filePath = "./test.txt";
module.exports = {
    addText: function(text){
        fs.writeFile(filePath,text,function(err){
            if(err){
                console.log(err);
                return;
            }
            console.log("The file is saved");
        })
    },
    appendText: function(text){
        fs.appendFile(filePath,text,function(err){
            if(err){
                console.log(err);
                return
            }
            console.log("the text is added to the file ")
        })
    },
    readText: function(){
        return fs.readFileSync(filePath, {enconding: 'utf-8'})
    }
    }
