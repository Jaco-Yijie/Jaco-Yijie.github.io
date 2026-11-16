# LINK_AUDIT.md — 空链接审计与替换记录

审计对象：`site/index.html`（线上部署文件）
审计日期：2026-11-16
结果：**改动前 `href="#"` 共 11 处 → 改动后 0 处**

## 一、作品区（9 处）

| # | 链接文字 | 原 href | 改成 | 原因 |
|---|---------|---------|------|------|
| 1 | Arcana · 沉浸式 AI 塔罗（标题） | `#` | `https://github.com/Jaco-Yijie/arcana` | 标题应可点开看源码；仓库真实存在 |
| 2 | 案例详情（Arcana） | `#` | `https://github.com/Jaco-Yijie/arcana` | 无独立案例页；仓库 README 即最完整说明 |
| 3 | 在线体验（Arcana） | `#` | `https://arcana-e190.onrender.com` | 演示地址取自 `src/data/links.ts`，实测 HTTP 200（Render 冷启动较慢，首次打开约 30s） |
| 4 | A 股板块新闻监控（标题） | `#` | `https://github.com/Jaco-Yijie/stock_news` | 同上 |
| 5 | 案例详情（A 股新闻） | `#` | `https://github.com/Jaco-Yijie/stock_news` | 同上 |
| 6 | 在线体验（A 股新闻） | `#` | `https://stocknews-c8bdpgjep9n7zrxkscggbh.streamlit.app/` | Streamlit Cloud 已上线，实测 303 → 应用页 |
| 7 | 拼多多卖家利润试算（标题） | `#` | **改为纯文本（移除链接）** | 该项目无独立仓库，标题不应指向空地址 |
| 8 | 案例详情（拼多多） | `#` | **移除按钮** | 无仓库、无案例页；按「没有就移除，不留死链」处理 |
| 9 | 在线体验（拼多多） | `#` | `https://udify.app/chat/NTlMX91jzOFzzQpo` | 真实对话式 Demo，实测 200 |

## 二、内容区（2 处）

| # | 链接文字 | 原 href | 改成 | 原因 |
|---|---------|---------|------|------|
| 10 | 实验说明（创作实验） | `#` | **移除按钮** | 无对应说明文档；同段保留「原片外开」指向 `/videos/jaco-motion.mp4` |
| 11 | 完整方法与失败记录（评测方法） | `#` | `https://github.com/Jaco-Yijie/Jaco-Yijie.github.io/blob/main/docs/CONTENT_AUDIT.md` | 仓库内唯一记录「已验证 / 待核实 / 失败项」的文档，34KB，公开可读 |

## 三、保留的锚点（非空链接，未改动）

`#top` / `#work` / `#experience` / `#motion` / `#method` / `#about` / `#contact` —— 均为页内锚点，目标区块真实存在。

## 四、未能修复的部分（需你决定）

- 拼多多**案例详情**已移除。若你希望恢复，需要新建一个案例页或独立仓库，我可以在下一轮补。
- 创作实验的**实验说明**已移除。若你有过程文档（分镜、Prompt 记录），给我即可接回。
