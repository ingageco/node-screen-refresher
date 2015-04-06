var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

	res.sendfile('index.html');


});




io.on('connection', function(socket){


	console.log('a user connected');


	socket.on('refresh clicked', function(data){
		console.log('refresh button was clicked');

		io.emit('force refresh', data);
	});

	socket.on('disconnect', function(){
    	console.log('user disconnected');
    });


});





http.listen(3000, function(){

	console.log('listening on *:3000');

});