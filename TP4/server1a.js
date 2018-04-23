let http = require('http');

http.createServer( (req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Hello world</p>");
  res.end();
}).listen(8000);
