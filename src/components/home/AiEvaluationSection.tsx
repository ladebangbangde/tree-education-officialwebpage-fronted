"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight, Check } from "lucide-react";
import { useEffect, useRef } from "react";

const features = ["院校匹配度分析", "录取概率预测", "背景提升建议", "专属留学方案"];

export function AiEvaluationSection() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbRef.current) return;
    const tween = gsap.to(orbRef.current, { rotate: 360, duration: 38, repeat: -1, ease: "none" });
    return () => { tween.kill(); };
  }, []);

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="noise orb-grid relative overflow-hidden rounded-[28px] bg-[#050505] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-10">
      <div ref={orbRef} className="absolute -right-24 -top-24 size-72 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_35%,rgba(96,165,250,0.7),rgba(255,255,255,0.12)_28%,rgba(5,5,5,0)_62%)] blur-[0.2px]" />
      <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />
      <div className="relative max-w-2xl">
        <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-blue-100">AI 智能评估</p>
        <h2 className="text-4xl font-semibold leading-tight tracking-[-0.06em] md:text-6xl">3 分钟，了解<br />你的留学竞争力</h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-white/62 md:text-base">基于背景录取数据，为你智能评估录取概率</p>
        <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#050505]">
          立即免费评估 <ArrowUpRight className="size-4" />
        </motion.a>
      </div>
      <div className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 backdrop-blur">
            <Check className="size-4 text-blue-200" />{feature}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
