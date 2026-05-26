"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const logoPath = "/pics/logo/tree_education_studio_logo.png";

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

  const scheduleHide = (delay = 420) => {
    clearTimer(hideTimer);
    hideTimer.current = window.setTimeout(() => {
      if (pendingFetchCount.current <= 0) setVisible(false);
    }, delay);
  };

  useEffect(() => {
    setVisible(true);
    scheduleHide(880);
  }, [pathname]);

  useEffect(() => {
    const originalFetch = window.fetch.bind(window);

    window.fetch = async (...args) => {
      pendingFetchCount.current += 1;
      clearTimer(showTimer);
      showTimer.current = window.setTimeout(() => setVisible(true), 260);
      try {
        return await originalFetch(...args);
      } finally {
        pendingFetchCount.current = Math.max(0, pendingFetchCount.current - 1);
        clearTimer(showTimer);
        if (pendingFetchCount.current === 0) scheduleHide(360);
      }
    };

    const initialTimer = window.setTimeout(() => setVisible(false), 1100);
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
          transition={{ duration: 0.28 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F5F5F7]/88 px-6 backdrop-blur-xl"
        >
          <motion.div
            initial={{ y: 14, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -10, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.34, ease: "easeOut" }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative h-[108px] w-[152px] perspective-[900px]">
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-[22px] border border-[#E5E7EB] bg-white shadow-[0_28px_70px_rgba(0,0,0,0.12)]"
                animate={{ rotateX: [0, 64, 0], skewX: [0, -4, 0] }}
                transition={{ duration: 1.55, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "50% 0%", transformStyle: "preserve-3d" }}
              >
                <Image src={logoPath} alt="吴桐树加载中" fill sizes="152px" className="object-contain p-5" priority />
              </motion.div>
              <motion.div
                className="absolute left-0 top-1/2 h-px w-full bg-[#0A0A0A]/10"
                animate={{ opacity: [0.15, 0.5, 0.15] }}
                transition={{ duration: 1.55, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-x-4 bottom-[-10px] h-5 rounded-full bg-black/10 blur-xl"
                animate={{ scaleX: [0.78, 1, 0.78], opacity: [0.14, 0.26, 0.14] }}
                transition={{ duration: 1.55, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold tracking-[-0.03em] text-[#0A0A0A]">吴桐树正在加载</p>
              <p className="mt-1 text-xs font-medium tracking-[0.22em] text-[#6B7280]">TREE EDUCATION</p>
            </div>

            <div className="h-1 w-36 overflow-hidden rounded-full bg-[#E5E7EB]">
              <motion.div
                className="h-full w-1/2 rounded-full bg-[#0A0A0A]"
                animate={{ x: ["-110%", "220%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
