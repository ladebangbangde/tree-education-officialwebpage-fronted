"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState, type ReactNode } from "react";
import { BriefcaseBusiness, Building2, CheckCircle2, GraduationCap, Home, Plane, Sparkles, TrendingUp, Users, Wallet, X } from "lucide-react";
import { countries } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Country = (typeof countries)[number];
type DetailTab = "study" | "work";

type DetailCard = {
  icon: "users" | "sparkles" | "trending" | "wallet" | "home" | "plane" | "briefcase";
  title: string;
  text: string;
  highlight: string;
  source?: string;
};

type CountryDetail = {
  study: {
    headline: string;
    intro: string;
    cards: DetailCard[];
  };
  work: {
    headline: string;
    intro: string;
    cards: DetailCard[];
  };
};

const workDefaultCards: DetailCard[] = [
  { icon: "wallet", title: "收入与合同", highlight: "先核合同", source: "以雇主合同为准", text: "海外务工收入受城市、行业、工时、税费、住宿扣款和合同类型影响，不能只看单一月薪数字。" },
  { icon: "home", title: "住宿与生活", highlight: "看净收入", source: "行前核验清单", text: "需要提前确认住宿、餐食、保险、通勤、押金、加班费和扣费方式，避免到岗后实际收入低于预期。" },
  { icon: "plane", title: "签证与合规", highlight: "合规优先", source: "当地移民政策", text: "任何务工路径都必须匹配合法身份、雇主资质、岗位内容和当地政策，不能用旅游、短期访问等身份替代工作许可。" }
];

const detailDefaults: CountryDetail = {
  study: {
    headline: "把国家选择变成更清晰的申请路径。",
    intro: "我们会结合你的学历背景、预算、语言能力、专业方向和职业目标，判断这个国家是否真正适合你。",
    cards: [
      { icon: "users", title: "留学生情况", highlight: "先看适配", source: "公开教育数据", text: "不同国家的中国学生规模、热门专业和申请节奏差异明显，需要根据个人背景判断竞争位置。" },
      { icon: "sparkles", title: "申请优势", highlight: "路径清晰", source: "院校录取规则", text: "合理的国家选择可以降低不确定性，让选校、文书、预算和时间线更容易形成闭环。" },
      { icon: "trending", title: "就业转化", highlight: "结果导向", source: "行业与雇主反馈", text: "回国就业不只看国家和学校，更看专业、实习、项目经历、语言能力和个人表达。" }
    ]
  },
  work: {
    headline: "海外务工要先确认合规路径，再谈收入和岗位。",
    intro: "务工方向需要同时评估岗位真实性、收入结构、住宿条件、签证合规和长期发展空间。",
    cards: workDefaultCards
  }
};

const details: Record<string, CountryDetail> = {
  US: {
    study: {
      headline: "美国适合把申请做成长期竞争力，而不是只冲一个排名。",
      intro: "美国院校层次和专业选择非常丰富，适合目标清晰、愿意长期积累科研、实习、项目和语言表达的学生。",
      cards: [
        { icon: "users", title: "学生规模", highlight: "中国仍是核心来源", source: "IIE Open Doors 2024/25", text: "Open Doors 数据显示，美国 2024/25 学年国际学生总量超过 117 万，中国学生约 26.6 万，仍是最大来源地之一。" },
        { icon: "sparkles", title: "申请优势", highlight: "专业颗粒度细", source: "院校项目设置", text: "美国项目选择细、研究资源强，适合计算机、工程、商科、数据、传媒、教育等方向做个性化定位。" },
        { icon: "trending", title: "就业转化", highlight: "项目经历很关键", source: "OPT / 雇主筛选逻辑", text: "美国背景在科技、金融、咨询、科研方向辨识度高，但回国或留美都需要用实习、项目和能力证据支撑。" }
      ]
    },
    work: detailDefaults.work
  },
  AU: {
    study: {
      headline: "澳大利亚适合想要稳妥路径、清晰时间线和学历认可的学生。",
      intro: "澳洲申请节奏相对清晰，八大与应用型院校层次完整，商科、IT、工程、教育、护理等方向长期受关注。",
      cards: [
        { icon: "users", title: "学生规模", highlight: "中国生源基础大", source: "Australian Education data", text: "澳大利亚官方国际学生数据长期显示，中国是主要生源市场之一，院校支持体系和华人生活网络相对成熟。" },
        { icon: "sparkles", title: "申请优势", highlight: "录取路径透明", source: "CRICOS / 院校录取要求", text: "多数项目会明确均分、专业背景、语言和开学季要求，适合用成绩与背景做可控规划。" },
        { icon: "trending", title: "就业转化", highlight: "实用型认可", source: "澳洲职业与行业需求", text: "澳洲学历在商科、会计、数据、教育、工程和健康科学方向认可稳定，实习与证书会影响回国竞争力。" }
      ]
    },
    work: {
      headline: "澳洲务工要重点确认签证、工时、行业资质和雇主真实性。",
      intro: "澳洲生活成本和合规要求都不低，岗位选择不能只看时薪，必须同时看税后收入、住宿、保险和签证边界。",
      cards: workDefaultCards
    }
  },
  UK: {
    study: {
      headline: "英国适合追求效率、名校密度和硕士快速提升的学生。",
      intro: "英国一年制硕士节奏快、名校密度高，适合希望在较短周期内完成学历升级、专业转向或职业包装的人群。",
      cards: [
        { icon: "users", title: "学生规模", highlight: "中国学生基数高", source: "HESA 2023/24", text: "英国高等教育统计数据显示，中国长期是英国非本土学生的重要来源，商科、传媒、教育、计算机和数据方向竞争集中。" },
        { icon: "sparkles", title: "申请优势", highlight: "时间效率高", source: "英国硕士学制", text: "一年制硕士节省时间成本，学校梯度明确，适合快速制定冲刺、稳妥和保底组合。" },
        { icon: "trending", title: "就业转化", highlight: "名校辨识度强", source: "雇主筛选偏好", text: "英国院校在金融、咨询、传媒、教育、互联网运营等方向辨识度强，回国时需要补足实习与项目成果。" }
      ]
    },
    work: detailDefaults.work
  },
  FR: {
    study: {
      headline: "法国适合重视商科、艺术、工程和欧洲文化体验的学生。",
      intro: "法国拥有高商、工程师学院、公立大学和艺术院校体系，适合希望兼顾教育质量、文化体验和欧洲视野的学生。",
      cards: [
        { icon: "users", title: "学生规模", highlight: "欧洲热门目的地", source: "Campus France", text: "Campus France 统计显示，法国是欧洲重要留学目的地，中国学生集中在商科、工程、艺术设计、语言文化等方向。" },
        { icon: "sparkles", title: "申请优势", highlight: "商科与艺术强", source: "高商 / 艺术院校体系", text: "法国高商、艺术设计和奢侈品管理资源突出，部分项目提供英语授课，适合品牌、时尚、文化和管理方向。" },
        { icon: "trending", title: "就业转化", highlight: "行业标签明显", source: "品牌与文化产业", text: "法国背景在奢侈品、时尚、艺术、文化传播、国际贸易方向标签感强，作品集和实习经历尤其重要。" }
      ]
    },
    work: detailDefaults.work
  },
  IT: {
    study: {
      headline: "意大利适合艺术、设计、建筑、音乐和人文方向学生。",
      intro: "意大利的优势在于艺术底蕴、设计产业和相对有吸引力的学习成本，适合有作品、审美和专业表达的学生。",
      cards: [
        { icon: "users", title: "学生画像", highlight: "艺术设计集中", source: "意大利高教与艺术院校体系", text: "中国学生常申请美院、音乐学院、设计、建筑、时尚管理等方向，作品集和语言准备决定竞争力。" },
        { icon: "sparkles", title: "申请优势", highlight: "专业标签强", source: "AFAM / 综合大学体系", text: "设计、艺术、建筑、音乐等领域有天然品牌感，适合把个人作品和职业方向结合起来规划。" },
        { icon: "trending", title: "就业转化", highlight: "作品集是核心", source: "设计与创意行业", text: "回国进入设计、品牌、建筑、艺术教育等方向时，院校背景之外，更要靠作品集、项目经历和审美表达。" }
      ]
    },
    work: detailDefaults.work
  },
  DE: {
    study: {
      headline: "德国适合重视工程、制造、理工和长期职业发展的学生。",
      intro: "德国院校和产业联系紧密，适合理工科、机械、汽车、电子、计算机、管理等方向，规划重点是语言、课程匹配和长期职业路径。",
      cards: [
        { icon: "users", title: "学生规模", highlight: "理工导向明显", source: "DAAD / Wissenschaft weltoffen", text: "德国国际学生规模持续增长，中国学生长期位居主要来源国之一，工程、机械、车辆、自动化和计算机方向关注度高。" },
        { icon: "sparkles", title: "申请优势", highlight: "产业连接强", source: "德国应用科学与研究体系", text: "德国制造、汽车、工程和应用科学体系成熟，适合想把专业学习和产业实践结合的学生。" },
        { icon: "trending", title: "就业转化", highlight: "工程标签明显", source: "制造业与工程雇主", text: "德国背景在汽车、制造、工程、供应链、工业软件等方向认可度较强，回国就业要突出项目和技术能力。" }
      ]
    },
    work: detailDefaults.work
  },
  ES: {
    study: {
      headline: "西班牙适合商科、旅游、语言、人文、艺术和体育管理方向。",
      intro: "西班牙生活氛围开放，学习成本相对友好，适合希望结合语言、文化、商科和欧洲体验的学生。",
      cards: [
        { icon: "users", title: "学生画像", highlight: "语言与商科并重", source: "西班牙高等教育公开信息", text: "中国学生常选择商科、旅游管理、语言文化、艺术、人文、体育管理等方向，西语能力会带来长期优势。" },
        { icon: "sparkles", title: "申请优势", highlight: "成本相对友好", source: "欧洲生活与学习成本比较", text: "相比部分热门英语国家，西班牙学习和生活成本更有吸引力，适合预算敏感但仍希望获得欧洲学历体验的学生。" },
        { icon: "trending", title: "就业转化", highlight: "西语是差异化", source: "跨境贸易与语言岗位", text: "回国在外贸、跨境电商、旅游、教育、品牌市场等方向，西语和跨文化经历会形成差异化标签。" }
      ]
    },
    work: detailDefaults.work
  }
};

function iconFor(type: string): ReactNode {
  const cls = "size-4";
  const map: Record<string, ReactNode> = {
    users: <Users className={cls} />,
    sparkles: <Sparkles className={cls} />,
    trending: <TrendingUp className={cls} />,
    wallet: <Wallet className={cls} />,
    home: <Home className={cls} />,
    plane: <Plane className={cls} />,
    briefcase: <BriefcaseBusiness className={cls} />
  };
  return map[type] || <CheckCircle2 className={cls} />;
}

export function CountriesSection() {
  const [selected, setSelected] = useState<Country | null>(null);
  const [tab, setTab] = useState<DetailTab>("study");

  const activeDetail = useMemo(() => selected ? (details[selected.code]?.[tab] || detailDefaults[tab]) : null, [selected, tab]);

  const openCountry = (country: Country) => {
    setSelected(country);
    setTab("study");
  };

  return (
    <motion.section id="countries" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
      <SectionHeader title="热门留学目的地" />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {countries.map((country, index) => {
          const wideCard = index === 0 || index === countries.length - 1;
          return (
            <motion.button type="button" onClick={() => openCountry(country)} whileHover={{ y: -4 }} whileTap={{ scale: 0.985 }} key={country.name} className={`group relative min-h-[240px] overflow-hidden rounded-[20px] bg-white text-left shadow-[0_10px_30px_rgba(0,0,0,0.04)] outline-none ${wideCard ? "xl:col-span-2" : ""}`}>
              <Image src={country.image} alt={`${country.name} ${country.english} 地标城市`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover saturate-[0.78] contrast-[0.96] transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
              <motion.div layoutId={`country-icon-${country.code}`} className="absolute left-5 top-5 flex size-14 items-center justify-center rounded-2xl bg-white/90 text-3xl shadow-[0_14px_34px_rgba(0,0,0,0.16)] backdrop-blur">
                {country.icon}
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{country.name}</h3>
                <p className="mt-1 text-sm text-white/70">{country.english}</p>
                <p className="mt-3 inline-flex items-center rounded-full bg-white/16 px-3 py-1 text-xs font-medium text-white/88 backdrop-blur">点击查看数据支持的留学 / 务工路径</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && activeDetail ? (
          <motion.div className="fixed inset-0 z-[10000] overflow-y-auto bg-[#050505]/72 p-4 backdrop-blur-xl md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="mx-auto min-h-[82vh] max-w-5xl overflow-hidden rounded-[34px] border border-white/20 bg-[#F5F5F7]/92 shadow-[0_40px_120px_rgba(0,0,0,0.36)] backdrop-blur-2xl" initial={{ opacity: 0, scale: 0.92, y: 34 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 18 }} transition={{ duration: 0.38, ease: "easeOut" }}>
              <div className="relative min-h-[280px] overflow-hidden bg-black p-6 text-white md:p-8">
                <Image src={selected.image} alt={`${selected.name}详情背景`} fill sizes="100vw" className="object-cover opacity-50" />
                <motion.div className="absolute left-8 top-8 h-44 w-44 rounded-full bg-white/25 blur-3xl" initial={{ scale: 0.2, opacity: 0 }} animate={{ scale: 2.6, opacity: 0.55 }} transition={{ duration: 0.75, ease: "easeOut" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-black/78 via-black/44 to-black/22" />
                <button onClick={() => setSelected(null)} className="absolute right-5 top-5 z-10 flex size-10 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur transition hover:bg-white/20" aria-label="关闭国家详情">
                  <X className="size-5" />
                </button>

                <div className="relative z-10 flex min-h-[220px] flex-col justify-between gap-8">
                  <div className="flex items-start gap-4">
                    <motion.div layoutId={`country-icon-${selected.code}`} className="flex size-20 items-center justify-center rounded-[28px] bg-white text-5xl shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                      {selected.icon}
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/60">{selected.english}</p>
                      <h3 className="mt-2 text-4xl font-semibold tracking-[-0.06em] md:text-6xl">{selected.name}</h3>
                    </div>
                  </div>

                  <div className="relative grid max-w-xl grid-cols-2 rounded-full border border-white/18 bg-white/12 p-1.5 backdrop-blur-xl">
                    <motion.div className="absolute bottom-1.5 top-1.5 rounded-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]" initial={false} animate={{ left: tab === "study" ? "6px" : "calc(50% + 0px)", width: "calc(50% - 6px)" }} transition={{ type: "spring", stiffness: 360, damping: 34 }} />
                    <button onClick={() => setTab("study")} className={`relative z-10 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${tab === "study" ? "text-[#0A0A0A]" : "text-white/78"}`}><GraduationCap className="size-4" /> 留学</button>
                    <button onClick={() => setTab("work")} className={`relative z-10 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${tab === "work" ? "text-[#0A0A0A]" : "text-white/78"}`}><Building2 className="size-4" /> 务工</button>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={`${selected.code}-${tab}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }} className="p-6 md:p-8">
                  <div className="max-w-3xl">
                    <p className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-medium text-white"><Sparkles className="size-3.5" /> {tab === "study" ? "数据支持的留学规划" : "合规优先的务工评估"}</p>
                    <h4 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-[#0A0A0A] md:text-4xl">{activeDetail.headline}</h4>
                    <p className="mt-4 text-sm leading-7 text-[#6B7280] md:text-base">{activeDetail.intro}</p>
                  </div>

                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    {activeDetail.cards.map((card, index) => (
                      <motion.div key={card.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06, duration: 0.28 }} className="group rounded-[24px] border border-white/70 bg-white/72 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex size-10 items-center justify-center rounded-2xl bg-[#0A0A0A] text-white transition duration-300 group-hover:scale-110">
                            {iconFor(card.icon)}
                          </div>
                          {card.source ? <span className="rounded-full border border-[#E5E7EB] bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">{card.source}</span> : null}
                        </div>
                        <h5 className="mt-4 text-base font-semibold tracking-[-0.03em] text-[#0A0A0A]">{card.title}</h5>
                        <motion.p className="mt-3 inline-flex rounded-full bg-[#F5F5F7]/90 px-3 py-1 text-xs font-semibold text-[#0A0A0A]" animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 10px 26px rgba(0,0,0,0.10)", "0 0 0 rgba(0,0,0,0)"] }} transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.2 }}>
                          {card.highlight}
                        </motion.p>
                        <p className="mt-4 text-sm leading-7 text-[#0A0A0A]/72">{card.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-[24px] border border-[#E5E7EB] bg-white/70 p-5 text-sm leading-7 text-[#6B7280] backdrop-blur-xl"><strong className="text-[#0A0A0A]">提醒：</strong> 页面内容用于前期方向了解，具体申请条件、岗位收入、签证材料和雇佣要求，需要结合个人背景、城市、学校、雇主和当年政策做一对一评估。</div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
}
