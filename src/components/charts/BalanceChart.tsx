"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BalanceChart() {
  const data = {
    labels: ["Shake Days (High Perf)", "Maintenance (Low Cost)"],
    datasets: [
      {
        data: [12, 18],
        backgroundColor: ["#f43f5e", "#10b981"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          font: { size: 10 },
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className="chart-container" style={{ height: "200px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
