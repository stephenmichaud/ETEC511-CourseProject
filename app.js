const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	
const canvasAPI = require('node-canvas-api')


  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  canvasAPI.getSelf()
  .then(self => res.end(JSON.stringify(self)));

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});