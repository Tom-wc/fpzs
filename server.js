// 简单的HTTP服务器 - 增强版
const http = require('http');
const fs = require('fs');
const path = require('path');

// 端口配置：支持环境变量或默认8000
// 生产环境建议使用80(HTTP)或443(HTTPS)
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
    // 解码URL,处理中文路径
    let requestUrl = decodeURIComponent(req.url);
    
    // 移除查询参数
    const urlParts = requestUrl.split('?');
    requestUrl = urlParts[0];
    
    // 处理根路径
    let filePath = '.' + requestUrl;
    if (filePath === './' || filePath === '.') {
        filePath = './index.html';
    }
    
    // 如果是目录,尝试加载index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // 日志记录
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} -> ${filePath}`);

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                console.log(`[404] 文件不存在: ${filePath}`);
                // 尝试返回404页面
                fs.readFile('./404.html', (err404, content404) => {
                    if (!err404) {
                        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end(content404, 'utf-8');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end('<h1>404 - 文件未找到</h1><p>请求的文件不存在: ' + req.url + '</p>', 'utf-8');
                    }
                });
            } else {
                console.error(`[500] 服务器错误: ${error.code} - ${filePath}`);
                res.writeHead(500);
                res.end('服务器错误: ' + error.code, 'utf-8');
            }
        } else {
            // 添加缓存控制头
            const headers = {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Access-Control-Allow-Origin': '*'
            };
            res.writeHead(200, headers);
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('');
    console.log('====================================');
    console.log('  发票打印助手 - 服务器已启动');
    console.log('====================================');
    console.log('');
    console.log('  访问地址:');
    console.log('  本地:   http://localhost:' + PORT + '/index.html');
    console.log('  本地:   http://127.0.0.1:' + PORT + '/index.html');
    console.log('  功能页: http://localhost:' + PORT + '/main.html');
    console.log('');
    console.log('  环境: ' + (process.env.NODE_ENV || 'development'));
    console.log('  端口: ' + PORT);
    console.log('');
    console.log('====================================');
    console.log('');
    console.log('  按 Ctrl+C 停止服务器');
    console.log('');
});

// 错误处理
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`错误: 端口 ${PORT} 已被占用`);
        process.exit(1);
    } else {
        console.error('服务器错误:', err);
    }
});

// 优雅关闭
process.on('SIGTERM', () => {
    console.log('\n正在关闭服务器...');
    server.close(() => {
        console.log('服务器已关闭');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\n正在关闭服务器...');
    server.close(() => {
        console.log('服务器已关闭');
        process.exit(0);
    });
});


