var fs = require ("fs");
var events = require("events");
var eventEmitter = new events.EventEmitter();

exports.writetoFile = (dataToWrite)=>{
    fs.readFile('log.txt', (err, data)=>{
        if(err){
           throw err ;
        }else{
            var voterData = data.toString()+ ','+ dataToWrite;
            fs.writeFile('log.txt', voterData, (err)=>{
                if(err)
                    throw err;
            })
        }
    });
}