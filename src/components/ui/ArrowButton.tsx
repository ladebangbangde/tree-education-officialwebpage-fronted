import { ArrowUpRight } from "lucide-react";

type ArrowButtonProps = {
  className?: string;
  label?: string;
  dark?: boolean;
};

export function ArrowButton({ className = "", label = "查看", dark = false }: ArrowButtonProps) {
  return (
    <button
      aria-label={label}
      className={`inline-flex size-10 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5 ${
        dark ? "border-white/15 bg-white text-[#050505]" : "border-[#E5E7EB] bg-white text-[#0A0A0A] hover:border-[#0A0A0A]"
      } ${className}`}
    >
      <ArrowUpRight className="size-4" />
    </button>
  );
}
