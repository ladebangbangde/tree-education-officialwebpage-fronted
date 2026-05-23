"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FinalCtaPanel() {
  const openConsultationForm = () => {
    const consultationButton = document.querySelector<HTMLButtonElement>("#consultation button");
    consultationButton?.click();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="noise orb-grid relative overflow-hidden rounded-[28px] bg-[#050505] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
    >
      <div className="absolute -bottom-36 left-1/2 size-80 -translate-x-1/2 rounded-full border border-white/12 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.55),rgba(255,255,255,0.09)_32%,rgba(5,5,5,0)_66%)]" />
      <div className="relative">
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.06em] md:text-4xl">开启你的全球梦想之旅</h2>
        <p className="mt-4 text-sm leading-7 text-white/62">现在咨询，获取专属留学方案</p>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={openConsultationForm}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#050505]"
        >
          免费咨询顾问 <ArrowUpRight className="size-4" />
        </motion.button>
      </div>
    </motion.section>
  );
}
