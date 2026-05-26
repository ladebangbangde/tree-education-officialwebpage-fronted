"use client";

import { BadgeCheck, FileCheck2, Footprints, GraduationCap, MapPinned, Plane, Route, Send, Target } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const icons = {
  route: Route,
  target: Target,
  pen: GraduationCap,
  send: Send,
  badge: BadgeCheck,
  plane: Plane
};

const stepAccentIcons = [Footprints, MapPinned, GraduationCap, FileCheck2, BadgeCheck, Plane];

export function ServicesPanel() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8"
    >
      <SectionHeader title="专业的留学服务" subtitle="像脚印一样，一步一步把申请流程走稳" />

      <div className="relative overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-[#F5F5F7] p-4 md:p-5">
        <motion.div
          className="absolute left-[31px] top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-transparent via-[#0A0A0A]/18 to-transparent sm:block"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.15, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="grid gap-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const AccentIcon = stepAccentIcons[index] || Footprints;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: isEven ? -18 : 18, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.12, duration: 0.42, ease: "easeOut" }}
                className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-3"
              >
                <div className="relative flex justify-center pt-1">
                  <motion.div
                    className="relative z-10 flex size-10 items-center justify-center rounded-2xl bg-[#0A0A0A] text-white shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
                    animate={{ y: [0, -3, 0], rotate: [0, index % 2 === 0 ? -3 : 3, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.18, ease: "easeInOut" }}
                  >
                    <AccentIcon className="size-4" strokeWidth={1.9} />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.035)]"
                >
                  <motion.div
                    className="absolute inset-y-0 left-0 w-1 bg-[#0A0A0A]"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.2, duration: 0.42 }}
                    style={{ transformOrigin: "top" }}
                  />
                  <div className="flex items-center gap-3 pl-1">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#0A0A0A] transition duration-300 group-hover:scale-110 group-hover:bg-[#0A0A0A] group-hover:text-white">
                      <Icon className="size-4" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#6B7280]">STEP {String(index + 1).padStart(2, "0")}</span>
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-[#0A0A0A]"
                          animate={{ scale: [1, 1.75, 1], opacity: [0.35, 1, 0.35] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.16 }}
                        />
                      </div>
                      <h3 className="mt-1 text-base font-semibold tracking-[-0.04em] text-[#0A0A0A]">{service.title}</h3>
                    </div>
                  </div>
                  <p className="mt-3 pl-1 text-sm leading-6 text-[#6B7280]">{service.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
