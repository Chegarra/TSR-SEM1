# 1r Ejemplo
# Realizando un cambio para la rama 'independiente'
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
	console.log('.');
});				

