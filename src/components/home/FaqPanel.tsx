"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = faqItems.map((item) => ({
  question: item.q,
  answer: item.a
}));

export function FaqPanel() {
  const [active, setActive] = useState(0);
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8">
      <SectionHeader title="常见问题" />
      <div className="divide-y divide-[#E5E7EB]">
        {faqs.map((faq, index) => {
          const open = active === index;
          return (
            <div key={faq.question} className="py-4">
              <button onClick={() => setActive(open ? -1 : index)} className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-[#0A0A0A]">
                {faq.question}
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F5F5F7]">{open ? <Minus className="size-4" /> : <Plus className="size-4" />}</span>
              </button>
              <AnimatePresence initial={false}>
                {open ? <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pr-10 text-sm leading-7 text-[#6B7280]"><span className="block pt-3">{faq.answer}</span></motion.p> : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
