"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { consultants } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ConsultantsPanel() {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8">
      <SectionHeader title="资深顾问团队" subtitle="用专业与经验，陪你实现名校梦想" />
      <div className="grid gap-4 sm:grid-cols-2">
        {consultants.map((person) => (
          <motion.article whileHover={{ y: -4 }} key={person.name} className="overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-[#F5F5F7]">
            <div className="relative h-48 overflow-hidden bg-[#E5E7EB]">
              <Image src={person.image} alt={`${person.name} 顾问肖像`} fill sizes="(max-width: 768px) 50vw, 18vw" className="object-cover object-top transition duration-700 hover:scale-105" />
            </div>
            <div className="p-4"><h3 className="font-semibold tracking-[-0.03em]">{person.name}</h3><p className="mt-1 text-sm text-[#6B7280]">{person.role}</p><p className="mt-3 text-xs leading-5 text-[#0A0A0A]/75">{person.expertise}</p></div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
