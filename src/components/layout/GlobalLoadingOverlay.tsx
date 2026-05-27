"use client";

import { AnimatePresence, motion } from "framer-motion";
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

  const scheduleHide = (delay = 920) => {
    clearTimer(hideTimer);
    hideTimer.current = window.setTimeout(() => {
      if (pendingFetchCount.current <= 0) setVisible(false);
    }, delay);
  };

  useEffect(() => {
    setVisible(true);
    scheduleHide(1480);
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
        if (pendingFetchCount.current === 0) scheduleHide(680);
      }
    };

    const initialTimer = window.setTimeout(() => setVisible(false), 1800);
    return () => {
      window.fetch = originalFetch;
      window.clearTimeout(initialTimer);
      clearTimer(hideTimer);
      clearTimer(showTimer);
    };
  }, []);

  const maskStyle = {
    WebkitMaskImage: `url(${logoPath})`,
    maskImage: `url(${logoPath})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "178% auto",
    maskSize: "178% auto"
  } as const;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/8 px-6 backdrop-blur-md"
        >
          <motion.div
            initial={{ y: 16, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -10, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.34, ease: "easeOut" }}
            className="flex flex-col items-center gap-6 rounded-[34px] bg-white/10 px-8 py-7 backdrop-blur-sm"
          >
            <div className="relative h-[150px] w-[220px] overflow-visible">
              <div className="absolute inset-0 overflow-visible bg-transparent">
                <div className="absolute inset-0 opacity-[0.07]" style={maskStyle}>
                  <div className="h-full w-full bg-[#0A0A0A]" />
                </div>

                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)"] }}
                  transition={{ duration: 1.26, times: [0, 0.76, 1], repeat: Infinity, repeatDelay: 0.52, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0" style={maskStyle}>
                    <div className="h-full w-full bg-[#0A0A0A]" />
                  </div>
                </motion.div>

                <motion.div
                  className="pointer-events-none absolute inset-y-0 left-0 w-[58px] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.72),rgba(255,255,255,0))] blur-[1px]"
                  initial={{ x: -72, opacity: 0 }}
                  animate={{ x: [-72, 232, 232], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.26, times: [0, 0.72, 1], repeat: Infinity, repeatDelay: 0.52, ease: "easeInOut" }}
                />

                <motion.div
                  className="absolute top-[58px] h-2 w-2 rounded-full bg-[#0A0A0A] shadow-[0_0_18px_rgba(0,0,0,0.45)]"
                  initial={{ x: 20, opacity: 0, scale: 0.65 }}
                  animate={{ x: [20, 190, 190], opacity: [0, 1, 0], scale: [0.65, 1, 0.65] }}
                  transition={{ duration: 1.26, times: [0, 0.72, 1], repeat: Infinity, repeatDelay: 0.52, ease: "easeInOut" }}
                />
              </div>

              <motion.div
                className="absolute -bottom-2 left-1/2 h-5 w-36 -translate-x-1/2 rounded-full bg-black/10 blur-xl"
                animate={{ scaleX: [0.65, 1, 0.65], opacity: [0.12, 0.28, 0.12] }}
                transition={{ duration: 1.78, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="text-center">
              <motion.p
                className="text-sm font-semibold tracking-[-0.03em] text-[#0A0A0A]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: [0, 1, 1], y: [8, 0, 0] }}
                transition={{ duration: 1.26, times: [0, 0.55, 1], repeat: Infinity, repeatDelay: 0.52 }}
              >
                吴桐树正在加载
              </motion.p>
              <motion.p
                className="mt-1 text-xs font-medium tracking-[0.22em] text-[#6B7280]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.72, 0.72] }}
                transition={{ duration: 1.26, times: [0, 0.72, 1], repeat: Infinity, repeatDelay: 0.52 }}
              >
                TREE EDUCATION
              </motion.p>
            </div>

            <div className="h-1 w-40 overflow-hidden rounded-full bg-black/10">
              <motion.div
                className="h-full rounded-full bg-[#0A0A0A]"
                initial={{ width: "0%" }}
                animate={{ width: ["0%", "100%", "100%"] }}
                transition={{ duration: 1.26, times: [0, 0.76, 1], repeat: Infinity, repeatDelay: 0.52, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
