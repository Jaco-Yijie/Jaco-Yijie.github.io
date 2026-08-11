# AI_PM_CONTENT_AUDIT.md — `~/Desktop/AI PM/` 内容审计

> 日期：2026-08-12
> 目的：把 AI PM 学习资料与当前线上 Portfolio 逐条比对，**先去重、再新增**。
> 原则：PDD 的唯一事实源仍是 `PRD-v5.md`；学习笔记只能补充、不能覆盖真实项目结论。

---

## 0. 扫描范围

递归扫描 `~/Desktop/AI PM/`，共 **14 个文件**（排除 `.DS_Store`）。全部读取正文，不只看文件名。

| # | 文件 | 类型 | 处理 |
|---|---|---|---|
| 1 | `PRD-v1.md` | PDD 事实源 | 已在站上（Case Study 基线） |
| 2 | `PRD-v2.md` | PDD 事实源 | 同上 |
| 3 | `PRD-v3.md` | PDD 事实源 | 同上 |
| 4 | `PRD-v4.md` | PDD 事实源 | 同上 |
| 5 | `PRD-v5.md`（44 KB） | **PDD 唯一事实源** | 已完整用于 Case Study |
| 6 | `项目总结-PDD利润试算助手.md` | PDD 总结 | 已用于 Case Study |
| 7 | `PDD耳机类目选品数据_测试用.md` | 测试数据 | **不展示**（虚构测试数据） |
| 8 | `PDD利润试算助手-线框图.png` | 图片 | 未使用（未做视觉展示） |
| 9 | `Week4_周三周四复盘_RAG工作流搭建与调试.md` | 学习 | ✅ **新增来源** |
| 10 | `MCP学习记录_Week9周二.md`（13 KB） | 学习 + 实测 + 选型 | ✅ **新增来源** |
| 11 | `豆包竞品拆解_完整记录_20260801.md`（15.5 KB） | 竞品边界测试 | ✅ **新增来源** |
| 12 | `豆包竞品分析_500字_20260801.md` | 竞品分析成稿 | ✅ **新增来源** |
| 13 | `第一个月完整学习档案_建认知.md`（20 KB） | 学习档案 W1–W4 | ✅ **新增来源** |
| 14 | `第一个月总收官_建认知.md` | 学习总纲 | ✅ **新增来源** |

**可用于新增内容的文件：6 个**（#9–#14）。

---

## 1. 逐文件审计

| 文件 | 主题 | 关键概念 | 已在站上？ | 与 PDD 重叠？ | 独有内容？ | 去向 |
|---|---|---|---|---|---|---|
| **Week4 RAG 工作流** | RAG 工程落地 | Workflow vs Chatflow vs Agent；变量传递是工作流骨架；RAG 接线四段排查链；`prompt_tokens` 验证法；Rerank 粗筛+精排；**RAG 输出质量 = 知识库质量**；不能把幻觉洗成数据 | ❌ 否 | 部分（"不引入 RAG"的决策已在 PDD） | ✅ **大量** | Learning · RAG |
| **MCP 学习记录** | MCP + Function Calling + 选型 | MCP 未取代 Function Calling（层不同）；Host/Client/Server；Tools/Resources/Prompts 三原语；运行时发现 vs 设计期写死；**启用 ≠ 调用**（0 调用仍 2,569 token）；成本 = 迭代次数 × 工具描述总量（实测 17,616）；**字段语义解释权**（`cost` → "人均"）；PDD 不接 MCP 的结构性穷举 | ⚠️ 站上只有一条很短、且低估了实际深度的 MCP note | 关联（选型结论与 PRD §11 同类） | ✅ **大量，含实测数据** | Learning · MCP（**重写**）+ AI Evals · Failure Library |
| **豆包竞品拆解** | LLM 边界探测方法论 | 六探针测试法；**数值层与定性层可靠性根本不同**（数值两次差 9.7%，定性两次完全一致）；「填空」模式跨场景汇总；有源必准/无源照编；声明与执行不一致（两任务复现）；假设会话内可追溯但跨会话不一致 → 是产品选择不是记忆缺陷；诚实标注证据强弱 | ❌ 否 | **强关联**：为 PDD 架构隔离提供了对照证据 | ✅ **大量** | Learning · LLM Evaluation + AI Evals · Method & Failure Library |
| **豆包竞品分析 500 字** | 竞品分析成稿 | 从默认行为倒推目标用户；「不是不透明，是透明得不彻底；不是能力不足，是边界不清」；改进建议的工程成本论证；附事实核查表 | ❌ 否 | 无 | ✅ 中等 | Learning · AI Product（并入上一条） |
| **第一个月完整学习档案** | W1–W4 全记录 | Base vs Instruct；Token 与上下文重发成本；Chunk/Score/TopK/Embedding；**Score 不是置信度**；切块质量约等于模型质量；RAG vs Fine-tuning；为什么不直接塞 Prompt（容量/维护/成本/延迟/准确率）；Agent 四要素；判断真假 Agent 一句话；四种记忆；读 vs 写；四挑战四防线；Multi-Agent 四理由；**Agent 规划越漂亮，幻觉越有迷惑性** | ❌ 否 | 少量（数字纪律与 PDD 的"禁止编造"同源） | ✅ **大量** | Learning · RAG / Agent |
| **第一个月总收官** | 知识主线 | **四层脉络 LLM → Prompt → RAG → Agent**（每层补上一层短板，控制权越松、自主权越大）；AI 是极强执行者但不承担后果，当不了决策者；护栏重心从"输出"移向"行动"；写完复盘 ≠ 记住 | ❌ 否 | 无 | ✅ 中等 | Learning · AI Product System Thinking |

---

## 2. 分类结果

### A. DUPLICATE — 站上已充分表达，**不新增**

| 概念 | 站上位置 |
|---|---|
| Prompt 是软约束，不是硬开关 | PDD Case Study §06 + Learning `prompt-is-a-soft-constraint` |
| 确定性计算迁移到代码 / 架构隔离 | PDD Case Study §07 |
| 16 → 2 上下文压缩 | PDD Case Study §08 + Learning `what-to-put-in-context` |
| 静默错误比明显错误更危险 | PDD Case Study §10 + Learning `silent-errors-in-decision-support` |
| Dify vs Coze 平台选型 | PDD Case Study §12 |
| 不引入 RAG 的决策 | PDD Case Study §12 + Learning `when-not-to-add-rag` |
| 两次用户测试 | PDD Case Study §11 |
| 规则引擎 + LLM 低置信度复核 | Stock News Case Study §04 + Learning `rule-engine-plus-llm-review` |
| Prompt / 规则版本进缓存 key | Stock News Case Study §06 + Learning `prompt-versioning-and-caching` |
| 通过是巧合，不是正确 | Learning `evaluation-passing-by-coincidence` |
| 断言式边界评测 | Learning `assertion-based-llm-evaluation` |
| 先测量再优化 | Learning `measure-before-optimising-llm-latency` |

### B. PDD-SPECIFIC DUPLICATE — 学习资料里有，但已在 PDD Case Study 讲清楚，**不复制长文**

- 数字纪律 / 禁止编造具体数字 → PDD §09 的六条约束已覆盖
- 三层失败兜底框架 → PDD §09 + Stock News 的兜底设计已覆盖
- Prompt 迭代 6 轮（选品助手前身）→ PDD §07 的迭代链已覆盖，且 PDD 版本是最终结论

> 按 PART 11：Learning 只保留**概念**，证据一律指回 Case Study，不把同一个故事写两遍。

### C. UNIQUE LEARNING — **新增**

| 主题 | 新增内容 | 目的地 |
|---|---|---|
| **RAG** | 检索机制（Chunk/Score/TopK/Embedding）、Score 不是置信度、切块质量、`prompt_tokens` 验证法、RAG 与护栏的分工、知识库质量决定输出上限、不能把幻觉洗成数据 | Learning ×2 |
| **Agent** | 决策权归属是 Workflow / Agent 的分水岭、四要素、判断真假 Agent、读 vs 写与 Human-in-the-loop、规划越漂亮幻觉越有迷惑性 | Learning ×2 |
| **MCP** | 与 Function Calling 分层、运行时发现、启用 ≠ 调用的实测 token、成本公式、字段语义解释权、PDD 不接 MCP 的结构性论证 | Learning ×2（**替换**原有过短的一条）+ AI Evals |
| **LLM Evaluation** | 六探针边界探测法、数值层 vs 定性层的对照发现、「填空」失败模式族、有源必准/无源照编 | Learning ×2 + AI Evals Method & Failure Library |
| **AI Product** | 四层脉络 LLM→Prompt→RAG→Agent、能力强 ≠ 边界清晰 | Learning ×1 |

---

## 3. 与 PDD 事实源的一致性检查

| 学习资料中的表述 | PRD-v5 的最终结论 | 站上采用 |
|---|---|---|
| Week3 曾把 RAG 作为选品助手的"核心 AI 能力" | **不引入 RAG**（§11.3，因瓶颈在上游判断粒度） | ✅ 采用 PRD：不引入 |
| MCP 笔记建议并入 PRD §11「已评估但未采用」 | PRD 已有同类判断（RAG） | ✅ 站上表述为"评估后不接入"，与 PRD 同构 |
| 学习档案里 PDD 前身是"耳机选品助手" | PRD 最终收敛为**利润试算 MVP** | ✅ 采用 PRD：Case Study §05 已写明范围收敛 |

**没有任何学习笔记覆盖 PRD 事实。**

---

## 4. 「会了」与「学过」的区分（PART 9）

| 主题 | 有项目实践？ | Capabilities 是否列出 | Learning 是否展示 |
|---|---|---|---|
| Prompt Engineering | ✅ PDD / Stock News / Arcana | ✅ 列出 | ✅ |
| LLM Evaluation | ✅ PDD / Arcana | ✅ 列出 | ✅ |
| Context Management | ✅ PDD 16 → 2 | ✅ 列出 | ✅ |
| RAG | ⚠️ 搭通过工作流；PDD 最终**不引入** | ✅ 列出（Dify 工作流实操 + 选型判断） | ✅ |
| Agent | ⚠️ 设计练习 + 竞品拆解，**未在生产项目使用** | ✅ 列出（保持原样，不升级措辞） | ✅ 标为学习 |
| MCP | ⚠️ Dify 接入实测 + 选型判断，**未交付生产 MCP Server** | ✅ 列出（保持原样） | ✅ 明确标注边界 |

> **Capabilities 页面不做任何措辞升级**——不因为多了几篇笔记就把 Agent / MCP 写成"精通"。
> Learning 页面负责展示"正在学、学到哪"，Capabilities 只保留有项目支撑的能力。

---

## 5. 全站重复度检查（PART 20）

按「每页承担不同角色」的原则复查：

| 概念 | Homepage | Learning | Case Study | AI Evals | 判定 |
|---|---|---|---|---|---|
| Prompt 是软约束 | ✗ | 概念（短） | 证据（完整） | 方法（一行） | ✅ 不重复 |
| 16 → 2 | 卡片 Proof 数字 | 概念（短） | 证据（完整） | 方法（一行） | ✅ 不重复 |
| 不引入 RAG | ✗ | 概念 | 证据 | ✗ | ✅ 不重复 |
| 数值层 vs 定性层 | ✗ | **新增概念** | ✗ | **新增方法** | ✅ 不重复 |
| 字段语义解释权 | ✗ | **新增概念** | ✗ | **新增失败模式** | ✅ 不重复 |

角色分工：**Homepage = Hook｜Learning = Concept｜Case Study = Evidence｜AI Evals = Method**。

---

## 6. Resume 更新记录

| 项 | 内容 |
|---|---|
| 源文件 | `~/Desktop/简历-V6.pdf`（1,395,297 bytes，2026-08-12 00:30，桌面唯一 V6 文件） |
| 站内路径 | `public/resume/Jaco-Wang-Resume-CN.pdf`（**沿用原路径，无中文 URL**） |
| 校验 | MD5 与源文件一致，1 页可正常解析 |
| 引用方式 | 全站唯一出口 `src/data/links.ts` → `links.resume`；Hero / Nav 桌面 / Nav 移动抽屉 / Contact / Footer 五处自动生效 |
| 旧版本 | 同名覆盖，站上不存在其他简历文件 |
| 英文模式 | 仍使用中文简历，按钮旁标注 `Download (Chinese)`；**未自动生成英文简历** |

V6 相对 V5 的变化：GitHub 一行改为 `Personal webpage`，并新增指向本作品集的链接；PDD 一条描述扩写。**其余事实未变，站上项目事实无需改动。**

---

*本文件仅供内部核查。所有 Learning 条目在 data 层带 `source` 字段指回原始文件，但**不渲染到页面**，网站不出现任何本地路径。*
