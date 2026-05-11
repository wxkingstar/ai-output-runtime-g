---
title: EC Business Weekly W19
subtitle: 跨境电商业务线 · 2026-05-04 — 2026-05-10
period: W19 · 2026
author: 王新
status: final
data-as-of: 2026-05-10
classification: internal
---

# 本周亮点

GMV 突破 ¥12.3M，环比 +8.3%，主要由日本仓直邮 + 谷gogo 小程序日销提升驱动。仓配履约 SLA 维持 99.1%，但物流时效在中段（深圳仓→大阪）出现轻微回落，已纳入下周排查项。

```aio:trend-card@1
{
  "title": "本周核心指标",
  "asOf": "2026-05-10",
  "items": [
    {
      "label": "GMV",
      "value": 12345678,
      "format": "currency:CNY",
      "delta": { "value": 0.083, "format": "percent", "direction": "up", "label": "vs W18" },
      "spark": [9.1, 9.6, 10.2, 11.1, 10.8, 11.7, 12.3],
      "tone": "good"
    },
    {
      "label": "订单数",
      "value": 41203,
      "format": "compact",
      "delta": { "value": 0.062, "format": "percent", "direction": "up", "label": "WoW" },
      "spark": [32, 34, 36, 40, 38, 41, 41],
      "tone": "good"
    },
    {
      "label": "履约 SLA",
      "value": 0.991,
      "format": "percent",
      "delta": { "value": -0.003, "format": "percent", "direction": "down" },
      "spark": [99.4, 99.3, 99.2, 99.1, 99.0, 99.1, 99.1],
      "tone": "warn",
      "note": "时效回落，深圳→大阪线路在审查"
    },
    {
      "label": "客诉率",
      "value": 0.0021,
      "format": "percent",
      "delta": { "value": -0.0004, "format": "percent", "direction": "down", "label": "好转" },
      "spark": [0.28, 0.26, 0.25, 0.24, 0.22, 0.21, 0.21],
      "tone": "good"
    }
  ]
}
```

## 业务线状态盘点

```aio:status-grid@1
{
  "title": "各业务线本周收尾状态",
  "asOf": "2026-05-10",
  "items": [
    { "label": "谷gogo 小程序", "status": "good", "value": "¥7.2M", "note": "周末活动跑赢预算 12%" },
    { "label": "豌豆 PICK", "status": "good", "value": "¥2.8M", "note": "复购率回到 38%" },
    { "label": "天猫旗舰", "status": "warn", "value": "¥1.6M", "note": "618 蓄水稍慢，需提价格力度" },
    { "label": "抖音直营", "status": "good", "value": "¥0.7M", "note": "测试品类跑通" },
    { "label": "日本仓直邮", "status": "warn", "value": "时效 -0.3%", "note": "中段延误，已排查" },
    { "label": "郑州保税仓", "status": "good", "value": "周转 6.8 天", "note": "符合 KPI" }
  ]
}
```

## 关键事件时间线

```aio:timeline@1
{
  "title": "本周大事记",
  "items": [
    { "time": "2026-05-04 09:00", "title": "周一立项：日本仓 SLA 改善专项", "body": "目标 5 周内把 P95 配送时效从 5.2 天压到 4.5 天。", "tone": "info" },
    { "time": "2026-05-06 14:30", "title": "天猫客服系统全量切换 SLA Bot", "body": "首日转人工率 18%（目标 25% 以内），客诉响应中位数 42 秒。", "tone": "good" },
    { "time": "2026-05-08 23:10", "title": "深圳仓 WMS 短暂抖动", "body": "持续 12 分钟，影响 ~140 单。已回放并补偿，无 SLA 击穿。", "tone": "warn" },
    { "time": "2026-05-09 11:00", "title": "新品上线：日系小家电三件套", "body": "首日售罄 60% 库存，备货中。", "tone": "good" },
    { "time": "2026-05-10 17:00", "title": "周五复盘：物流费率谈判完成", "body": "EMS Q3 起单票降 ¥1.2，预计年化节省 ¥380w。", "tone": "good" }
  ]
}
```

## 下周行动项

```aio:action-items@1
{
  "title": "Next Steps · W20",
  "items": [
    { "task": "深圳→大阪 时效专项 RCA 提交", "owner": "@王仓配", "due": "2026-05-14", "status": "doing", "priority": "P0" },
    { "task": "618 蓄水 + 媒介预算调整提案", "owner": "@李天猫", "due": "2026-05-15", "status": "todo", "priority": "P0" },
    { "task": "日系小家电品类备货补 30%", "owner": "@刘采购", "due": "2026-05-12", "status": "todo", "priority": "P1" },
    { "task": "客服 SLA Bot 转人工率周度报告", "owner": "@张客服", "due": "2026-05-17", "status": "todo", "priority": "P2" },
    { "task": "EMS 谈判合同走流程", "owner": "@财务", "due": "2026-05-13", "status": "doing", "priority": "P1" },
    { "task": "上周遗留：CRM 数据同步异常排查", "owner": "@运维", "due": "2026-05-08", "status": "blocked", "priority": "P1" }
  ]
}
```

## 方案选型：物流商二供选择

下周需要选定保税仓二供。三家候选已经初评，下表是评分摘要：

```aio:comparison@1
{
  "title": "保税仓二供候选评估",
  "subtitle": "评分 5 分制（数字越高越好），权重见每行括号",
  "recommended": "供应商 B",
  "options": ["供应商 A", "供应商 B", "供应商 C"],
  "criteria": [
    { "label": "单票成本", "values": ["¥4.2", "¥3.8", "¥3.5"], "weight": 3 },
    { "label": "SLA 历史", "values": ["98.4%", "99.2%", "97.1%"], "weight": 3 },
    { "label": "扩容弹性", "values": ["3", "5", "4"], "weight": 2 },
    { "label": "对接周期", "values": ["6 周", "4 周", "8 周"], "weight": 1 },
    { "label": "签约门槛", "values": ["低", "中", "低"], "weight": 1 }
  ]
}
```

供应商 B 在 SLA 和扩容弹性都明显占优；价格略高于 C 但稳定性溢价合理。建议下周锁定 B，预算口已与财务确认。

```aio:callout@1
{
  "tone": "success",
  "title": "本周结论",
  "body": "整体经营健康：GMV/订单/客诉率三项同向走好，仓配 SLA 微跌但已锁定 RCA 责任人。下周聚焦 618 蓄水 + 日本仓时效改善两件主线。",
  "items": [
    "今日（周日）签发本周报告后冻结改动",
    "下周一上午 10:00 业务月度联席会同步两条主线进展"
  ]
}
```
