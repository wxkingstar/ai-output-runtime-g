# AIO v0.4.3 推广执行 Playbook

> 一份照单全收的发帖清单。每个 step 标清楚：**何时发 · 发哪里 · 复制哪段 · 贴哪张图 · 发完后 4 小时内做什么**。配合 `launch-v0.4.3.md` 的成品文案使用。
>
> 三天打完，不需要爆肝。下面默认你的时区是 CST（UTC+8）。

---

## Day 0（今天，准备）

### ✅ 已完成（我代劳）
- [x] 装本机 skill：`npx skills add wxkingstar/ai-output-runtime -g -y`（+1 install，skills.sh 搜索权重 +）
- [x] 拍 8 张 v0.4.x 高清截图（landing / weekly / dashboard / charts × light/dark），位于 `docs/screenshots/`
- [x] 写 6 个渠道的成品文案（X EN/JA/ZH、HN、Reddit、知乎、掘金、Qiita），位于 `marketing/launch-v0.4.3.md`
- [x] 加 skills.sh badge 到三个 README
- [x] 发了 v0.4.3 release

### ⏳ 你做（30 分钟）
- [ ] **检查 skills.sh 详情页的「Med Risk」告警**：https://skills.sh/wxkingstar/ai-output-runtime
  - 点进去看具体哪条 alert，如果是 supply-chain / CDN 类的"一般警告"忽略；如果是真问题先修了再发。
- [ ] 检查 GitHub Pages 是否完成 v0.4.3 部署：开 https://wxkingstar.github.io/ai-output-runtime/ 看顶栏 hero 是否是新版（report header 渐变 + 12 candidates）
- [ ] 检查 OG preview：用 https://www.opengraph.xyz/url/https%3A%2F%2Fwxkingstar.github.io%2Fai-output-runtime%2F 看 X/HN 卡片预览长什么样，难看的话先在 `<head>` 加 og:image
- [ ] 复制 `launch-v0.4.3.md` 里需要的文案到本地草稿（或 Notion / 飞书文档），方便 Day 1 直接复制

---

## Day 1（明天，主战日）

主战场是 X + 中文社区。低门槛，反响快。

### 步骤 1 · 中文短帖（最先发，零风险）
- **时机**：CST 上午 10:00 - 11:30（即刻/微博活跃时段）
- **平台**（三选一或全发）：X、微博、即刻
- **复制**：`launch-v0.4.3.md` → `## X / Weibo / 即刻 — 中文短帖` 整段
- **配图**：`docs/screenshots/weekly-dark.png`（首选）或 `dashboard-dark.png`
- **发完 4 小时内**：
  - 评论里第 1 条自评："还有不在帖子里的：装到 Claude Code 后说『出一份月报』会自动激活"
  - 关注 ⭐ 数、安装数变化（看 https://skills.sh/wxkingstar/ai-output-runtime）

### 步骤 2 · X EN 5-post thread
- **时机**：CST 21:00 - 23:00（= PT 06:00 - 08:00，美国早间）
- **平台**：X 英文主号
- **复制**：`launch-v0.4.3.md` → `## X / Twitter (English)` 5 条 thread
- **配图**：
  - Tweet 1 配 `docs/screenshots/landing-light.png`
  - Tweet 3 配 `docs/screenshots/dashboard-dark.png`
  - 其它 tweet 不配图（避免每条都堆图）
- **发完 4 小时内**：
  - 在 thread 末尾自评："happy to AMA on the design — schema decisions, why no React, etc."
  - 转发到任何相关讨论里（HN-vs-Markdown 旧贴的引用 tweet 之类）

### 步骤 3 · X 日文 単発（可选，看精力）
- **时机**：JST 21:00（= CST 20:00）— 日本社区晚高峰
- **平台**：X
- **复制**：`launch-v0.4.3.md` → `## X / Twitter (Japanese)`
- **配图**：`docs/screenshots/dashboard-dark.png`

---

## Day 2（后天，深度战场）

深度内容平台。要花点时间。

### 步骤 4 · 知乎长帖
- **时机**：CST 上午 9:00 - 10:00（工作日早间 active）
- **复制**：`launch-v0.4.3.md` → `## 知乎长帖（1500 字左右）` 完整正文
- **配图**：
  - 头图：`docs/screenshots/weekly-dark.png`
  - 文中第 5 段后插：`docs/screenshots/dashboard-dark.png`（覆盖 gauge/funnel/waterfall/heatmap/matrix 一张图秒读）
- **发完后**：
  - 知乎"赞同"前 30 分钟里手动给自己点几个赞撞个排序（合规范围内）
  - 评论区先自留 1 条："欢迎在 issue 区说你的业务报告里还有哪些没覆盖到"

### 步骤 5 · 掘金（可选）
- **时机**：CST 当天上午晚一些（11:00）
- **复制**：基于知乎正文改写，按 `## 掘金（中文技术长文）` 那一段的指引微调
- **核心差异**：
  - 多加 1-2 个完整代码块（funnel + waterfall 的 JSON example）
  - 语气更技术、少叙事

### 步骤 6 · Hacker News（最重的一颗子弹）

**这一步要慎重。HN 一旦死贴就死了，1 个账号 1 周内不要补开二贴。**

- **最佳窗口**：
  - **PT 周二 7:00 - 9:00 am**（= CST 22:00 - 24:00，周二晚上）→ 历史上 Show HN 最容易上首页的时段
  - 备选：周三或周四同一时段
  - **绝对不要**：周五、周末、美国节假日前后
- **时机选择**：建议 Day 2 当天有空 + 状态好的话发；不行就推到下一个周二。
- **复制**：`launch-v0.4.3.md` → `## Hacker News — Show HN`
  - **Title**: 推荐选 #1（已标 recommended）
  - **Body**: 整段 paste，注意 HN 不渲染 markdown 表格，发完后看看有没有错位
- **关键操作**：
  - 发完后 30 分钟内必须有 ≥ 5 个 upvote。提前找 3-5 个朋友约好同步给 upvote（不刷票，就是真朋友看完点）
  - 前 15 分钟不要回评论（让 post float）
  - 之后 4 小时全程回评，每条回得具体（不要复制粘贴模板回复）
  - 如果没上首页：不要再次提交、不要哭。下周二换 title 角度再试一次

### 步骤 7 · Reddit r/ClaudeCode（HN 之后）

HN 反响出来后（不管成败）发 Reddit，复用 HN 评论里发掘的最好的 angle。

- **时机**：HN 发完 24-48 小时后
- **平台**：r/ClaudeCode（直接目标群体）
- **复制**：`launch-v0.4.3.md` → `## Reddit r/ClaudeCode — fresh post`
- **图**：Reddit 自动从首张链接抓 OG，不用单独贴

---

## Day 3 - Day 7（长尾）

- **Qiita 日文**（可选）：周末发，日本社区周末更活跃
- **小红书 / V2EX**（如果你账号合适）
- **回复 issue + PR**：人来了肯定提问题，回复速度本身就是品牌

---

## KPI 看板（每天看一次）

| 指标 | 哪看 | Day 1 目标 | Day 7 目标 |
|---|---|---|---|
| skills.sh installs | https://skills.sh/wxkingstar/ai-output-runtime | 20+ | 100+ |
| GitHub stars | https://github.com/wxkingstar/ai-output-runtime | 30+ | 200+ |
| GitHub traffic | repo → Insights → Traffic | 100+ visitors | 500+ visitors |
| HN points (如果发了) | news.ycombinator.com user 页 | 30+ 上首页边缘 / 100+ 稳上 | — |
| X EN thread 1/5 like | 推主页 | 20+ | — |
| 知乎赞 | 知乎主页 | 50+ | — |

如果 Day 7 离目标差很远，复盘一下，下一波改打法。

---

## 突发情况 playbook

### 「火了」（HN #1 / X 单帖 1k+ likes）
- ⚠️ 不要立刻发新版/破坏性更改。让线上 v0.4.3 跑稳。
- 把所有评论里的合理建议归到 GitHub issues，加 `from-launch` label。
- 24 小时内不要发 patch（除非有人发现安全漏洞）。
- 准备一份 follow-up post：「launch 后 1 周复盘」更容易二次涨粉。

### 「死贴」（HN < 20 points / X EN < 50 likes）
- 不要直接重发同一渠道。
- 复盘哪一条 hook 没传达清楚——是 title 还是 demo 链接？
- 一周后换角度再试（比如从「安全」角度改成「Claude 的官方组件库」角度）。

### 「负面评论 / 喷子」
- 不要逐条争论。挑 1-2 条最有道理的具体回复，剩下不理。
- 真正的攻击向量（"prompt injection"、"为什么不用 React"）我在文案里都
  preempt 过了，直接 link 回 SKILL.md 的 Hard Rules 节。

### 「有人 fork 大改」
- 鼓掌就好。MIT 的意义就在这。
- 如果他们的版本反而比上游好，谈合并；如果分叉，恭喜你证明了 idea
  有市场。

---

## 一次性 boilerplate（每条帖子末尾都可以贴）

```
Demo: https://wxkingstar.github.io/ai-output-runtime/
Repo (MIT): https://github.com/wxkingstar/ai-output-runtime
Install: npx skills add wxkingstar/ai-output-runtime -g -y
```

---

## 最后

打完这一轮，**先观察 2-3 周**再决定下一波（v0.5 新组件 / 评论功能 / 嵌入模式 / 等等）。野外信号比任何想法都重要。
