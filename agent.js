
/* 1r Ejemplo
 * 
 *  Autor: Chegarra
 * 
 */
 
var net = require('net');

var agent = net.connect({port:8000}, function() {
	console.log('Agente conectado');
		
	agent.write('Mundo\r\n');
});
	
		
agent.on('data', function(data) {
		
	console.log(data.toString());
	
	agent.end();
});
			
agent.on('end', function() {
	console.log('Cliente desconectado');
});				

