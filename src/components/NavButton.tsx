"use client";

interface NavButtonProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function NavButton({
  id,
  label,
  isActive,
  onClick,
}: NavButtonProps) {
  return (
    <button
      id={id}
      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
        isActive
          ? "bg-slate-800 text-white shadow-md transform scale-105"
          : "bg-transparent text-slate-400 hover:bg-slate-100 hover:text-slate-600"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
