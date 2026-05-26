"use client";

import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { ArrowUpRight, Check, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const features = ["热门地区精准匹配", "顾问1对1沟通", "预算方案建议", "专属留学路径"];
const chinaPhonePattern = /^1[3-9]\d{9}$/;

const fallbackRegionOptions = [
  { label: "英国", value: "UK" },
  { label: "美国", value: "US" },
  { label: "欧洲", value: "EUROPE" },
  { label: "澳洲", value: "AUSTRALIA" },
  { label: "其他区域", value: "OTHER" }
];

const educationOptions = [
  "高中在读",
  "高中毕业",
  "大专在读",
  "大专毕业",
  "本科在读",
  "本科毕业",
  "硕士在读",
  "硕士毕业",
  "博士在读",
  "博士毕业",
  "其他"
].map((item) => ({ label: item, value: item }));

const provinceCityOptions = [
  { province: "北京", cities: ["北京"] },
  { province: "上海", cities: ["上海"] },
  { province: "天津", cities: ["天津"] },
  { province: "重庆", cities: ["重庆"] },
  { province: "福建", cities: ["福州", "厦门", "泉州", "漳州", "莆田", "三明", "南平", "龙岩", "宁德"] },
  { province: "广东", cities: ["广州", "深圳", "珠海", "佛山", "东莞", "中山", "惠州", "汕头", "江门", "湛江"] },
  { province: "浙江", cities: ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "台州", "舟山", "丽水"] },
  { province: "江苏", cities: ["南京", "苏州", "无锡", "常州", "南通", "扬州", "镇江", "徐州", "盐城", "泰州"] },
  { province: "山东", cities: ["济南", "青岛", "烟台", "潍坊", "威海", "临沂", "淄博", "济宁", "泰安", "日照"] },
  { province: "河南", cities: ["郑州", "洛阳", "开封", "许昌", "新乡", "南阳", "商丘", "安阳", "焦作"] },
  { province: "湖北", cities: ["武汉", "宜昌", "襄阳", "荆州", "黄石", "十堰", "孝感", "黄冈"] },
  { province: "湖南", cities: ["长沙", "株洲", "湘潭", "衡阳", "岳阳", "常德", "益阳", "郴州"] },
  { province: "四川", cities: ["成都", "绵阳", "德阳", "宜宾", "泸州", "南充", "乐山", "眉山"] },
  { province: "陕西", cities: ["西安", "咸阳", "宝鸡", "渭南", "延安", "汉中", "榆林"] },
  { province: "辽宁", cities: ["沈阳", "大连", "鞍山", "抚顺", "锦州", "营口", "丹东"] },
  { province: "吉林", cities: ["长春", "吉林", "四平", "延边", "通化"] },
  { province: "黑龙江", cities: ["哈尔滨", "齐齐哈尔", "大庆", "牡丹江", "佳木斯"] },
  { province: "河北", cities: ["石家庄", "唐山", "保定", "秦皇岛", "邯郸", "廊坊"] },
  { province: "山西", cities: ["太原", "大同", "临汾", "运城", "晋中", "长治"] },
  { province: "安徽", cities: ["合肥", "芜湖", "蚌埠", "阜阳", "安庆", "马鞍山"] },
  { province: "江西", cities: ["南昌", "赣州", "九江", "上饶", "宜春", "景德镇"] },
  { province: "广西", cities: ["南宁", "柳州", "桂林", "北海", "玉林", "梧州"] },
  { province: "云南", cities: ["昆明", "大理", "丽江", "曲靖", "玉溪", "红河"] },
  { province: "贵州", cities: ["贵阳", "遵义", "六盘水", "安顺", "毕节", "黔南"] },
  { province: "海南", cities: ["海口", "三亚", "儋州", "琼海", "文昌"] },
  { province: "内蒙古", cities: ["呼和浩特", "包头", "赤峰", "鄂尔多斯", "通辽"] },
  { province: "新疆", cities: ["乌鲁木齐", "克拉玛依", "喀什", "伊犁", "昌吉"] },
  { province: "西藏", cities: ["拉萨", "日喀则", "林芝", "昌都"] },
  { province: "宁夏", cities: ["银川", "石嘴山", "吴忠", "固原"] },
  { province: "青海", cities: ["西宁", "海东", "海西", "海南州"] },
  { province: "甘肃", cities: ["兰州", "天水", "酒泉", "张掖", "庆阳"] },
  { province: "港澳台", cities: ["香港", "澳门", "台北", "高雄", "台中"] },
  { province: "海外", cities: ["海外城市"] }
];

const provinceOptions = provinceCityOptions.map((item) => ({ label: item.province, value: item.province }));
const budgetOptions = ["5万-10万", "10万-15万", "15万-20万", "20万-30万", "30万-40万", "40万-50万", "50万以上"];

type RegionOption = { label: string; value: string };
type AssignedConsultant = { name?: string; publicTitle?: string; publicBio?: string; qrUrl?: string; regionName?: string };

type LeadForm = {
  name: string;
  age: string;
  education: string;
  province: string;
  city: string;
  phone: string;
  wechat: string;
  intentionRegionCode: string;
  budget: string;
  remark: string;
};

const initialForm: LeadForm = {
  name: "",
  age: "",
  education: "",
  province: "",
  city: "",
  phone: "",
  wechat: "",
  intentionRegionCode: "",
  budget: "",
  remark: ""
};

function getApiMessage(data: unknown) {
  if (data && typeof data === "object" && "message" in data && typeof (data as { message?: unknown }).message === "string") {
    return (data as { message: string }).message;
  }
  return "";
}

function unwrapRegionOptions(payload: unknown): RegionOption[] {
  const data = payload && typeof payload === "object" && "data" in payload ? (payload as { data?: unknown }).data : payload;
  if (!Array.isArray(data)) return [];
  const options = data
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const row = item as { code?: unknown; name?: unknown };
      const code = typeof row.code === "string" ? row.code.trim() : "";
      const name = typeof row.name === "string" ? row.name.trim() : "";
      if (!code || !name) return null;
      return { label: code === "OTHER" ? "其他区域" : name, value: code };
    })
    .filter(Boolean) as RegionOption[];
  return options.some((item) => item.value === "OTHER") ? options : [...options, { label: "其他区域", value: "OTHER" }];
}

function unwrapAssignedConsultant(payload: unknown): AssignedConsultant | null {
  const data = payload && typeof payload === "object" && "data" in payload ? (payload as { data?: unknown }).data : payload;
  if (!data || typeof data !== "object") return null;
  const row = data as { assignedConsultant?: unknown };
  return row.assignedConsultant && typeof row.assignedConsultant === "object" ? row.assignedConsultant as AssignedConsultant : null;
}

export function AiEvaluationSection() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [regionOptions, setRegionOptions] = useState<RegionOption[]>(fallbackRegionOptions);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [assignedConsultant, setAssignedConsultant] = useState<AssignedConsultant | null>(null);

  const selectedRegion = useMemo(
    () => regionOptions.find((item) => item.value === form.intentionRegionCode),
    [form.intentionRegionCode, regionOptions]
  );

  const cityOptions = useMemo(() => {
    const matched = provinceCityOptions.find((item) => item.province === form.province);
    return (matched?.cities || []).map((city) => ({ label: city, value: city }));
  }, [form.province]);

  const requiredReady = useMemo(
    () => Boolean(form.name.trim() && form.age.trim() && form.education.trim() && form.province.trim() && form.city.trim() && form.phone.trim() && form.intentionRegionCode.trim() && form.budget.trim()),
    [form]
  );

  useEffect(() => {
    if (!orbRef.current) return;
    const tween = gsap.to(orbRef.current, { rotate: 360, duration: 38, repeat: -1, ease: "none" });
    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/public/consultant-regions", { cache: "no-store" })
      .then((response) => response.json())
      .then((payload) => {
        const options = unwrapRegionOptions(payload);
        if (!cancelled && options.length) setRegionOptions(options);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  const updateForm = (key: keyof LeadForm, value: string) => {
    setForm((current) => {
      if (key === "province") return { ...current, province: value, city: "" };
      return { ...current, [key]: value };
    });
    setMessage("");
    setAssignedConsultant(null);
    if (key === "phone") {
      const cleanPhone = value.trim();
      setPhoneError(cleanPhone && !chinaPhonePattern.test(cleanPhone) ? "请输入正确的中国大陆手机号，例如 13812345678" : "");
    }
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!requiredReady) {
      setMessage("请先完整填写必填信息，我们才能为你安排合适的顾问。微信号可选填。");
      return;
    }
    if (!chinaPhonePattern.test(form.phone.trim())) {
      setPhoneError("请输入正确的中国大陆手机号，例如 13812345678");
      setMessage("手机号格式不正确，请检查后再提交。");
      return;
    }

    setSubmitting(true);
    setMessage("");
    setAssignedConsultant(null);

    const payload = {
      name: form.name.trim(),
      age: form.age.trim(),
      education: form.education.trim(),
      city: `${form.province.trim()} ${form.city.trim()}`.trim(),
      phone: form.phone.trim(),
      wechat: form.wechat.trim(),
      destination: selectedRegion?.label || form.intentionRegionCode,
      intentionRegionCode: form.intentionRegionCode,
      intentionRegionName: selectedRegion?.label || form.intentionRegionCode,
      budget: form.budget,
      remark: form.remark.trim(),
      source: "official_website_home_consultation"
    };

    try {
      const response = await fetch("/api/official/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(getApiMessage(data) || "线索提交失败，请稍后重试");
      }

      const consultant = unwrapAssignedConsultant(data);
      setAssignedConsultant(consultant);
      setMessage(consultant?.qrUrl ? "已为你匹配专属顾问，请扫码添加企业微信。" : "已收到你的咨询信息，吴桐树顾问会尽快联系你。");
      setForm(initialForm);
      setPhoneError("");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "线索提交失败，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <motion.section
        id="consultation"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="noise orb-grid relative overflow-hidden rounded-[28px] bg-[#050505] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-10"
      >
        <div ref={orbRef} className="absolute -right-24 -top-24 size-72 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_35%,rgba(96,165,250,0.7),rgba(255,255,255,0.12)_28%,rgba(5,5,5,0)_62%)] blur-[0.2px]" />
        <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />

        <div className="relative max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-blue-100">快速咨询</p>
          <h2 className="text-2xl font-semibold leading-tight tracking-[-0.04em] md:text-3xl xl:text-4xl">1分钟详细咨询</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-base">告诉我们姓名、年龄、学历、所在地区、电话、意向区域和预算，我们会为你提供更贴合的留学规划建议。</p>

          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => setOpen(true)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#050505]">
            立即开始咨询 <ArrowUpRight className="size-4" />
          </motion.button>
        </div>

        <div className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 backdrop-blur">
              <Check className="size-4 text-blue-200" />
              {feature}
            </div>
          ))}
        </div>
      </motion.section>

      <AnimatePresence>
        {open ? (
          <div className="fixed inset-0 z-[100000] h-[100dvh] w-screen overflow-y-auto bg-black/72 p-4 backdrop-blur-2xl" onClick={() => setOpen(false)}>
            <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.14),rgba(0,0,0,0)_32%),linear-gradient(180deg,rgba(15,23,42,0.18),rgba(0,0,0,0.38))]" />
            <div className="flex min-h-full items-center justify-center py-4">
              <motion.form
                initial={{ opacity: 0, scale: 0.95, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 14 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                onSubmit={submitLead}
                className="relative w-full max-w-[760px] overflow-hidden rounded-[28px] border border-white/10 bg-[#090909] p-5 text-white shadow-[0_40px_120px_rgba(0,0,0,0.5)] md:p-6"
              >
                <button type="button" onClick={() => setOpen(false)} className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10">
                  <X className="size-4" />
                </button>

                <div className="mx-auto max-w-[660px] text-center">
                  <p className="text-xs tracking-[0.24em] text-white/45">CONSULTATION</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] md:text-3xl">开启你的留学规划</h3>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/58">填写基础信息后，我们会根据目标地区、预算和当前背景，为你安排更合适的顾问。</p>
                </div>

                <div className="mx-auto mt-6 grid max-w-[660px] gap-3 md:grid-cols-2">
                  <FormInput label="姓名" value={form.name} onChange={(value) => updateForm("name", value)} required />
                  <FormInput label="年龄" value={form.age} onChange={(value) => updateForm("age", value)} required />
                  <FormSelect label="学历" value={form.education} onChange={(value) => updateForm("education", value)} options={educationOptions} required />
                  <FormSelect label="所在省份" value={form.province} onChange={(value) => updateForm("province", value)} options={provinceOptions} required />
                  <FormSelect label="所在城市" value={form.city} onChange={(value) => updateForm("city", value)} options={cityOptions} required disabled={!form.province} />
                  <FormInput label="电话号码" value={form.phone} onChange={(value) => updateForm("phone", value)} required inputMode="tel" error={phoneError} />
                  <div>
                    <label className="mb-2 block text-xs font-medium text-white/70">微信号</label>
                    <input value={form.wechat} onChange={(event) => updateForm("wechat", event.target.value)} placeholder="选填，建议留下微信" className="h-11 w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition focus:border-blue-400/60 focus:bg-white/[0.06]" />
                    <motion.p initial={{ opacity: 0.55 }} animate={{ opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.2, repeat: Infinity }} className="mt-1.5 text-[11px] leading-4 text-blue-100/80">温馨建议：留下微信更方便发送选校清单。</motion.p>
                  </div>
                  <FormSelect label="意向区域" value={form.intentionRegionCode} onChange={(value) => updateForm("intentionRegionCode", value)} options={regionOptions} required />
                  <FormSelect label="留学预算" value={form.budget} onChange={(value) => updateForm("budget", value)} options={budgetOptions.map((item) => ({ label: item, value: item }))} required />
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-xs font-medium text-white/70">备注</label>
                    <textarea rows={2} value={form.remark} onChange={(event) => updateForm("remark", event.target.value)} placeholder="可以补充目标专业、目前成绩、语言情况或其他顾虑" className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400/60 focus:bg-white/[0.06]" />
                  </div>
                </div>

                {(assignedConsultant?.qrUrl || message) ? <div className="mx-auto mt-4 max-w-[660px] rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-sm leading-6 text-white/72">
                  {message ? <p>{message}</p> : null}
                  {assignedConsultant?.qrUrl ? <div className="mt-4 grid gap-4 rounded-2xl bg-white/[0.04] p-4 sm:grid-cols-[120px_1fr] sm:text-left">
                    <div className="relative mx-auto size-[120px] overflow-hidden rounded-2xl bg-white p-2 sm:mx-0">
                      <Image src={assignedConsultant.qrUrl} alt={`${assignedConsultant.name || "顾问"} 企业微信二维码`} fill unoptimized className="object-contain p-2" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-base font-semibold text-white">{assignedConsultant.name || "专属顾问"}</p>
                      <p className="mt-1 text-xs text-blue-100/80">{assignedConsultant.publicTitle || `${assignedConsultant.regionName || "留学"}规划顾问`}</p>
                      <p className="mt-2 text-xs leading-5 text-white/58">请扫码添加企业微信，顾问会根据你的信息继续沟通方案。</p>
                    </div>
                  </div> : null}
                </div> : null}

                <button type="submit" disabled={submitting} className="mx-auto mt-5 flex h-14 w-full max-w-[360px] items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-[#050505] shadow-[0_0_44px_rgba(255,255,255,0.18)] transition hover:scale-[1.015] disabled:cursor-not-allowed disabled:opacity-60">
                  {submitting ? "提交中..." : "提交咨询信息"}
                </button>
              </motion.form>
            </div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

type FormInputProps = { label: string; value: string; required?: boolean; inputMode?: "tel" | "text"; error?: string; onChange: (value: string) => void };

function FormInput({ label, value, required, inputMode, error, onChange }: FormInputProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-white/70">{label}{required ? " *" : ""}</label>
      <input required={required} inputMode={inputMode || "text"} value={value} onChange={(event) => onChange(event.target.value)} placeholder={`请输入${label}`} className={`h-11 w-full rounded-2xl border bg-white/[0.035] px-4 text-sm text-white outline-none transition focus:bg-white/[0.06] ${error ? "border-red-400/70 focus:border-red-300" : "border-white/10 focus:border-blue-400/60"}`} />
      {error ? <p className="mt-1.5 text-[11px] leading-4 text-red-200">{error}</p> : null}
    </div>
  );
}

type FormSelectProps = { label: string; value: string; required?: boolean; disabled?: boolean; options: Array<{ label: string; value: string }>; onChange: (value: string) => void };

function FormSelect({ label, value, required, disabled, options, onChange }: FormSelectProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-white/70">{label}{required ? " *" : ""}</label>
      <select required={required} disabled={disabled} value={value} onChange={(event) => onChange(event.target.value)} className="h-11 w-full rounded-2xl border border-white/10 bg-[#151515] px-4 text-sm text-white outline-none transition focus:border-blue-400/60 focus:bg-[#171717] disabled:cursor-not-allowed disabled:opacity-45">
        <option value="">请选择{label}</option>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}
