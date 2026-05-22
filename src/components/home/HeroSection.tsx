"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { heroImage } from "@/lib/data";

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);

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

  return (
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
              让世界名校
              <br />
              为你打开
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#6B7280] md:text-lg">
              我们专注全球留学申请规划
              <br className="hidden sm:block" />
              从适配定位到录取落地，一站式陪伴你的留学之路
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#050505] px-6 py-3.5 text-sm font-medium text-white"
              >
                快速咨询 <ArrowUpRight className="size-4" />
              </motion.a>

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
            <p className="text-xs text-[#6B7280]">Admission planning</p>
            <p className="mt-1 text-sm font-semibold">Global · Data-driven · Precise</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
