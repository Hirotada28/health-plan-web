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
      className={`pb-1 text-xs font-medium transition-colors ${
        isActive
          ? "border-b-3 border-emerald-500 text-slate-800 font-bold"
          : "text-slate-500 hover:text-slate-700"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
