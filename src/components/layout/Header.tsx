"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-white/78 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[-0.04em] text-[#0A0A0A]">
          吴桐树
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#0A0A0A]/70 transition duration-300 hover:-translate-y-0.5 hover:text-[#0A0A0A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="inline-flex size-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="切换导航菜单"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#E5E7EB] bg-white lg:hidden"
          >
            <div className="mx-auto grid max-w-[1440px] gap-1 px-5 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-3 text-sm font-medium text-[#0A0A0A]/75 hover:bg-[#F5F5F7]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
