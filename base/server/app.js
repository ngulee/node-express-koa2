const http = require('http');

const app = http.createServer(function(request, response) {
  console.log('request:', request)
  const { url }
  response.writeHead(200, { 'Content-type': 'text/html;charset-utf-8' });
  response.end('Hello World');
})

app.listen(8081);

console.log('Server running at http://127.0.0.1:8081');