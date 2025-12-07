import { RoadmapItem } from "@/types";

export const roadmapData: RoadmapItem[] = [
  {
    month: 1,
    title: "Month 1: 体感期",
    description: "栄養不足の解消と、細胞膜の柔軟化が始まる時期。",
    color: "emerald",
    checklist: [
      "夕方の集中力が続く",
      "朝の目覚めがスッキリ",
      "肌の乾燥・粉吹きが減る",
    ],
  },
  {
    month: 3,
    title: "Month 3: 変化期",
    description: "肌のターンオーバーが完了し、細胞レベルで入れ替わる。",
    color: "rose",
    checklist: [
      "肌トーンUP・くすみ抜け",
      "シミの輪郭がぼやけてくる",
      "日中の眠気が消失",
    ],
  },
];
