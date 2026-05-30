"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { partners } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

function PartnerLogo({ name, logo }: { name: string; logo?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  if (!logo || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#F5F5F7] text-sm font-semibold tracking-[-0.03em] text-[#0A0A0A]">
        {initials || "U"}
      </div>
    );
  }

  return <img src={logo} alt={`${name}校徽`} className="h-full w-full object-contain" loading="lazy" onError={() => setFailed(true)} />;
}

export function PartnerSchoolsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8"
    >
      <SectionHeader title="全球院校与机构信赖之选" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <motion.article
            key={partner.name}
            whileHover={{ y: -6, scale: 1.025 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-[#F8F8FA] p-5 transition-all duration-300 hover:border-[#0A0A0A]/15 hover:bg-white hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-sm">
                <PartnerLogo name={partner.name} logo={partner.logo} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#0A0A0A] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  QS {partner.rank}
                </div>
                <p className="truncate text-base font-semibold tracking-[-0.03em] text-[#0A0A0A]">{partner.name}</p>
                <p className="mt-1 truncate text-sm font-medium tracking-[-0.02em] text-[#6B7280]">{partner.english}</p>
              </div>
            </div>

            <div className="grid max-h-0 grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-40 group-hover:grid-rows-[1fr] group-hover:opacity-100">
              <p className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm leading-6 text-[#6B7280]">
                {partner.intro}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
