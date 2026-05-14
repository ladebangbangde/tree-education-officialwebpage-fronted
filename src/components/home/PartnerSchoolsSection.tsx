"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PartnerSchoolsSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8">
      <SectionHeader title="全球院校与机构信赖之选" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <div key={partner} className="flex min-h-24 items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F5F5F7] px-4 text-center text-sm font-semibold uppercase tracking-[-0.03em] text-[#0A0A0A]/55 grayscale transition hover:text-[#0A0A0A]">
            {partner}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
