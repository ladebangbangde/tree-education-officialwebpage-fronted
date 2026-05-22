"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            key={partner.name}
            className="group flex items-center gap-4 rounded-[24px] border border-[#E5E7EB] bg-[#F8F8FA] p-5 transition hover:border-[#0A0A0A]/15 hover:bg-white"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A0A0A] text-sm font-bold text-white shadow-lg">
              {partner.mark}
            </div>

            <div>
              <p className="text-base font-semibold text-[#0A0A0A]">{partner.name}</p>
              <p className="mt-1 text-sm text-[#6B7280]">{partner.english}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
