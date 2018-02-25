'use strict'

console.log('read app....')

const WebSocket = require('ws')
const fs = require('fs')

const socket = new WebSocket('ws://forever-hackchu.mybluemix.net/ws/example');

socket.addEventListener('open', function (event) {
	console.log('socket open....')
	const audio = fs.createReadStream('./data/001-sibutomo.mp3')
	socket.send(audio)
});

socket.addEventListener('message', function (event) {
	console.log('Message from server', event.data);
});
