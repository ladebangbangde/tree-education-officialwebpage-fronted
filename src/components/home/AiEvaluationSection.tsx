"use client";

import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight, Check, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const features = ["热门国家精准匹配", "顾问1对1沟通", "预算方案建议", "专属留学路径"];

const destinationOptions = [
  { label: "🔥 英国", value: "英国" },
  { label: "🔥 美国", value: "美国" },
  { label: "🔥 新加坡", value: "新加坡" },
  { label: "🔥 欧洲", value: "欧洲" },
  { label: "🔥 澳大利亚", value: "澳大利亚" },
  { label: "法国", value: "法国" },
  { label: "加拿大", value: "加拿大" },
  { label: "中国香港", value: "中国香港" },
  { label: "中国澳门", value: "中国澳门" },
  { label: "日本", value: "日本" },
  { label: "韩国", value: "韩国" },
  { label: "新西兰", value: "新西兰" },
  { label: "爱尔兰", value: "爱尔兰" },
  { label: "德国", value: "德国" },
  { label: "荷兰", value: "荷兰" },
  { label: "瑞士", value: "瑞士" },
  { label: "其他", value: "其他" }
];

const budgetOptions = [
  "2万-5万",
  "5万-10万",
  "10万-15万",
  "15万-20万",
  "20万-30万",
  "30万-40万",
  "40万-50万",
  "50万以上"
];

type LeadForm = {
  name: string;
  age: string;
  education: string;
  city: string;
  phone: string;
  wechat: string;
  destination: string;
  budget: string;
  remark: string;
};

const initialForm: LeadForm = {
  name: "",
  age: "",
  education: "",
  city: "",
  phone: "",
  wechat: "",
  destination: "",
  budget: "",
  remark: ""
};

export function AiEvaluationSection() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const requiredReady = useMemo(() => {
    return Boolean(
      form.name.trim() &&
        form.age.trim() &&
        form.education.trim() &&
        form.city.trim() &&
        form.phone.trim() &&
        form.destination.trim() &&
        form.budget.trim()
    );
  }, [form]);

  useEffect(() => {
    if (!orbRef.current) return;
    const tween = gsap.to(orbRef.current, { rotate: 360, duration: 38, repeat: -1, ease: "none" });
    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const updateForm = (key: keyof LeadForm, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setMessage("");
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!requiredReady) {
      setMessage("请先完整填写必填信息，我们才能为你安排合适的顾问。微信号可选填。");
      return;
    }

    setSubmitting(true);
    setMessage("");

    const payload = {
      name: form.name.trim(),
      age: form.age.trim(),
      education: form.education.trim(),
      city: form.city.trim(),
      phone: form.phone.trim(),
      wechat: form.wechat.trim(),
      destination: form.destination,
      budget: form.budget,
      remark: form.remark.trim(),
      source: "official_website_home_consultation"
    };

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_IOAS_API_BASE_URL || "";
      const response = await fetch(`${apiBaseUrl}/api/official/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("submit failed");
      }

      setMessage("已收到你的咨询信息，吴桐树顾问会尽快联系你。");
      setForm(initialForm);
    } catch {
      setMessage("当前暂未连接后台接口。表单结构已准备好，后端需要对齐 POST /api/official/leads。");
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
        <div
          ref={orbRef}
          className="absolute -right-24 -top-24 size-72 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_35%,rgba(96,165,250,0.7),rgba(255,255,255,0.12)_28%,rgba(5,5,5,0)_62%)] blur-[0.2px]"
        />

        <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />

        <div className="relative max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-blue-100">
            快速咨询
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.06em] md:text-6xl">
            1分钟快速咨询
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-base">
            告诉我们姓名、年龄、学历、所在城市、电话、意向国家/地区和预算，
            我们会为你提供更贴合的留学规划建议。
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#050505]"
          >
            立即开始咨询 <ArrowUpRight className="size-4" />
          </motion.button>
        </div>

        <div className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 backdrop-blur"
            >
              <Check className="size-4 text-blue-200" />
              {feature}
            </div>
          ))}
        </div>
      </motion.section>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-black/60 p-5 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.form
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              onSubmit={submitLead}
              className="relative my-8 w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
              >
                <X className="size-4" />
              </button>

              <p className="mb-4 text-sm tracking-[0.25em] text-white/45">
                PREMIUM CONSULTATION
              </p>

              <h3 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                开启你的留学规划
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                带 * 的字段为必填。微信号可以选填，但留下微信会更方便顾问发送选校建议和材料清单。
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <FormInput label="姓名" value={form.name} onChange={(value) => updateForm("name", value)} required />
                <FormInput label="年龄" value={form.age} onChange={(value) => updateForm("age", value)} required />
                <FormInput label="学历" value={form.education} onChange={(value) => updateForm("education", value)} required />
                <FormInput label="所在城市" value={form.city} onChange={(value) => updateForm("city", value)} required />
                <FormInput label="电话号码" value={form.phone} onChange={(value) => updateForm("phone", value)} required />

                <div>
                  <label className="mb-2 block text-sm text-white/70">微信号</label>
                  <input
                    value={form.wechat}
                    onChange={(event) => updateForm("wechat", event.target.value)}
                    placeholder="选填，建议留下微信"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition focus:border-blue-400/60 focus:bg-white/[0.05]"
                  />
                  <motion.p
                    initial={{ opacity: 0.55 }}
                    animate={{ opacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="mt-2 text-xs text-blue-100/80"
                  >
                    温馨建议：留下微信后，顾问可以更方便地发送选校清单与时间规划。
                  </motion.p>
                </div>

                <FormSelect
                  label="意向国家/地区"
                  value={form.destination}
                  onChange={(value) => updateForm("destination", value)}
                  options={destinationOptions}
                  required
                />

                <FormSelect
                  label="留学预算"
                  value={form.budget}
                  onChange={(value) => updateForm("budget", value)}
                  options={budgetOptions.map((item) => ({ label: item, value: item }))}
                  required
                />

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-white/70">备注</label>
                  <textarea
                    rows={5}
                    value={form.remark}
                    onChange={(event) => updateForm("remark", event.target.value)}
                    placeholder="可以补充你的目标专业、目前成绩、语言情况或其他顾虑"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition focus:border-blue-400/60 focus:bg-white/[0.05]"
                  />
                </div>
              </div>

              {message ? (
                <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white/72">
                  {message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-[#050505] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "提交中..." : "提交咨询信息"}
              </button>
            </motion.form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

type FormInputProps = {
  label: string;
  value: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function FormInput({ label, value, required, onChange }: FormInputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/70">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={`请输入${label}`}
        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition focus:border-blue-400/60 focus:bg-white/[0.05]"
      />
    </div>
  );
}

type FormSelectProps = {
  label: string;
  value: string;
  required?: boolean;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
};

function FormSelect({ label, value, required, options, onChange }: FormSelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/70">
        {label}
        {required ? " *" : ""}
      </label>
      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-14 w-full rounded-2xl border border-white/10 bg-[#151515] px-4 text-sm text-white outline-none transition focus:border-blue-400/60 focus:bg-[#171717]"
      >
        <option value="">请选择{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
