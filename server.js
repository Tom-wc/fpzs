// 简单的HTTP服务器
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>404 - 文件未找到</h1><p>请求的文件不存在: ' + req.url + '</p>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('服务器错误: ' + error.code, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log('');
    console.log('====================================');
    console.log('  发票打印助手 - 本地服务器已启动');
    console.log('====================================');
    console.log('');
    console.log('  访问地址:');
    console.log('  首页:   http://localhost:' + PORT + '/index.html');
    console.log('  功能页: http://localhost:' + PORT + '/main.html');
    console.log('');
    console.log('====================================');
    console.log('');
    console.log('  按 Ctrl+C 停止服务器');
    console.log('');
});


