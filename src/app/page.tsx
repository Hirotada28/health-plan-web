"use client";

import { useState } from "react";
import NavButton from "@/components/NavButton";
import DayCard from "@/components/DayCard";
import DayDetailPanel from "@/components/DayDetailPanel";
import RoadmapItem from "@/components/RoadmapItem";
import BalanceChart from "@/components/charts/BalanceChart";
import CostChart from "@/components/charts/CostChart";
import { weekData } from "@/data/weekData";
import { roadmapData } from "@/data/roadmapData";

type TabType = "routine" | "cost" | "roadmap";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("routine");

  // Calculate today's index (0=Mon, ..., 6=Sun)
  // JS getDay(): 0=Sun, 1=Mon, ..., 6=Sat
  // weekData: 0=Mon, ..., 6=Sun
  const getTodayIndex = () => {
    const day = new Date().getDay();
    return (day + 6) % 7;
  };

  const [currentDayIndex, setCurrentDayIndex] = useState(getTodayIndex());
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const todayIndex = getTodayIndex();

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm px-4 py-3 flex justify-between items-center">
        <div className="font-black text-xl tracking-tighter text-slate-800">
          <span className="text-emerald-500">MVP</span> OPTIMIZER
        </div>
        <div className="flex gap-2">
          <NavButton
            id="nav-routine"
            label="ROUTINE"
            isActive={activeTab === "routine"}
            onClick={() => setActiveTab("routine")}
          />
          <NavButton
            id="nav-cost"
            label="FINANCE"
            isActive={activeTab === "cost"}
            onClick={() => setActiveTab("cost")}
          />
          <NavButton
            id="nav-roadmap"
            label="ROADMAP"
            isActive={activeTab === "roadmap"}
            onClick={() => setActiveTab("roadmap")}
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative overflow-y-auto">
        {/* Hero Section */}
        <section className="p-6 bg-slate-900 text-white relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 opacity-10 text-9xl transform translate-x-10 -translate-y-10">
            <i className="fas fa-bolt"></i>
          </div>
          <div className="relative z-10">
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block">
              BEGINNER PLAN
            </span>
            <h1 className="text-2xl font-bold leading-tight mb-2">
              Minimal Cost.
              <br />
              Maximum Impact.
            </h1>
            <p className="text-slate-400 text-xs mb-4">
              身体改善のMVP(実用最小限の製品)。基礎工事(PV)と材料補給(Shake)にリソースを集中させる戦略的アプローチ。
            </p>

            {/* Concept Toggles */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-emerald-900/50 p-3 rounded-lg border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <i className="fas fa-cube text-emerald-400"></i>
                  <span className="text-xs font-bold text-emerald-100">
                    Pro Vitality
                  </span>
                </div>
                <p className="text-[10px] text-slate-300">
                  毎日の「基礎工事」。細胞膜を整え、栄養の入り口を作る。
                </p>
              </div>
              <div className="bg-rose-900/50 p-3 rounded-lg border border-rose-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <i className="fas fa-fire text-rose-400"></i>
                  <span className="text-xs font-bold text-rose-100">
                    NeoLife Shake
                  </span>
                </div>
                <p className="text-[10px] text-slate-300">
                  ここぞという時の「燃料」。脳の覚醒と肌の材料補給。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TAB 1: ROUTINE */}
        {activeTab === "routine" && (
          <div className="p-4 space-y-6">
            <div className="bg-white">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">
                    Weekly Strategy
                  </h2>
                  <p className="text-xs text-slate-500">
                    作戦A：平日特化型スケジュール
                  </p>
                </div>
                <button
                  onClick={() => setIsEmergencyMode(!isEmergencyMode)}
                  className={`text-[10px] px-3 py-1.5 rounded-full font-bold transition-colors ${
                    isEmergencyMode
                      ? "bg-rose-500 text-white"
                      : "bg-slate-100 text-slate-500 hover:bg-rose-100 hover:text-rose-600"
                  }`}
                >
                  <i
                    className={`fas ${
                      isEmergencyMode ? "fa-bolt" : "fa-exclamation-circle"
                    } mr-1`}
                  ></i>
                  {isEmergencyMode ? "モードON" : "重要日モード"}
                </button>
              </div>

              {/* Weekly Grid */}
              <div className="grid grid-cols-7 gap-1.5 mb-6">
                {weekData.map((day, index) => (
                  <DayCard
                    key={index}
                    day={day}
                    index={index}
                    isActive={currentDayIndex === index}
                    isToday={todayIndex === index}
                    isEmergencyMode={isEmergencyMode}
                    onClick={() => setCurrentDayIndex(index)}
                  />
                ))}
              </div>

              {/* Day Detail Panel */}
              <DayDetailPanel
                day={weekData[currentDayIndex]}
                isEmergencyMode={isEmergencyMode}
              />

              {/* Monthly Balance Chart */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-700 mb-4 text-center">
                  1ヶ月のエネルギー配分
                </h3>
                <BalanceChart />
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  メリハリをつけることで、コストを抑えつつ効果を最大化します。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FINANCE */}
        {activeTab === "cost" && (
          <div className="p-4 space-y-6">
            <div className="bg-slate-800 rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

              <h2 className="text-lg font-bold relative z-10">
                Monthly Investment
              </h2>
              <p className="text-xs text-slate-400 relative z-10 mb-6">
                定期購入(Cパック)の圧倒的優位性
              </p>

              <div className="flex justify-center items-end gap-2 mb-2 relative z-10">
                <span className="text-3xl font-black text-emerald-400">
                  ¥16,900
                </span>
                <span className="text-sm pb-1 opacity-70">/ month</span>
              </div>
              <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-[10px] text-white backdrop-blur-sm">
                1日あたり 約560円
              </div>
            </div>

            {/* Cost Comparison Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-slate-700">
                  コスト比較シミュレーション
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400">
                    Savings Mode
                  </span>
                  <div className="w-8 h-4 bg-emerald-500 rounded-full relative cursor-pointer">
                    <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>

              <CostChart />

              <div className="mt-4 bg-emerald-50 border border-emerald-100 rounded-lg p-3 flex gap-3 items-center">
                <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-emerald-600">
                  <i className="fas fa-piggy-bank text-lg"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-800">
                    ¥6,860 お得！
                  </p>
                  <p className="text-[10px] text-emerald-600 leading-tight">
                    浮いたお金で、将来的に「亜鉛」を追加したり、Shakeを増量する原資に回せます。
                  </p>
                </div>
              </div>
            </div>

            {/* Product Breakdown */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                <div className="text-[10px] text-slate-400 mb-1">
                  単品購入時
                </div>
                <div className="font-bold text-slate-800">¥23,760</div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
                  <div
                    className="bg-slate-400 h-1.5 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border-2 border-emerald-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-bl">
                  BEST
                </div>
                <div className="text-[10px] text-emerald-600 mb-1">Cパック</div>
                <div className="font-bold text-emerald-700">¥16,900</div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
                  <div
                    className="bg-emerald-500 h-1.5 rounded-full"
                    style={{ width: "71%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ROADMAP */}
        {activeTab === "roadmap" && (
          <div className="p-4 space-y-6">
            <div className="text-center mb-2">
              <h2 className="text-lg font-bold text-slate-800">
                Changes Roadmap
              </h2>
              <p className="text-xs text-slate-500">
                継続することで身体はこう変わる
              </p>
            </div>

            <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200">
              {roadmapData.map((item, index) => (
                <RoadmapItem key={index} {...item} />
              ))}

              {/* Future */}
              <div className="relative">
                <div className="absolute -left-[27px] bg-slate-200 w-6 h-6 rounded-full flex items-center justify-center z-10">
                  <i className="fas fa-flag text-[10px] text-slate-500"></i>
                </div>
                <div className="p-4 rounded-xl border-2 border-dashed border-slate-200 opacity-70">
                  <h3 className="font-bold text-slate-400 text-sm mb-1">
                    Next Step
                  </h3>
                  <p className="text-xs text-slate-400">
                    資金に余裕ができたら、夜に
                    <strong className="text-slate-600">
                      Chelated Zinc（亜鉛）
                    </strong>
                    を追加検討（クレーター修復強化）。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto p-6 text-center bg-slate-50">
          <p className="text-xs text-slate-400 mb-4">
            「全部やらなきゃ」と気負う必要はありません。
            <br />
            まずは
            <span className="font-bold text-slate-600">
              「朝のPV、大事な日のShake」
            </span>
            から。
            <br />
            このシンプルな習慣だけで、身体は確実に変わり始めます。
          </p>
        </div>
      </main>
    </div>
  );
}
