# Gemini Dracula Dark

一个面向 Google Gemini 的 Dracula 风格深色主题。项目同时提供 Chrome 扩展版本和 GreasyFork/Tampermonkey 用户脚本版本。

主题只做视觉样式注入，不接管 Gemini 的点击、输入、拖拽、粘贴或上传逻辑。样式被限制在浏览器报告深色模式时启用，也就是 Chrome/系统处于深色外观时才生效。

## Chrome 扩展安装

1. 打开 Chrome 的 `chrome://extensions/`。
2. 打开右上角的“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择本项目目录。

扩展入口文件是 `manifest.json`，实际注入的样式是 `gemini-dracula.css`。

## 用户脚本安装

在 Tampermonkey、Violentmonkey 或 Greasemonkey 中安装 `gemini-dracula.user.js`。发布到 GreasyFork 后，也可以直接从 GreasyFork 安装。

## 设计说明

- 不申请任何扩展权限。
- Chrome 扩展版本不包含 content script JavaScript。
- 用户脚本版本只负责按深色模式注入/移除 CSS。
- 不监听或拦截 `drag`、`drop`、`paste`、`click`、`input` 等事件。
- 顶部栏尽量交给 Gemini 原生 CSS 和交互层处理，避免影响模型选择、新建对话和更多菜单。

## 文件

- `manifest.json`：Chrome 扩展清单。
- `gemini-dracula.css`：主题样式。
- `gemini-dracula.user.js`：GreasyFork/Tampermonkey 用户脚本。
- `LICENSE`：MIT 许可证。

## 仓库

https://github.com/flowingx/gemini-dracula-dark
