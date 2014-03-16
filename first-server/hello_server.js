var http = require('http');

var workingRequest = function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello World</h1>');
    response.end();
};

var server = http.createServer(workingRequest);

var turnOn =  function(){
    console.log("It's working!");
}

server.listen(3000, turnOn);
