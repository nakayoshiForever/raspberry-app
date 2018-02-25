'use strict'

console.log('read app....')

// dependent library.
const WebSocket = require('ws')
const fs  = require('fs')
const cp  = require('child_process')
 

const socket = new WebSocket('ws://forever-hackchu.mybluemix.net/ws/example');

socket.addEventListener('message', function (event) {
  console.log('Message from server', event.data)
})

socket.addEventListener('open', function (event) {
    console.log('socket open....')
    const audioData = fs.createReadStream('debug-audio.wav', {buffer: 1})
    audioData.on('data', function(buffer) {
        console.log(buffer)
        socket.send(buffer)
    })
    audioData.on('end', () => {
        console.log('read stream end called.')
    })
})

socket.addEventListener('close', function(event) {
  socket.close()
  console.log('WS close...', event.data)
})
