# DESIGN_SYSTEM.md — AI Product Portfolio 设计系统

> **版本**：v1（2026-08-11）· PHASE 2 交付物
> **上游**：`PORTFOLIO_PRD.md` → 本文件只做**设计定义**，不含实现代码。
> **参考**：Mark Spencer Jordan Portfolio 的**信息层级与 Proof-first 叙事节奏**。不复制其文案、配色、组件与布局。

---

## 1. Visual Direction（视觉方向）

### 1.1 一句话定义

> **Editorial data document.**
> 一份被精心排版的证据文档——不是一个作品集模板，也不是一个 SaaS 落地页。

### 1.2 五个设计关键词

| 关键词 | 落地方式 |
|---|---|
| **Evidence-driven** | 数字是视觉主角。每屏至少有一个可被记住的数字 |
| **Editorial** | 强 Typography、大留白、细分隔线、衬线正文；像杂志内页而非 Dashboard |
| **Premium** | 克制的单一强调色、精确的对齐、极少的圆角与阴影 |
| **Restrained** | 没有渐变背景、没有玻璃拟态、没有装饰性插画 |
| **System Thinking** | 组件之间共享同一套间距与字号阶梯，可见的秩序感本身就是能力证明 |

### 1.3 三条硬性设计决策

| 决策 | 内容 | 理由 |
|---|---|---|
| **D1 · 深色单主题** | 只做 Dark，**不做主题切换** | 单一视觉身份，避免双套 QA；深色让大字号数字更有分量。浅色 Token 已预留（§3.6），需要时再启用 |
| **D2 · 单一强调色** | 全站只有一个 accent，其余全部中性灰阶 | 强调色只用于「可交互」与「关键数字」，出现即有意义 |
| **D3 · 分隔线优先于卡片** | 主要用 1px hairline 划分区块，而非到处套卡片 | 卡片堆叠是模板感的主要来源；细线是编辑设计的语言 |

### 1.4 明确不做

❌ 渐变背景 / 光晕 / 玻璃拟态　❌ 3D 粒子 / 浮动物件 / 光标特效　❌ 复杂 loading 动画
❌ 圆角 > 12px 的大圆角　❌ 彩色标签体系（多色 tag）　❌ 技能百分比条 / 进度环
❌ 大面积投影　❌ 图标装饰性堆砌　❌ 首屏轮播

---

## 2. Typography（字体系统）

### 2.1 字族

| 角色 | 字体 | 用途 | 加载方式 |
|---|---|---|---|
| **Display / UI** | **Inter Tight**（Variable） | Hero、标题、数字、导航、按钮、标签 | 自托管 woff2，`font-display: swap` |
| **Prose** | **Source Serif 4**（Variable） | Case Study 长正文、About 正文、引用块 | 自托管 woff2 |
| **Mono** | **JetBrains Mono** | 代码、命令、架构图、变量名、评测输出 | 自托管 woff2，仅 400/500 两档 |
| **中文** | 系统栈 `"PingFang SC", "Noto Sans SC", sans-serif` | 中文副标题与中文术语 | 系统字体，不额外加载 |

> **为什么 sans + serif 双字族**：UI 用无衬线保证信息密度，Case Study 正文用衬线制造「阅读文档」的编辑感——这正是本站与「学生作品集模板」的直觉分界线。
> **为什么 Inter Tight 而非 Inter**：Tight 的字宽更窄、字距更紧，大字号数字（72px 的 `100M+`）排在一起时更有版面张力。

### 2.2 字号阶梯（Desktop ≥1200px）

| Token | Size / Line-height | Weight | Tracking | 用途 |
|---|---|---|---|---|
| `display-xl` | 88 / 0.94 | 600 | −0.035em | Hero H1 |
| `display-l` | 56 / 1.02 | 600 | −0.030em | 页面主标题（Case Study / AI Evals） |
| `display-m` | 40 / 1.08 | 600 | −0.025em | Section H2 |
| `metric` | **72 / 1.00** | 600 | −0.030em | **Proof Metric 数字**（tabular-nums） |
| `metric-sm` | 40 / 1.00 | 600 | −0.025em | 项目卡内 Proof 数字 |
| `heading-l` | 28 / 1.20 | 600 | −0.018em | 项目卡标题、Case Study H3 |
| `heading-m` | 20 / 1.30 | 600 | −0.012em | 卡片标题、Capability 标题 |
| `body-l` | 18 / 1.65 | 400 | 0 | Hero supporting、区块引导语 |
| `body` | 16 / 1.70 | 400 | 0 | UI 正文 |
| `body-s` | 14 / 1.60 | 400 | 0 | 次要说明、卡片描述 |
| `prose` | **19 / 1.75** | 400 | 0 | **Case Study 正文（Serif）** |
| `prose-quote` | 24 / 1.50 | 400 | −0.010em | 引用块（Serif，italic 可选） |
| `label` | **12 / 1.35** | 500 | **+0.10em** | **Proof Metric 标签**（UPPERCASE） |
| `eyebrow` | 12 / 1.40 | 500 | +0.14em | Eyebrow、区块编号（UPPERCASE） |
| `caption` | 13 / 1.50 | 400 | 0 | 图注、元信息 |
| `mono` | 14 / 1.60 | 400 | 0 | 代码、命令 |
| `mono-s` | 12.5 / 1.55 | 400 | 0 | 架构图内文字 |

### 2.3 响应式字号

| Token | ≥1200 | 768–1199 | <768 |
|---|---|---|---|
| `display-xl` | 88 | 64 | **44** |
| `display-l` | 56 | 44 | 34 |
| `display-m` | 40 | 34 | 28 |
| `metric` | **72** | 56 | **44** |
| `metric-sm` | 40 | 34 | 30 |
| `heading-l` | 28 | 24 | 22 |
| `prose` | 19 | 18 | 17 |
| `label` | 12 | 12 | **11** |

> 移动端 `metric` 仍保持 44px，是 `label`(11px) 的 **4 倍**——即使在最小屏幕，数字的主导地位也不能被削弱。

### 2.4 排版规则

| 规则 | 值 |
|---|---|
| 正文最大行宽 | **68ch**（Case Study 正文列） |
| UI 文本最大行宽 | 60ch |
| Hero Statement 最大宽度 | 16ch（强制换行，制造版面节奏） |
| 数字全部使用 | `font-variant-numeric: tabular-nums` |
| 标题禁止 | `text-transform: uppercase`（仅 `label` / `eyebrow` 使用大写） |
| 中英混排 | 中文副标题字号 = 英文标题的 **0.62 倍**，颜色降一级 |
| 段落间距 | `prose` 段落之间 `24px` |

---

## 3. Color System（色彩系统）

### 3.1 中性色阶（Dark，基础）

| Token | Hex | 用途 |
|---|---|---|
| `--bg` | `#0A0B0D` | 页面底色（近黑，微冷，非纯黑） |
| `--surface-1` | `#101215` | 卡片 / 区块底 |
| `--surface-2` | `#16181C` | Hover 态、代码块底 |
| `--surface-3` | `#1C1F24` | 输入框、内嵌块 |
| `--border` | `#1E2126` | 默认 hairline |
| `--border-strong` | `#2A2E35` | 强分隔、卡片描边 |
| `--text-1` | `#F4F6F8` | 标题、数字、主要正文 |
| `--text-2` | `#A2AAB5` | 次要正文、描述 |
| `--text-3` | `#7B838F` | 标签、元信息、图注 |

### 3.2 强调色（单一）

| Token | Hex / 值 | 用途 |
|---|---|---|
| `--accent` | `#8AA2FF` | 链接、箭头、关键数字中的符号、focus ring |
| `--accent-hover` | `#A3B6FF` | Hover |
| `--accent-press` | `#6E88F0` | Active |
| `--accent-surface` | `rgba(138,162,255,0.10)` | 强调背景（tag hover、选中态） |
| `--accent-border` | `rgba(138,162,255,0.30)` | 强调描边 |
| `--accent-on` | `#0A0B0D` | accent 填充上的文字色 |

> **色相选择**：柔和靛蓝（indigo-blue），饱和度刻意压低。它足够「技术感」，但不像纯 cyan 那样廉价，也不与常见 SaaS 蓝撞车。

### 3.3 强调色使用配额（重要）

> **一屏之内，accent 出现不超过 3 处。**

| 允许使用 accent 的地方 | 不允许 |
|---|---|
| 主按钮填充 | 正文强调 |
| 文字链接与箭头 `↗` `→` | 大面积背景 |
| `16 → 2` 中的箭头符号 | 标题着色 |
| Focus ring | 区块分隔线 |
| 当前导航项下划线 | 项目卡整体描边（仅 hover 时） |
| Case Study 章节编号（`01`–`12`） | 图表填充 |

### 3.4 对比度校验（WCAG）

| 前景 / 背景 | 比值 | 等级 |
|---|---|---|
| `--text-1` `#F4F6F8` / `--bg` | ≈ 17.6 : 1 | AAA ✅ |
| `--text-2` `#A2AAB5` / `--bg` | ≈ 8.4 : 1 | AAA ✅ |
| `--text-3` `#7B838F` / `--bg` | ≈ 5.0 : 1 | AA ✅（仅用于 ≥13px） |
| `--accent` `#8AA2FF` / `--bg` | ≈ 8.0 : 1 | AAA ✅ |
| `--accent-on` / `--accent` 填充 | ≈ 8.0 : 1 | AAA ✅ |
| `--text-1` / `--surface-1` | ≈ 15.9 : 1 | AAA ✅ |

> `--text-3` 不得用于 12px 以下文本。`label` 为 12px，因此 `label` 使用 `--text-2`，不用 `--text-3`。

### 3.5 语义色（极少使用）

本站**不引入**成功/警告/错误色。所有状态用中性灰 + accent 表达。
唯一例外：Case Study 中的 **Before / After 对比**——用 `--text-3`（Before，弱化）与 `--text-1` + accent 左边框（After，强调）区分，不用红绿。

### 3.6 浅色主题 Token（预留，v1 不启用）

```
--bg #FBFBFC · --surface-1 #FFFFFF · --surface-2 #F4F5F7
--border #E6E8EC · --border-strong #D5D9E0
--text-1 #0E1116 · --text-2 #4A525E · --text-3 #6B7480
--accent #3B54D6 · --accent-on #FFFFFF
```

---

## 4. Grid（栅格）

### 4.1 基础栅格

| 参数 | Desktop ≥1200 | Tablet 768–1199 | Mobile <768 |
|---|---|---|---|
| 列数 | **12** | 8 | 4 |
| Gutter | 24px | 20px | 16px |
| 页边距 | 48px | 32px | **20px** |
| 内容最大宽 | **1240px** | 100% | 100% |
| 设计画布 | 1440 | 1024 | 390 |

### 4.2 内容列宽约定

| 内容类型 | 栅格跨度 | 最大宽度 |
|---|---|---|
| Hero H1 + Statement | 8 / 12 | 900px |
| Hero Supporting | 6 / 12 | 640px |
| Proof Metrics（4 个） | 每个 3 / 12 | — |
| 项目行卡 | 12 / 12（full-bleed 内容区） | 1240px |
| Case Study 正文列 | 7 / 12（偏左） | **68ch ≈ 720px** |
| Case Study 侧边章节导航 | 2 / 12（sticky） | 180px |
| Case Study 全宽块（架构图 / Before-After） | 11 / 12 | 1100px |
| Capability 卡 | 每个 3 / 12 | — |
| Learning 卡 | 每个 4 / 12 | — |

### 4.3 Case Study 双列结构（≥1200）

```
│←48→│ 01 Overview   │←24→│ 正文列 68ch                │←留白→│
│     │ 02 Problem    │    │                            │      │
│     │ 03 User       │    │                            │      │
│     │ …  (sticky)   │    │                            │      │
   2 col                        7 col                    3 col
```
<1200px 时侧边导航收起为顶部 sticky 的横向章节条。

---

## 5. Spacing（间距）

### 5.1 基础刻度（4px base）

```
xs   4      s   8      sm  12     m   16     ml  20
l    24     xl  32     2xl 40     3xl 48     4xl 64
5xl  80     6xl 96     7xl 128    8xl 160
```

### 5.2 垂直节奏

| 场景 | Desktop | Tablet | Mobile |
|---|---|---|---|
| 区块之间（Section） | **160** | 112 | **80** |
| 区块标题 → 内容 | 48 | 40 | 32 |
| 卡片内边距 | 32 | 28 | 20 |
| 项目行卡上下内边距 | **48** | 36 | 28 |
| 段落之间（prose） | 24 | 24 | 20 |
| Case Study 章节之间 | **96** | 72 | 56 |
| Hero 上下留白 | 上 128 / 下 120 | 96 / 88 | 72 / 64 |

### 5.3 一条硬规则

> **同一层级的元素必须使用同一个间距 Token。**
> 若出现「这里 26px 好像更好看」，说明层级判断错了，不是间距错了。

---

## 6. Hero

### 6.1 结构

```
┌─────────────────────────────────────────────────────────┐
│  ↑ 128                                                   │
│  AI PRODUCT CANDIDATE · DATA SCIENCE      ← eyebrow      │
│  ↑ 24                                                    │
│  Jaco Wang                                ← display-xl   │
│  王一杰                                    ← 0.62x, text-2│
│  ↑ 32                                                    │
│  I build and evaluate                     ← display-l    │
│  practical AI products.                     max 16ch     │
│  ↑ 24                                                    │
│  Data Science student working on AI       ← body-l       │
│  product design, LLM evaluation, prompt     text-2       │
│  systems, and data-driven product           max 640px    │
│  decisions.                                              │
│  ↑ 32                                                    │
│  Universiti Kebangsaan Malaysia ·         ← caption      │
│  Available within 1 week · 6+ month         text-3       │
│  internship                                              │
│  ↑ 40                                                    │
│  [View Selected Work] [Read Case Studies]                │
│  [GitHub ↗] [Resume ↗]                                   │
│  ↓ 120                                                   │
└─────────────────────────────────────────────────────────┘
```

### 6.2 规格

| 项 | 值 |
|---|---|
| 对齐 | **左对齐**，单列（不居中——居中是模板感的来源） |
| 最小高度 | `min-height: 88vh`（不强制 100vh，让 Proof Metrics 露出边缘） |
| 背景 | 纯 `--bg`，无图形、无渐变 |
| H1 与中文名 | 中文名紧跟英文名下方，`margin-top: 4px`，字号 0.62×，`--text-2` |
| Statement | `display-l`，**强制 16ch 换行**——两行断句制造版面节奏 |
| Meta 行 | 三段用 ` · ` 分隔，`--text-3` |
| CTA | 4 个，两行排布（2+2）或一行（视宽度），首个为 primary |
| **滚动提示** | 无。不做向下箭头动画 |

### 6.3 Hero 的一条设计判断

> **Proof Metrics 的第一行数字必须在首屏底部露出约 40–80px。**
> 这是让 HR 继续滚动的唯一诱因——比任何「向下滚动」提示都有效。

---

## 7. Proof Metrics（核心组件）

> 这是全站最重要的组件。**数字的视觉权重必须压倒说明文字。**

### 7.1 布局

**Desktop**：4 列等宽，列之间用 1px 垂直 hairline 分隔（`--border`），首尾无线。
**Mobile**：**2 × 2**，用水平 + 垂直 hairline 划分为田字格。

```
┌──────────┬──────────┬──────────┬──────────┐
│    10    │  16 → 2  │    38    │  100M+   │
│ AI EVAL  │   LLM    │ INDUSTRY │ BEHAVIOR │
│  CASES   │ CONTEXT  │ SECTORS  │   LOGS   │
│          │ VARIABLES│          │          │
└──────────┴──────────┴──────────┴──────────┘
```

### 7.2 组件规格

| 元素 | Token | 颜色 | 说明 |
|---|---|---|---|
| **数字** | `metric` **72/600/−0.03em** | `--text-1` | `tabular-nums`，基线对齐 |
| **标签** | `label` **12/500/+0.10em** | `--text-2` | `UPPERCASE`，最多 3 行 |
| 数字 → 标签间距 | `16px` | | |
| 单元上下内边距 | `40px` | | |
| 分隔线 | `1px` | `--border` | 高度 = 单元高度 − 上下各 8px |

**字号比 = 72 : 12 = 6 : 1**（移动端 44 : 11 = 4 : 1）。这是本组件的核心约束，任何情况下不得低于 **3.5 : 1**。

### 7.3 特殊数字排版

| 数字 | 排版规则 |
|---|---|
| `16 → 2` | 箭头 `→` 字号为数字的 **0.5×**，颜色 `--accent`，左右各 `0.14em` 光学间距，垂直居中于数字 x-height |
| `100M+` | `M+` 字号为数字的 **0.62×**，颜色 `--text-2`，紧贴不加间距 |
| `10` / `38` | 纯数字，无修饰 |
| `64 + 96` | `+` 同 `→` 规则处理（用于 Arcana 项目卡） |
| `~50%` | `~` 字号 0.6×，`--text-3`；`%` 字号 0.62×，`--text-2` |

> **原则**：数字本体永远是 `--text-1` 的满字号；所有符号与单位都降级（字号 + 颜色），让读者第一眼只捕获数值。

### 7.4 变体

| 变体 | 数字字号 | 用途 |
|---|---|---|
| `metric/hero` | 72 | Homepage Proof Metrics |
| `metric/card` | 40 | 项目行卡内的 Proof |
| `metric/inline` | 28 | Case Study 正文中的强调数字 |

### 7.5 Motion

数字入场 **count-up**：从 0 递增到目标值，`900ms`，`ease-out`，随滚动进入视口触发一次。
- `16 → 2`：两个数字分别 count-up，箭头 `fade-in` 延后 300ms
- `100M+`：`M+` 不参与 count-up，随数字一起 fade-in
- `prefers-reduced-motion: reduce` → **直接显示终值，无动画**

---

## 8. Project Cards（项目卡）

### 8.1 形态决策：Editorial Row，而非 Box Card

> 四个项目采用**全宽横向行**，行与行之间用 1px hairline 分隔。
> 理由：盒装卡片网格是作品集模板最强的视觉信号；横向行更像「精选清单」，也给了每个项目更多的信息容量。

### 8.2 Desktop 布局（≥1200）

```
─────────────────────────────────────────────────────────────
                                                        ↑48
01   Seller Profit Calculator                  10
     拼多多新手卖家利润试算助手                  AI EVALUATION CASES
                                                
     Turning an unreliable LLM calculator       16 → 2
     into a deterministic AI product.           LLM CONTEXT VARIABLES

     [AI Product] [LLM Evaluation]              PRD V1–V5
     [Prompt Engineering]                       PRODUCT ITERATIONS

     Case Study ↗    Try Live Demo ↗
                                                        ↓48
─────────────────────────────────────────────────────────────
   ←—————— 7 col ——————→        ←———— 4 col ————→
```

| 区域 | 内容 | 栅格 |
|---|---|---|
| 编号 | `01`–`04`，`eyebrow` 样式，`--text-3` | 1 col |
| 主区 | 英文标题 + 中文副标题 + Subtitle + Tags + CTA | 6 col |
| Proof 区 | 2–3 个 `metric/card` | 4 col，右对齐 |
| 留白 | | 1 col |

### 8.3 规格

| 元素 | Token | 颜色 |
|---|---|---|
| 编号 | `eyebrow` | `--text-3` → hover 变 `--accent` |
| 英文标题 | `heading-l` 28/600 | `--text-1` |
| 中文副标题 | 17px/500（0.62×） | `--text-2` |
| Subtitle | `body` 16 | `--text-2`，最大 46ch |
| Proof 数字 | `metric/card` 40 | `--text-1` |
| Proof 标签 | `label` 12 | `--text-2` |
| 行内边距 | 上下 48 / 左右 0 | |
| 分隔线 | 1px `--border` | 每行顶部，最后一行加底线 |

### 8.4 Hover 态

| 属性 | 变化 | 时长 |
|---|---|---|
| 行背景 | `transparent` → `--surface-1` | 240ms |
| 编号颜色 | `--text-3` → `--accent` | 240ms |
| 标题 | 无位移（保持稳重） | — |
| CTA 箭头 | `translateX(4px)` | 240ms |
| 左侧指示条 | 宽 2px、高 100% 的 `--accent` 竖条从左侧 `scaleY(0)` → `scaleY(1)` | 320ms |

整行可点击（跳 Case Study）；行内的 `Live Demo ↗` / `GitHub ↗` 用 `stopPropagation` 独立跳转。

### 8.5 Mobile 布局（<768）

单列纵向堆叠，顺序：编号 → 英文标题 → 中文副标题 → Subtitle → **Proof 横向 2 列** → Tags → CTA。
Proof 在移动端降为 `metric-sm`(30px)，横向排 2 个一行。

### 8.6 四张卡的 Proof 配置

| # | 项目 | Proof 1 | Proof 2 | Proof 3 |
|---|---|---|---|---|
| 01 | Seller Profit Calculator | `10` AI Evaluation Cases | `16 → 2` LLM Context Variables | `PRD V1–V5` Product Iterations |
| 02 | Arcana | `64 + 96` Reproducible Assertions | `24` Product Red Lines | `1.1s` First Content |
| 03 | Stock News Intelligence | `38` Industry Sectors | `PRD V1.4` Product Version | — |
| 04 | Taobao User Behavior Analysis | `100M+` Behavior Logs | `207.9K` High-intent Users | `~50%` Memory Reduction |

### 8.7 CTA 配置

| # | CTA |
|---|---|
| 01 | `Case Study ↗` · `Try Live Demo ↗` |
| 02 | `Case Study ↗` · `View on GitHub ↗` |
| 03 | `Case Study ↗` · `View on GitHub ↗` · `Live Demo ↗` |
| 04 | `Case Study ↗` |

> 未提供链接的按钮**不渲染**（不渲染为禁用态）。

---

## 9. Case Study Layout

### 9.1 页面结构

```
① Header
   ← Back to Work
   Eyebrow: CASE STUDY · 01
   H1 (display-l)  英文标题
   中文副标题
   Subtitle (body-l)
   Meta: Role · Timeline · Platform
   [Try Live Demo ↗] [View on GitHub ↗]

② Proof Strip           ← 全宽，复用 Proof Metrics 组件（metric/card 40px）

③ Body（双列：sticky 章节导航 + 68ch 正文列）
   01 Overview … 12 What I Learned

④ Footer
   ← Back to Work        Next Case Study →
   Contact
```

### 9.2 章节标题样式

```
01                            ← eyebrow, --accent
Problem                       ← display-m 40/600
─────────                     ← 40px 宽 1px 线, --border-strong
                              ← 24px
正文（Serif prose 19/1.75）
```

### 9.3 正文内块

| 块类型 | 样式 |
|---|---|
| **Pull Quote** | `prose-quote` 24px Serif，左侧 2px `--accent` 竖线，左内边距 24px，上下 margin 40px |
| **Key Statement** | `display-m` 40px Sans，`--text-1`，独占一行，上下 margin 64px，无引号 |
| **Before / After** | 两栏并排（<900px 转纵向）。Before：`--text-3` + `--surface-1`；After：`--text-1` + `--surface-1` + 左 2px `--accent` |
| **架构图** | Mono 12.5px 绘制的 ASCII 流程图，`--surface-2` 底，24px 内边距，`overflow-x: auto` |
| **命令块** | Mono 14px，`--surface-2` 底，左侧 2px `--border-strong`，右上角 copy 按钮 |
| **表格** | 表头 `label` 样式 UPPERCASE；行分隔 1px `--border`；无竖线；`overflow-x: auto` |
| **失败记录条目** | 左侧 `--text-3` 的 `✗`／`⚠`／`✓` 符号（不用颜色区分），单行标题 + 说明 |
| **局限声明** | `--surface-1` 底，1px `--border` 描边，`body-s`，`--text-2`，前缀 `LIMITATIONS` label |

### 9.4 Sticky 章节导航（≥1200）

| 属性 | 值 |
|---|---|
| 宽度 | 180px |
| 位置 | `position: sticky; top: 120px` |
| 项样式 | `body-s` 14px，`--text-3` |
| 当前项 | `--text-1` + 左侧 2px `--accent` 指示条 |
| 编号 | `01`–`12`，Mono 12px，`--text-3` |
| 交互 | 点击平滑滚动；滚动时用 IntersectionObserver 同步高亮 |

<1200px：收为顶部 sticky 横向滚动章节条，高度 48px，底部 1px `--border`。

### 9.5 阅读进度

页面顶部 2px 进度条，`--accent`，跟随滚动。`prefers-reduced-motion` 下仍保留（它是信息，不是装饰）。

---

## 10. Capability Cards

### 10.1 布局

Desktop 4 列 × 1 行；Tablet 2 × 2；Mobile 单列。
**用 hairline 分隔而非独立卡片描边**——与 Proof Metrics 保持同一种分割语言。

### 10.2 结构

```
01                          ← eyebrow, --text-3
AI Product                  ← heading-m 20/600, --text-1
──────                      ← 32px 宽 1px 线
User Research               ← body-s 14, --text-2
Problem Framing               行高 1.9，纵向列表
Requirement Analysis          无项目符号
PRD
MVP Scope
Product Iteration

USED IN                     ← label 12, --text-3
Seller Profit Calculator    ← body-s 14, --accent, 可点击跳项目
Stock News Intelligence
```

### 10.3 四组内容

| # | 标题 | 技能 | Used in |
|---|---|---|---|
| 01 | **AI Product** | User Research · Problem Framing · Requirement Analysis · PRD · MVP Scope · Product Iteration | Seller Profit Calculator · Stock News Intelligence |
| 02 | **LLM Product Systems** | Prompt Engineering · LLM Evaluation · RAG · Agent · Function Calling · MCP · Context Management · Cost Control | Seller Profit Calculator · Arcana · Stock News Intelligence |
| 03 | **Data & Evaluation** | Python · Pandas · SQL (MySQL / DuckDB) · Funnel Analysis · Retention · Evaluation Design | Taobao User Behavior · Tesla FYP · Seller Profit Calculator |
| 04 | **Prototype & Delivery** | Figma · Streamlit · Dify · GitHub Actions · Supabase · Codex / Claude Code | Arcana · Stock News Intelligence |

**区块尾部一句话**（`body-l`，居中或左对齐，`--text-2`）：
> I can turn product hypotheses into working prototypes.

### 10.4 硬性禁止

❌ 百分比 / 进度条 / 星级 / 雷达图 / 熟练度标签（「精通」「熟悉」）
✅ 只用 **Used in** 的项目引用作为能力证据

---

## 11. Learning Cards

### 11.1 布局

Desktop 3 列；Tablet 2 列；Mobile 单列。首页只展示最新 3 篇。

### 11.2 结构

```
┌─────────────────────────────┐
│ PROMPT ENGINEERING          │ ← label 12, --text-3
│                             │
│ 标题（heading-m 20/600）      │ ← --text-1，最多 2 行
│                             │
│ 一句话描述（body-s 14）       │ ← --text-2，最多 3 行
│                             │
│ 2026.08.01 · 6 min read     │ ← caption 13, --text-3
└─────────────────────────────┘
```

| 属性 | 值 |
|---|---|
| 卡片底 | `--surface-1` |
| 描边 | 1px `--border` |
| 圆角 | **8px** |
| 内边距 | 28px |
| Hover | 底色 → `--surface-2`，描边 → `--border-strong`，`translateY(-2px)`，240ms |
| Tag | 只显示**第一个** tag（避免多标签造成色块噪声） |

---

## 12. Buttons

### 12.1 三种层级

| 层级 | 样式 | 用途 |
|---|---|---|
| **Primary** | `--accent` 填充 + `--accent-on` 文字 | 每屏最多 1 个：`View Selected Work` / `Try Live Demo` |
| **Secondary** | 透明底 + 1px `--border-strong` 描边 + `--text-1` 文字 | `Read Case Studies` / `View on GitHub ↗` |
| **Tertiary** | 纯文字 + `--accent` + 尾随箭头 | `Case Study ↗` / `Explore AI Evals →` |

### 12.2 尺寸

| Size | 高度 | 内边距 | 字号 | 用途 |
|---|---|---|---|---|
| `lg` | 52px | 0 28px | 16/500 | Hero CTA |
| `md` | 44px | 0 22px | 15/500 | 区块内 CTA |
| `sm` | 36px | 0 16px | 14/500 | 卡片内 CTA |
| `text` | auto | 0 | 15/500 | Tertiary |

### 12.3 通用规格

| 属性 | 值 |
|---|---|
| 圆角 | **6px**（Tertiary 无圆角） |
| 过渡 | `180ms ease-out`（颜色）/ `240ms` （位移） |
| 箭头 | `↗` 外链 · `→` 站内 · 与文字间距 `8px` |
| Hover | Primary → `--accent-hover`；Secondary → 描边 `--accent-border` + 底 `--accent-surface`；Tertiary → 箭头 `translateX(4px)` |
| Active | `translateY(1px)` |
| Focus | 见 §17.2 |
| Disabled | **不使用**。无链接则不渲染按钮 |
| 最小点击区 | 44 × 44px（移动端） |

---

## 13. Tags

### 13.1 规格

| 属性 | 值 |
|---|---|
| 字号 | `label` 12/500/+0.06em |
| 大小写 | 保持原样（**不全大写**，与 Proof 标签区分） |
| 颜色 | `--text-2` |
| 底色 | `transparent` |
| 描边 | 1px `--border-strong` |
| 圆角 | **999px**（pill） |
| 内边距 | `6px 12px` |
| 间距 | 横向 8px，纵向 8px |
| Hover（可点击时） | 底 `--accent-surface`，描边 `--accent-border`，文字 `--accent` |

### 13.2 使用规则

| 规则 | 说明 |
|---|---|
| 每个项目卡最多 **3 个** tag | 超过 3 个会稀释定位 |
| **单色系统** | 所有 tag 同一外观，不按类别配色 |
| tag 不承载 Proof | 数字永远走 Proof Metric 组件，不塞进 tag |

---

## 14. Navigation

### 14.1 Desktop

| 属性 | 值 |
|---|---|
| 高度 | 72px |
| 位置 | `sticky top: 0`，`z-index: 100` |
| 初始态 | 背景透明，无边框 |
| 滚动后（>40px） | `background: rgba(10,11,13,0.82)` + `backdrop-filter: blur(12px)` + 底部 1px `--border` |
| 左侧 | `Jaco Wang`（15/600，`--text-1`），点击回首页 |
| 中/右 | 导航项 + `Resume ↗` |
| 导航项 | `body-s` 14/500，`--text-2`；hover → `--text-1` |
| 当前项 | `--text-1` + 底部 2px `--accent` 下划线（宽度 = 文字宽） |
| `Resume ↗` | Secondary 按钮 `sm` |
| 项间距 | 28px |

### 14.2 导航项

```
Work · Capabilities · AI Evals · Learning · About        [Resume ↗]
```
`Contact` 不进主导航（页脚锚点即可），避免导航项超过 6 个。

### 14.3 Mobile（<768）

| 属性 | 值 |
|---|---|
| 高度 | 60px |
| 右侧 | 汉堡按钮 44×44 |
| 展开 | **全屏覆盖层**，`--bg` 不透明 |
| 菜单项 | `display-m` 28px，纵向，间距 24px |
| 动画 | 覆盖层 `fade + translateY(-8px)` 280ms；菜单项 stagger 40ms |
| 关闭 | 右上 `✕`；点击菜单项后自动关闭；`Esc` 关闭 |
| 滚动锁定 | 打开时 `body` 禁止滚动 |

---

## 15. Mobile Rules

### 15.1 断点

| 名称 | 范围 |
|---|---|
| `mobile` | < 768px |
| `tablet` | 768 – 1199px |
| `desktop` | ≥ 1200px |

### 15.2 关键降级规则

| 模块 | Mobile 规则 |
|---|---|
| **Hero** | H1 44px；Statement 强制 3 行内；CTA 纵向堆叠，Primary 全宽；总高度 ≤ **1.4 屏** |
| **Proof Metrics** | **2 × 2 田字格**；数字 44px / 标签 11px；单元内边距 24px |
| **Project Cards** | 单列纵向；Proof 横向 2 列；行内边距 28px |
| **Case Study** | 单列；章节导航 → 顶部横向 sticky 条；正文 17px；全宽块 `overflow-x: auto` |
| **Capabilities** | 单列，每组之间 1px hairline |
| **Learning** | 单列 |
| **Nav** | 汉堡 + 全屏覆盖层 |
| **表格 / 架构图 / 命令块** | 各自 `overflow-x: auto`，**页面本身绝不横向滚动** |

### 15.3 移动端硬约束

| # | 约束 |
|---|---|
| M1 | 所有可点击元素 ≥ **44 × 44px** |
| M2 | 页边距固定 **20px**，不随内容变化 |
| M3 | `metric : label` 字号比 ≥ **4 : 1** |
| M4 | Hero 到 Proof Metrics 之间不插入任何内容 |
| M5 | 首屏必须露出 Proof Metrics 的**第一行数字顶部** |
| M6 | 不使用 `100vh`（改用 `100dvh`，规避移动端地址栏高度跳变） |

---

## 16. Motion Principles

### 16.1 允许的动效（仅四类）

| 类型 | 参数 | 用途 |
|---|---|---|
| **Fade + Slide In** | `opacity 0→1`，`translateY 24px→0`，**600ms**，`cubic-bezier(0.16, 1, 0.3, 1)` | 区块与卡片入场 |
| **Number Reveal** | count-up，**900ms**，`ease-out` | Proof Metric 数字 |
| **Hover** | 颜色 180ms / 位移 240ms，`ease-out` | 按钮、卡片、链接 |
| **Stagger** | 子元素延迟 **60ms** 递增，单组最多 6 个 | 卡片列表、Proof 组 |

### 16.2 禁止

❌ 视差滚动　❌ 3D 变换 / 旋转　❌ 弹簧回弹（overshoot）　❌ 无限循环动画
❌ 光标跟随　❌ 滚动劫持　❌ 页面切换全屏转场　❌ 打字机效果

### 16.3 触发规则

| 规则 | 值 |
|---|---|
| 触发方式 | IntersectionObserver，元素进入视口 **15%** 时触发 |
| 触发次数 | **仅一次**（不做反复进出动画） |
| 首屏 | Hero 内容在 `mount` 后 100ms 直接播放，不等滚动 |
| 单次动效总时长 | ≤ **900ms** |

### 16.4 Reduced Motion

```
@media (prefers-reduced-motion: reduce) {
  · 全部 transition / animation → 0ms
  · Proof Metric 直接显示终值
  · Fade+Slide → 直接 opacity: 1, translateY: 0
  · 阅读进度条保留（它是信息）
  · 平滑滚动 → 直接跳转
}
```

### 16.5 一条判断标准

> **动效只用于「引导注意力顺序」，不用于「表现网站很酷」。**
> 若移除某个动效后信息传达毫无损失，那它就该被移除。

---

## 17. Accessibility

### 17.1 语义化 HTML

| 区域 | 标签 |
|---|---|
| 导航 | `<nav aria-label="Main">` |
| 页面主体 | `<main>` |
| 各区块 | `<section aria-labelledby="...">` |
| 项目列表 | `<ul>` / `<li>`，每项内 `<article>` |
| Case Study 章节 | `<section>` + `<h2>` |
| 页脚 | `<footer>` |
| 标题层级 | 严格 `h1 → h2 → h3`，**不跳级**，每页仅一个 `h1` |
| Proof Metric | `<dl>` / `<dt>`(数字) / `<dd>`(标签) — 语义即「术语-定义」 |

### 17.2 键盘导航

| 项 | 规格 |
|---|---|
| **Skip Link** | 页面第一个可聚焦元素，`Skip to content`，聚焦时才可见 |
| **Focus Ring** | `outline: 2px solid var(--accent)` + `outline-offset: 3px`，**全站统一** |
| 焦点顺序 | 遵循 DOM 顺序，不使用 `tabindex > 0` |
| 项目行卡 | 整行可聚焦（`<a>` 包裹标题），行内次级链接独立可聚焦 |
| 移动端菜单 | 打开后**焦点陷阱**；`Esc` 关闭并把焦点还给汉堡按钮 |
| 章节导航 | 可 Tab 遍历，回车跳转并把焦点移到目标章节标题 |
| 禁止 | `outline: none` 无替代方案 |

### 17.3 对比度

见 §3.4。**全部组合 ≥ AA（4.5:1）**，主要文本达 AAA。
额外规则：`--text-3` 不用于 <13px 文本；`label`(12px) 使用 `--text-2`。

### 17.4 其他

| 项 | 规格 |
|---|---|
| 图片 | 全部提供 `alt`；纯装饰图 `alt=""` + `aria-hidden` |
| 图标按钮 | 提供 `aria-label`（如汉堡按钮） |
| 外链 | 文字中含 `↗` 符号，并加 `aria-label="… (opens in new tab)"` |
| 架构图（ASCII） | 外层 `role="img"` + `aria-label` 描述流程；同时提供文字说明段落 |
| count-up 数字 | 容器 `aria-label` 直接给终值，屏幕阅读器不朗读中间过程 |
| 语言标记 | 页面 `lang="en"`；中文副标题元素 `lang="zh-CN"` |
| 阅读进度条 | `role="progressbar"` + `aria-valuenow` |
| 色彩 | **不单独用颜色传达信息**（Before/After 用位置 + 边框 + 文字标签区分） |
| 缩放 | 支持 200% 缩放不破版；不禁用 `user-scalable` |

### 17.5 验收清单

| # | 检查 |
|---|---|
| A1 | 仅用键盘可完成：浏览全部区块 → 进入任一 Case Study → 返回 → 打开 Resume |
| A2 | 所有可聚焦元素有可见 focus ring |
| A3 | 开启 reduced motion 后无任何动画，内容完整 |
| A4 | 页面在 200% 缩放下不横向滚动 |
| A5 | 屏幕阅读器可正确朗读 Proof Metric 的「数字 + 标签」配对 |
| A6 | 标题层级无跳级（用 axe / Lighthouse 校验） |
| A7 | 对比度全部通过 AA |

---

## 附录 A：Design Token 汇总

```
/* Color */
--bg:#0A0B0D  --surface-1:#101215  --surface-2:#16181C  --surface-3:#1C1F24
--border:#1E2126  --border-strong:#2A2E35
--text-1:#F4F6F8  --text-2:#A2AAB5  --text-3:#7B838F
--accent:#8AA2FF  --accent-hover:#A3B6FF  --accent-press:#6E88F0
--accent-surface:rgba(138,162,255,.10)  --accent-border:rgba(138,162,255,.30)
--accent-on:#0A0B0D

/* Font */
--font-display:'Inter Tight'  --font-prose:'Source Serif 4'  --font-mono:'JetBrains Mono'

/* Radius */
--r-sm:4px  --r-md:6px  --r-lg:8px  --r-pill:999px

/* Space (4px base) */
--s-1:4  --s-2:8  --s-3:12  --s-4:16  --s-5:20  --s-6:24  --s-8:32
--s-10:40  --s-12:48  --s-16:64  --s-20:80  --s-24:96  --s-32:128  --s-40:160

/* Motion */
--ease:cubic-bezier(0.16,1,0.3,1)
--t-fast:180ms  --t-base:240ms  --t-slow:600ms  --t-count:900ms

/* Layout */
--max-w:1240px  --prose-w:68ch  --nav-h:72px
```

---

## 附录 B：设计验收清单

| # | 检查项 |
|---|---|
| D1 | Hero 首屏是否露出 Proof Metrics 第一行数字？ |
| D2 | Proof Metric 的 `数字 : 标签` 字号比是否 ≥ 3.5 : 1（移动端 ≥ 4 : 1）？ |
| D3 | 任意一屏内 accent 出现是否 ≤ 3 处？ |
| D4 | 是否存在任何百分比条 / 星级 / 雷达图？（必须为 0） |
| D5 | 是否存在多色 tag 体系？（必须为 0） |
| D6 | 项目卡是否为横向 Editorial Row 而非盒装网格？ |
| D7 | Case Study 正文是否使用 Serif 且行宽 ≤ 68ch？ |
| D8 | 是否所有区块间距都取自 §5 的 Token？ |
| D9 | 动效是否只有 fade / slide / hover / number reveal 四类？ |
| D10 | 移动端页面是否绝不横向滚动？ |
| D11 | 未提供的链接是否**不渲染按钮**（而非禁用态）？ |
| D12 | Contact 是否只有 Email · GitHub · Resume · Portfolio 四项？ |

---

*本文件为 PHASE 2 交付物。确认后进入 PHASE 3：Wireframe（Hero / Proof Metrics / Selected Work / Capabilities），仍不写实现代码。*
