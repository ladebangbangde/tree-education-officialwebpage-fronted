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
const AUTO_ROTATE_INTERVAL = 5200;
const DEFAULT_BIO = "资深留学规划顾问，擅长结合学生背景制定清晰可执行的申请方案。";
const BIO_SCROLL_THRESHOLD = 52;

function normalizeResponse(payload: any): ConsultantCard[] {
  const data = payload?.data || payload?.result || payload;
  const list = Array.isArray(data) ? data : [];

  return list
    .map((item) => {
      if (!item) return null;
      const regions = Array.isArray(item.regions) ? item.regions : [];
      const primaryRegion = regions[0] || {};
      const name = item.name || item.consultantName || item.displayName;
      if (!name) return null;

      return {
        userId: item.userId,
        name,
        regionCode: item.regionCode || primaryRegion.regionCode,
        regionName: item.regionName || primaryRegion.regionName,
        publicTitle: item.publicTitle,
        publicBio: item.publicBio,
        avatarUrl: item.avatarUrl,
        priority: item.priority ?? primaryRegion.priority ?? item.sortOrder
      } as ConsultantCard;
    })
    .filter((item): item is ConsultantCard => Boolean(item))
    .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
}

function isUploadedAvatar(url?: string) {
  if (!url) return false;
  const value = url.trim();
  if (!value) return false;
  // Static seed images are not treated as consultant-uploaded avatars.
  return !value.startsWith("/pics/consultant/");
}

function chunkConsultants(list: ConsultantCard[]) {
  const pages: ConsultantCard[][] = [];
  for (let index = 0; index < list.length; index += DEFAULT_VISIBLE_COUNT) {
    pages.push(list.slice(index, index + DEFAULT_VISIBLE_COUNT));
  }
  return pages;
}

function consultantBio(person: ConsultantCard) {
  const text = (person.publicBio || DEFAULT_BIO).trim();
  return text || DEFAULT_BIO;
}

function AvatarBlock({ person }: { person: ConsultantCard }) {
  const [failed, setFailed] = useState(false);
  const avatar = isUploadedAvatar(person.avatarUrl) ? person.avatarUrl : undefined;

  if (!avatar || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(229,231,235,0.42))] px-5 text-center backdrop-blur-xl">
        <div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/70 text-lg font-semibold text-[#0A0A0A] shadow-[0_10px_26px_rgba(0,0,0,0.08)] backdrop-blur-xl">
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

function BioBlock({ person }: { person: ConsultantCard }) {
  const text = consultantBio(person);
  const shouldScroll = text.length > BIO_SCROLL_THRESHOLD;

  return (
    <div className="relative mt-3 h-[58px] overflow-hidden rounded-2xl border border-white/60 bg-white/36 px-3 py-2 text-xs leading-5 text-[#0A0A0A]/75 backdrop-blur-xl">
      <p className={shouldScroll ? "consultant-bio-scroll" : "line-clamp-3"}>{text}</p>
      {shouldScroll ? <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-white/80 to-transparent" /> : null}
    </div>
  );
}

export function ConsultantsPanel() {
  const [consultants, setConsultants] = useState<ConsultantCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    fetch("/api/public/consultants", { cache: "no-store" })
      .then((res) => res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`)))
      .then((payload) => {
        const list = normalizeResponse(payload);
        if (alive) {
          setConsultants(list);
          setPageIndex(0);
        }
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

  const consultantPages = useMemo(() => chunkConsultants(consultants), [consultants]);
  const totalPages = consultantPages.length;
  const shouldAutoRotate = totalPages > 1;
  const visibleConsultants = consultantPages[pageIndex] || consultantPages[0] || [];
  const displayConsultantCount = consultants.length + CONSULTANT_DISPLAY_COUNT_OFFSET;

  useEffect(() => {
    if (!shouldAutoRotate) return;
    const timer = window.setInterval(() => {
      setPageIndex((value) => (value + 1) % totalPages);
    }, AUTO_ROTATE_INTERVAL);
    return () => window.clearInterval(timer);
  }, [shouldAutoRotate, totalPages]);

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/58 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:p-8">
      <style jsx global>{`
        @keyframes consultantBioScroll {
          0%, 22% { transform: translateY(0); }
          78%, 100% { transform: translateY(calc(-100% + 42px)); }
        }
        .consultant-bio-scroll {
          animation: consultantBioScroll 9.5s ease-in-out infinite alternate;
          will-change: transform;
        }
      `}</style>
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#2563EB]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-black/5 blur-3xl" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <SectionHeader title="资深顾问团队" subtitle="用专业与经验，陪你实现名校梦想" />
        {consultants.length > 0 ? <span className="rounded-full border border-white/80 bg-white/60 px-3 py-1 text-xs font-medium text-[#6B7280] shadow-[0_8px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">共 {displayConsultantCount}+ 位顾问</span> : null}
      </div>

      <div className="relative z-10">
        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {Array.from({ length: DEFAULT_VISIBLE_COUNT }).map((_, index) => (
              <div key={index} className="h-[350px] animate-pulse rounded-[20px] border border-white/70 bg-white/50 backdrop-blur-xl" />
            ))}
          </div>
        ) : consultants.length === 0 ? (
          <div className="rounded-[20px] border border-dashed border-white/80 bg-white/54 p-6 text-sm leading-6 text-[#6B7280] backdrop-blur-xl">
            暂未读取到顾问信息。请先在 OA 后台维护顾问档案、负责地区，并由顾问本人上传官网头像。
          </div>
        ) : (
          <>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={pageIndex}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {visibleConsultants.map((person) => (
                  <motion.article
                    whileHover={{ y: -4 }}
                    key={`${person.userId || person.name}-${person.regionCode || "region"}`}
                    className="flex h-[350px] flex-col overflow-hidden rounded-[22px] border border-white/75 bg-white/48 shadow-[0_16px_45px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition duration-300 hover:bg-white/62 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
                  >
                    <div className="relative min-h-0 flex-[3] overflow-hidden bg-white/36">
                      <AvatarBlock person={person} />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/8" />
                    </div>
                    <div className="flex min-h-0 flex-[2] flex-col p-4">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="truncate font-semibold tracking-[-0.03em] text-[#0A0A0A]">{person.name}</h3>
                        {person.regionName ? <span className="shrink-0 rounded-full border border-white/80 bg-white/58 px-2.5 py-1 text-[11px] font-medium text-[#6B7280] backdrop-blur-xl">{person.regionName}</span> : null}
                      </div>
                      <p className="mt-1 truncate text-sm text-[#6B7280]">{person.publicTitle || `${person.regionName || "留学"}规划顾问`}</p>
                      <BioBlock person={person} />
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>

            {shouldAutoRotate ? (
              <div className="mt-5 flex items-center justify-center gap-2">
                {consultantPages.map((page, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`切换到第 ${index + 1} 组顾问，共 ${page.length} 位`}
                    onClick={() => setPageIndex(index)}
                    className={`h-2.5 rounded-full px-1 text-[10px] leading-none transition-all duration-300 ${index === pageIndex ? "min-w-7 bg-[#0A0A0A] text-white" : "min-w-2.5 bg-[#0A0A0A]/18 text-transparent hover:bg-[#0A0A0A]/36"}`}
                  >
                    {index === pageIndex ? page.length : ""}
                  </button>
                ))}
              </div>
            ) : null}
          </>
        )}
      </div>
    </motion.section>
  );
}
