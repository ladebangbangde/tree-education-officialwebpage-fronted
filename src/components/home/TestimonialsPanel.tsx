"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TestimonialsPanel() {
  const item = testimonials[0];
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8">
      <SectionHeader title="学生评价" />
      <Quote className="size-10 text-[#2563EB]" strokeWidth={1.4} />
      <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-[-0.05em]">“{item.quote}”</h3>
      <p className="mt-4 text-sm leading-7 text-[#6B7280]">{item.detail}</p>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3"><Image src={item.avatar} alt={item.student} width={44} height={44} className="size-11 rounded-full object-cover grayscale" /><div><p className="text-sm font-semibold">{item.student}</p><p className="text-xs text-[#6B7280]">{item.result}</p></div></div>
        <div className="flex gap-2"><button className="size-9 rounded-full border border-[#E5E7EB]"><ArrowLeft className="mx-auto size-4" /></button><button className="size-9 rounded-full bg-[#050505] text-white"><ArrowRight className="mx-auto size-4" /></button></div>
      </div>
      <div className="mt-6 flex justify-center gap-2"><span className="h-1.5 w-7 rounded-full bg-[#0A0A0A]" /><span className="size-1.5 rounded-full bg-[#D1D5DB]" /><span className="size-1.5 rounded-full bg-[#D1D5DB]" /></div>
    </motion.section>
  );
}
