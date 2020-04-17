const url=require('url')
myURL= url.parse("localhost:8080/eVoting/");
const http= require("http");
const fs = ("fs");
const formidable = require ("formidable");
var registration= require("./register");
var log =require ("./log");
var events = require("events");
var eventEmitter = new events.EventEmitter();

http.createServer((req, res)=>{
    const form = formidable({multiple: true});
    if(req.url === '/info'&& req.method.toLowerCase()==="vote"){
        form.parse(req,(err, fields)=>{
            res.writeHead(500,{"content-type": "text/html"});
            res.end(`
            <!Doctype html>
            <html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <title> Voting System</title>
</head>
<body>
<div class="container">
<div class="row">
  <div class="col-md-3"></div>
  <div class="col-md-6">
    <div class="card">
      <div class="card-body">
        <h2 class="card-text">
           ${fields.InputName.toUpperCase()} click any below to vote your choice
        </h2>
        <button class="btn btn-primary">Yomba Youth Development Movement (YYDM)</button>
        <button class="btn btn-primary">Nfebe Fundamentals Must Change (NFMC)</button>
        <button class="btn btn-primary">Ekolle Empower Us (EEU)</button>
        <button class="btn btn-primary">Ekolle Empower Us (EEU)</button>
      </div>
    </div>
  </div>
  <div class="col-md-3"></div>
</div>
</div>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>
            `)
        });
    }
});
