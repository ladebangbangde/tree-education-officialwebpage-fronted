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
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#F5F5F7] text-sm font-semibold tracking-[-0.03em] text-[#0A0A0A]">
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
      <SectionHeader title="全球院校与机构信赖之选" subtitle="精选合作与成功申请覆盖的代表性院校" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.slice(0, 6).map((partner) => (
          <motion.article
            key={partner.name}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="group flex min-h-[255px] flex-col rounded-[24px] border border-[#E5E7EB] bg-[#F8F8FA] p-5 transition-all duration-300 hover:border-[#0A0A0A]/15 hover:bg-white hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)]"
          >
            <div className="flex h-[96px] items-center justify-center rounded-[22px] border border-[#E5E7EB] bg-white px-5 py-4 shadow-sm">
              <PartnerLogo name={partner.name} logo={partner.logo} />
            </div>

            <div className="mt-4 flex min-h-0 flex-1 flex-col">
              <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#0A0A0A] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                {partner.badge}
              </div>
              <p className="line-clamp-2 text-base font-semibold tracking-[-0.03em] text-[#0A0A0A]">{partner.name}</p>
              <p className="mt-1 text-sm font-medium tracking-[-0.02em] text-[#6B7280]">{partner.english}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6B7280]">{partner.intro}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
