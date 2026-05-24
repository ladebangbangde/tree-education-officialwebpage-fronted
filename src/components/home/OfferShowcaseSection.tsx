"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { offers, workCases, type ShowcaseCase } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const tabs = [
  {
    key: "study",
    label: "留学案例",
    description: "从背景评估、选校定位到文书叙事，把普通经历做成有竞争力的申请故事。"
  },
  {
    key: "work",
    label: "跨国就业案例",
    description: "围绕岗位匹配、材料表达、语言面试和长期路径，把工作经验转成海外机会。"
  }
] as const;

type CaseTab = (typeof tabs)[number]["key"];

function CaseCard({ item }: { item: ShowcaseCase }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      whileHover={{ scale: 1.025, y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="group"
    >
      <GlassCard className="h-full p-6 transition-all duration-300 group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full border border-[#DDE7FF] bg-[#EFF6FF] px-3 py-1 text-xs font-medium text-[#2563EB]">
              {item.tag}
            </span>
            <p className="mt-3 text-sm leading-6 text-[#6B7280]">{item.student} · {item.background}</p>
          </div>
          <span className="shrink-0 rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs font-medium text-[#0A0A0A]">
            {item.status}
          </span>
        </div>

        <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#0A0A0A]">{item.result}</h3>
        <p className="mt-3 text-sm leading-6 text-[#6B7280]">{item.school} · {item.chinese}</p>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <p className="rounded-2xl bg-[#F5F5F7] p-3">
            <span className="block text-xs text-[#6B7280]">{item.rankLabel || "排名"}</span>
            {item.rank}
          </p>
          <p className="rounded-2xl bg-[#F5F5F7] p-3">
            <span className="block text-xs text-[#6B7280]">{item.programLabel || "项目"}</span>
            {item.program}
          </p>
        </div>

        {item.highlights?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.highlights.map((highlight) => (
              <span key={highlight} className="rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#475569]">
                {highlight}
              </span>
            ))}
          </div>
        ) : null}

        <p className="mt-4 text-sm font-medium leading-6 text-[#0A0A0A]">{item.strategy}</p>

        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-4 rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm leading-6 text-[#6B7280]">
              {item.detail}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function OfferShowcaseSection() {
  const [activeTab, setActiveTab] = useState<CaseTab>("study");
  const activeCases = activeTab === "study" ? offers : workCases;
  const activeDescription = tabs.find((tab) => tab.key === activeTab)?.description;

  return (
    <motion.section
      id="offers"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <SectionHeader title="他们的选择，改变了未来" />

      <div className="mx-auto mb-8 max-w-3xl rounded-[28px] border border-white/70 bg-white/70 p-2 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="grid grid-cols-2 gap-2">
          {tabs.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`relative rounded-[22px] px-4 py-4 text-left transition-all duration-300 ${
                  active ? "text-white" : "text-[#475569] hover:bg-white/70 hover:text-[#0A0A0A]"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="case-tab-active"
                    className="absolute inset-0 rounded-[22px] bg-[#0A0A0A] shadow-[0_18px_40px_rgba(10,10,10,0.18)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10 block text-sm font-semibold md:text-base">{tab.label}</span>
                <span className={`relative z-10 mt-1 block text-xs leading-5 ${active ? "text-white/70" : "text-[#6B7280]"}`}>
                  {tab.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-6 text-[#6B7280]">{activeDescription}</p>

      <motion.div layout className="grid gap-4 md:grid-cols-2">
        <AnimatePresence>
          {activeCases.map((item) => (
            <CaseCard key={`${activeTab}-${item.student}-${item.program}`} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}