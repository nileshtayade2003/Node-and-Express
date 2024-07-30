let http = require('http');

http.createServer(function(req,res){
  res.write('Hello From Server'); //write a response to the client
  res.end(); //end response
}).listen(8000); //the server listen for http requests on port 6000

//acces address = localhost:8000   in chrome
//to run = node ./1 server.js
