"use client";

import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight, Check, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = ["名校申请方向分析", "顾问1对1沟通", "背景提升建议", "专属留学方案"];

const fields = [
  { key: "name", label: "姓名", required: true },
  { key: "age", label: "年龄", required: true },
  { key: "education", label: "学历", required: true },
  { key: "city", label: "所在城市", required: true },
  { key: "phone", label: "电话号码", required: true },
  { key: "target", label: "意向国家/地区", required: true },
  { key: "remark", label: "备注", required: false }
];

export function AiEvaluationSection() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!orbRef.current) return;
    const tween = gsap.to(orbRef.current, { rotate: 360, duration: 38, repeat: -1, ease: "none" });
    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <motion.section
        id="consultation"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="noise orb-grid relative overflow-hidden rounded-[28px] bg-[#050505] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-10"
      >
        <div
          ref={orbRef}
          className="absolute -right-24 -top-24 size-72 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_35%,rgba(96,165,250,0.7),rgba(255,255,255,0.12)_28%,rgba(5,5,5,0)_62%)] blur-[0.2px]"
        />

        <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />

        <div className="relative max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-blue-100">
            快速咨询
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.06em] md:text-6xl">
            1分钟快速咨询
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-base">
            告诉我们姓名、年龄、学历、所在城市、电话号码以及意向国家/地区，
            我们会为你提供专属留学规划建议。
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#050505]"
          >
            立即开始咨询 <ArrowUpRight className="size-4" />
          </motion.button>
        </div>

        <div className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 backdrop-blur"
            >
              <Check className="size-4 text-blue-200" />
              {feature}
            </div>
          ))}
        </div>
      </motion.section>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-5 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
              >
                <X className="size-4" />
              </button>

              <p className="mb-4 text-sm tracking-[0.25em] text-white/45">
                PREMIUM CONSULTATION
              </p>

              <h3 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                开启你的留学规划
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                所有字段均为必填（备注除外），提交后顾问会尽快联系你。
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.key} className={field.key === "remark" ? "md:col-span-2" : ""}>
                    <label className="mb-2 block text-sm text-white/70">
                      {field.label}
                      {field.required ? " *" : ""}
                    </label>

                    {field.key === "remark" ? (
                      <textarea
                        rows={5}
                        placeholder={`请输入${field.label}`}
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition focus:border-blue-400/60 focus:bg-white/[0.05]"
                      />
                    ) : (
                      <input
                        required
                        placeholder={`请输入${field.label}`}
                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition focus:border-blue-400/60 focus:bg-white/[0.05]"
                      />
                    )}
                  </div>
                ))}
              </div>

              <button className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-[#050505] transition hover:scale-[1.02]">
                提交咨询信息
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
