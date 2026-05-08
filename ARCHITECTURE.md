# 发票打印助手 - 软件架构与使用报告

**版本**: V6.0.0  
**类型**: 纯前端 Web 应用（静态部署）  
**运行环境**: 现代浏览器（Chrome/Edge/Firefox）

---

## 一、项目概述

发票打印助手是一款电子发票批量处理工具，支持 PDF 发票的上传、识别、合并、统计、报销单生成和打印。全部逻辑在浏览器端完成，无需后端服务器处理数据，保障用户隐私。

---

## 二、项目结构

```
github6.5.1/
├── index.html                 # 营销落地页（首页）
├── main.html                  # 核心功能页（发票处理主界面）
├── 404.html                   # 404 错误页
├── server.js                  # Node.js 本地开发服务器
├── 启动服务器.bat              # Windows 一键启动服务器
├── 打开浏览器.bat              # Windows 一键打开页面
├── manifest.json              # PWA 清单
├── robots.txt                 # 搜索引擎爬虫规则
├── sitemap.xml                # 站点地图
├── nginx.conf                 # Nginx 生产部署配置
├── .htaccess                  # Apache 部署配置
├── favicon.ico                # 网站图标
├── icon0.svg                  # SVG 图标
├── icon1.png                  # PNG 图标 96x96
├── apple-icon.png             # Apple Touch 图标 180x180
├── README.md                  # 项目说明
│
├── static/
│   ├── css/
│   │   ├── fonts.css          # Geist 字体定义（Sans + Mono）
│   │   ├── tailwind.css       # Tailwind CSS 主样式
│   │   └── react-pdf.css      # PDF 预览注解层样式
│   │
│   ├── font/
│   │   ├── geist-sans-latin.woff2       # Geist Sans 拉丁字符
│   │   ├── geist-sans-latin-ext.woff2   # Geist Sans 拉丁扩展
│   │   ├── geist-sans-cyrillic.woff2    # Geist Sans 西里尔字符
│   │   ├── geist-mono-latin.woff2       # Geist Mono 拉丁字符
│   │   ├── geist-mono-latin-ext.woff2   # Geist Mono 拉丁扩展
│   │   └── geist-mono-cyrillic.woff2    # Geist Mono 西里尔字符
│   │
│   ├── js/
│   │   ├── webpack-runtime.js           # Webpack 模块加载运行时
│   │   ├── react-dom.js                 # React DOM 渲染引擎
│   │   ├── nextjs-router.js             # Next.js App Router
│   │   ├── app-bootstrap.js             # 应用启动入口
│   │   ├── framer-motion.js             # Framer Motion 动画库
│   │   ├── pdfjs-lib.js                 # PDF.js 渲染库
│   │   ├── invoice-tool-ui.js           # 发票工具核心 UI 组件
│   │   ├── countly-analytics.js         # Countly 统计分析
│   │   ├── ua-parser.js                 # 浏览器 UA 解析
│   │   ├── routing-utils.js             # 路由工具函数
│   │   ├── shared-ui-primitives.js      # Radix UI 基础组件
│   │   ├── dialog-scroll-lock.js        # 对话框与滚动锁定
│   │   ├── dnd-kit-sortable.js          # 拖拽排序功能
│   │   ├── alert-dialog.js              # 警告弹窗组件
│   │   ├── root-layout.js              # 根布局与初始化
│   │   ├── not-found-page.js            # 404 页面组件
│   │   ├── page-entry-invoice.js        # 发票工具路由入口
│   │   ├── polyfills.js                 # 浏览器兼容 polyfills
│   │   │
│   │   └── custom/                      # 自定义业务逻辑（手写）
│   │       ├── expense-report-core.js   # 报销单生成核心
│   │       ├── file-copy-print.js       # 文件复制与打印
│   │       ├── notifications.js         # 通知提示系统
│   │       ├── print-guard.js           # 打印保护逻辑
│   │       └── stats-widget.js          # 统计小部件
│   │
│   ├── chunks/                          # Webpack 代码分割块（RSC payload 引用）
│   │   ├── app/
│   │   │   ├── main/page-entry-invoice.js
│   │   │   ├── root-layout.js
│   │   │   └── not-found-page.js
│   │   └── [与 js/ 同名文件对应]
│   │
│   └── picture/
│       └── qywxkf.png                  # 客服微信二维码
```

---

## 三、技术架构

### 前端框架层
| 技术 | 用途 |
|------|------|
| Next.js (App Router) | 页面路由与 SSR 框架 |
| React 18 | UI 组件渲染 |
| Tailwind CSS | 样式系统 |
| Framer Motion | 动画效果 |
| Radix UI | 无障碍基础组件 |
| shadcn/ui | UI 组件库 |

### 核心功能库
| 技术 | 用途 |
|------|------|
| PDF.js (pdfjs-dist) | PDF 文件渲染与预览 |
| pdf-lib | PDF 创建、合并、编辑 |
| dnd-kit | 发票拖拽排序 |
| Countly | 用户行为统计 |

### 部署方式
- **本地开发**: Node.js HTTP 服务器 (server.js, 端口 8000)
- **生产部署**: Nginx 反向代理 + 静态资源本地托管

---

## 四、核心功能模块

### 1. 发票上传与预览
- 支持拖拽上传和点击选择 PDF 文件
- 使用 PDF.js 在 Canvas 上渲染预览
- 支持多文件批量上传

### 2. 发票信息识别
- 自动提取发票金额、日期、项目名称、车牌号等
- 支持增值税发票、非税收入票据等多种类型

### 3. 发票统计
- 自动汇总发票数量、总金额
- 按项目分类统计
- 支持 CSV 数据导出

### 4. 报销单生成
- **自动生成**: 直接根据识别结果生成标准报销单
- **手动确认生成**: 弹窗编辑项目名称和金额后再生成
- 报销单与发票自动合并为一个 PDF
- 智能归类：相同车牌号+项目名称的发票自动合并

### 5. PDF 合并与打印
- 多张发票合并为单个 PDF
- 报销单嵌入发票 PDF（奇数页利用空白区域）
- 一键打印、一键下载

### 6. 拖拽排序
- 支持拖拽调整发票顺序
- 实时预览排序结果

---

## 五、页面说明

| 页面 | 路径 | 功能 |
|------|------|------|
| 营销首页 | `/index.html` | 产品介绍、功能展示、引导进入工具 |
| 功能主页 | `/main.html` | 发票上传、处理、合并、打印的完整工作台 |
| 404 页面 | `/404.html` | 友好的错误提示页 |

---

## 六、使用方法

### 本地运行

1. **启动服务器**：双击 `启动服务器.bat`（需要已安装 Node.js）
2. **打开页面**：双击 `打开浏览器.bat`，或手动访问：
   - 首页: `http://localhost:8000/index.html`
   - 功能页: `http://localhost:8000/main.html`

### 使用流程

1. 打开功能页 (`main.html`)
2. 上传 PDF 格式的电子发票（支持批量）
3. 系统自动识别发票信息并显示统计
4. 可拖拽调整发票顺序
5. 点击「自动生成报销单」或「手动确认生成报销单」
6. 预览合并后的 PDF（报销单 + 发票）
7. 下载或打印

### 生产部署

使用 Nginx 部署，配置文件已提供 (`nginx.conf`)：
- 静态文件缓存策略已配置
- 支持 HTTPS
- 支持 Gzip 压缩

---

## 七、自定义业务模块说明

`static/js/custom/` 目录下为手写业务逻辑，独立于框架代码：

| 文件 | 功能 |
|------|------|
| `expense-report-core.js` | 报销单 HTML 生成、PDF 合并、智能归类 |
| `file-copy-print.js` | 文件复制到剪贴板、触发打印 |
| `notifications.js` | 全局通知/Toast 提示 |
| `print-guard.js` | 打印前检查与保护 |
| `stats-widget.js` | 发票统计面板渲染 |

---

## 八、注意事项

1. **隐私安全**: 所有发票处理在浏览器本地完成，不上传任何文件到服务器
2. **浏览器兼容**: 推荐使用 Chrome 90+ / Edge 90+ / Firefox 90+
3. **PDF 渲染**: 依赖 PDF.js CDN 资源，首次加载需要网络
4. **字体**: 使用 Geist 字体族，通过本地 woff2 文件加载
5. **CDN 依赖**: webpack runtime 中配置了 CDN 前缀，离线使用需修改为本地路径
