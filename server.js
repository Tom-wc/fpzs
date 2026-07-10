const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.mjs': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.txt': 'text/plain; charset=utf-8',
    '.xml': 'application/xml',
    '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    let requestUrl = decodeURIComponent(req.url);
    const urlParts = requestUrl.split('?');
    requestUrl = urlParts[0];

    let filePath = '.' + requestUrl;
    if (filePath === './' || filePath === '.') {
        filePath = './index.html';
    }

    if (path.extname(requestUrl).toLowerCase() === '.txt' && !fs.existsSync(filePath)) {
        const htmlEquiv = filePath.replace(/\.txt$/, '.html');
        if (fs.existsSync(htmlEquiv)) {
            const target = requestUrl.replace(/\.txt$/, '.html');
            res.writeHead(302, { 'Location': target, 'Cache-Control': 'no-store' });
            res.end();
            return;
        }
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', (err404, content404) => {
                    if (!err404) {
                        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end(content404, 'utf-8');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end('<h1>404</h1><p>' + req.url + '</p>', 'utf-8');
                    }
                });
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + error.code, 'utf-8');
            }
        } else {
            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Access-Control-Allow-Origin': '*'
            });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('Server running:');
    console.log('  index: http://localhost:' + PORT + '/index.html');
    console.log('  main:  http://localhost:' + PORT + '/main.html');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error('Port ' + PORT + ' already in use');
        process.exit(1);
    } else {
        console.error('Server error:', err);
    }
});

process.on('SIGTERM', () => server.close(() => process.exit(0)));
process.on('SIGINT', () => server.close(() => process.exit(0)));
