"use client";

import { motion } from "framer-motion";
import { offers } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function OfferShowcaseSection() {
  return (
    <motion.section
      id="offers"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <SectionHeader title="他们的选择，改变了未来" />

      <div className="grid gap-4 md:grid-cols-2">
        {offers.map((offer) => (
          <motion.div
            key={offer.school}
            initial={false}
            whileHover={{ scale: 1.035, y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="group"
          >
            <GlassCard className="h-full p-6 transition-all duration-300 group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-[#DDE7FF] bg-[#EFF6FF] px-3 py-1 text-xs font-medium text-[#2563EB]">
                    {offer.tag}
                  </span>
                  <p className="mt-3 text-sm text-[#6B7280]">{offer.student} · {offer.background}</p>
                </div>
                <span className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs font-medium text-[#0A0A0A]">
                  {offer.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#0A0A0A]">{offer.result}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">{offer.school} · {offer.chinese}</p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <p className="rounded-2xl bg-[#F5F5F7] p-3">
                  <span className="block text-xs text-[#6B7280]">排名</span>
                  {offer.rank}
                </p>
                <p className="rounded-2xl bg-[#F5F5F7] p-3">
                  <span className="block text-xs text-[#6B7280]">项目</span>
                  {offer.program}
                </p>
              </div>

              <p className="mt-4 text-sm font-medium leading-6 text-[#0A0A0A]">{offer.strategy}</p>

              <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="mt-4 rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm leading-6 text-[#6B7280]">
                    {offer.detail}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
