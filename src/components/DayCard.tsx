"use client";

import { WeekDay } from "@/types";

interface DayCardProps {
  day: WeekDay;
  index: number;
  isActive: boolean;
  isEmergencyMode: boolean;
  onClick: () => void;
}

export default function DayCard({
  day,
  index,
  isActive,
  isEmergencyMode,
  onClick,
}: DayCardProps) {
  const isShake =
    day.type === "shake" ||
    (isEmergencyMode && (day.type === "maintenance" || day.type === "rest"));

  return (
    <div
      className={`
        rounded-lg p-2 text-center border-2 flex flex-col items-center justify-center h-16 
        relative overflow-hidden cursor-pointer transition-all hover:transform hover:-translate-y-1
        ${
          isActive ? "shadow-md scale-105 ring-2 ring-emerald-500" : "shadow-sm"
        }
        ${
          isShake
            ? "bg-rose-50 border-rose-200"
            : "bg-emerald-50 border-emerald-100"
        }
      `}
      onClick={onClick}
    >
      <span
        className={`text-[10px] font-bold mb-1 ${
          isShake ? "text-rose-400" : "text-emerald-400"
        }`}
      >
        {day.day}
      </span>
      <i
        className={`fas ${
          isShake ? "fa-wine-glass text-rose-500" : "fa-pills text-emerald-500"
        } text-lg`}
      ></i>

      {isEmergencyMode && day.type !== "shake" && (
        <div className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full"></div>
      )}
    </div>
  );
}
