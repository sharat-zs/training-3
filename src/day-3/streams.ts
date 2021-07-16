import { EventEmitter } from 'events'
import fs from 'fs'
import { Stream } from 'stream'

const emitter = new EventEmitter()

// emitter.on('init', () => console.log('init'))

// setTimeout(() => emitter.emit('init'), 1000)

const stream = fs.createReadStream('./dummy.txt')
stream.on('data', (chunk) => console.log(chunk.toString()))

const writeStream = fs.createWriteStream('./dummy.txt')
// writeStream.on('data')

const readableStream = new Stream.Readable({
  read() { }
})

const writableStream = new Stream.Writable()
writableStream._write = (chunk, _encoding, cb) => {
  console.log(chunk.toString())
  cb()
}

readableStream.pipe(writableStream)
readableStream.push('hi')
readableStream.push('hello')
