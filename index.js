
// Servidor web básico
var http = require('http');
var PORT = 8001;
var HOST = '127.0.0.1';
var num = 0;

http.createServer( function (req, res) {
	console.log('Alguien se ha conectado');
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hola cliente ' + num);
	num++;
	
}).listen(PORT, HOST);

console.log('Servidor funcionando en: ' + HOST +':'+ PORT);
