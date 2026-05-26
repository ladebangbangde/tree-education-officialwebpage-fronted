"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
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
    work: {
      headline: "美国务工更适合高技能、专业型和长期规划人群。",
      intro: "美国工作路径门槛高，强调身份、雇主、专业匹配和长期规划，不适合只追求短期现金收入的人。",
      cards: [
        { icon: "wallet", title: "月薪参考", highlight: "高上限", text: "技术、工程、护理、数据等岗位收入上限高，但城市、身份、学历和雇主差异很大，需要按个人背景评估。" },
        { icon: "home", title: "吃住条件", highlight: "成本较高", text: "大城市租金压力明显，生活成本高；如果是校内、实习或雇主项目，需要重点确认住宿和保险安排。" },
        { icon: "plane", title: "签证情况", highlight: "合规优先", text: "务工必须匹配合法身份和雇主流程，不能用旅游或短期访问身份从事非法工作。" }
      ]
    }
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
    work: {
      headline: "澳洲务工关注技能、语言和合规岗位匹配。",
      intro: "澳洲工作路径常见于服务业、护理、蓝领技术、农业、酒店和部分专业岗位，收入和生活成本都需要一起测算。",
      cards: [
        { icon: "wallet", title: "月薪参考", highlight: "时薪制常见", text: "服务、仓储、护理辅助、技术类岗位多按小时计算，实际月收入受工时、地区和雇主影响。" },
        { icon: "home", title: "吃住条件", highlight: "视岗位而定", text: "部分偏远地区或雇主项目可能提供住宿或住宿补贴，城市岗位通常需自理住宿。" },
        { icon: "plane", title: "签证情况", highlight: "路径要提前设计", text: "学生、毕业工签、技术评估和雇主担保等路径差异大，必须结合年龄、语言、职业清单和学历评估。" }
      ]
    }
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
    work: {
      headline: "英国务工更适合有学历路径或明确职业技能的人。",
      intro: "英国岗位环境规范，但签证和雇主资质要求明确。想长期留下，需要提前设计学习、毕业签和雇主路径。",
      cards: [
        { icon: "wallet", title: "月薪参考", highlight: "岗位差异大", text: "服务业、护理、技术、金融、IT岗位差异明显，伦敦收入更高但生活成本也更高。" },
        { icon: "home", title: "吃住条件", highlight: "住宿成本需重点评估", text: "英国多数岗位住宿自理，伦敦及热门城市租金压力明显，预算规划非常重要。" },
        { icon: "plane", title: "签证情况", highlight: "雇主资质关键", text: "长期工作通常需要符合签证类别和雇主资质要求，不能只看岗位薪资，还要看身份路径是否闭环。" }
      ]
    }
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
    work: {
      headline: "法国务工看重语言、合同类型和行业匹配。",
      intro: "法国工作生活品质强，但语言和合规要求不可忽视。适合有餐饮、酒店、护理、技术或品牌零售背景的人群做路径评估。",
      cards: [
        { icon: "wallet", title: "月薪参考", highlight: "稳定但不盲目夸大", text: "基础岗位收入通常与地区、行业、工时和合同相关，巴黎机会多但成本更高。" },
        { icon: "home", title: "吃住条件", highlight: "住宿通常自理", text: "大城市住宿紧张，雇主包住并不普遍，必须在出发前确认住宿、保险和通勤。" },
        { icon: "plane", title: "签证情况", highlight: "合同与身份绑定", text: "务工路径需要匹配合法签证、雇佣合同和当地规定，法语能力越强，选择面越大。" }
      ]
    }
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
    work: {
      headline: "意大利务工适合餐饮、制造、服装、护理和基础服务方向。",
      intro: "意大利机会更偏向区域和行业匹配，语言、合同稳定性和雇主可靠性是关键。",
      cards: [
        { icon: "wallet", title: "月薪参考", highlight: "因地区差异明显", text: "北部城市和产业区机会更多，收入受岗位、工时、语言和合法合同影响，不适合只看单一数字。" },
        { icon: "home", title: "吃住条件", highlight: "需提前确认", text: "餐饮、农业、工厂类岗位有时提供住宿或协助找房，但必须确认费用、条件和合同细节。" },
        { icon: "plane", title: "签证情况", highlight: "合规雇佣优先", text: "务工必须走合法签证和雇佣路径，不能依赖口头承诺，出发前要核对雇主、合同和保险。" }
      ]
    }
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
    work: {
      headline: "德国务工重点看职业资质、语言和长期稳定性。",
      intro: "德国对技能型、护理、工程和技术岗位有明确需求，但资质认证、语言和合同合规非常重要。",
      cards: [
        { icon: "wallet", title: "月薪参考", highlight: "技能越强越稳定", text: "护理、技工、工程、IT等岗位收入和发展空间更稳定，基础岗位则更依赖语言、工时和雇主条件。" },
        { icon: "home", title: "吃住条件", highlight: "部分项目可协助", text: "部分护理、技工或雇主项目会协助住宿，但不应默认包吃住，必须看合同和当地成本。" },
        { icon: "plane", title: "签证情况", highlight: "资质认证关键", text: "职业资格、语言证明、雇主合同和签证类别需要提前匹配，护理和技工路径尤其要重视认证周期。" }
      ]
    }
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
    work: {
      headline: "西班牙务工适合服务、餐饮、旅游、护理和基础岗位路径。",
      intro: "西班牙工作机会和地区、语言、行业高度相关。适合愿意学习西语、接受服务行业节奏的人群。",
      cards: [
        { icon: "wallet", title: "月薪参考", highlight: "看城市与工时", text: "旅游城市和服务行业机会较多，实际收入受季节、工时、语言和合同影响较大。" },
        { icon: "home", title: "吃住条件", highlight: "旺季岗位更灵活", text: "餐饮、酒店和旅游岗位有时会提供住宿或协助，但需要提前确认住宿费用和工作时长。" },
        { icon: "plane", title: "签证情况", highlight: "不能脱离合同", text: "务工需要合法身份、合同和保险安排；西语水平越好，雇主沟通和岗位选择空间越大。" }
      ]
    }
  }
};

function iconFor(type: string) {
  const cls = "size-4";
  const map: Record<string, JSX.Element> = {
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

  const activeDetail = useMemo(() => selected ? details[selected.code]?.[tab] : null, [selected, tab]);

  const openCountry = (country: Country) => {
    setSelected(country);
    setTab("study");
  };

  return (
    <motion.section
      id="countries"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <SectionHeader title="热门留学目的地" />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {countries.map((country, index) => (
          <motion.button
            type="button"
            onClick={() => openCountry(country)}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.985 }}
            key={country.name}
            className={`group relative min-h-[240px] overflow-hidden rounded-[20px] bg-white text-left shadow-[0_10px_30px_rgba(0,0,0,0.04)] outline-none ring-0 ${index === 0 ? "xl:col-span-2" : ""}`}
          >
            <Image
              src={country.image}
              alt={`${country.name} ${country.english} 地标城市`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover saturate-[0.78] contrast-[0.96] transition duration-700 group-hover:scale-105"
            />
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
        ))}
      </div>

      <AnimatePresence>
        {selected && activeDetail ? (
          <motion.div
            className="fixed inset-0 z-[10000] overflow-y-auto bg-[#050505]/72 p-4 backdrop-blur-xl md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-auto min-h-[82vh] max-w-5xl overflow-hidden rounded-[34px] border border-white/20 bg-[#F5F5F7] shadow-[0_40px_120px_rgba(0,0,0,0.36)]"
              initial={{ opacity: 0, scale: 0.92, y: 34 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
            >
              <div className="relative min-h-[280px] overflow-hidden bg-black p-6 text-white md:p-8">
                <Image src={selected.image} alt={`${selected.name}详情背景`} fill sizes="100vw" className="object-cover opacity-48" />
                <motion.div
                  className="absolute left-8 top-8 h-44 w-44 rounded-full bg-white/25 blur-3xl"
                  initial={{ scale: 0.2, opacity: 0 }}
                  animate={{ scale: 2.6, opacity: 0.55 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                />
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
                    <motion.div
                      className="absolute bottom-1.5 top-1.5 rounded-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                      initial={false}
                      animate={{ left: tab === "study" ? "6px" : "calc(50% + 0px)", width: "calc(50% - 6px)" }}
                      transition={{ type: "spring", stiffness: 360, damping: 34 }}
                    />
                    <button onClick={() => setTab("study")} className={`relative z-10 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${tab === "study" ? "text-[#0A0A0A]" : "text-white/78"}`}>
                      <GraduationCap className="size-4" /> 留学
                    </button>
                    <button onClick={() => setTab("work")} className={`relative z-10 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${tab === "work" ? "text-[#0A0A0A]" : "text-white/78"}`}>
                      <Building2 className="size-4" /> 务工
                    </button>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selected.code}-${tab}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                  className="p-6 md:p-8"
                >
                  <div className="max-w-3xl">
                    <p className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-medium text-white"><Sparkles className="size-3.5" /> {tab === "study" ? "留学规划重点" : "海外务工重点"}</p>
                    <h4 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-[#0A0A0A] md:text-4xl">{activeDetail.headline}</h4>
                    <p className="mt-4 text-sm leading-7 text-[#6B7280] md:text-base">{activeDetail.intro}</p>
                  </div>

                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    {activeDetail.cards.map((card, index) => (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06, duration: 0.28 }}
                        className="group rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                      >
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-[#0A0A0A] text-white transition duration-300 group-hover:scale-110">
                          {iconFor(card.icon)}
                        </div>
                        <h5 className="mt-4 text-base font-semibold tracking-[-0.03em] text-[#0A0A0A]">{card.title}</h5>
                        <motion.p
                          className="mt-3 inline-flex rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-semibold text-[#0A0A0A]"
                          animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 10px 26px rgba(0,0,0,0.10)", "0 0 0 rgba(0,0,0,0)"] }}
                          transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {card.highlight}
                        </motion.p>
                        <p className="mt-4 text-sm leading-7 text-[#0A0A0A]/72">{card.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-[24px] border border-[#E5E7EB] bg-white p-5 text-sm leading-7 text-[#6B7280]">
                    <strong className="text-[#0A0A0A]">提醒：</strong> 页面内容用于前期方向了解，具体申请条件、岗位收入、签证材料和雇佣要求，需要结合个人背景、城市、学校、雇主和当年政策做一对一评估。
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
}
