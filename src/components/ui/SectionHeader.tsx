import { ArrowUpRight } from "lucide-react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  linkLabel?: string;
};

export function SectionHeader({ eyebrow, title, subtitle, linkLabel }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-[#2563EB]">{eyebrow}</p> : null}
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#0A0A0A] md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-xl text-sm leading-6 text-[#6B7280]">{subtitle}</p> : null}
      </div>
      {linkLabel ? (
        <a className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#0A0A0A] transition hover:opacity-70" href="#">
          {linkLabel}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ) : null}
    </div>
  );
}
