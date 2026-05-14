"use client";

import { BadgeCheck, PenLine, Plane, Route, Send, Target, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const icons = { route: Route, target: Target, pen: PenLine, send: Send, badge: BadgeCheck, plane: Plane };

export function ServicesPanel() {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8">
      <SectionHeader title="专业的留学服务" subtitle="覆盖留学申请全流程" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = icons[service.icon as keyof typeof icons];
          return (
            <motion.a whileHover={{ y: -4 }} key={service.title} href="#" className="group rounded-[20px] border border-[#E5E7EB] bg-white p-4 transition hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between"><Icon className="size-5" strokeWidth={1.7} /><ArrowUpRight className="size-4 text-[#6B7280] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0A0A0A]" /></div>
              <h3 className="mt-6 text-sm font-semibold">{service.title}</h3>
              <p className="mt-1 text-xs leading-5 text-[#6B7280]">{service.description}</p>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}
