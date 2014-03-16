var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
    var result = url.parse(request.url, true);
    
    if(result.pathname ==  '/contato'){
	fs.readFile(__dirname + "/contato.html", function(err, html){
	    response.writeHead(200, {'Content-Type':'text/html'});
	    response.write(html);
	    response.end();
	});
    } else if(result.pathname == '/artigos'){
	fs.readFile(__dirname + "/artigos.html", function(err, html){
	    response.writeHead(200, {'Content-Type': 'text/html'});
	    response.write(html);
	    response.end();
	});
    } else {
	fs.readFile(__dirname + "/erro.html", function(err, html){
	    response.writeHead(200, {'Content-Type':'text/html'});
	    response.write(html);
	    response.end();
	});
    }

});

server.listen(3000, function(){
    console.log("It's working!!");
});
