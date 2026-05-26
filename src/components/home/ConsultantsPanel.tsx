"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

type ConsultantCard = {
  userId?: number;
  name: string;
  regionCode?: string;
  regionName?: string;
  publicTitle?: string;
  publicBio?: string;
  avatarUrl?: string;
  priority?: number;
};

const fallbackConsultants: ConsultantCard[] = [
  {
    name: "Jora",
    regionCode: "EUROPE",
    regionName: "欧洲",
    publicTitle: "欧洲留学规划顾问",
    publicBio: "负责欧洲方向，覆盖德国、法国、荷兰、爱尔兰等项目，擅长课程匹配和材料逻辑搭建。",
    avatarUrl: "/pics/consultant/Jora.png",
    priority: 10
  },
  {
    name: "Christine",
    regionCode: "UK",
    regionName: "英国",
    publicTitle: "英国留学规划顾问",
    publicBio: "负责英国方向，深耕英国硕士申请，擅长商科、传媒、教育与跨专业方案设计。",
    avatarUrl: "/pics/consultant/Christine.png",
    priority: 20
  },
  {
    name: "Irene",
    regionCode: "AUSTRALIA",
    regionName: "澳洲",
    publicTitle: "澳洲留学规划顾问",
    publicBio: "负责澳洲方向，熟悉澳洲八大、商科、数据与工程申请路径，擅长制定清晰申请时间线。",
    avatarUrl: "/pics/consultant/Ierene.png",
    priority: 30
  },
  {
    name: "Dango",
    regionCode: "US",
    regionName: "美国",
    publicTitle: "美国留学规划顾问",
    publicBio: "负责美国方向，熟悉研究生申请节奏，擅长选校梯度、背景梳理与长期规划。",
    avatarUrl: "/pics/consultant/Dango.png",
    priority: 40
  }
];

function normalizeResponse(payload: any): ConsultantCard[] {
  const data = payload?.data || payload?.result || payload;
  const list = Array.isArray(data) ? data : [];
  return list
    .filter((item) => item && item.name)
    .map((item) => ({
      userId: item.userId,
      name: item.name,
      regionCode: item.regionCode,
      regionName: item.regionName,
      publicTitle: item.publicTitle,
      publicBio: item.publicBio,
      avatarUrl: item.avatarUrl,
      priority: item.priority
    }))
    .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
}

export function ConsultantsPanel() {
  const [consultants, setConsultants] = useState<ConsultantCard[]>(fallbackConsultants);

  useEffect(() => {
    let alive = true;
    fetch("/api/public/consultants", { cache: "no-store" })
      .then((res) => res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`)))
      .then((payload) => {
        const list = normalizeResponse(payload);
        if (alive && list.length > 0) setConsultants(list);
      })
      .catch((error) => {
        console.warn("[ConsultantsPanel] fallback to static consultants", error);
      });
    return () => { alive = false; };
  }, []);

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8">
      <SectionHeader title="资深顾问团队" subtitle="用专业与经验，陪你实现名校梦想" />
      <div className="grid gap-4 sm:grid-cols-2">
        {consultants.map((person) => (
          <motion.article whileHover={{ y: -4 }} key={`${person.userId || person.name}-${person.regionCode || "region"}`} className="overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-[#F5F5F7]">
            <div className="relative h-48 overflow-hidden bg-[#E5E7EB]">
              <Image src={person.avatarUrl || "/pics/consultant/Jora.png"} alt={`${person.name} 顾问肖像`} fill sizes="(max-width: 768px) 50vw, 18vw" className="object-cover object-top transition duration-700 hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold tracking-[-0.03em]">{person.name}</h3>
              <p className="mt-1 text-sm text-[#6B7280]">{person.publicTitle || `${person.regionName || "留学"}规划顾问`}</p>
              <p className="mt-3 text-xs leading-5 text-[#0A0A0A]/75">{person.publicBio || "资深留学规划顾问，擅长结合学生背景制定清晰可执行的申请方案。"}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
