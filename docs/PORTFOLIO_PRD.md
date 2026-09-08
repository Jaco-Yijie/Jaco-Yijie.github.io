# PORTFOLIO_PRD.md — AI Product Portfolio 产品需求文档

> 2026-09-08 更新：Stock News 完整 PRD 与 Arcana 的状态、链接和校验数量以 [PORTFOLIO_UPDATE_AUDIT.md](PORTFOLIO_UPDATE_AUDIT.md) 为准。下文保留此前审计记录。

> **版本**：v2（2026-08-11）
> v1 → v2 变更：Hero Proof 改为 `10 / 16→2 / 38 / 100M+`；PDD 叙事去除准确率数字；GitHub 全部按 Public 处理；Contact 移除微信；Stock News 恢复 Live Demo 按钮；IDSC 进入 More Work。
> **上游唯一事实源**：`CONTENT_AUDIT.md`。冲突时以其为准。

---

## 1. Target Audience

### 1.1 主要受众（P0）

| 角色 | 场景 | 停留 | 关心什么 |
|---|---|---|---|
| **大厂 HR / 校招筛选者** | 简历初筛，同时看几十份 | **10–30 秒** | 这人是不是 AI 产品方向？做过真东西吗？ |
| **AI Product Manager（用人经理）** | 决定要不要面 | **2–5 分钟** | 他怎么发现问题？怎么做决策？懂不懂 LLM 边界？ |

### 1.2 次要受众（P1）

| 角色 | 关心什么 |
|---|---|
| 技术面试官 | 评测是否可复现；架构决策是否站得住 |
| AI 产品同行 | 方法论是否有借鉴价值 |

### 1.3 关键推论

> HR 不会读完任何一段长文字。**Hero + Proof Metrics 必须独立完成「我是谁 + 我做过什么」的传达。**
> 用人经理只会读 **1 个** Case Study。所以 Featured #1 必须最强，且在首屏之下第一个出现。

---

## 2. Portfolio Goal

### 2.1 一句话目标

> 让 AI 产品岗的用人经理在 2 分钟内确认：**这是一个有 Data Science 技术背景、懂 LLM 能力边界、做过真实 AI Evaluation 的产品候选人。**

### 2.2 具体目标

| # | 目标 | 对应模块 |
|---|---|---|
| G1 | 10 秒内建立「AI Product Candidate」身份认知 | Hero |
| G2 | 30 秒内展示 ≥3 个可信 Proof | Proof Metrics + Project Cards |
| G3 | 证明「发现问题」的能力，而非「实现功能」的能力 | Case Study 的 Problem / Insight |
| G4 | 证明理解 **AI 不该用在哪** | Arcana + PDD 架构决策 |
| G5 | 证明做过 **AI Evaluation** | AI Evals 专区 |
| G6 | 证明 **Prompt Engineering 是系统设计** | AI Evals 专区 + 三个项目 |
| G7 | 证明能用数据做产品判断 | Taobao Case Study |
| G8 | 证明能把产品真正做出来 | Live Demo + GitHub |
| G9 | 证明持续学习 | Learning |
| G10 | **Portfolio 本身即产品能力的证据** | 信息优先级、Evidence 体系、UX |

### 2.3 反目标

❌ Developer Portfolio 形态　❌ 技能百分比条　❌ 堆项目数量　❌ passionate / hard-working / fast learner　❌ 炫技动效　❌ 任何编造数字　❌ 暴露实验级准确率细节

---

## 3. User Journey

### 3.1 HR（10–30 秒）

```
Hero → 0–3s 读 H1 + Eyebrow
     → 3–8s 读 Main Statement
     → 8–20s 扫 Proof Metrics 四个数字
     → 20–30s 扫 Selected Work 四个标题 + 每卡 Proof
     → 退出 或 点 Resume
```
**推论**：Hero → Proof Metrics 必须在首屏 + 一次滚动内完成。Resume 在 Hero 与 Nav 各出现一次。

### 3.2 用人经理（2–5 分钟）

```
Hero → Proof Metrics → 扫 4 个项目卡
     → 点进 Featured #1 Case Study
     → 读 Problem → Insight → Product Decision → Evaluation → Architecture
     → 返回看 AI Evals 专区
     → 看 Capabilities → About → Contact
```
**推论**：Case Study 必须支持跳读——小标题清晰，关键结论用大字或引用块，不要求线性阅读。

### 3.3 技术面试官（面试前 5–10 分钟）

```
直奔 Arcana Case Study
  → 看到可复现的评测命令 → 打开 GitHub → clone → 跑 npm run reading:check
  → 看 Performance Investigation
```
**推论**：Arcana Case Study 必须**直接给出两行命令**并配真实终端输出。这是全站唯一可当场验证的部分。

### 3.4 产品体验路径（PDD 独有）

```
项目卡 → Try Live Demo ↗ → 直接使用产品
```
**推论**：PDD 是全站唯一「可以直接上手用」的项目，Live Demo 按钮权重应高于普通次级按钮。

---

## 4. Information Architecture

### 4.1 导航

```
Work  ·  Capabilities  ·  AI Evals  ·  Learning  ·  About  ·  Resume ↗  ·  Contact
```

> `AI Evals` 进主导航是刻意的——它是本站与其他学生作品集最大的区别。

### 4.2 页面清单

| 路由 | 页面 | 优先级 |
|---|---|---|
| `/` | Homepage | P0 |
| `/work/seller-profit-calculator` | Case Study #1 | P0 |
| `/work/arcana` | Case Study #2 | P0 |
| `/work/stock-news` | Case Study #3 | P0 |
| `/work/taobao-user-behavior` | Case Study #4 | P0 |
| `/ai-evals` | Prompt Engineering & LLM Evaluation | P0 |
| `/learning` · `/learning/[slug]` | Learning | P1 |
| `/work/tesla-stock-prediction` | More Work Case Study（轻量） | P2 |

---

## 5. Homepage Narrative

### 5.1 叙事主线

> **我发现问题 → 我做出判断 → 我有证据 → 我持续在做**

| 模块 | 承担的叙事 | 读者反应 |
|---|---|---|
| Hero | 我是谁 | "AI 产品方向的" |
| Proof Metrics | 我做过真东西 | "数字挺具体" |
| Selected Work | 我做过什么 | "四个项目方向不重复" |
| AI Evals | 我怎么验证 AI | "这个学生真的做评测" |
| Capabilities | 我的能力有出处 | "每项都指向具体项目" |
| More Work | 我的技术底子 | "Data Science 背景是真的" |
| Latest Learning | 我还在往前走 | "不是做完就停了" |
| About | 我怎么想 | "他关心模型跑通之后的事" |

### 5.2 Homepage 结构

```
┌───────────────────────────────────────────────────────────────┐
│ NAV   Work · Capabilities · AI Evals · Learning · About        │
│                                        Resume ↗ · Contact      │
├───────────────────────────────────────────────────────────────┤
│ HERO                                                           │
│   Eyebrow    AI Product Candidate · Data Science               │
│   H1         Jaco Wang                                         │
│              王一杰                                             │
│   Statement  I build and evaluate practical AI products.       │
│   Support    Data Science student working on AI product        │
│              design, LLM evaluation, prompt systems, and       │
│              data-driven product decisions.                    │
│   Meta       Universiti Kebangsaan Malaysia ·                  │
│              Available within 1 week · 6+ month internship     │
│   CTA        [View Selected Work] [Read Case Studies]          │
│              [GitHub ↗] [Resume ↗]                             │
├───────────────────────────────────────────────────────────────┤
│ PROOF METRICS                                                  │
│    10           16 → 2          38            100M+            │
│  AI Evaluation  LLM Context   Industry      Behavior           │
│  Cases          Variables     Sectors       Logs               │
├───────────────────────────────────────────────────────────────┤
│ SELECTED WORK                                                  │
│  01 Seller Profit Calculator  拼多多新手卖家利润试算助手         │
│  02 Arcana                                                     │
│  03 Stock News Intelligence   A股板块新闻监控系统                │
│  04 Taobao User Behavior Analysis                              │
├───────────────────────────────────────────────────────────────┤
│ AI EVALS & PROMPT ENGINEERING          [Explore AI Evals →]    │
├───────────────────────────────────────────────────────────────┤
│ CAPABILITIES  （Evidence-based，无百分比）                       │
├───────────────────────────────────────────────────────────────┤
│ MORE WORK   Tesla FYP · IDSC 2026 · LLM Evaluation Practice    │
├───────────────────────────────────────────────────────────────┤
│ LATEST LEARNING（3 篇）                                         │
├───────────────────────────────────────────────────────────────┤
│ ABOUT                                                          │
├───────────────────────────────────────────────────────────────┤
│ CONTACT   Email · GitHub · Resume · Portfolio                  │
└───────────────────────────────────────────────────────────────┘
```

### 5.3 Hero 文案（最终）

| 元素 | 内容 |
|---|---|
| Eyebrow | `AI Product Candidate · Data Science` |
| H1 | `Jaco Wang` ／ `王一杰`（副行，小一号） |
| Statement | `I build and evaluate practical AI products.` |
| Supporting | `Data Science student working on AI product design, LLM evaluation, prompt systems, and data-driven product decisions.` |
| Meta | `Universiti Kebangsaan Malaysia · Available within 1 week · 6+ month internship` |
| CTA | `View Selected Work` · `Read Case Studies` · `GitHub ↗` · `Resume ↗` |

> **为什么是 "build and evaluate"**：`evaluate` 把自己与「只会调 API 的学生」区分开，是全站核心差异点，必须在第一句出现。
> **为什么 "within 1 week" 放 Hero**：大量候选人要等 1–2 个月到岗，这是被低估的招聘信号，不该埋进 About。

---

## 6. Selected Work Strategy

### 6.1 最终顺序、定位与 CTA

#### 01 · Seller Profit Calculator｜拼多多新手卖家利润试算助手

| 项 | 内容 |
|---|---|
| **Source** | `PRD-v5.md`（Verified from PRD） |
| **Tags** | `AI Product` · `LLM Evaluation` · `Prompt Engineering` |
| **Subtitle** | Turning an unreliable LLM calculator into a deterministic AI product. |
| **核心 Story** | Prompt constraints were not enough — so I redesigned the architecture so the LLM could no longer perform the calculation. |
| **Proof** | `10` Evaluation Cases · `16 → 2` Context Variables · `PRD V1–V5` |
| **Timeline** | `2026.06 – 2026.07` |
| **CTA** | `Case Study ↗` · **`Try Live Demo ↗`** |
| **禁止定位** | ❌ "Dify Project"　❌ "AI Calculator" |

> Live Demo 让 Featured #1 完整：这是全站唯一「不需要读代码、直接能用」的项目。**GitHub 不是必须的 Evidence 形式。**

#### 02 · Arcana

| 项 | 内容 |
|---|---|
| **Source** | GitHub `Jaco-Yijie/arcana`（Public） |
| **Tags** | `AI Product` · `Interaction Design` · `LLM Evaluation` |
| **Subtitle** | The LLM never draws the cards — it only interprets a frozen result. |
| **核心 Story** | **Where AI should NOT be used.** |
| **Proof** | `64 + 96` reproducible assertions · `10` reading eval cases · `24` product red lines · `1.1s` first content (from 51.6s) |
| **CTA** | `Case Study ↗` · `View on GitHub ↗`（Live Demo 未提供，不设） |
| **独有价值** | 全站唯一可被面试官 clone 复现的评测 |

#### 03 · Stock News Intelligence｜A 股板块新闻监控系统

| 项 | 内容 |
|---|---|
| **Source** | GitHub（Public）+ External PRD V1.4 |
| **Tags** | `AI Product` · `Prompt Engineering` · `Automation` |
| **Subtitle** | A rule engine decides; the LLM only reviews what the rules are unsure about. |
| **核心 Story** | Why not let the LLM classify everything — cost, stability, determinism. |
| **Proof** | `38` Industry Sectors · `PRD V1.4` |
| **CTA** | `Case Study ↗` · `View on GitHub ↗` · `Live Demo ↗` |
| **PRD 按钮** | `TODO_LINK`（仓库之外）→ 暂不显示 |

#### 04 · Taobao User Behavior Analysis｜淘宝用户行为分析

| 项 | 内容 |
|---|---|
| **Source** | Resume only（Resume-grounded） |
| **Tags** | `Data Analysis` · `Product Analytics` · `User Behavior` |
| **Subtitle** | Turning 100M behavior logs into an operable segment. |
| **核心 Story** | `Data → Insight → Product Recommendation`（**不是**「我会 Pandas」） |
| **Proof** | `100M+` Behavior Logs · `207.9K` High-intent Users · `~50%` Memory Reduction |
| **CTA** | `Case Study ↗` |
| **禁止** | Conversion / Revenue / CTR / GMV Lift · A/B test result · `Achieved` 类措辞 |

> 没有 GitHub **不降低**该项目的展示规格。卡片尺寸、Proof 密度与前三个一致。

### 6.2 More Work

| 项目 | 展示内容 | 优先级 |
|---|---|---|
| **Tesla Stock Prediction (FYP)** | Time-aware evaluation pipeline · 6 leakage controls（❌ 不用准确率） | P1 |
| **IDSC 2026 Biomedical Data Challenge**（团队） | Brugada ECG classification · Model comparison · **Recall-oriented model selection** | P2 |
| **LLM Evaluation Practice** | 28 days of structured evaluation practice | P2 |

> IDSC 首页**不展示** Recall / F1 / ROC-AUC。价值点是「基于筛查场景优先关注 Recall」这个**指标选择判断**——与 Tesla「不用 accuracy 当亮点」是同一种评测成熟度。

### 6.3 明确排除

`titanic-survival-prediction` · `basic-house-price-analysis` · `finger-magic-show` · `A_Stock_review` · `tarot_card_project`

---

## 7. Proof Strategy

### 7.1 三条铁律

1. **每个数字都能指回一个事实源**（PRD 条目 / 可运行命令 / 仓库文件 / Resume）
2. **数字的视觉权重必须高于说明文字**
3. **不确定或过于实验性的一律不写**——包括准确率、通过率、Pending 状态

### 7.2 三个层级

| 层级 | 位置 | 数量 | 作用 |
|---|---|---|---|
| **L1 Hero Proof** | 首屏下方 | 4 个 | 10 秒内可扫完 |
| **L2 Project Proof** | 项目卡 | 每卡 2–3 个 | 让 HR 知道每个项目硬在哪 |
| **L3 Case Study Proof** | Case Study 内 | 不限 | 支撑论证，含过程与失败记录 |

### 7.3 L1 Hero Proof（最终）

| 数字 | 说明 | 来源 |
|---|---|---|
| **10** | AI Evaluation Cases | PDD `PRD-v5.md` |
| **16 → 2** | LLM Context Variables | PDD `PRD-v5.md` §6.3 |
| **38** | Industry Sectors | `sectors_config.json` |
| **100M+** | Behavior Logs | Resume |

**选择逻辑**：`10`（我做评测）+ `16 → 2`（我做架构判断）+ `38`（我交付了系统）+ `100M+`（我处理过真实规模数据）——四个数字覆盖 **Evaluation / Architecture / Delivery / Data** 四个面，无重叠，HR 无需上下文即可理解。

**禁止用于 Hero**：`40%` · `100%` · `6/6` · `4/10` · `Recall` · `F1` · `ROC-AUC` · Pending。

### 7.4 敏感 Proof 表述规范

| Proof | ✅ 正确 | ❌ 错误 |
|---|---|---|
| PDD 评测 | `Designed 10 AI evaluation cases to test LLM numerical behavior.` | 任何准确率数字 |
| PDD 用户测试 | `Observed in 2 user tests: 1 user changed the initial decision.` | `50% conversion` |
| 淘宝内存 | `~50% Memory Reduction` | `X GB → X GB` |
| 淘宝 Outcome | `Proposed: time-based ad allocation, high-intent targeting, segmentation` | `Increased conversion by X%` |
| Tesla | `Time-aware evaluation pipeline · 6 leakage controls` | `54% accuracy` |
| IDSC | `Recall-oriented model selection` | 首页列出三个指标值 |
| Arcana 断言 | `96 reading assertions` | `106` |

### 7.5 可验证性设计

Arcana Case Study 中直接给出验证方式：

```
git clone https://github.com/Jaco-Yijie/arcana
npm install && npm run engine:check     → 64 assertions, 0 failed
npm run reading:check                   → 96 assertions, 0 failed
```

> **一个能被验证的 Proof，会让读者相信其余不能被当场验证的 Proof。**

---

## 8. Case Study Template

### 8.1 统一结构（12 模块，动态显隐）

| # | 模块 | 说明 |
|---|---|---|
| 01 | Overview | 一句话产品定义 + 角色 + 时间 + Proof 摘要 |
| 02 | Problem | 用户困境，不是功能缺失 |
| 03 | User / Context | 画像 + 验证方式 + **未验证的部分要写出来** |
| 04 | Insight | 从 Problem 到 Decision 的转折 |
| 05 | Product Decision | 做了什么取舍，**放弃了什么** |
| 06 | Solution | 产品形态 |
| 07 | AI / System Architecture | Before / After 对比 |
| 08 | Prompt Design | Prompt 作为系统组件 |
| 09 | Evaluation | 评测方法、失败发现、架构结论 |
| 10 | Iteration | 版本演进与失败记录 |
| 11 | Outcome | 结果 + **局限** |
| 12 | What I Learned | 方法论沉淀 |

### 8.2 模块映射

| 模块 | 01 PDD | 02 Arcana | 03 Stock News | 04 Taobao | Tesla |
|---|:---:|:---:|:---:|:---:|:---:|
| 01 Overview | ✅ | ✅ | ✅ | ✅ | ✅ |
| 02 Problem | ✅ | ✅ | ✅ | ✅ | ✅ |
| 03 User / Context | ✅ | ✅ | ⚠️ | ❌ | ❌ |
| 04 Insight | ✅ | ✅ | ✅ | ✅ | ✅ |
| 05 Product Decision | ✅ | ✅ | ✅ | ✅ | ✅ |
| 06 Solution | ✅ | ✅ | ✅ | ✅ | ✅ |
| 07 Architecture | ✅ | ✅ | ✅ | ❌ | ✅ |
| 08 Prompt Design | ✅ | ✅ | ✅ | ❌ | ❌ |
| 09 Evaluation | ✅ | ✅ | ⚠️ | ⚠️ | ✅ |
| 10 Iteration | ✅ | ✅ | ✅ | ❌ | ✅ |
| 11 Outcome | ✅ | ✅ | ✅ | ✅ | ✅ |
| 12 What I Learned | ✅ | ✅ | ✅ | ✅ | ✅ |
| **模块数** | **12** | **12** | **11** | **8** | **9** |

### 8.3 写作原则

| 原则 | 说明 |
|---|---|
| ❌ 不写 "I used X to build Y." | 技术栈是脚注，不是主线 |
| ✅ 主线 `Problem → Decision → Evidence → Iteration → Outcome` | |
| ✅ **失败必须写** | 「Prompt 约束无效」「修复让错误变隐蔽」是最有说服力的段落 |
| ✅ **局限必须写** | n=1 / 未验证痛点 |
| ✅ 关键结论用引用块 + 大字 | 支持跳读 |
| ✅ Before / After 用对比图 | 不用大段文字描述架构 |
| ✅ 定性表述优先于实验数字 | 「模型在自行计算」比「一致率 40%」更容易被理解，也更稳 |

### 8.4 Featured #1 Case Study 大纲（示范）

```
01 Overview
   Seller Profit Calculator · Dify Chatflow · 2026.06–07 · Solo
   10 evaluation cases · 16 → 2 context variables · PRD V1–V5
   [Try Live Demo ↗]

02 Problem
   新手卖家不是"不会算"，而是"不知道要算什么"

03 User / Context
   ~5000 元预算的学生初创者
   4 条假设：验证 2、作废 1、悬空 2 ← 悬空的要写出来

04 Insight
   访谈推翻初始假设：怕囤货 ✗（普遍一件代发）
   真痛点：5 个费率字段全部留空

05 Product Decision
   General Selection Assistant → Profit Calculation MVP
   Data belongs to the user. Analysis belongs to the assistant.
   Decision remains with the user.

06 Solution
   利润试算作为选品流程的闸门

07 AI / System Architecture
   BEFORE  User Inputs → LLM → Calculation + Explanation
   AFTER   User Inputs → Python → Deterministic Calculation
                                → LLM → Explanation
   > Deterministic tasks should be handled by deterministic systems.

08 Prompt Design
   迭代链：禁止计算 ✗ → 显式传入 △ → 禁止算术 △ → 架构隔离 ✓
   六类约束：禁止编造外部依据 / 禁止情景推演 / 拒绝越权但不拒绝服务 /
            禁止替用户决策 / 固定结论 / 输入异常不断定用户填错

09 Evaluating LLM Reliability
   I created 10 evaluation cases to test whether the LLM could
   reliably handle numerical outputs.
   The evaluation revealed that the model was not consistently
   referencing deterministic calculation results and could perform
   its own arithmetic.
   Instead of continuing to strengthen prompt restrictions,
   I redesigned the architecture.

10 Iteration
   16 → 2 context variables（配置审计）
   Silent failure: 修复把明显错误变成了静默错误
   Prompt 静默回滚：Dify 撤销是整画布级别

11 Outcome
   Deterministic calculation + LLM interpretation 的可交互 MVP
   2 user tests: 1 changed decision, 1 did not
   第二位用户暴露的更深问题：Completion Rate ≠ Input Quality

12 What I Learned
   Prompt is a soft constraint, not a hard switch.
   写下一条原则 ≠ 执行了它。
   在决策支持类产品中，静默的错误比明显的错误更危险。
```

---

## 9. AI Evals Section（`/ai-evals`）

### 9.1 要回答的问题

> **"你说你会 Prompt Engineering 和 AI Evaluation——证明给我看。"**

### 9.2 页面结构

```
① Hero
   Prompt Engineering is part of system design, not copywriting.
   Task boundary · Output constraints · Failure handling ·
   Context control · Regression testing

② The Loop（核心视觉）
   Prompt Constraint → Evaluation → Failure Analysis
        → Architecture Change → Regression Validation  ↺

③ Evidence · 三个真实项目
④ Topics Covered
⑤ Failure Library
```

### 9.3 Evidence

| 项目 | 证明的能力 | 证据 |
|---|---|---|
| **Seller Profit Calculator** | Evaluation 驱动架构决策 | 10 组评测用例；发现模型在自行计算而非引用确定性结果；由此做出架构隔离而非继续加强 prompt |
| **Arcana** | Prompt 版本化 + A/B + 可复现评测 | V2.2（rule-heavy）→ V2.3（principle-based）两版并存；`prompt-ab.ts`；64 + 96 断言可复现；语气红线**双向**校验 |
| **Stock News** | Prompt 作为可版本化系统组件 | `PROMPT_VERSION` + `RULE_VERSION` 参与 SHA256 缓存键；结构化 Prompt（task / outputSchema / rules / negativeExamples / evidence）；LLM 仅在低置信度触发 |

### 9.4 Topics Covered

| Topic | Evidence |
|---|---|
| Prompt Structure | Stock News 结构化 JSON prompt |
| Context Design | PDD `16 → 2` |
| Few-shot / Negative Examples | Stock News 4 条负例 |
| Output Schema | Stock News `outputSchema` + Arcana `readingSchema.ts` |
| Constraints | PDD 六类约束 + Arcana 8 条硬约束 |
| Evidence Validation | Stock News `evidence` 字段 |
| Failure Analysis | PDD 迭代链 |
| Prompt Versioning | Stock News `PROMPT_VERSION` / Arcana V2.2 vs V2.3 |
| Regression Validation | PDD 架构隔离后复测 · Arcana 64 + 96 断言 |
| Cost / Latency Control | Arcana 性能调研 · Stock News 双超时设计 |

### 9.5 Failure Library

> 大多数作品集只展示成功。这一节展示 **AI 产品的真实失败模式**——最难伪造，也最能证明真实经历。

| 失败模式 | 现象 | 来源 |
|---|---|---|
| **Prompt 约束失效** | 要求「不要重新计算」，模型仍自行运算 | PDD |
| **通过是巧合，不是正确** | 少数通过的用例只是取整后恰好相同 | PDD |
| **可组合的数值必然被组合** | `63.41 + 2.44 = 65.85` —— 模型做的加法，不是复述 | PDD |
| **静默错误** | 修复后输出完整、自洽、格式正确，但参数已过期，**用户无法发现** | PDD |
| **配置静默回滚** | 画布级撤销把重写过的 prompt 回滚，旧故障复现 | PDD |
| **无来源断言** | 「输入校验」声称费率「在常见区间内」，区间在 prompt 中根本不存在 | PDD |
| **越权替用户决策** | 「这个商品本身不适合上架」 | PDD |
| **拒绝越权时连带拒绝服务** | 拒绝推演后省略了本轮正常分析 | PDD |
| **规则重的 Prompt 产出合规文本** | 输出稳定但片面保守——「用户要的是读牌，拿到的是合规文本」 | Arcana |
| **推理模型的反直觉延迟** | 降低推理强度的参数反而更慢 | Arcana |
| **优化直觉是错的** | 砍 Prompt 提速无效——输入 99.2% 已缓存命中 | Arcana |
| **泛词误匹配** | 「中美元首」命中「美元」→ 误入美联储/利率类目 | Stock News |

---

## 10. Learning System

### 10.1 目的

> 用**持续产出**证明学习能力，而不是在 About 里写 "lifelong learner"。

### 10.2 格式

```markdown
---
title: <标题>
description: <一句话摘要>
date: 2026-08-01
tags: [Prompt Engineering, RAG, LLM Evaluation, Agent, MCP, AI Product, Data Product]
readingTime: 6
---
```

### 10.3 首批内容（来自本地资产，需改写为公开版）

| 候选 | 来源 | 分类 | 优先级 |
|---|---|---|---|
| 豆包竞品拆解 | `豆包竞品拆解_完整记录_20260801.md`（325 行） | AI Product | P0 |
| RAG 工作流搭建与调试 | `Week4_..._RAG工作流搭建与调试.md`（99 行） | RAG | P0 |
| MCP 学习记录 | `MCP学习记录_Week9周二.md`（266 行） | MCP | P1 |
| LLM 评测 28 天实践 | `eval_project/day1..day28` | LLM Evaluation | P1 |
| 第一个月认知建立 | `第一个月完整学习档案_建认知.md`（260 行） | AI Product | P2 |

> ⚠️ 这些是私人学习笔记，公开前需：① 去除个人信息与内部吐槽；② 补上下文使外部读者可读；③ 确认无第三方敏感内容。

### 10.4 首页展示

`Latest Learning` 展示 3 篇最新，卡片含 title / description / date / tags / readingTime。

---

## 11. About Positioning

### 11.1 文案框架

> I study Data Science, but what interests me most is what happens **after** the model works.
>
> - What problem should AI actually solve?
> - Where should deterministic systems replace LLMs?
> - How should AI behavior be evaluated?
> - How do we turn model capability into usable product behavior?
>
> Most of my projects started because a model produced something that looked right and wasn't. That gap — between plausible output and correct behavior — is where I do my work.
>
> I combine **product thinking**, **data**, **LLM understanding**, and **rapid prototyping**: I run user interviews, write PRDs, define evaluation criteria, and build working prototypes myself.

### 11.2 用事实体现，不用形容词

| 要体现 | 用什么事实 |
|---|---|
| 自驱学习 | 12 周 AI PM 学习 + 28 天评测实践 + Learning 板块 |
| 逻辑思维 | 「通过的用例只是巧合」这类根因分析 |
| 持续学习 | Learning 更新频率 |
| 解决复杂问题 | `16 → 2` 的配置审计过程 |
| 诚实 | 主动标注 n=1 / 未验证痛点 / 分析局限 |

### 11.3 禁用词

`passionate` · `hard-working` · `fast learner` · `enthusiastic` · `dedicated` · `lifelong learner`

---

## 12. CTA Strategy

### 12.1 层级

| 层级 | CTA | 位置 |
|---|---|---|
| Primary | `View Selected Work` | Hero |
| Primary | `Resume ↗` | Hero + Nav + Contact |
| Secondary | `Read Case Studies` | Hero |
| Secondary | `GitHub ↗` | Hero + Nav + 项目卡 |
| Contextual | `Case Study ↗` | 每个项目卡 |
| Contextual | `Try Live Demo ↗` / `Live Demo ↗` | PDD / Stock News 卡 |
| Contextual | `View on GitHub ↗` | Arcana / Stock News / Tesla 卡 |
| Contextual | `Explore AI Evals →` | AI Evals 区块 |
| Terminal | `Email` · `GitHub` · `Resume` · `Portfolio` | Contact |

### 12.2 原则

| 原则 | 说明 |
|---|---|
| Hero 最多 4 个 CTA | 超过 4 个等于没有重点 |
| `Resume` 全站至少出现 3 次 | HR 的主要转化目标 |
| 每个 Case Study 末尾必须有下一步 | `← Back to Work` + `Next Case Study →` + `Contact` |
| 未提供的链接不渲染按钮 | `null` / `TODO_LINK` 隐藏，不渲染死链 |
| **不解释链接行为** | 不写任何关于访问机制、登录、休眠的说明。网站只提供入口 |

### 12.3 Contact 区块（最终）

| 渠道 | 值 |
|---|---|
| Email | `wangyijie072022@gmail.com` |
| GitHub | `https://github.com/Jaco-Yijie` |
| Resume | `/resume/Jaco-Wang-Resume-CN.pdf` |
| Portfolio | `https://jaco-yijie.github.io` |

> **仅此四项。** 不设微信、不设二维码、不设 LinkedIn，不自行增加其他联系方式。若日后需要 LinkedIn，另行添加。

---

## 13. Content Source Rules

> 完整规则见 `CONTENT_AUDIT.md` §0。

| 项目 | Source | Status | GitHub | Live Demo |
|---|---|---|---|---|
| Seller Profit Calculator | `PRD-v5.md` | Verified from PRD | — | ✅ |
| Arcana | GitHub（Public） | Repository verified | ✅ | — |
| Stock News | GitHub（Public）+ External PRD V1.4 | Mixed evidence | ✅ | ✅ |
| Taobao User Behavior | Resume only | Resume-grounded | — | — |
| Tesla FYP | GitHub（Public） | Repository verified | ✅ | — |
| IDSC 2026 | Resume | Resume-grounded | — | — |

**PDD 优先级**：`PRD-v5.md` > Resume > 用户补充 > AI 推断（禁止）
**GitHub 一律 Public**，按钮 `View on GitHub ↗`。
**四条硬规则**：不猜 URL｜不建空仓库｜不编造运营结果｜不展示实验级准确率。

---

## 14. Verification Rules

### 14.1 内容准入检查

```
① 这个说法的事实源是什么？
② 面试官追问「你怎么证明」时，我能给出什么？
③ 这是「已完成的结果」还是「目标 / 计划」？
④ 样本量是多少？需要标注吗？
⑤ 有没有把「提出的方向」写成「取得的结果」？
⑥ 这个数字适合放在 Portfolio 上，还是属于实验内部细节？
```
任一条答不上来 → 不上线。

### 14.2 数据层验证字段

```ts
{
  value: '16 → 2',
  label: 'LLM Context Variables',
  source: 'PRD-v5.md §6.3',    // 不渲染，供维护时自查
  verified: true,
}
```

### 14.3 上线前终检

| # | 检查项 |
|---|---|
| 1 | HR 能否在 10 秒知道我是 AI Product candidate？ |
| 2 | 能否在 30 秒看到 ≥3 个 Proof？ |
| 3 | 是否过于 Developer Portfolio？ |
| 4 | 是否过于强调技术栈而非 Product Decision？ |
| 5 | 是否明确展示了 AI Evaluation？ |
| 6 | 是否**展示**了 Prompt Engineering，而不只是**写**了这四个字？ |
| 7 | 是否有真实 Case Study（含失败与局限）？ |
| 8 | 所有数字是否可追溯到事实源？ |
| 9 | 是否出现了禁止展示的实验数字（准确率 / F1 / ROC-AUC）？ |
| 10 | GitHub 链接是否正确？ |
| 11 | Live Demo 按钮是否只出现在已提供链接的项目上？ |
| 12 | Resume 是否可以打开？ |
| 13 | Contact 是否只有四项？ |
| 14 | Mobile 是否正常？ |
| 15 | 是否存在夸大措辞或虚构结果？ |

---

## 15. Success Criteria

### 15.1 三层时间标准

| 时间 | 标准 | 验证方式 |
|---|---|---|
| **10 秒** | A recruiter should understand: **I am an AI Product candidate.** | 找 3 个非本专业的人看 10 秒后描述「这人做什么的」，≥2 人答出「AI 产品」即通过 |
| **30 秒** | 看到**至少 3 个真实 Proof** | 让对方复述记住的数字，≥3 个即通过 |
| **2 分钟** | 理解至少一个完整的 `Problem → Decision → Evaluation → Iteration → Outcome` Case Study | 让对方复述 Featured #1 的核心决策，能说出「不让 LLM 接触到数字 / 让代码算」即通过 |

### 15.2 内容标准

| # | 标准 |
|---|---|
| C1 | 每个 Featured Project 至少 2 个 Proof |
| C2 | 至少 1 个 Proof 可被读者**当场复现**（Arcana 评测命令） |
| C3 | 至少 1 个项目可被读者**直接使用**（PDD Live Demo） |
| C4 | 每项 Capability 至少指向 2 个项目作为 Evidence |
| C5 | 至少 1 个 Case Study 包含完整的**失败记录** |
| C6 | 所有 n≤2 的结论都标注了样本量 |
| C7 | 零虚构数字；零实验级准确率 |

### 15.3 体验标准

| # | 标准 |
|---|---|
| E1 | 1440 桌面 / MacBook / iPad / iPhone 四档正常 |
| E2 | Mobile Hero 不超过一屏 + 少量滚动 |
| E3 | Mobile Proof Metrics 为 2×2 |
| E4 | Mobile Projects 单列 |
| E5 | 键盘可完整导航 |
| E6 | 对比度符合 WCAG AA |
| E7 | 支持 `prefers-reduced-motion` |
| E8 | 语义化 HTML |
| E9 | 无死链 |

### 15.4 反向标准（出现即失败）

| # | 失败信号 |
|---|---|
| F1 | 读者认为这是「计算机学生个人主页」 |
| F2 | 读者记住的是技术栈，而不是产品决策 |
| F3 | 任何一个数字被面试官当场证伪 |
| F4 | 出现技能百分比条 |
| F5 | Hero 出现 "passionate" 类措辞 |
| F6 | 项目多到读者记不住任何一个 |
| F7 | 出现网站不该解释的技术细节（链接机制、准确率实验过程） |

---

## 附录：状态

### ✅ 已确认

| 项 | 结论 |
|---|---|
| Resume | `简历—V5.pdf` → `public/resume/Jaco-Wang-Resume-CN.pdf` |
| Contact | Email · GitHub · Resume · Portfolio（**仅此四项**） |
| GitHub Pages | `Jaco-Yijie.github.io`，`base: '/'`（仓库需新建） |
| 到岗 / 时长 | 一周内到岗；半年以上 |
| 在校时间 | 2023.10 – 2027.06，UKM（QS 130），GPA 3.5/4.0 |
| Hero Proof | `10` / `16 → 2` / `38` / `100M+` |
| 项目顺序 | PDD → Arcana → Stock News → Taobao |
| PDD | Live Demo ✅｜无 GitHub｜PRD 不公开 |
| Stock News | GitHub ✅ + Live Demo ✅｜PRD `TODO_LINK` |
| Arcana | GitHub ✅｜Live Demo 未提供，不设 |
| Taobao | 仅 Case Study |
| IDSC 2026 | More Work，只展示三行 |

### 🟡 待补（不阻塞）

| # | 项 |
|---|---|
| 1 | Stock News PRD V1.4 上传后替换 `TODO_LINK` |
| 2 | Arcana Live Demo 若有，补上按钮 |
| 3 | Learning 首批文章改写 |
| 4 | 顺手修：`arcana/README` 106→96、`stock_news/README` clone 地址 |

---

*本文件为 PHASE 1 交付物。PHASE 2 见 `DESIGN_SYSTEM.md`。*
