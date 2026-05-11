---
title: Q1 2026 经营复盘
subtitle: EC 业务线 · 含财务、销售、运营全维度
period: 2026 Q1
author: 财务 BP / 运营 BP
status: final
data-as-of: 2026-03-31
classification: internal
---

# Q1 整体回顾

Q1 GMV 落地 ¥420M，达成 84% 季度目标。毛利率回升至 38%，归功于成本侧 EMS 谈判 + 物流路线优化。下面按 OKR、销售漏斗、P&L、运营时段、优先级排序五个角度盘点。

## OKR 达成

```aio:gauge@1
{
  "title": "Q1 OKR 达成度",
  "asOf": "2026-03-31",
  "items": [
    { "label": "GMV", "value": 0.84, "target": 1, "format": "percent", "note": "¥420M / ¥500M" },
    { "label": "毛利率", "value": 0.38, "target": 0.35, "max": 0.5, "format": "percent", "tone": "good", "note": "目标 35%" },
    { "label": "客户数", "value": 0.92, "target": 1, "format": "percent", "note": "92k / 100k" },
    { "label": "NPS", "value": 62, "min": 0, "max": 100, "target": 60, "tone": "good", "note": "目标 60" }
  ]
}
```

## 销售转化漏斗

获客侧整体健康，但 「试用 → 付费」环节转化率回落至 26.2%（上季 31%），下季要专项排查 onboarding。

```aio:funnel@1
{
  "title": "Lead → Customer · Q1",
  "format": "compact",
  "stages": [
    { "label": "广告曝光", "value": 12500000 },
    { "label": "落地页访问", "value": 1850000, "tone": "good" },
    { "label": "注册", "value": 245000, "tone": "good" },
    { "label": "试用激活", "value": 82000, "tone": "warn", "note": "激活率 33.5%" },
    { "label": "付费转化", "value": 21500, "tone": "bad", "note": "转化率回落 4.8pt" }
  ]
}
```

## 财务 P&L 桥

```aio:waterfall@1
{
  "title": "Q1 P&L Bridge",
  "subtitle": "单位：¥M",
  "format": "number",
  "bars": [
    { "label": "Revenue", "value": 420, "kind": "start" },
    { "label": "COGS", "value": -260, "kind": "down" },
    { "label": "Gross", "value": 160, "kind": "subtotal" },
    { "label": "Marketing", "value": -42, "kind": "down" },
    { "label": "R&D", "value": -28, "kind": "down" },
    { "label": "G&A", "value": -18, "kind": "down" },
    { "label": "Other Income", "value": 6, "kind": "up" },
    { "label": "Net", "value": 78, "kind": "end" }
  ]
}
```

毛利 ¥160M（38%），三项费率合计 ¥88M（21%），其他收入 ¥6M。净利 ¥78M，净利率 18.6%，环比 +2.3pt。

## 运营 — 订单时段热力

工作日午高峰 + 周末 20:00-22:00 是两大订单高峰，物流排班可针对这两个时段加强：

```aio:heatmap@1
{
  "title": "订单量 · 小时 × 星期",
  "asOf": "2026-03-31",
  "format": "number",
  "tone": "accent",
  "xLabels": ["周一","周二","周三","周四","周五","周六","周日"],
  "yLabels": ["08","10","12","14","16","18","20","22"],
  "rows": [
    [120, 130, 125, 140, 155, 90, 80],
    [180, 195, 188, 210, 235, 160, 150],
    [310, 320, 305, 330, 365, 220, 200],
    [240, 250, 245, 260, 285, 230, 215],
    [200, 210, 205, 220, 245, 250, 235],
    [260, 270, 265, 280, 305, 310, 295],
    [340, 355, 350, 370, 405, 480, 460],
    [280, 290, 285, 305, 335, 420, 410]
  ]
}
```

## 优先级 — 下一季度初始化项目

按"影响 × 投入"做象限分布，定下 Q2 应该先抓哪几件：

```aio:matrix@1
{
  "title": "Q2 候选项目优先级",
  "xLabel": "影响",
  "yLabel": "投入",
  "xMax": 10,
  "yMax": 10,
  "quadrants": ["先做（低投入高影响）","战略项目","机会再看","填空"],
  "items": [
    { "label": "试用激活率改进", "x": 8.5, "y": 3, "tone": "good", "note": "Onboarding 重排" },
    { "label": "EMS 二供接入",      "x": 6,   "y": 4, "tone": "good" },
    { "label": "AI 推荐重排",      "x": 9,   "y": 8, "tone": "warn", "note": "需算法支持" },
    { "label": "客服 SLA Bot v2",  "x": 5,   "y": 5 },
    { "label": "海外节日营销",      "x": 7,   "y": 6 },
    { "label": "新国家拓展",        "x": 8.5, "y": 9.2, "tone": "warn" },
    { "label": "结算工具",          "x": 3,   "y": 2 },
    { "label": "员工培训",          "x": 2.5, "y": 1.5 }
  ]
}
```

```aio:callout@1
{
  "tone": "success",
  "title": "Q1 结论",
  "body": "GMV 达成虽差 16%，但毛利率和净利率均超目标。Q2 主线锁定：试用激活率改进（高 ROI）+ EMS 二供（成本侧）。AI 推荐重排放到 Q3 一并立项。",
  "items": [
    "试用激活率项目 4 月 8 日 kickoff",
    "EMS 二供合同 4 月 15 日前 sign-off",
    "AI 推荐排到 Q3 Roadmap"
  ]
}
```
