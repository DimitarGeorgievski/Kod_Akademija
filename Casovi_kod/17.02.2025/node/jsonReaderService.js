const fs = require("fs");
const {json} = require("stream/consumers")
const filename = "jsonDatabase.txt";
const service = {
    addData: function(data){
        let strData = JSON.stringify(data);
        fs.writeFile(filename, strData, function(err){
            if(err){
                console.log(err);
                return;
            }
            else{
                console.log("The data is saved1");
            }
        })
    },
    appendData: function(data){
        let readData = this.readData();
        let newData = {...readData, ...data};
        let strData = JSON.stringify(newData);
        fs.writeFileSync(filename,strData,function(err){
            if(err){
                console.log(err);
                return;
            }
            else{
                console.log("The data is successfully appended to the file");
            }
        });
    },
    readDat: function(){
        let strData = fs.readFileSync(filename,{encoding: "utf-8"});
        return JSON.parse(strData);
    }
};
module.exports = service;