var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    if(request.url == '/'){
	response.write('<h1>Main Page</h1>');
    } else if(request.url == '/welcome') {
	response.write('<h1>Welcome :)</h1>');
    } else {
	response.write('Page not found!!');
    }
    response.end();
});

server.listen(3000, function(){
    console.log("It's working");
});
