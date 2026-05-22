"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useState } from "react";

export function TestimonialsPanel() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () => {
    setIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-10"
    >
      <SectionHeader title="学生评价" />

      <AnimatePresence mode="wait">
        <motion.div
          key={item.student}
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -36 }}
          transition={{ duration: 0.32 }}
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          <Quote className="size-10 text-[#2563EB]" strokeWidth={1.4} />

          <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.06em] text-[#0A0A0A] md:text-6xl">
            “{item.quote}”
          </h3>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#6B7280]">
            {item.detail}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex size-[72px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#E5E7EB,#F8FAFC)] text-2xl font-semibold text-[#0A0A0A] shadow-inner">
              {item.student.slice(0, 1)}
            </div>

            <div className="text-left">
              <p className="text-2xl font-semibold">{item.student}</p>
              <p className="mt-1 text-base text-[#6B7280]">{item.result}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="flex size-12 items-center justify-center rounded-full border border-[#E5E7EB] transition hover:bg-[#F5F5F5]"
        >
          <ArrowLeft className="size-5" />
        </button>

        <button
          onClick={next}
          className="flex size-12 items-center justify-center rounded-full bg-[#050505] text-white transition hover:scale-105"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            className={dotIndex === index ? "h-2 w-10 rounded-full bg-[#0A0A0A]" : "size-2 rounded-full bg-[#D1D5DB]"}
          />
        ))}
      </div>
    </motion.section>
  );
}
