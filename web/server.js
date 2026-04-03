const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const webDir = __dirname;

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
};

const server = http.createServer((req, res) => {
  const requestedPath = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join(webDir, requestedPath);
  const extension = path.extname(filePath);
  const contentType = mimeTypes[extension] || "text/plain";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found.");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`Web project running at http://localhost:${port}`);
});
