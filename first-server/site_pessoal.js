var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    // The const __dirname return application's root folder
    fs.readFile(__dirname + '/index.html', function(err, html){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(html);
	response.end();
    });
});

server.listen(3000, function(){
    console.log("It's working!");
});