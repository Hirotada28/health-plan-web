"use client";

import { useState } from "react";

interface RoadmapItemProps {
  month: number;
  title: string;
  description: string;
  color: "emerald" | "rose" | "blue";
  checklist: string[];
}

export default function RoadmapItem({
  month,
  title,
  description,
  color,
  checklist,
}: RoadmapItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const colorClasses = {
    emerald: {
      border: "border-emerald-500",
      bg: "bg-emerald-500",
      text: "text-emerald-700",
      hover: "hover:bg-emerald-50",
      hoverBorder: "group-hover:border-emerald-200",
    },
    rose: {
      border: "border-rose-400",
      bg: "bg-rose-400",
      text: "text-rose-600",
      hover: "hover:bg-rose-50",
      hoverBorder: "group-hover:border-rose-200",
    },
    blue: {
      border: "border-blue-500",
      bg: "bg-blue-500",
      text: "text-blue-700",
      hover: "hover:bg-blue-50",
      hoverBorder: "group-hover:border-blue-200",
    },
  };

  const colors = colorClasses[color];

  return (
    <div
      className="relative group cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`absolute -left-[27px] bg-white border-4 ${colors.border} w-6 h-6 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform`}
      >
        <span className={`text-[8px] font-bold ${colors.text}`}>{month}</span>
      </div>

      <div
        className={`bg-white p-4 rounded-xl shadow-sm border border-slate-100 ${colors.hoverBorder} transition-colors`}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-slate-800 text-sm">{title}</h3>
          <i
            className={`fas fa-chevron-down text-slate-300 text-xs transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          ></i>
        </div>
        <p className="text-xs text-slate-500 mb-3">{description}</p>

        {isOpen && (
          <div className="space-y-2 animate-fade-in">
            {checklist.map((item, index) => (
              <label
                key={index}
                className={`flex items-center gap-2 p-2 bg-slate-50 rounded ${colors.hover} cursor-pointer transition-colors`}
              >
                <input
                  type="checkbox"
                  className={`w-4 h-4 rounded focus:ring-${color}-500 border-gray-300`}
                  style={{ accentColor: colors.bg.replace("bg-", "#") }}
                />
                <span className="text-xs text-slate-600">{item}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
