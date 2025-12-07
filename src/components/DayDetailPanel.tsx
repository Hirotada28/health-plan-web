"use client";

import { WeekDay } from "@/types";

interface DayDetailPanelProps {
  day: WeekDay;
  isEmergencyMode: boolean;
}

export default function DayDetailPanel({
  day,
  isEmergencyMode,
}: DayDetailPanelProps) {
  const isShake =
    day.type === "shake" ||
    (isEmergencyMode && (day.type === "maintenance" || day.type === "rest"));

  const headerClass = isShake
    ? "bg-gradient-to-br from-rose-500 to-rose-600"
    : day.type === "maintenance" || day.type === "rest"
    ? "bg-slate-700"
    : "bg-slate-800";

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden transition-all duration-300">
      <div
        className={`p-4 text-white flex justify-between items-center ${headerClass}`}
      >
        <div>
          <span className="text-xs opacity-70 font-bold uppercase tracking-wider">
            {day.fullDay}
          </span>
          <h3 className="text-lg font-bold">
            {isEmergencyMode && day.type !== "shake"
              ? "Emergency Boost!"
              : day.title}
          </h3>
        </div>
        <div className="text-2xl opacity-80">
          <i
            className={`fas ${
              isEmergencyMode && day.type !== "shake" ? "fa-bolt" : day.icon
            }`}
          ></i>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-slate-50 p-2 rounded text-center min-w-[60px]">
            <span className="block text-[10px] text-slate-400">MENU</span>
            <div className="flex justify-center gap-1 mt-1 text-lg">
              {isShake ? (
                <>
                  <i
                    className="fas fa-wine-glass text-rose-500"
                    title="Shake"
                  ></i>
                  <span className="text-xs text-slate-300">+</span>
                  <i className="fas fa-pills text-emerald-500" title="PV"></i>
                </>
              ) : (
                <>
                  <i className="fas fa-egg text-yellow-500" title="Meal"></i>
                  <span className="text-xs text-slate-300">+</span>
                  <i className="fas fa-pills text-emerald-500" title="PV"></i>
                </>
              )}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-1">
              摂取プラン
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">{day.desc}</p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-3 mt-2">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2">
            Meal Advice
          </h4>
          <p className="text-xs text-slate-600 bg-yellow-50 p-2 rounded border border-yellow-100">
            <i className="fas fa-utensils text-yellow-500 mr-1"></i>
            {day.food}
          </p>
        </div>
      </div>
    </div>
  );
}
