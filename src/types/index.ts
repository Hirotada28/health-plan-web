export type DayType = "shake" | "maintenance" | "rest";

export interface WeekDay {
  day: string;
  fullDay: string;
  type: DayType;
  title: string;
  icon: string;
  desc: string;
  food: string;
}

export interface RoadmapItem {
  month: number;
  title: string;
  description: string;
  color: "emerald" | "rose" | "blue";
  checklist: string[];
}

export interface CostData {
  label: string;
  amount: number;
  isBest?: boolean;
}
