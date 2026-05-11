# AIO v0.4.3 推广包（ready-to-post）

> 写于 2026-05-12。这一份针对 v0.4.x 的当前实际能力（15 组件、30 语言代码高亮、业务报告专项），全部 ready-to-post，复制即可。
>
> 老一版的 `launch-kit.md`/`launch-plan.md` 写于 v0.2.x（4 组件时代），叙事是"AI 写 HTML vs Markdown 之争"。现在 v0.4.x 已经把那场争论的结论实装到了 15 个候选组件 + 30 语言高亮 + 完整商业报告场景里，故事的"问"还没变，"答"已经远远更深，下面这一波文案是更新过的版本。

## 一键关键事实（任何帖子里都可以丢出来）

- **15 个组件**：3 stable（table / metric-cards / callout）+ 12 candidates（chart / trend-card / status-grid / report-header / timeline / action-items / comparison / gauge / funnel / waterfall / heatmap / matrix）
- **30 语言代码高亮**：6 常用内置（json/bash/js+ts/python/yaml/diff）+ 24 lazy-loaded（go/rust/php/ruby/java/...）
- **Frontmatter**：YAML metadata → 自动渲染报告抬头
- **Locale-aware 数字**：`Intl.NumberFormat` 千分位 + 货币 + 百分比
- **打印封面 + 分页**：A4 cover page + H1 page-break，PDF 出片
- **CSV 导出**：每个数据组件头部条 ⤓ 按钮
- **执行摘要自动卡**：扫文档自动提炼 30 秒 takeaway
- **121 KB raw / 28 KB gzipped**
- **Live**: https://wxkingstar.github.io/ai-output-runtime/
- **CDN**: `https://cdn.jsdelivr.net/gh/wxkingstar/ai-output-runtime@v0.4.3/assets/ai-output-runtime.js`
- **Skill**: `npx skills add wxkingstar/ai-output-runtime -g -y`
- **skills.sh**: https://skills.sh/wxkingstar/ai-output-runtime

---

## X / Twitter (English) — 5-post thread

```
1/5
I made AI agents stop writing HTML for reports.

They write a small Markdown contract instead — 15 schema-validated JSON blocks
covering charts, trend cards, P&L bridges, KPI gauges, sales funnels,
risk matrices, action items. A 28 KB runtime turns it into a real report.

Demo + repo 👇
```

```
2/5
The wedge:
- HTML reports from AI are unsafe (prompt-injected styles / scripts / iframes)
- Markdown reports are too flat (no comparison matrix, no funnel, no gauge)

AIO is the middle path: AI emits ```aio:funnel@1 { stages: [...] } ```
The browser runtime renders it. AI never touches HTML/CSS/JS.
```

```
3/5
v0.4.x ships:
• 12 candidate components (trend-card, gauge, waterfall, heatmap, matrix, ...)
• 30 lazy-loaded syntax-highlight language modules
• YAML frontmatter → auto report header
• Locale-aware number formatting (千分位 / currency / percent)
• CSV export, sticky TOC, print-to-PDF cover pages
```

```
4/5
The contract is small enough to remember:
```aio:trend-card@1
{
  "items": [
    { "label": "GMV", "value": 12345678, "format": "currency:CNY",
      "delta": { "value": 0.083, "format": "percent", "direction": "up" },
      "spark": [9, 10, 11, 12, 12, 13] }
  ]
}
```
That's it. AI fills the JSON. Humans get a real report.
```

```
5/5
Open source, MIT.
Try the live demo: https://wxkingstar.github.io/ai-output-runtime/
Install as Claude Code / Codex / Cursor skill:
npx skills add wxkingstar/ai-output-runtime -g -y

Repo: https://github.com/wxkingstar/ai-output-runtime
```

---

## X / Twitter (Japanese) — 単発高密度

```
AI エージェントに HTML を書かせるのは危険、Markdown だけだと貧弱、という両方の問題に対して「データ契約」だけ書かせる第 3 の道を実装しました。

15 個のスキーマ検証付き JSON ブロック（チャート / トレンドカード / ファネル / KPI ゲージ / 損益ウォーターフォール / ヒートマップ / リスク行列 / アクション項目 等）
30 言語のシンタックスハイライト（lazy-load）
YAML frontmatter → 自動レポートヘッダ
Locale-aware 数値フォーマット
PDF 出力対応の表紙ページ
28 KB gzipped, MIT

https://github.com/wxkingstar/ai-output-runtime
Demo: https://wxkingstar.github.io/ai-output-runtime/
npx skills add wxkingstar/ai-output-runtime -g -y
```

---

## X / Weibo / 即刻 — 中文短帖

```
让 AI 生成业务报告，但不让它写 HTML。

写了一份「数据契约」：AI 只填 15 种 JSON 数据块（漏斗 / 趋势卡 / KPI 仪表 / P&L 桥 / 热力图 / 2×2 风险矩阵 / 行动项 …），28KB 的浏览器 runtime 安全渲染。

✅ 周报 / 月报 / 复盘 / Postmortem / KPI-OKR / 财务桥 / 销售漏斗 / 仓储热力 全场景覆盖
✅ 30 语言代码块高亮，按需懒加载
✅ Locale 千分位 / 货币 / 百分比自动格式化
✅ 打印自动出封面 + 分页，可导 PDF
✅ 每个数据组件可一键导 CSV

Demo: https://wxkingstar.github.io/ai-output-runtime/
GitHub: https://github.com/wxkingstar/ai-output-runtime
装到 Claude Code / Codex / Cursor：
npx skills add wxkingstar/ai-output-runtime -g -y
```

---

## Hacker News — Show HN

> **Sharpened.** Title candidates A/B/C ranked, body restructured around "the debate, both wrong → here's the third path", concrete data-block example in the body, sharper feedback ask. Posting-timing notes below.

**Title — candidates ranked:**

1. **(recommended)** `Show HN: AIO – a Markdown contract for AI reports (charts, funnels, no HTML)` *(75 chars)*
2. `Show HN: 28KB runtime that turns AI-emitted JSON into business reports` *(70 chars)*
3. `Show HN: I gave Claude 15 report components without letting it write HTML` *(73 chars)*

#1 leads with the protocol noun ("Markdown contract"), names concrete components reads will care about ("charts, funnels"), and ends on the safety wedge. #2 is more numeric/hooky. #3 is more storytelling, slightly riskier (HN sometimes downvotes "I + first person + AI" titles).

**Body:**

```
There was a long thread a while back about whether AI should output HTML or
Markdown for reports. Both sides had a point.

  HTML party: Markdown can't show a funnel, a 2x2 risk matrix, a P&L bridge,
              a KPI gauge. You need real layout.
  Markdown party: HTML from a language model is unsafe — prompted styles,
              injected event handlers, third-party iframes. Pick something
              you can audit byte-for-byte.

AIO is the third path. The AI writes Markdown with a small set of fenced JSON
blocks. A 28 KB browser runtime renders them. The model literally never writes
HTML, CSS, JS, iframes, or event handlers — string fields reject `<` and `>`,
blocks must parse as JSON, every field is schema-checked twice (Node CLI for
authoring, runtime for rendering).

A trend-card block from the weekly-report demo:

    ```aio:trend-card@1
    {
      "items": [
        {
          "label": "GMV",
          "value": 12345678,
          "format": "currency:CNY",
          "delta": { "value": 0.083, "format": "percent", "direction": "up" },
          "spark": [9.1, 9.6, 10.2, 11.1, 10.8, 11.7, 12.3],
          "tone": "good"
        }
      ]
    }
    ```

The runtime renders a metric card with ¥12,345,678.00, an upward green ▲ 8.3%
chip, and a small sparkline. The AI never types HTML.

v0.4.3 ships 15 components covering the business-report shapes I kept running
into:

* "what's the number?" → metric-cards, trend-card (with Δ + sparkline)
* "what's red?" → status-grid, callout
* "what changed?" → waterfall (P&L bridge), comparison matrix
* "how does it convert?" → funnel
* "are we hitting target?" → gauge (KPI/OKR semicircle)
* "where's the heat?" → heatmap (2D density)
* "what's the priority?" → matrix (2x2 quadrant)
* "what happened?" → timeline, action-items (with owner/due/priority)
* "header & sign-off" → report-header (auto-emitted from YAML frontmatter),
  callout

Plus 30 syntax-highlight language modules (6 inlined, 24 lazy-loaded from
jsDelivr — first time a language is used, the browser fetches its ~1-2 KB
module).

Three things that surprised me building it:

1. The contract really is small enough to memorize. 15 components fit on
   a half page of SKILL.md and the AI gets it on first try.

2. The locale-aware number formatting (`Intl.NumberFormat`) was the single
   highest-impact UX change. "13620" rendered as "13,620" is the difference
   between "data dump" and "report".

3. Print-to-PDF is unironically good. @page A4 + cover-page page-break-after
   on the report header + `page-break-before: always` on H1s gets you a
   stakeholder-emailable artifact for free.

Try the live demo — the page is itself an AIO document; click "View source"
in the top bar to see the Markdown that produced it:

  https://wxkingstar.github.io/ai-output-runtime/

Two longer demos:

  https://wxkingstar.github.io/ai-output-runtime/demo-weekly.html (weekly review)
  https://wxkingstar.github.io/ai-output-runtime/demo-dashboard.html (Q1 review)

Repo (MIT): https://github.com/wxkingstar/ai-output-runtime

Installs into Claude Code, Codex, Cursor, and ~50 other agents via:

  npx skills add wxkingstar/ai-output-runtime -g -y

Three specific things I'd love feedback on:

1. **Which report shape doesn't fit any of the 15 components.** I think
   waterfall/funnel/matrix cover 80% of what I needed in production, but I
   know I have blind spots. If you ship reports from an agent and a shape is
   missing, tell me which one and what data you have.

2. **Does the skill's description over-fire?** The trigger vocabulary is broad
   (weekly/monthly/dashboard/postmortem/audit/KPI/OKR/funnel/waterfall/heatmap/
   matrix/...). If you try this and the skill activates when you didn't want
   it to, that's the most useful data I can get.

3. **Print/PDF rendering edge cases.** A4 / Letter / Legal? Two-column? RTL?
   If you hit a layout problem when actually trying to email a printed report,
   please open an issue with the screenshot — I optimized for the cases I
   could test (zh-CN A4 dark mode → print) and there are definitely gaps.

(Also: the runtime is one file, 121 KB raw / 28 KB gzipped, no deps. The
schema for each component is in `schemas/*.schema.json`. The CLI is in
`scripts/aio.mjs`. The whole thing is browseable in under an hour.)
```

**Posting-timing notes:**

- HN front-page algo prefers fresh posts ≥ 5 upvotes in the first 30 min. Don't post and walk away.
- Best windows for Show HN (PT): Tue/Wed/Thu 7-10am. Tuesday is safest. Avoid Fri-Sun.
- Don't bother on a US holiday week (esp. US Thanksgiving / Christmas Eve / July 4).
- After posting: don't reply to comments for the first 15 min (let the post float). Then engage every comment in the first 4h, polite + specific.
- OG image: `wxkingstar.github.io/ai-output-runtime/` should serve a good preview. If not, the HN card looks empty.
- Have `docs/screenshots/landing-light.png` ready to attach if a sub-comment asks "what does it look like".

---

## Reddit r/ClaudeCode — fresh post

**Title**:
```
v0.4.3 of a Markdown contract that lets Claude Code write reports without HTML
```

**Body**:
```
Six months ago there was a long thread here about whether Claude should
output HTML or Markdown for reports. I built a third path and just shipped
v0.4.3.

The deal: Claude writes Markdown with a few fenced JSON blocks. A 28 KB
browser runtime renders them. Claude literally never writes HTML, CSS, JS,
or event handlers — the schema rejects `<`, `>`, custom components, scripts,
all of it.

What's actually in there (v0.4.3):

**Components** (15 total)
- Stable: `table`, `metric-cards`, `callout`
- Candidate: `chart` (line/bar/area/pie/donut), `trend-card` (value + Δ +
  sparkline), `status-grid` (good/warn/bad cards), `report-header` (gradient
  hero, auto-built from markdown YAML frontmatter), `timeline`,
  `action-items` (with owner/due/priority, auto-overdue), `comparison`
  (2-6 options × N criteria with recommended column), `gauge` (semicircle
  KPI/OKR), `funnel` (conversion with auto step + overall %), `waterfall`
  (P&L bridge / variance), `heatmap` (2D density grid), `matrix` (2×2
  scatter for risk / RICE / BCG)

**Code highlighting**
30 languages, 6 inlined (json/bash/js+ts/python/yaml/diff) + 24
lazy-loaded modules. Code blocks have a header bar with language + Copy
button. Diff blocks get +/-/@@/file colors.

**Reader UX**
- Auto Executive Summary card (10-second exec view)
- Locale-aware number formatting (千分位 / currency / percent)
- Sticky TOC + active section highlight (≥ 1200px)
- Print-to-PDF with cover page and forced H1 page breaks
- CSV export button on every data component

Install via skills CLI:
  npx skills add wxkingstar/ai-output-runtime -g -y

Demo (itself an AIO document):
  https://wxkingstar.github.io/ai-output-runtime/

Repo (MIT): https://github.com/wxkingstar/ai-output-runtime
skills.sh: https://skills.sh/wxkingstar/ai-output-runtime

What I'd love feedback on:
1. Business-report shapes I missed?
2. Does the skill description trigger correctly when you say things like
   "出一份月报" or "做个 OKR 复盘"?
3. Anyone actually using Claude to ship stakeholder reports? Pain points?
```

---

## 知乎 / 掘金 — 中文长帖（800-1200 字）

**标题**（任选）：
```
我让 AI 写 1500 份报告，但不让它写一行 HTML
让 AI 写 HTML？写 Markdown？我做了第三条路 — AIO v0.4 实战记录
v0.4 的 AI Output Runtime：15 个组件搞定 80% 业务报告场景
```

**正文**：

```
半年前，r/ClaudeCode 和 X 上吵过一阵：让 AI 输出 HTML，还是 Markdown？

HTML 派的理由是：图表、对比矩阵、布局、交互，Markdown 表达不出来。
Markdown 派的理由是：HTML 不安全，AI 可能写出带 prompt injection 的
<style>、<script>、<iframe>。

两边都对，但没人提出第三种方案：让 AI 只输出**数据**，让一份小小的
runtime 把数据安全地变成 HTML。

我把这个方案做成了 AI Output Runtime（AIO），刚上 v0.4.3。

## 核心契约

AI 在 Markdown 里写 fenced code block，info string 用 `aio:name@major`，
body 是 JSON。例如：

    ```aio:trend-card@1
    {
      "items": [
        {
          "label": "GMV",
          "value": 12345678,
          "format": "currency:CNY",
          "delta": { "value": 0.083, "format": "percent", "direction": "up" },
          "spark": [9, 10, 11, 12, 12, 13],
          "tone": "good"
        }
      ]
    }
    ```

浏览器加载 28KB 的 runtime（CDN 直引一个 <script>），把这段 JSON 渲染成
带 sparkline、千分位、向上箭头、绿色 tone 的 metric 卡片。

AI 不写任何 HTML/CSS/JS。schema 拒绝 < > 和未注册组件，runtime 把异常
块降级为可见的 JSON 错误，不爆 XSS。

## v0.4.x 现在有的 15 个组件

把 20+ 业务报告场景全部覆盖了一遍：

| 场景 | 组件 |
|---|---|
| 周报 / 月报 / 季报 / 业务汇报 | report-header + trend-card + status-grid + timeline + action-items |
| Postmortem / 复盘 | timeline + action-items + callout |
| KPI / OKR 达成 | gauge（半圆仪表，自动按达成度上色） |
| 财务 P&L | waterfall（起始 / +增 / -减 / 小计 / 终值） |
| 销售转化 | funnel（自动算 step% + overall%） |
| 运营时段 / 库存周转 | heatmap（小时×星期 / 区域×品类 2D 网格） |
| 风险评估 / RICE / BCG | matrix（2×2 象限散点） |
| 方案选型 / 竞品比较 | comparison（多选项 × 多维度，可标推荐项） |
| 数据汇总 | metric-cards / trend-card / table |
| 最终判断 | callout（info / success / warning / danger） |

## 30 语言代码高亮，按需懒加载

6 个内置（json / bash / js+ts / python / yaml / diff）+ 24 个 lazy-loaded
（go / rust / php / ruby / java / kotlin / swift / c / cpp / csharp /
sql / html / css / xml / dockerfile / toml / ini / lua / perl / r / scala /
dart / regex / graphql）。runtime 仅 28KB gzipped，首次用到某语言时
浏览器从 jsDelivr 拉对应的 1-2KB 模块。

## Locale 感知 + 打印封面

数字默认走 `Intl.NumberFormat`（千分位 / ￥ / $ / %），告诉 runtime 你的
lang 是 `zh-CN` 还是 `en` 它自动选格式。打印时 report-header 变成 A4 封面，
每个 H1 强制分页，PDF 出片可直接发邮件。

## 装到 Claude Code / Codex / Cursor

skill 已经在 skills.sh 上：

```bash
npx skills add wxkingstar/ai-output-runtime -g -y
```

之后 Claude Code 看到你说"出一份月报" / "Q1 OKR 复盘" / "做个销售漏斗"，
会自动激活 skill，按 AIO 契约输出。

## 在线 Demo

整个 demo 页本身就是一份 AIO 文档：
https://wxkingstar.github.io/ai-output-runtime/

点顶栏的「查看源稿」可以看到生成它的原始 Markdown。两个完整业务 demo：
- 周报：https://wxkingstar.github.io/ai-output-runtime/demo-weekly.html
- Q1 Dashboard：https://wxkingstar.github.io/ai-output-runtime/demo-dashboard.html

## 不做什么

- 不重新发明可视化 — 就 line/bar/area/pie/donut + 5 个商业图表，复杂的
  让 ECharts 上。
- 不渲染富文本 — 字段只接 plain text + 受限 Markdown 内联，禁 HTML。
- 不联网 — runtime 没有 fetch；唯一例外是 lang/*.js 按需加载，URL 白名单。

## 仓库

GitHub（MIT）：https://github.com/wxkingstar/ai-output-runtime
skills.sh listing：https://skills.sh/wxkingstar/ai-output-runtime

欢迎提 issue 说还有哪些业务报告场景没覆盖到。
```

---

## 推广执行顺序建议（按"成本递增"排）

| # | 渠道 | 用时 | 内容 | 备注 |
|---|---|---|---|---|
| 1 | 自己跑 `npx skills add` | 30 秒 | — | 立刻 +1 install，搜索权重提升 |
| 2 | X/微博/即刻 中文短帖 | 2 分钟 | 上面的"中文短帖" | 无需 thread，单帖 |
| 3 | X EN 5-post thread | 5 分钟 | 上面的 EN thread | 重点投手 |
| 4 | r/ClaudeCode 帖 | 10 分钟 | 上面的 Reddit body | 直接目标群体 |
| 5 | HN Show HN | 15 分钟 | 上面的 HN body | 选周二/三 PT 7-9am 投 |
| 6 | 知乎 / 掘金 长帖 | 30 分钟 | 上面的中文长帖（截图替换） | 长尾流量 |
| 7 | Qiita 日文 | 30 分钟 | 改写日文版（之前 launch-kit 里有素材） | 日本社区 |

## 必带 boilerplate

每条帖子末尾建议都带：

```
Demo: https://wxkingstar.github.io/ai-output-runtime/
Repo: https://github.com/wxkingstar/ai-output-runtime
Install: npx skills add wxkingstar/ai-output-runtime -g -y
```

## 截图建议

- `docs/screenshots/` 已有几张老的（v0.2.x）—— 建议重新截一组 v0.4.x 的，
  覆盖 weekly + dashboard demo 两个页面。需要的话告诉我，我可以用 browse
  自动出一组高清截图。

## KPIs 观察

发完后 24-48h 看：
- `skills.sh/wxkingstar/ai-output-runtime` install 数
- GitHub stars 增量
- HN 点数和 comment 质量
- 各渠道 traffic referer（GitHub Insights → Traffic）
