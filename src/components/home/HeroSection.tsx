"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, X } from "lucide-react";
import { heroImage } from "@/lib/data";

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [purposeOpen, setPurposeOpen] = useState(false);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const choosePurpose = (leadRole: "student" | "worker") => {
    setPurposeOpen(false);
    window.dispatchEvent(new CustomEvent("tree-consultation-purpose", { detail: { leadRole } }));
    window.setTimeout(() => {
      document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <>
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-10 lg:min-h-[620px]"
      >
        <div className="grid min-h-full gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="flex flex-col justify-between gap-12 py-2">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-[#E5E7EB] px-4 py-2 text-xs font-medium tracking-[0.18em] text-[#2563EB]">
                你的未来，全球选择
              </p>

              <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-[#0A0A0A] md:text-7xl xl:text-8xl">
                让世界
                <br />
                为你打开
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#6B7280] md:text-lg">
                我们提供留学与海外工作规划
                <br className="hidden sm:block" />
                从目标定位到落地执行，一站式陪伴你的出国之路
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPurposeOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#050505] px-6 py-3.5 text-sm font-medium text-white"
                >
                  快速咨询 <ArrowUpRight className="size-4" />
                </motion.button>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#offers"
                  className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-6 py-3.5 text-sm font-medium text-[#0A0A0A]"
                >
                  查看成功案例
                </motion.a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-[#6B7280]">
              <span className="inline-flex size-9 items-center justify-center rounded-full border border-[#E5E7EB]">
                <ArrowDown className="size-4" />
              </span>
              Scroll
            </div>
          </div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#F5F5F7] lg:min-h-full"
          >
            <Image
              src={heroImage}
              alt="极简现代建筑立面"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover grayscale-[15%] saturate-[0.7] transition duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/20" />

            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/30 bg-white/75 p-4 backdrop-blur-xl">
              <p className="text-xs text-[#6B7280]">Global planning</p>
              <p className="mt-1 text-sm font-semibold">专业的出国服务</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {purposeOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/62 px-5 py-8 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            className="relative grid w-full max-w-[860px] overflow-hidden rounded-[28px] bg-white shadow-[0_32px_90px_rgba(0,0,0,0.32)] md:grid-cols-2"
          >
            <button
              type="button"
              onClick={() => setPurposeOpen(false)}
              className="absolute right-5 top-5 z-10 inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white transition hover:bg-black/18 md:text-[#0A0A0A]"
              aria-label="关闭出国目的选择"
            >
              <X className="size-4" />
            </button>

            <button
              type="button"
              onClick={() => choosePurpose("student")}
              className="group relative min-h-[360px] overflow-hidden bg-[#050505] p-9 text-left text-white transition hover:bg-black md:min-h-[430px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_38%,rgba(255,255,255,0.16),transparent_32%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_100%,40px_40px,40px_40px]" />
              <div className="relative flex h-full flex-col justify-between">
                <p className="text-xs font-medium tracking-[0.24em] text-white/62">请问您出国的目的？</p>
                <div>
                  <p className="text-sm font-semibold tracking-[0.36em] text-white/42">STUDY ABROAD</p>
                  <h2 className="mt-5 text-6xl font-semibold tracking-[-0.08em] text-white md:text-7xl">留学</h2>
                  <p className="mt-6 max-w-xs text-sm font-medium leading-7 text-white/78">适合申请学校、提升学历、规划专业方向和长期职业竞争力。</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/86 transition group-hover:translate-x-1">选择留学 <ArrowUpRight className="size-4" /></span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => choosePurpose("worker")}
              className="group relative min-h-[360px] overflow-hidden bg-white p-9 text-left text-[#0A0A0A] transition hover:bg-[#F5F5F7] md:min-h-[430px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(10,10,10,0.08),transparent_30%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <p className="text-xs font-medium tracking-[0.24em] text-[#0A0A0A]/58" style={{ color: "rgba(10,10,10,0.58)" }}>请问您出国的目的？</p>
                <div className="relative z-10">
                  <p className="text-sm font-semibold tracking-[0.36em] text-[#0A0A0A]/58" style={{ color: "rgba(10,10,10,0.58)" }}>WORK ABROAD</p>
                  <div
                    className="mt-5 block text-6xl font-semibold leading-none tracking-[-0.08em] md:text-7xl"
                    style={{ color: "#0A0A0A", display: "block", opacity: 1, visibility: "visible", WebkitTextFillColor: "#0A0A0A" }}
                  >
                    务工
                  </div>
                  <p className="mt-6 max-w-xs text-sm font-medium leading-7 text-[#0A0A0A]/72" style={{ color: "rgba(10,10,10,0.72)" }}>适合海外岗位、技能就业、合规务工和收入路径评估。</p>
                </div>
                <span className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A]/80 transition group-hover:translate-x-1" style={{ color: "rgba(10,10,10,0.8)" }}>选择务工 <ArrowUpRight className="size-4" /></span>
              </div>
            </button>
          </motion.div>
        </div>
      ) : null}
    </>
  );
}
