import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  const stream = fs.createReadStream('./dummy.txt')
  stream.pipe(res)
})

server.listen(3000, () => console.log('server started'))

//make one network call
// from that network call, get data and do aothercall or db query
// retun that as response

