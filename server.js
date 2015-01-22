var net = require('net');

var server = net.createServer(
	function(c) {
		console.log('Servidor conectado');
		
		c.on('end', function() {
			console.log('Servidor desconectado');
		});
		
		c.write('Hola\r\n');
		c.pipe(c);
	});
	
server.listen(8000, function(){
	console.log('Servidor escuchando...');
});

		
