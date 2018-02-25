'use strict'

console.log('read app....')

// dependent library.
const fs = require('fs')
const cp = require('child_process')

// flac installed check.
const hasFlac = false
try {
  hasFlac = !!cp.execSync('which flac').toString().trim()
} catch (ex) {
  console.log('flac not installed.')
}

// recording ( usb mic )
const mic = cp.spawn('arecord', ['--device=plughw:0,0', '--format=S16_LE', '--rate=44100', '--channels=2']) //, '--duration=10'
mic.stderr.pipe(process.stderr) // FIXME: debug code
mic.stdout.pipe(fs.createWriteStream('debug-audio.wav'));

