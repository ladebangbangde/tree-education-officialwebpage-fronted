"use client";

import { Landmark, ScanLine, Sparkles, TrendingUp, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import { whyUsItems } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const icons = { landmark: Landmark, trending: TrendingUp, users: UsersRound, scan: ScanLine, sparkles: Sparkles };

export function WhyUsSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
      <SectionHeader title="选择吴桐树的理由" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {whyUsItems.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <GlassCard key={item.title} className="p-5">
              <Icon className="mb-6 size-5 text-[#0A0A0A]" strokeWidth={1.7} />
              <h3 className="text-base font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">{item.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </motion.section>
  );
}
