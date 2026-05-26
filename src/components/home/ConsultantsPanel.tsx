"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
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

const DEFAULT_VISIBLE_COUNT = 4;
const CONSULTANT_DISPLAY_COUNT_OFFSET = 30;

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

function isUploadedAvatar(url?: string) {
  if (!url) return false;
  const value = url.trim();
  if (!value) return false;
  // Static seed images are not treated as consultant-uploaded avatars.
  return !value.startsWith("/pics/consultant/");
}

function AvatarBlock({ person }: { person: ConsultantCard }) {
  const [failed, setFailed] = useState(false);
  const avatar = isUploadedAvatar(person.avatarUrl) ? person.avatarUrl : undefined;

  if (!avatar || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#F5F5F7,#E5E7EB)] px-5 text-center">
        <div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-semibold text-[#0A0A0A] shadow-[0_8px_22px_rgba(0,0,0,0.06)]">
            {person.name?.slice(0, 1) || "顾"}
          </div>
          <p className="mt-3 text-xs font-medium text-[#6B7280]">头像待顾问在 OA 上传</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={avatar}
      alt={`${person.name} 顾问肖像`}
      className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export function ConsultantsPanel() {
  const [consultants, setConsultants] = useState<ConsultantCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    fetch("/api/public/consultants", { cache: "no-store" })
      .then((res) => res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`)))
      .then((payload) => {
        const list = normalizeResponse(payload);
        if (alive) setConsultants(list);
      })
      .catch((error) => {
        console.warn("[ConsultantsPanel] failed to load consultants from public API", error);
        if (alive) setConsultants([]);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => { alive = false; };
  }, []);

  const visibleConsultants = useMemo(
    () => expanded ? consultants : consultants.slice(0, DEFAULT_VISIBLE_COUNT),
    [consultants, expanded]
  );
  const hasMore = consultants.length > DEFAULT_VISIBLE_COUNT;
  const displayConsultantCount = consultants.length + CONSULTANT_DISPLAY_COUNT_OFFSET;

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8">
      <div className="flex items-start justify-between gap-4">
        <SectionHeader title="资深顾问团队" subtitle="用专业与经验，陪你实现名校梦想" />
        {consultants.length > 0 ? <span className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#6B7280]">共 {displayConsultantCount}+ 位顾问</span> : null}
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: DEFAULT_VISIBLE_COUNT }).map((_, index) => (
            <div key={index} className="h-[330px] animate-pulse rounded-[20px] bg-[#F5F5F7]" />
          ))}
        </div>
      ) : consultants.length === 0 ? (
        <div className="rounded-[20px] border border-dashed border-[#D1D5DB] bg-[#F5F5F7] p-6 text-sm leading-6 text-[#6B7280]">
          暂未读取到顾问信息。请先在 OA 后台维护顾问档案、擅长地区，并由顾问本人上传官网头像。
        </div>
      ) : (
        <>
          <motion.div layout className="grid gap-4 sm:grid-cols-2">
            <AnimatePresence initial={false}>
              {visibleConsultants.map((person) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                  whileHover={{ y: -4 }}
                  key={`${person.userId || person.name}-${person.regionCode || "region"}`}
                  className="overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-[#F5F5F7]"
                >
                  <div className="relative h-48 overflow-hidden bg-[#E5E7EB]">
                    <AvatarBlock person={person} />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold tracking-[-0.03em]">{person.name}</h3>
                      {person.regionName ? <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-[#6B7280]">{person.regionName}</span> : null}
                    </div>
                    <p className="mt-1 text-sm text-[#6B7280]">{person.publicTitle || `${person.regionName || "留学"}规划顾问`}</p>
                    <p className="mt-3 text-xs leading-5 text-[#0A0A0A]/75">{person.publicBio || "资深留学规划顾问，擅长结合学生背景制定清晰可执行的申请方案。"}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {hasMore ? (
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-[#0A0A0A] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
              >
                {expanded ? "收起顾问" : `查看更多顾问（${consultants.length - DEFAULT_VISIBLE_COUNT}）`}
              </button>
            </div>
          ) : null}
        </>
      )}
    </motion.section>
  );
}
