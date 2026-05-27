"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState, type ReactNode } from "react";
import { BriefcaseBusiness, Building2, CheckCircle2, GraduationCap, Home, Plane, Sparkles, TrendingUp, Users, Wallet, X } from "lucide-react";
import { countries } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Country = (typeof countries)[number];
type DetailTab = "study" | "work";

type CountryDetail = {
  study: {
    headline: string;
    intro: string;
    cards: { icon: "users" | "sparkles" | "trending"; title: string; text: string; highlight: string }[];
  };
  work: {
    headline: string;
    intro: string;
    cards: { icon: "wallet" | "home" | "plane" | "briefcase"; title: string; text: string; highlight: string }[];
  };
};

const detailDefaults: CountryDetail = {
  study: {
    headline: "把国家选择变成更清晰的申请路径。",
    intro: "我们会结合你的学历背景、预算、语言能力和职业目标，判断这个国家是否真正适合你。",
    cards: [
      { icon: "users", title: "留学生情况", highlight: "先看适配", text: "不同国家的中国学生分布、热门专业和申请节奏都不同，需要根据个人背景判断竞争位置。" },
      { icon: "sparkles", title: "申请优势", highlight: "路径清晰", text: "合理的国家选择可以降低不确定性，让选校、文书、预算和时间线更容易形成闭环。" },
      { icon: "trending", title: "回国就业", highlight: "结果导向", text: "回国就业不只看国家和学校，更看专业、实习、项目经历和个人表达能力。" }
    ]
  },
  work: {
    headline: "海外务工要先确认合规路径，再谈收入和岗位。",
    intro: "务工方向需要同时评估岗位真实性、收入结构、住宿条件、签证合规和长期发展空间。",
    cards: [
      { icon: "wallet", title: "月薪参考", highlight: "因人而异", text: "不同城市、行业、工时和合同类型差异很大，不能只看单一薪资数字。" },
      { icon: "home", title: "吃住条件", highlight: "提前确认", text: "住宿、餐食、保险、通勤和扣费方式都要在出发前确认清楚。" },
      { icon: "plane", title: "签证情况", highlight: "合规优先", text: "任何务工路径都必须匹配合法身份、雇主资质和当地政策。" }
    ]
  }
};

const details: Record<string, CountryDetail> = {
  US: {
    study: {
      headline: "把申请做成长期竞争力，而不是只冲一个排名。",
      intro: "美国适合目标清晰、愿意长期积累科研、实习、项目和语言表达的学生。它的核心价值不只是名校光环，而是课程选择、校友网络和职业资源的组合。",
      cards: [
        { icon: "users", title: "留学生画像", highlight: "多元竞争", text: "中国学生集中在商科、计算机、工程、数据、传媒等方向，竞争激烈，但也最容易通过项目经历和文书叙事拉开差距。" },
        { icon: "sparkles", title: "申请优势", highlight: "路径灵活", text: "学校层次丰富，专业选择细，转专业、跨学科和研究型申请空间大，适合做个性化定位。" },
        { icon: "trending", title: "回国就业", highlight: "认可度强", text: "美国院校背景在互联网、金融、咨询、数据、科研方向认可度高，关键是把实习和项目沉淀成可讲清的能力证据。" }
      ]
    },
    work: detailDefaults.work
  },
  AU: {
    study: {
      headline: "澳洲适合想要稳妥路径、清晰时间线和学历认可的学生。",
      intro: "澳洲申请节奏相对清晰，八大与应用型院校层次完整，商科、IT、工程、教育、护理等方向长期受关注。",
      cards: [
        { icon: "users", title: "留学生画像", highlight: "中国学生基数大", text: "中国学生在澳洲高校中占比较高，生活适应快，课程支持体系成熟，适合希望降低不确定性的家庭。" },
        { icon: "sparkles", title: "申请优势", highlight: "录取路径清晰", text: "多数项目录取标准透明，开学季灵活，适合用均分、语言、专业背景做可控规划。" },
        { icon: "trending", title: "回国就业", highlight: "实用型认可", text: "澳洲学历在商科、会计、数据、教育、工程方向认可稳定，回国就业更看重实习、证书和英语沟通能力。" }
      ]
    },
    work: detailDefaults.work
  },
  UK: {
    study: {
      headline: "英国适合追求效率、名校密度和硕士快速提升的学生。",
      intro: "英国一年制硕士节奏快，名校密度高，特别适合希望在较短周期内完成学历升级和职业转向的人群。",
      cards: [
        { icon: "users", title: "留学生画像", highlight: "硕士申请热门", text: "中国学生集中在商科、传媒、教育、法律、计算机、数据等方向，申请节奏快，材料质量非常关键。" },
        { icon: "sparkles", title: "申请优势", highlight: "时间效率高", text: "一年制硕士节省时间成本，学校梯度明确，适合用背景评估快速制定冲刺、稳妥和保底组合。" },
        { icon: "trending", title: "回国就业", highlight: "名校辨识度高", text: "英国院校在金融、咨询、传媒、教育、互联网运营等方向辨识度强，回国时更需要补足实习和项目成果。" }
      ]
    },
    work: detailDefaults.work
  },
  FR: {
    study: {
      headline: "法国适合重视艺术、商科、工程和生活体验的学生。",
      intro: "法国拥有高商、工程师学院、公立大学和艺术院校体系，适合希望兼顾教育质量、文化体验和欧洲视野的学生。",
      cards: [
        { icon: "users", title: "留学生画像", highlight: "艺术与商科热门", text: "中国学生常选择奢侈品管理、艺术设计、商科、工程、语言文化等方向，法语能力会显著提升生活和就业空间。" },
        { icon: "sparkles", title: "申请优势", highlight: "教育资源丰富", text: "法国高商和艺术设计资源强，部分项目有英语授课，适合想进入品牌、时尚、文化、管理方向的学生。" },
        { icon: "trending", title: "回国就业", highlight: "品牌行业加分", text: "法国背景在奢侈品、时尚、艺术、文化传播、国际贸易等方向有明显标签感，回国就业要突出作品集和实习。" }
      ]
    },
    work: detailDefaults.work
  },
  IT: {
    study: {
      headline: "意大利适合艺术、设计、建筑、音乐和人文方向学生。",
      intro: "意大利的优势在于艺术底蕴、设计产业和相对有吸引力的学习成本，适合有作品、审美和专业表达的学生。",
      cards: [
        { icon: "users", title: "留学生画像", highlight: "艺术设计集中", text: "中国学生常申请美院、音乐学院、设计、建筑、时尚管理等方向，作品集和语言准备决定竞争力。" },
        { icon: "sparkles", title: "申请优势", highlight: "专业标签强", text: "设计、艺术、建筑、音乐等领域有天然品牌感，适合把个人作品和职业方向结合起来规划。" },
        { icon: "trending", title: "回国就业", highlight: "作品集是核心", text: "回国进入设计、品牌、建筑、艺术教育等方向时，院校背景之外，更要靠作品集、项目经历和审美表达。" }
      ]
    },
    work: detailDefaults.work
  },
  DE: {
    study: {
      headline: "德国适合重视工程、制造、理工和长期职业发展的学生。",
      intro: "德国院校和产业联系紧密，适合理工科、机械、汽车、电子、计算机、管理等方向，规划重点是语言、课程匹配和长期职业路径。",
      cards: [
        { icon: "users", title: "留学生画像", highlight: "理工导向强", text: "中国学生在工程、机械、车辆、自动化、计算机、管理类方向较多，德语能力会显著影响实习和就业。" },
        { icon: "sparkles", title: "申请优势", highlight: "产业连接强", text: "德国制造、汽车、工程和应用科学体系成熟，适合想把专业学习和产业实践结合的学生。" },
        { icon: "trending", title: "回国就业", highlight: "工程标签明显", text: "德国背景在汽车、制造、工程、供应链、工业软件等方向认可度较强，回国就业要突出项目和技术能力。" }
      ]
    },
    work: detailDefaults.work
  },
  ES: {
    study: {
      headline: "西班牙适合商科、旅游、语言、人文、艺术和体育管理方向。",
      intro: "西班牙生活氛围开放，学习成本相对友好，适合希望结合语言、文化、商科和欧洲体验的学生。",
      cards: [
        { icon: "users", title: "留学生画像", highlight: "语言与商科并重", text: "中国学生常选择商科、旅游管理、语言文化、艺术、人文、体育管理等方向，西语能力会带来长期优势。" },
        { icon: "sparkles", title: "申请优势", highlight: "成本友好", text: "相比部分热门国家，西班牙学习和生活成本更有吸引力，适合预算敏感但仍希望获得欧洲学历体验的学生。" },
        { icon: "trending", title: "回国就业", highlight: "西语是差异化", text: "回国在外贸、跨境、电商、旅游、教育、品牌市场等方向，西语和跨文化经历会形成差异化标签。" }
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
                <p className="mt-3 inline-flex items-center rounded-full bg-white/16 px-3 py-1 text-xs font-medium text-white/88 backdrop-blur">点击查看留学 / 务工路径</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && activeDetail ? (
          <motion.div className="fixed inset-0 z-[10000] overflow-y-auto bg-[#050505]/72 p-4 backdrop-blur-xl md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="mx-auto min-h-[82vh] max-w-5xl overflow-hidden rounded-[34px] border border-white/20 bg-[#F5F5F7] shadow-[0_40px_120px_rgba(0,0,0,0.36)]" initial={{ opacity: 0, scale: 0.92, y: 34 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 18 }} transition={{ duration: 0.38, ease: "easeOut" }}>
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
                    <p className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-medium text-white"><Sparkles className="size-3.5" /> {tab === "study" ? "留学规划重点" : "海外务工重点"}</p>
                    <h4 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-[#0A0A0A] md:text-4xl">{activeDetail.headline}</h4>
                    <p className="mt-4 text-sm leading-7 text-[#6B7280] md:text-base">{activeDetail.intro}</p>
                  </div>

                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    {activeDetail.cards.map((card, index) => (
                      <motion.div key={card.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06, duration: 0.28 }} className="group rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-[#0A0A0A] text-white transition duration-300 group-hover:scale-110">
                          {iconFor(card.icon)}
                        </div>
                        <h5 className="mt-4 text-base font-semibold tracking-[-0.03em] text-[#0A0A0A]">{card.title}</h5>
                        <motion.p className="mt-3 inline-flex rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-semibold text-[#0A0A0A]" animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 10px 26px rgba(0,0,0,0.10)", "0 0 0 rgba(0,0,0,0)"] }} transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.2 }}>
                          {card.highlight}
                        </motion.p>
                        <p className="mt-4 text-sm leading-7 text-[#0A0A0A]/72">{card.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-[24px] border border-[#E5E7EB] bg-white p-5 text-sm leading-7 text-[#6B7280]"><strong className="text-[#0A0A0A]">提醒：</strong> 页面内容用于前期方向了解，具体申请条件、岗位收入、签证材料和雇佣要求，需要结合个人背景、城市、学校、雇主和当年政策做一对一评估。</div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
}
