var http = require('http');
var url = require('url');
var fs = require('fs');

function readFile(name, response){
    fs.readFile(__dirname + "/" + name + ".html", function(err, html){
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write(html);
	response.end();
    });
}

var server = http.createServer(function(request, response){
    var result = url.parse(request.url, true);
    
    if(result.pathname ==  '/contato'){
	readFile('contato', response);
    } else if(result.pathname == '/artigos' || result.pathname == '/'){
	readFile('artigos', response);
    } else {
	readFile('erro', response);
    }

});

server.listen(3000, function(){
    console.log("It's working!!");
});
