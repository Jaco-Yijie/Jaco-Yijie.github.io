# CONTENT_AUDIT.md — 内容审计与事实源规则

> 2026-09-08 更新：Stock News 完整 PRD 与 Arcana 的状态、链接和校验数量以 [PORTFOLIO_UPDATE_AUDIT.md](PORTFOLIO_UPDATE_AUDIT.md) 为准。下文保留此前审计记录。

> **版本**：v3（2026-08-11）
> v2 → v3 变更：移除 Resume/PRD 数字冲突分析；PDD Evaluation 统一表述为 `10 AI Evaluation Cases`，不展示任何准确率数字；全部 GitHub 仓库按 Public 处理；Stock News 保留 Live Demo 链接、不做可访问性说明；Contact 移除微信。

---

## 0. Content Source Rules（事实源规则）

### 0.1 各项目事实源与链接

| 项目 | Source | Status | GitHub | Live Demo | PRD |
|---|---|---|---|---|---|
| **01 Seller Profit Calculator**<br>拼多多新手卖家利润试算助手 | `PRD-v5.md` | Verified from PRD | — | ✅ `udify.app/chat/NTlMX91jzOFzzQpo` | 不公开 |
| **04 Arcana**<br>Immersive AI Tarot Experience | GitHub `Jaco-Yijie/arcana` | Repository verified | ✅ Public | 已验证入口，见 §2.2 | — |
| **03 Stock News Intelligence**<br>A 股板块新闻监控系统 | GitHub + External PRD V1.4 | Mixed evidence | ✅ Public | ✅ `stocknews-c8bdpgjep9n7zrxkscggbh.streamlit.app` | `TODO_LINK` |
| **04 Taobao User Behavior Analysis**<br>淘宝用户行为分析 | Resume only | Resume-grounded | — | — | — |
| **More · Tesla FYP** | GitHub `Jaco-Yijie/tesla-stock-prediction-fyp` | Repository verified | ✅ Public | — | — |
| **More · IDSC 2026**（团队） | Resume | Resume-grounded | — | — | — |

**GitHub 一律按 Public 处理**，按钮统一 `View on GitHub ↗`，直链对应仓库。

**Live Demo 一律直接给链接**，按钮 `Live Demo ↗`（PDD 可用 `Try Live Demo ↗`）。网站只提供入口，不解释任何访问机制。

### 0.2 PDD 事实优先级

```
PRD-v5.md  >  Resume  >  用户补充说明  >  AI 推断（禁止）
```
PRD 没有记录的 → 不写成事实 → 标 `VERIFY_REQUIRED`。

### 0.3 通用规则

| 规则 | 说明 |
|---|---|
| **不猜 URL** | 只使用已明确提供或已在事实源中出现的链接 |
| **不建空仓库** | 不为了让项目有链接而创建仓库。GitHub 不是必须的 Evidence 形式 |
| **不编造运营结果** | 禁止 Conversion / Revenue / CTR / GMV Lift、A/B Test 结果 |
| **不展示实验级准确率** | PDD 不展示 40% / 100% / 4·10 / 6·6；IDSC 首页不展示 Recall / F1 / ROC-AUC |
| **样本量必须标注** | n=1 / n=2 的结论标注样本量，不换算成百分比 |
| **Contact 仅四项** | Email · GitHub · Resume · Portfolio。不加微信、不加二维码、不自行增加其他渠道 |

---

## 1. Repository Audit

### 1.1 GitHub 仓库（全部 Public）

| 仓库 | 语言 | 最近推送 | Portfolio 用途 |
|---|---|---|---|
| `arcana` | TypeScript | 本地 working tree 2026-09-17 | **Featured #4 · 开发中** |
| `stock_news` | Python | 2026-07-28 | **Featured #3** |
| `tesla-stock-prediction-fyp` | Python | 2026-07-22 | **More Work** |
| `A_Stock_review` | Python | 2026-08-04 | 不展示（README 为乱码占位符） |
| `basic-house-price-analysis` | Jupyter | 2026-04-04 | 不展示 |
| `titanic-survival-prediction` | Jupyter | 2026-04-05 | 不展示 |
| `finger-magic-show` | JavaScript | 2026-06-03 | 不展示（与求职方向无关） |
| `tarot_card_project` | — | 2026-08-04 | 不展示（仓库内无文件） |

### 1.2 无仓库项目

| 项目 | 事实源 | Evidence 形式 |
|---|---|---|
| **PDD 利润试算助手** | `~/Desktop/AI PM/PRD-v5.md`（694 行）+ PRD v1–v4 + 线框图 | PRD · Product Iteration · 10 Evaluation Cases · User Testing · Architecture Decisions · **Live Demo** |
| **淘宝用户行为分析** | Resume | Analysis Results · Metrics · Funnel · Dataset Scale |

### 1.3 Learning 板块素材（本地）

| 资产 | 路径 | 规模 |
|---|---|---|
| 豆包竞品拆解 | `~/Desktop/AI PM/豆包竞品拆解_完整记录_20260801.md` | 325 行 |
| RAG 工作流复盘 | `~/Desktop/AI PM/Week4_..._RAG工作流搭建与调试.md` | 99 行 |
| MCP 学习记录 | `~/Desktop/AI PM/MCP学习记录_Week9周二.md` | 266 行 |
| 第一个月学习档案 | `~/Desktop/AI PM/第一个月完整学习档案_建认知.md` | 260 行 |
| LLM 评测自学项目 | `~/Desktop/agent学习/eval_project/day1..day28` | 28 天连续产出 |

### 1.4 Resume 提取的事实（`~/Desktop/简历—V5.pdf`）

| 项 | 值 |
|---|---|
| 姓名 | 王一杰 / Jaco Wang |
| 求职方向 | AI 产品实习生 / AI 应用产品实习生 |
| 到岗时间 | **一周内到岗** |
| 实习时长 | **半年以上** |
| 学校 / 专业 | 马来西亚国立大学 UKM（QS 130）· 计算机科学（数据科学） |
| 在校时间 | **2023.10 – 2027.06** |
| GPA | 3.5 / 4.0 |
| Email | `wangyijie072022@gmail.com` |
| GitHub | `https://github.com/Jaco-Yijie` |

**Resume 的技能分组**（与 Capabilities 四组对应，直接沿用）：

| Resume 分组 | 内容 | Capability |
|---|---|---|
| AI 产品 | 用户访谈、需求分析、PRD、MVP、AI Evaluation、Prompt Engineering | 01 AI Product |
| LLM 应用 | Dify / Coze、RAG、Agent、Function Calling、MCP；LLM 输出验证、上下文管理与成本控制 | 02 LLM Product Systems |
| 数据分析 | Python、Pandas、SQL（MySQL / DuckDB）；数据清洗、指标体系、漏斗及留存分析 | 03 Data & Evaluation |
| 原型与开发 | Figma、GitHub Actions、Streamlit、Codex / Claude Code；原型设计、AI 辅助开发与 Debug | 04 Prototype & Delivery |

> 补充：仓库中实际还用到 Supabase / DuckDB，Capabilities 可按仓库事实补上。

---

## 2. Verified Project Facts

## 2.1 Seller Profit Calculator

> **Source: `PRD-v5.md`｜Status: Verified from PRD**
> 独立完成 · Dify Chatflow · `2026.06 – 2026.07` · PRD 迭代 5 版（91 / 161 / 212 / 260 / **694** 行）
> **Live Demo**：`https://udify.app/chat/NTlMX91jzOFzzQpo`｜无 GitHub｜PRD 不公开

### Proof（网站展示用）

| Proof | 值 |
|---|---|
| Evaluation | **10** AI Evaluation Cases |
| Context Design | **16 → 2** LLM Context Variables |
| Iteration | **PRD V1–V5** |
| User Testing | 2 user tests（标注样本量） |

> **Evaluation 的统一表述**：`Designed 10 AI evaluation cases to test LLM numerical behavior.`
> **不展示**任何准确率、通过率、比分或 Pending 状态。

### 01 Problem Discovery

四条原始假设，**验证 2 条、作废 1 条、悬空 2 条**（PRD §3）：

| 痛点 | 状态 | 证据 |
|---|---|---|
| ① 不知道平台有哪些费用 | ✅ 已验证 | 真实用户测试：5 个费率字段**全部留空** |
| ② 算不清真实到手利润 | ✅ 已验证 | 3 个真实卖家案例（猫砂盆：39 进价卖 158，运费超规格仍血亏） |
| ③ 不会分析数据 | ❓ 无证据 | 属推测 |
| ④ 没人可问 | ❓ 无证据 | 属推测 |
| ~~⑤ 怕选错货压库存~~ | ❌ 部分作废 | 新手普遍走一件代发 / 零囤货 |

**核心 Insight**：
> 痛点 ① 是 ② 的根源：**不是不会算，是不知道要算什么。**「抽佣」不是一个数，而是多层叠加。

### 02 Product Scope

`General Product Selection Assistant` → **`Profit Calculation MVP`**

**核心原则**：
> **Data belongs to the user. Analysis belongs to the assistant. Decision remains with the user.**

**闸门设计（PRD §4）**：
> 先判断「这个品在当前定价下赚不赚钱」，不赚钱就不必再分析人群和卖点。先砍掉不该卖的，再优化该卖的。

**竞品切入点（PRD §1）**：
> **多多参谋回答「这个品卖了多少」，本产品回答「按你的成本，这个品你能赚多少」。**

**诚实边界（5 条取舍）**：用户需自备成本数据 / 覆盖窄 / 非实时 / 不拼数据量 / 不支持会话内追问改数。

### 03 Evaluating LLM Reliability

建立 **10 组 AI Evaluation 用例**，测试 LLM 能否可靠处理数值输出。

**评测发现（PRD §7.1）**：
> LLM 并没有稳定引用代码节点的计算结果，而是在自行进行算术运算。**Prompt 层的约束没有真正生效。**

根因分析中最关键的一点：**少数通过的用例是巧合，不是引用**——它们的原始计算结果本身即两位小数，LLM 自算结果与代码取整后恰好相同；一旦原始值是三位小数，差异立刻暴露。

**方法论**：
> **Prompt is a soft constraint, not a hard switch.**

> ⚠️ PRD 中的具体比例、通过数、复测状态**仅作内部记录，不进入网站**。

### 04 Architecture Decision

**核心原则（PRD §6.1）**：
> **确定性的事交给确定性工具，概率性的事交给 LLM。**
> 更进一步：**不要试图约束模型不做某事，而是让它接触不到那件事。**

**BEFORE**
```
User Inputs → LLM → Calculation + Explanation
```
**AFTER**
```
User Inputs → Python → Deterministic Calculation → LLM → Explanation
```

**完整架构（PRD §6.1）**：
```
[开始] 8 个数字输入（进价/售价/运费 必填；5 项费率带默认值）
   ↓
[条件分支] sys.dialogue_count ≤ 1 ?
   ├─ IF（首轮）
   │   [代码] Python 确定性计算
   │      → cost_table（明细表，代码直出）
   │      → risk_flags（风险判断，无风险时为空串）
   │      → margin_level（利润档位）
   │   [LLM] 仅做解读与措辞｜输入仅 2 个变量
   │   [回复①] cost_table + LLM 解读 + 免责声明（固定文案）
   └─ ELSE（追问）
       [回复②] 固定兜底话术，不经过代码节点与 LLM
```

| Python 负责 | LLM 负责 |
|---|---|
| fees · total cost · profit · profit rate · ratios · risk determination · margin level | interpretation · wording |

**核心结论**：
> **Deterministic tasks should be handled by deterministic systems.**

**Prompt 迭代链（PRD §7.2，共 9 轮，可摘要展示）**：

| 尝试 | 结果 |
|---|---|
| Prompt 禁止重新计算 | ❌ 无效 |
| 代码算好占比并显式传入 | ⚠️ 部分有效 |
| 加严 prompt 禁止一切算术 | ⚠️ 仍然越界 |
| **架构级隔离** | ✅ 有效 |

其余越界行为与对应修复（均已解决）：凭空断言「占比均在合理范围内」→ 风险判断改由代码做；追问时推演未经计算的情景 → 禁止情景推演；编造「因平台规定无法提供金额」→ 禁止伪造外部依据；拒绝推演后连带省略正常分析 → 拒绝越权但不拒绝服务。

### 05 Context Isolation：16 → 2

**故障现象（PRD §7.5）**——同一会话连续三次测算，表格全对，LLM 文字三次复述同一组数：

| 轮次 | 表格（代码节点） | LLM 文字 |
|---|---|---|
| 售价 41 / 进价 29 | 利润 3.95（9.63%） | 「净利润 6.95 元，利润率 16.95%」 |
| 售价 52 / 进价 23 | 利润 17.06（32.80%） | 「净利润 6.95 元，利润率 16.95%」 |
| **售价 62 / 进价 57** | **利润 −8.66（−13.97%）** | **「净利润 6.95 元，利润率 16.95%」** |

> 最后一行是产品事故：用户实际每单亏 8.66 元，底下的文字告诉他「净利润 6.95 元」。

**第一假设：记忆污染**。模型 reasoning 原文印证：
> 我应该基于**最近一次有效计算**的结果，输出风险提醒

Token 曲线同向上升：2,850 → … → **5,064**。

**但配置审计推翻了「只是记忆」**：
> **LLM 节点共引用 16 个变量，其中 12 个是纯数值（5 个费率 + 7 个占比）。**
> 这些数字不是从记忆里绕进来的，是**写在 SYSTEM prompt 里、通过变量渲染直接送进去的**。

**决定性证据**：`63.41% + 2.44% = 65.85%` —— **这是模型做的加法，不是复述。**

**砍变量的判断标准**：
> 这个数**从 LLM 嘴里说出来**，比它**已经在表格里**，多给了用户什么？

**结果 16 → 2**（PRD §6.3）：

| 保留（2 个，定性字符串） | 移除（14 个） |
|---|---|
| `margin_level`（健康/一般/偏薄/亏损） | 7 个占比 —— 同量纲可相加，模型必然去组合 |
| `risk_flags`（风险文案串，无风险为空串） | 5 个费率 —— 同量纲可加，且存在换算关系 |
| | `is_profitable` —— 已被 `margin_level` 四档包含 |
| | `top_cost_item` —— 保留它就需要 LLM 比较 7 个数，「比较」就是运算 |

代码节点的 17 个数值输出、5 个费率输入、`cost_table` **全部不进入 LLM 上下文**；LLM 节点记忆已关闭。

**方法论**：
> 判断「要不要把某个数据给 LLM」，标准是「**它能不能和别的数组合**」，不是「它重不重要」。

### 06 Silent Failure

砍完变量后复测，用户说「改成 55 再算一遍」：
> 系统**用旧参数重跑了一遍，输出了一份完整、自洽、格式正确的新报告**。

| | 修复前 | 修复后 |
|---|---|---|
| 现象 | 表格对，文字数字错乱 | 表格与文字全部自洽 |
| **用户能否发现** | **能** | **不能** |

> **在决策支持类产品中，静默的错误比明显的错误更危险。**

**根因（PRD §6.2）**——Chatflow 两个特性同时成立：① 每收到一条消息整条工作流从头跑一遍；② 开始节点变量一个会话只收集一次。
> **无论 LLM 说什么，用户都会看到一份格式完整、内部自洽、但参数已过期的报告。**
> 因此判断必须发生在代码节点**之前**，而不是在 LLM 的措辞里。

**第三次故障：prompt 静默回滚**——误建空节点后用画布撤销删除，**Dify 的撤销是整画布级别**，重写过的 SYSTEM prompt 被一并回滚，旧故障全部复现。
> 发现方式：**刻意的对照测试**——把推广费率填成非默认值，看输出会不会复述它。
> **教训：改完不验证等于没改。**

### 07 Prompt Engineering

```
Prompt Constraint → Evaluation → Failure Analysis
    → Architecture Change → Regression Validation
```

**Prompt 承担的六类约束**：

| 约束 | 来由 |
|---|---|
| 禁止编造外部依据 | 曾编造「因平台规定无法提供金额」 |
| 禁止情景推演 | 曾把 0.14% 推演成「1%~2%」 |
| 拒绝越权但不拒绝服务 | 曾因拒绝推演而省略本轮正常分析 |
| 禁止替用户做最终决策 | 「产品是不是值得继续卖」→ 改为「建议重点检查进货渠道或供应商报价」 |
| 固定 Margin-Level 结论 | 四档结论**原样输出不得改写** |
| 输入异常不得断定用户填错 | 必须同时给出两种可能，禁止「填写有误」等断定表述 |

**定位**：
> Prompt Engineering is part of **system design**, not just copywriting.
> = **Task Boundary + Output Constraint + Failure Handling + Context Control + Regression Testing**

### 08 User Testing & Iteration

**用户一（n=1）**——原计划上架，看到结果后：
> 不会直接卖，最多只会考虑先少量测试。……进价已占售价的 62.66%，只要推广费增加、参加平台优惠，或者出现退货和补发，就很容易不赚钱。

→ 决策改变 · 引用了产品的具体输出 · 内化了风险逻辑 · 明确了下一步行动

**用户二（n=1）**——**没有改变决策**，但暴露了更深的问题。四个问题全部关于**参数从哪来**：
1. 类目技术服务费 8% 是固定的吗？
2. 我卖 59.9 的话，一单实际到手能有多少？
3. 推广费 5% 是不是太低了？
4. 一件代发的话运费是不是要更高？

评价：**「没有实质的建议，只有说是亏损还是盈利，回答单一。」**

**最关键的一条观察**：
> **用户问「推广费 5% 是不是太低了」，而他用的正是默认的 5%。**
> 他意识到这个值可能不适合自己，但仍然没有改——因为他不知道该填多少。

**产品前提上的漏洞**：
> 产品隐含了一个未验证的假设：**只要告诉他有这些费用，他就能填对数值。这个假设不成立。**
> 而「禁止编造费率」与「禁止评价费率高低」两条铁律恰恰封住了这一块——**用户最需要帮助的地方，正是产品主动留白的地方。这不是设计失误，是一个真实的两难。**

**Product Trade-off**：`Convenience` vs `Input Reliability`
> **Completion Rate ≠ Input Quality**

> 表述规范：`Observed in 2 user tests: 1 user changed the initial decision.`（不换算成百分比）

### 09 Platform Review：Dify vs Coze（PRD §11.2）

> Dify 是我接触的第一个 AI 应用编排平台，当时没有做横向对比，直接上手使用。**这不是一次评估后的选择，而是一次默认选择。**

一周实战后对照项目真实暴露的需求：

| 维度 | Dify | Coze |
|---|---|---|
| 变量进入 LLM 的方式 | prompt 内直接插入，**无声明要求** | 须先在「输入」表**逐行声明** |
| 会话中途收集用户输入 | **不支持** | 支持 |
| 撤销粒度 | **整画布级别，不区分节点** | — |

**核心 Product Insight**：
> 三个我当初完全没想到、但**实际决定了产品形态**的维度……那次故障与默认值直接相关：**不是因为开发者不够谨慎，而是默认状态不同。**

**结论**：继续留在 Dify，**Migration Cost > Current Benefit**。下次选型这三条是硬性检查项。

> ❌ 禁止写成「Dify 比 Coze 好」。PRD 明确标注不构成对两个平台的全面评价。

### 10 RAG Decision（PRD §11.3）

评估后**不引入**。
> 依据不是「用不上」，而是一次实证：**瓶颈不在缺少外部知识，而在上游给 LLM 的判断粒度不够。**

- 现象：两个差异很大的利润率曾输出几乎一字不差的结论——当时档位判断只有三档
- 解法：代码节点增加 `margin_level` 四档，问题即解决
- 推论：**RAG 解决不了这个问题，一个代码里的档位判断可以**

| 不能放进知识库 | 可以放 |
|---|---|
| 事实断言（费率是多少） | 情境判断规则 |
| 用户具体情况的数据 | 新手常见决策错误模式 |
| 会过期的平台参数 | 什么情况下该小批量测、什么情况下该换品 |

> **Do not add RAG because it is fashionable. Add RAG only when the bottleneck is actually knowledge retrieval.**

### 11 补充素材

**验证用例 · 真实血亏案例（PRD §6.5）**——进价 39 / 售价 158 / 运费 200：总成本 261.44（占售价 165.5%），**利润 −103.44（−65.5%）**，运费占售价 126.6%。产品在下单**之前**识别出亏损。

**方法论沉淀 12 条**（§7.3 第 1–6 + §7.6 第 7–12），可选用于 "What I Learned"：

1. Prompt 是软约束，不是硬开关
2. 算出来 ≠ 送到了
3. LLM 环节的故障是静默的
4. 让错误的输出看起来正确 ≠ 让输出真正正确
5. 不可复现的错误比稳定的错误更难修
6. 任务定死后，模型推理能力越强不等于越好
7. **写下一条原则 ≠ 执行了它**
8. 判断要不要把数据给 LLM，标准是「能不能和别的数组合」
9. **修复可能让故障变得更隐蔽**
10. 拦截必须发生在错误产生之前
11. 改完必须实测，且要用「能证伪」的用例
12. 输出质量的瓶颈可能在上游的判断粒度

---

## 2.2 Arcana — 2026-09-17 当前状态审计

事实优先级：`/Users/wangyijie/Desktop/arcana` 当前工作区（HEAD `789f2b5`，包含未提交代码）> GitHub > 用户补充。未修改 Arcana 工作区。
Portfolio 修改基线为 `3739da6`，包含远端 HEAD `2f73f00` 之后已有的导航与响应式改进。保留这两项已有提交及其他项目内容。

| Fact | Source（Arcana 仓库相对路径） | Verified status | Date |
|---|---|---|---|
| 第 04，开发中；引擎控制牌、正逆位、数量和选择，LLM 只解释冻结结果 | engine-selfcheck、buildReadingRequest、server/context/rebuild、readingSchema | 代码 + 引擎/Mock 解读实跑 | 2026-09-17 |
| Shuffle → Cut → Spread → Select → Place → Reveal → Reading | src/pages、src/features/table、engine-selfcheck | 代码 + 会话模拟 | 2026-09-17 |
| 浏览器 → 本站 reading API → 服务端 → DeepSeek，密钥不进入浏览器 | server/index.ts、server/api/readingRoute.ts、server/providers/deepseek.ts | 代码；未调用真实模型 | 2026-09-17 |
| 10 个已定义视觉世界，5 个 legacy Deck 可选；其他 5 个 artwork Deck 未满足资产门槛 | src/decks/registry.ts、artwork/resolver.ts、src/atmosphere/signatures.ts、DeckLibraryPage.tsx | 代码 + deck/artwork 实跑；不代表 10 套已发布 | 2026-09-17 |
| 语义/视觉/氛围分层；Reading 保留冻结 session 的 Deck | src/atmosphere/visualScope.ts、src/pages/ReadingPage.tsx、docs/deck-worlds-v1.md | 代码；历史 UI 验收为文档证据 | 2026-09-17 |
| 最长静默窗口 9.6s → 2.57s；首批可见约 1.9s → 1.56s | docs/v2/35-e3-reading-experience-v2.md §2、streamClient、ReadingBody | 一次文档调查；非均值，本轮未重新测时 | 2026-09-17 |
| Intro Cover、3D Hero、Ritual Table、首次指南、What is Tarot、New Reading | src/pages、src/components/immersive、docs/home-entrance-v1.md、docs/immersive-3d-v1.md | 代码，未声称带来运营增长 | 2026-09-17 |
| 中英覆盖导航/操作/Deck/结果；展示字体与 AI 正文分离 | src/i18n、src/styles/theme.css、docs/arcana-design-system-v1.md | i18n 静态检查 18 项通过，设计测试 7 项通过 | 2026-09-17 |
| 注册登录、PostgreSQL 与 Admin Analytics 已在本地实现，未部署 | server/auth.ts、server/api/userRoute.ts、adminRoute.ts、server/db/migrations/001/002、server/admin/queries.ts、docs/user-system-v1.md、docs/admin-dashboard-v1.md | 代码存在，历史本地集成验收有记录；本轮 DB 测试跳过 | 2026-09-17 |
| 未发现微信登录实现 | 对 server/src/tests 搜索 WeChat/wechat/微信，无命中 | 未实现证据；禁止表述为支持 | 2026-09-17 |
| reduced motion、粗指针降运动、缩略图、自托管字体、阅读对比度 | styles、performance-check、design-system.test.ts、docs/deck-worlds-v1.md | 代码与检查；375/390/430 为历史 Arcana 验收，非本轮真机复测 | 2026-09-17 |

### 本轮自动化结果与口径

`npm run ...:check` 最初被沙箱禁止 tsx IPC 管道。改为 `node --import tsx scripts/<实际脚本>.ts` 运行同一脚本；没有修改测试代码或断言。

| Suite | Passed | Failed / skipped | Scope |
|---|---:|---|---|
| engine | 64 | 0 | 当前源码 |
| deck | 367 | 0 | 资产缺失作为未发布状态报告 |
| layout | 147 | 0 | 当前源码 |
| artwork | 89 | 0 | 当前源码与资产登记 |
| reading | 118 | 0 | Mock Provider，非真实模型评分 |
| **核心五组总量** | **785** | **0** | 首页 Proof，仅上述五组 |
| release | 67 | 3 failed | 字体预加载、分享问题默认值、JS 总体积预算 |
| deployment | 56 | 0 | 包含已有构建产物检查，不等于最新源码已部署 |
| performance | 30 | 0 | 渐进呈现/边界保护，不是延迟测量 |
| i18n 静态 | 18 | 0 | 未包含 i18n:runtime |
| design | 7 | 0 | 含十套视觉签名及文字对比度 |
| user | 2 | 1 listener EPERM; 1 DB skipped | 未提供独立 TEST_DATABASE_URL |
| admin | 1 | 3 DB skipped | 不将 skip 算作通过 |

不展示所有检查相加的“全部通过”。不更改 Arcana 来修复这些失败，本轮范围仅同步 Portfolio。

### 旧事实处理

- 删除首页 390 张牌面、24 条红线与旧 64 + 96 / 64 + 118 组合，改为三个有明确口径的 Proof。
- 390 的资产登记仍有代码依据，但不等于十套完整牌组，不再作为首页规模主张。
- 1.1s 属更早性能实验，不能当当前响应速度；改用带调查限定的渐进呈现数据。
- “MVP 已成型”改为“开发中 / In Development”；Quick Read 为“当前产品状态”。
- 不再把 localStorage 描述成产品唯一持久化：游客本地日记与本地开发中的 PostgreSQL 账号持久化并存。
- 不公开合成测试用户数、DAU/MAU、留存或 SQL 性能为真实运营成绩。
- Live Demo 的历史来源为 docs/v2/32-e2-real-deployment.md；本轮先见 Render 唤醒页，随后浏览器成功打开 Arcana 品牌页与“开始一次解读”按钮。保留真实地址 `https://arcana-e190.onrender.com`；未验证付费模型请求，也不将本地新增功能视为线上功能。

---

## 2.3 Stock News Intelligence

> **Source: GitHub `Jaco-Yijie/stock_news`（Public）+ External PRD V1.4｜Status: Mixed evidence**
> Python 3.12 + Streamlit + AKShare + Supabase(Postgres) + GitHub Actions｜LLM: 豆包 / DeepSeek
> 按钮：`Live Demo ↗` · `View on GitHub ↗` · `Case Study ↗`（PRD 按钮暂用 `TODO_LINK` 或不显示）

### Proof

| Proof | 值 |
|---|---|
| 覆盖范围 | **38** Industry Sectors |
| 产品迭代 | **PRD V1.4** |
| 工程质量 | 70 个测试 / 191 条断言 |
| 自动化 | 3 个 GitHub Actions 工作流 |

### 已验证

| 事实 | 结果 |
|---|---|
| 行业板块 | **38**（解析 `data/sectors_config.json`） |
| 代码规模 | 8,227 行 Python |
| 测试规模 | 70 个测试 / 191 条断言 |
| 抓取频率 | 北京时间 08:00–24:00 **每 30 分钟**；01:00–07:00 每小时 |
| 每日早报 | 北京时间 07:30 |
| 推送通道 | Telegram + PushPlus（微信） |

### Keyword Rule Engine + LLM Low-confidence Review

LLM 不对所有新闻调用，只在三种情况触发（`classifier.py`）：
```python
LOW_CONFIDENCE_THRESHOLD = 0.75
NEAR_MIN_SCORE_THRESHOLD = 1.25
return high_risk_low_confidence or high_impact_generic_risk or near_min_score
```
① 高风险类目且置信度 < 0.75　② 高影响类目且命中泛词（`美元`/`利率`/`Apple`/`Pro`/`Vision`）　③ 得分贴近阈值

**为什么不让 LLM 判断所有新闻**：成本 · 稳定性 · 确定性规则可解释 · 避免重复调用。

### Prompt / Rule Versioning 参与缓存判断

`classifier.py::_validation_cache_key()` 把 `prompt_version` 与 `rule_version` 写进 SHA256 缓存键：
```python
PROMPT_VERSION = "news-classification-reverse-v1"
RULE_VERSION   = "structured-rules-v1"
```
→ **Prompt 版本或规则版本一变，缓存自动失效。**

### Prompt 结构（`llm_provider.py::_user_prompt`）

| 部件 | 内容 |
|---|---|
| `task` | 判断这条新闻是否真的属于给定分类，而不是被泛词误匹配 |
| `outputSchema` | `{shouldKeep, category, confidence, reason}` |
| `rules` | 只能确认保留或反向否决 / 不属于则 shouldKeep=false / 不输出 JSON 以外任何文本 |
| `negativeExamples` | **4 条真实负例**：中美元首会谈 ≠ 美联储/利率；卢比兑美元 ≠ 美联储/利率；「Pro 版本」≠ Vision Pro；海马汽车 ≠ 苹果产业链 |
| `evidence` | 规则层的 score / confidence / matchedKeywords / genericRiskKeywords |

参数：`temperature: 0`；`response_format: {"type":"json_object"}`。

**成本控制**：分类校验 `timeout=8s`，日报生成 `timeout=90s`——两类任务分开设超时。

### 其他能力

影响分析三档（`analysis.py`）· 标题 bigram 去重 · link hash 推送去重 · 日报防幻觉 System Prompt（「不得编造事实、数字或引入给定新闻之外的信息」）· Telegram 4096 字符分段 · Supabase 未配置时自动回退本地 CSV。

### 建议顺手修（不阻塞）

`README.md` 的 clone 地址指向错误账号；Features 列表落后于代码（未提影响分析、LLM 反向校验、推送、早报、Actions）。

---

## 2.4 Taobao User Behavior Analysis

> **Source: Resume only｜Status: Resume-grounded**
> 无 GitHub 仓库（按规则不创建）。按钮：`Case Study ↗`

### Resume 原文

> 基于 **1 亿条用户行为日志（1.6GB）** 构建 PV / UV / 转化 / 复购 / 留存指标体系，并通过 **Pandas 类型优化将数据处理内存占用降低约 50%**。
> 基于 **PV → Cart → Buy 漏斗**识别约 **20.79 万高意向用户**，并发现**购买量与转化率峰值存在时间差**，产出**分时投放与客群精细化运营建议**。

### Proof

| Proof | 值 |
|---|---|
| 数据规模 | **100M+** Behavior Logs（1.6 GB） |
| 高意向人群 | **207.9K** High-intent Users |
| 工程优化 | **~50%** Memory Reduction |
| 漏斗 | PV → Cart → Buy |

### 表述规范

| ✅ 可写 | ❌ 不可写 |
|---|---|
| `~50% Memory Reduction` | `X GB → X GB`（无 Before/After benchmark） |
| `Proposed: time-based ad allocation, high-intent targeting, segmentation` | `Achieved` / `Improved` / 任何 Lift 数字 |

**禁止编造**：Conversion Lift · Revenue Lift · CTR · GMV · A/B Test Result · Campaign Result。
**主线**：`Data → Insight → Product Recommendation`，不是「我会 Pandas」。

---

## 2.5 More Work

### Tesla Stock Prediction（FYP）

> **Source: GitHub（Public）｜Status: Repository verified**

| 事实 | 值 |
|---|---|
| 特征数 | 67（61 基础 + 6 实验） |
| 严格最终 Holdout | 200 行（占 20%） |
| OOF 与 Holdout 日期重叠 | **0**（代码中有断言） |
| 禁止特征清单 | 10 个 |
| 显式排除的候选特征 | 7 个，每个写明理由 |

**Proof**：`Time-aware evaluation pipeline with 6 leakage controls` —— **不用准确率**。

**6 条泄漏控制**：holdout 先切分 / 阈值调优只用 pre-holdout OOF / 断言日期不重叠 / walk-forward replay / 不把未收盘交易日当完整 OHLCV / 样本不足 120 条标记跳过。

**学术诚实性**（仓库原文，加分项）：
> any improvement is limited and **should not be presented as a reliable trading edge**.

### IDSC 2026 Biomedical Data Challenge（团队）

> **Source: Resume｜Status: Resume-grounded**

展示内容（首页 / More Work 仅这三行）：
- Brugada ECG classification
- Model comparison（Logistic Regression / Random Forest / 1D-CNN）
- **Recall-oriented model selection**

> 首页**不展示** Recall / F1 / ROC-AUC 具体值。若日后单独做 Case Study，再展示详细指标。
> 价值点是「**基于筛查场景优先关注 Recall**」这个指标选择判断，不是模型对比本身。

---

## 3. Homepage Proof Metrics（最终）

| 数字 | 说明 | 来源 |
|---|---|---|
| **10** | AI Evaluation Cases | PDD `PRD-v5.md` |
| **16 → 2** | LLM Context Variables | PDD `PRD-v5.md` §6.3 |
| **38** | Industry Sectors | `sectors_config.json` |
| **100M+** | Behavior Logs | Resume |

**禁止用于 Hero**：`40%` · `100%` · `6/6` · `4/10` · `Recall` · `F1` · `ROC-AUC` · 任何 Pending 状态。

---

## 4. 剩余 VERIFY_REQUIRED

| # | 项 | 处理 |
|---|---|---|
| 1 | Stock News PRD V1.4 文件 | 仓库之外 → `TODO_LINK` 或暂不显示 PRD 按钮 |
| 2 | Arcana Live Demo | 未提供 → 不设按钮（提供后再加） |
| 3 | IDSC 2026 细节 | 仅按 Resume 三行展示；做 Case Study 前需核对本地 `idsc2026_brugada_huca-main` |
| 4 | PDD 痛点 ③④ | PRD 标注「无证据」→ Case Study 中如实呈现 |
| 5 | PDD 费率默认值 | PRD 标注为估值 → 不得表述为平台事实 |
| 6 | `Jaco-Yijie.github.io` 仓库 | 尚未创建，PHASE 10 部署前建 |

---

## 5. `data/links.ts`

```ts
export const links = {
  github:    'https://github.com/Jaco-Yijie',
  email:     'wangyijie072022@gmail.com',
  resume:    '/resume/Jaco-Wang-Resume-CN.pdf',
  portfolio: 'https://jaco-yijie.github.io',

  repos: {
    arcana:    'https://github.com/Jaco-Yijie/arcana',
    stockNews: 'https://github.com/Jaco-Yijie/stock_news',
    teslaFyp:  'https://github.com/Jaco-Yijie/tesla-stock-prediction-fyp',
  },

  demos: {
    sellerProfit: 'https://udify.app/chat/NTlMX91jzOFzzQpo',
    stockNews:    'https://stocknews-c8bdpgjep9n7zrxkscggbh.streamlit.app/',
    arcana:       'https://arcana-e190.onrender.com', // 2026-09-17 入口已验证
  },

  prds: {
    stockNews: 'TODO_LINK',   // PRD V1.4，仓库之外
  },
}
```

> `null` / `TODO_LINK` **不渲染按钮**（不渲染成灰色死链）。
> Contact 仅四项：**Email · GitHub · Resume · Portfolio**。

### 5.1 部署配置

| 项 | 值 |
|---|---|
| Pages 仓库 | `Jaco-Yijie.github.io`（需新建） |
| Vite `base` | `'/'` |
| 站点地址 | `https://jaco-yijie.github.io` |
| Resume 文件 | `简历—V5.pdf` → `public/resume/Jaco-Wang-Resume-CN.pdf`（ASCII 文件名） |

---

## 6. 禁止出现在网站上的表述

| ❌ 禁止 | ✅ 改为 |
|---|---|
| `40% → 100%` / `40%` / `4/10` / `6/6` / `复测 Pending` | `10 AI Evaluation Cases` |
| Arcana 旧 reading 断言数 | 当前 Mock 实跑 118；核心五组 785，详见 §2.2 |
| 淘宝 `X GB → X GB` | `~50% Memory Reduction` |
| 淘宝 Conversion / Revenue / CTR / GMV Lift、A/B 结果 | 只写 `Proposed` 方向 |
| 淘宝 Outcome 写 `Achieved` / `Improved` | `Proposed` |
| Tesla `54%` accuracy | `Time-aware evaluation pipeline · 6 leakage controls` |
| IDSC 首页展示 `Recall 0.50 / F1 0.387 / ROC-AUC 0.624` | `Recall-oriented model selection` |
| 「Dify 比 Coze 好」 | 「平台默认约束直接改变产品能实现的交互形态」 |
| 「我全面比较了 Dify 和 Coze」 | 「Dify 是默认选择；暴露问题后才基于真实需求测试 Coze」 |
| PDD 决策改变率 `50%` | `Observed in 2 user tests: 1 user changed the initial decision.` |
| PDD 项目时间 `2026.05–06` | `2026.06 – 2026.07` |
| PDD 费率区间为平台事实 | 标注为「产品判断规则」或「估值」 |
| 任何微信 / 二维码 / 扫码入口 | 不设 |
| 任何关于链接可访问性的解释 | 不写。网站只提供入口 |

---

*本文件为 Content Source 与 Verification 的唯一依据。*

### 2026-09-17 Portfolio 验证补充

- `npm run typecheck`、`npm run lint`、`npm run build`、`npm test`（7 项）通过。
- 新增测试锁定第 04 / development、双语 10 章、6 条 Quick Read、数字口径、其他三个项目原文不变。
- 浏览器实际打开 `/?lang=zh`、`/?lang=en`、`/work/arcana?lang=zh`、`/work/arcana?lang=en`。
- CSS 视口 375 / 391 / 431 / 1440 下四页均无页面横向溢出，Proof 单元均无溢出。浏览器缩放使 390 / 430 目标落在 391 / 431，未将其冒充精确真机尺寸。
- 语言切换、手机目录展开及第 06 章跳转/焦点验证通过；未改通用组件和样式。
