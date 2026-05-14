"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { countries } from "@/lib/data";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CountriesSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
      <SectionHeader title="热门留学目的地" linkLabel="查看全部国家/地区" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {countries.map((country, index) => (
          <motion.article whileHover={{ y: -4 }} key={country.name} className={`group relative min-h-[240px] overflow-hidden rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] ${index === 0 ? "xl:col-span-2" : ""}`}>
            <Image src={country.image} alt={`${country.name} ${country.english} 地标城市`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover saturate-[0.68] contrast-[0.95] transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
              <div><h3 className="text-2xl font-semibold tracking-[-0.04em]">{country.name}</h3><p className="mt-1 text-sm text-white/70">{country.english}</p></div>
              <ArrowButton dark label={`查看${country.name}`} />
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
