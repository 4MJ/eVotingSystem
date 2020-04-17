var fs = require('fs');
const url=("url");

var allVoter = [];
var allDataBase = fs.readdirSync('db');
var voters = "";
allDataBase.forEach((value)=>{
    allVoter.push(value);
    fs.readFile(`db/${value}`, (err, data)=>{
        if(err){
            throw err;
        }else{
            let voter = JSON.parse(data.toString());
            voters+=`<li class ="list-group-item">${voter.inputName}</li>`
            exports.data = voters;
        }
    })
})