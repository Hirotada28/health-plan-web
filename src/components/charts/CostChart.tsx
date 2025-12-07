"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function CostChart() {
  const data = {
    labels: ["One-time Purchase", "Regular (C Pack)"],
    datasets: [
      {
        label: "Monthly Cost (JPY)",
        data: [23760, 16900],
        backgroundColor: ["#cbd5e1", "#10b981"],
        borderRadius: 6,
        barPercentage: 0.6,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { font: { size: 10 } },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11, weight: "bold" } },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed.y;
            return value ? " ¥" + value.toLocaleString() : "";
          },
        },
      },
    },
  };

  return (
    <div
      className="chart-container"
      style={{ maxWidth: "500px", height: "300px" }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}
