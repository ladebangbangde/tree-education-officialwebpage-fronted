"use client";

import { motion } from "framer-motion";
import { offers } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function OfferShowcaseSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
      <SectionHeader title="他们的选择，改变了未来" linkLabel="查看全部案例" />
      <div className="grid gap-4 md:grid-cols-2">
        {offers.map((offer) => (
          <GlassCard key={offer.school} className="p-6">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-[#F5F5F7] text-xs font-semibold tracking-[-0.04em] text-[#0A0A0A]">{offer.school.split(" ").map((word) => word[0]).join("").slice(0, 3)}</div>
              <span className="rounded-full border border-[#DDE7FF] bg-[#EFF6FF] px-3 py-1 text-xs font-medium text-[#2563EB]">{offer.status}</span>
            </div>
            <h3 className="text-lg font-semibold tracking-[-0.04em]">{offer.school}</h3>
            <p className="mt-1 text-sm text-[#6B7280]">{offer.chinese}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <p className="rounded-2xl bg-[#F5F5F7] p-3"><span className="block text-xs text-[#6B7280]">排名</span>{offer.rank}</p>
              <p className="rounded-2xl bg-[#F5F5F7] p-3"><span className="block text-xs text-[#6B7280]">录取时间</span>{offer.intake}</p>
            </div>
            <p className="mt-3 text-sm font-medium text-[#0A0A0A]">{offer.program}</p>
          </GlassCard>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {[0, 1, 2].map((dot) => <span key={dot} className={`h-1.5 rounded-full ${dot === 0 ? "w-7 bg-[#0A0A0A]" : "w-1.5 bg-[#D1D5DB]"}`} />)}
      </div>
    </motion.section>
  );
}
