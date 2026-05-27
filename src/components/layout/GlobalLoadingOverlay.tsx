"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const logoPath = "/pics/logo/tree_education_logo.png";

export function GlobalLoadingOverlay() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const pendingFetchCount = useRef(0);
  const hideTimer = useRef<number | null>(null);
  const showTimer = useRef<number | null>(null);

  const clearTimer = (timer: React.MutableRefObject<number | null>) => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = null;
  };

  const scheduleHide = (delay = 820) => {
    clearTimer(hideTimer);
    hideTimer.current = window.setTimeout(() => {
      if (pendingFetchCount.current <= 0) setVisible(false);
    }, delay);
  };

  useEffect(() => {
    setVisible(true);
    scheduleHide(1280);
  }, [pathname]);

  useEffect(() => {
    const originalFetch = window.fetch.bind(window);

    window.fetch = async (...args) => {
      pendingFetchCount.current += 1;
      clearTimer(showTimer);
      showTimer.current = window.setTimeout(() => setVisible(true), 180);
      try {
        return await originalFetch(...args);
      } finally {
        pendingFetchCount.current = Math.max(0, pendingFetchCount.current - 1);
        clearTimer(showTimer);
        if (pendingFetchCount.current === 0) scheduleHide(620);
      }
    };

    const initialTimer = window.setTimeout(() => setVisible(false), 1600);
    return () => {
      window.fetch = originalFetch;
      window.clearTimeout(initialTimer);
      clearTimer(hideTimer);
      clearTimer(showTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F5F5F7]/92 px-6 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ y: 16, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -10, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.34, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative h-[150px] w-[220px] overflow-visible">
              <motion.div
                className="absolute inset-0 rounded-[30px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.10)]"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.36, ease: "easeOut" }}
              />

              <motion.div
                className="absolute inset-0 overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-white"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)"] }}
                transition={{ duration: 1.16, times: [0, 0.78, 1], repeat: Infinity, repeatDelay: 0.48, ease: "easeInOut" }}
              >
                <Image src={logoPath} alt="吴桐树 Logo 书写中" fill sizes="220px" className="scale-[1.82] object-contain" priority />
              </motion.div>

              <motion.div
                className="pointer-events-none absolute inset-y-3 left-0 w-12 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.88),rgba(255,255,255,0))] blur-[1px]"
                initial={{ x: -64, opacity: 0 }}
                animate={{ x: [-64, 230, 230], opacity: [0, 1, 0] }}
                transition={{ duration: 1.16, times: [0, 0.74, 1], repeat: Infinity, repeatDelay: 0.48, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute -bottom-2 left-1/2 h-5 w-36 -translate-x-1/2 rounded-full bg-black/10 blur-xl"
                animate={{ scaleX: [0.65, 1, 0.65], opacity: [0.12, 0.28, 0.12] }}
                transition={{ duration: 1.64, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="text-center">
              <motion.p
                className="text-sm font-semibold tracking-[-0.03em] text-[#0A0A0A]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: [0, 1, 1], y: [8, 0, 0] }}
                transition={{ duration: 1.16, times: [0, 0.55, 1], repeat: Infinity, repeatDelay: 0.48 }}
              >
                吴桐树正在加载
              </motion.p>
              <motion.p
                className="mt-1 text-xs font-medium tracking-[0.22em] text-[#6B7280]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.72, 0.72] }}
                transition={{ duration: 1.16, times: [0, 0.72, 1], repeat: Infinity, repeatDelay: 0.48 }}
              >
                TREE EDUCATION
              </motion.p>
            </div>

            <div className="h-1 w-40 overflow-hidden rounded-full bg-[#E5E7EB]">
              <motion.div
                className="h-full rounded-full bg-[#0A0A0A]"
                initial={{ width: "0%" }}
                animate={{ width: ["0%", "100%", "100%"] }}
                transition={{ duration: 1.16, times: [0, 0.78, 1], repeat: Infinity, repeatDelay: 0.48, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
