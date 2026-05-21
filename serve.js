// LBC Learning — static dev server.
//
// Serves the repo root as a static site, resolving directory paths to their
// index.html (so /, /courses/statlan/ etc. work). No backend, no data store.
//
// Usage:  node serve.js [port]        (default 4173)

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const port = Number(process.argv[2]) || 4173;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8'
};

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(body);
}

function streamFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    'Content-Type': mimeTypes[ext] || 'application/octet-stream',
    'Cache-Control': 'no-cache'
  });
  fs.createReadStream(filePath).pipe(res);
}

http.createServer(function (req, res) {
  try {
    const url = new URL(req.url, 'http://' + req.headers.host);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';

    const filePath = path.normalize(path.join(ROOT, pathname.replace(/^\//, '')));
    if (!filePath.startsWith(ROOT)) { send(res, 403, 'Forbidden'); return; }

    fs.stat(filePath, function (err, stat) {
      if (err || !stat.isFile()) { send(res, 404, 'Not found: ' + pathname); return; }
      streamFile(res, filePath);
    });
  } catch (err) {
    send(res, 500, err.message || String(err));
  }
}).listen(port, '127.0.0.1', function () {
  console.log('LBC Learning — http://127.0.0.1:' + port + '/');
});
