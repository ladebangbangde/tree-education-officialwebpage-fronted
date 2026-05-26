export const navItems = [
  { label: "首页", href: "#home" },
  { label: "留学服务", href: "#services" },
  { label: "国家/地区", href: "#countries" },
  { label: "成功案例", href: "#offers" },
  { label: "关于我们", href: "#consultants" }
];

export const heroImage = "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85";

export const whyUsItems = [
  { icon: "landmark", title: "名校申请经验", description: "覆盖英美澳加日与欧洲热门院校申请路径。" },
  { icon: "trending", title: "高录取率", description: "以数据与策略提升定位、材料与递交确定性。" },
  { icon: "users", title: "专属顾问团队", description: "规划、文书、申请与签证多角色协同陪伴。" },
  { icon: "scan", title: "全程透明", description: "关键节点、材料进度与申请结果实时同步。" },
  { icon: "sparkles", title: "后续支持", description: "入学、住宿、行前与职业发展持续支持。" }
];

export const services = [
  { icon: "route", title: "留学规划", description: "建立时间线与目标路径" },
  { icon: "target", title: "选校定位", description: "匹配梯度院校与项目" },
  { icon: "pen", title: "文书制作", description: "挖掘个人叙事与亮点" },
  { icon: "send", title: "申请递交", description: "把控材料与节点进度" },
  { icon: "badge", title: "签证服务", description: "材料审核与面签辅导" },
  { icon: "plane", title: "行前指导", description: "住宿、注册与落地事项" }
];

export const countries = [
  { code: "US", name: "美国", english: "United States", icon: "🇺🇸", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1400&q=85" },
  { code: "AU", name: "澳大利亚", english: "Australia", icon: "🇦🇺", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=85" },
  { code: "UK", name: "英国", english: "United Kingdom", icon: "🇬🇧", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85" },
  { code: "FR", name: "法国", english: "France", icon: "🇫🇷", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85" },
  { code: "IT", name: "意大利", english: "Italy", icon: "🇮🇹", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1400&q=85" },
  { code: "DE", name: "德国", english: "Germany", icon: "🇩🇪", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=85" },
  { code: "ES", name: "西班牙", english: "Spain", icon: "🇪🇸", image: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1400&q=85" }
];

export type ShowcaseCase = {
  tag: string;
  student: string;
  background: string;
  school: string;
  chinese: string;
  rankLabel?: string;
  rank: string;
  programLabel?: string;
  program: string;
  result: string;
  strategy: string;
  detail: string;
  status: string;
  highlights?: string[];
};

export const offers: ShowcaseCase[] = [
  { tag: "双非逆袭", student: "林同学", background: "双非财经类 · 均分82 · 两段普通市场实习", school: "University of Manchester", chinese: "曼彻斯特大学", rankLabel: "院校亮点", rank: "QS Top 35", programLabel: "录取方向", program: "MSc Marketing", result: "从只敢申QS100，到拿下曼大商科Offer", strategy: "把零散实习重构成品牌增长、用户洞察与数据复盘的商业故事线。", detail: "我们重新拆解实习内容，把社媒投放、用户访谈和销售数据复盘串成完整增长案例，最终材料呈现出清晰的商业判断力。", status: "Offer", highlights: ["重构2段实习", "文书主线升级", "申请梯度上移"] },
  { tag: "低GPA突破", student: "陈同学", background: "三本院校 · GPA 3.1 · 有家族企业经历", school: "University of Sydney", chinese: "悉尼大学", rankLabel: "院校亮点", rank: "澳洲八大", programLabel: "录取方向", program: "Master of Commerce", result: "低起点背景，也能进入澳洲八大商科", strategy: "弱化单一分数短板，强化课程匹配、商业场景和未来职业规划。", detail: "把家族企业运营经历拆成供应链、客户维护、财务记录三个模块，再结合本科课程证明商科基础。", status: "Offer", highlights: ["低GPA解释策略", "家族企业经历提炼", "职业目标闭环"] },
  { tag: "跨专业申请", student: "王同学", background: "文科背景 · 编程基础弱 · 想转数据分析", school: "University of Glasgow", chinese: "格拉斯哥大学", rankLabel: "院校亮点", rank: "QS Top 80", programLabel: "录取方向", program: "MSc Data Analytics", result: "文科生转数据方向，不靠空喊热爱也能讲通", strategy: "用可验证项目、补课计划和职业场景证明转专业可行性。", detail: "把论文研究里的定性分析转化为问题定义、数据整理、趋势观察和结论表达的方法迁移。", status: "Offer", highlights: ["跨专业逻辑搭建", "项目经历补强", "技能路径可验证"] },
  { tag: "大龄重启", student: "赵同学", background: "工作5年 · 语言一般 · 想转教育管理", school: "University of Leeds", chinese: "利兹大学", rankLabel: "院校亮点", rank: "英国罗素集团", programLabel: "录取方向", program: "MA Education", result: "工作多年后重启申请，把年龄变成优势", strategy: "把工作年限转化为管理经验、沟通能力和长期职业稳定性。", detail: "把培训新人、跨部门协调和项目推进经验自然连接到教育管理，突出更成熟的职业目标。", status: "Offer", highlights: ["工作经历转优势", "教育管理叙事", "时间线重新设计"] }
];

export const workCases: ShowcaseCase[] = [
  { tag: "日本就业", student: "刘同学", background: "中专学历 · 餐饮经验3年 · 日语零基础起步", school: "日本 · 关西地区", chinese: "餐饮服务岗位", rankLabel: "目的地", rank: "日本关西", programLabel: "岗位方向", program: "餐饮服务 / 后厨协助", result: "从本地餐饮店，到海外餐饮岗位面试更有底气", strategy: "先做岗位匹配，再补语言面试和工作场景表达。", detail: "把餐饮经验拆成备餐、出餐、库存、顾客沟通四个可迁移能力。", status: "面试推进", highlights: ["岗位定位", "日语面试辅导", "材料表达优化"] },
  { tag: "新加坡服务", student: "黄同学", background: "大专 · 酒店前台2年 · 英语基础一般", school: "新加坡", chinese: "酒店与客户服务岗位", rankLabel: "目的地", rank: "新加坡", programLabel: "岗位方向", program: "酒店前台 / 客户服务", result: "把普通酒店前台经历，讲成海外服务岗位竞争力", strategy: "强化服务流程、投诉处理和英文场景表达。", detail: "把接待、入住、房态沟通和订单核对改造成更具体的服务能力。", status: "复试准备", highlights: ["英文场景训练", "简历重写", "服务能力提炼"] },
  { tag: "澳洲技能", student: "周同学", background: "技校 · 汽修经验4年 · 想提升技术路径", school: "澳大利亚", chinese: "汽修与技术岗位路径", rankLabel: "目的地", rank: "澳洲", programLabel: "岗位方向", program: "汽修助理 / 技术提升路径", result: "把汽修经验整理成海外雇主看得懂的技能档案", strategy: "用工具、车型、维修流程和安全规范证明真实动手能力。", detail: "按发动机维护、刹车系统、轮胎定位、故障初筛和车间安全规范重新整理经验。", status: "材料评估", highlights: ["技能清单梳理", "英文技术简历", "路径风险评估"] },
  { tag: "欧洲基础岗", student: "马同学", background: "高中 · 工厂流水线经验5年 · 追求稳定路径", school: "欧洲方向", chinese: "仓储与生产辅助岗位", rankLabel: "目的地", rank: "欧洲方向", programLabel: "岗位方向", program: "仓储 / 包装 / 生产辅助", result: "没有高学历，也能把稳定性和执行力讲清楚", strategy: "突出出勤稳定、体力适应、现场纪律和长期工作意愿。", detail: "把5年工厂经验转化为岗位关心的稳定性、排班适应、安全规则和现场执行力。", status: "岗位匹配", highlights: ["岗位筛选", "稳定性表达", "面试问答训练"] }
];

export const partners = [
  { name: "University of Manchester", english: "曼彻斯特大学", rank: "35", logo: "https://logo.clearbit.com/manchester.ac.uk", intro: "英国罗素集团成员，商科、工程与计算机方向热门。" },
  { name: "University of Sydney", english: "悉尼大学", rank: "19", logo: "https://logo.clearbit.com/sydney.edu.au", intro: "澳洲八大代表院校，商科、数据、教育和工程方向稳定。" },
  { name: "University of Glasgow", english: "格拉斯哥大学", rank: "78", logo: "https://logo.clearbit.com/gla.ac.uk", intro: "英国老牌名校，适合商科、数据、人文与传媒方向规划。" },
  { name: "University of Leeds", english: "利兹大学", rank: "75", logo: "https://logo.clearbit.com/leeds.ac.uk", intro: "英国罗素集团院校，教育、传媒、商科和工程方向选择丰富。" },
  { name: "Monash University", english: "蒙纳士大学", rank: "42", logo: "https://logo.clearbit.com/monash.edu", intro: "澳洲八大之一，适合商科、IT、工程、教育和健康科学方向。" },
  { name: "University of Bristol", english: "布里斯托大学", rank: "55", logo: "https://logo.clearbit.com/bristol.ac.uk", intro: "英国研究型名校，工程、计算机、管理与社会科学方向实力突出。" }
];

export const testimonials = [
  { student: "林同学", result: "曼彻斯特大学 Offer", quote: "原来普通经历也能写出申请优势。", detail: "顾问不是简单帮我润色，而是重新拆解经历，把每段实习和项目都变成有逻辑的申请材料。" },
  { student: "陈同学", result: "悉尼大学 Offer", quote: "低GPA不是终点，关键是解释和策略。", detail: "我最担心成绩和院校背景，但方案把我的商业经历讲清楚了，最后拿到了很满意的结果。" },
  { student: "王同学", result: "格拉斯哥大学 Offer", quote: "跨专业终于讲得通了。", detail: "从文科转数据最难的是说服学校，我的项目和补课计划被梳理得很清晰。" }
];

export const faqs = [
  { question: "什么时候开始准备留学比较合适？", answer: "建议提前 6-12 个月开始准备，热门国家和专业建议更早规划语言、实习、文书和递交时间线。" },
  { question: "成绩一般还有机会申请好学校吗？", answer: "可以，需要结合院校背景、均分、语言、实习、科研、作品集和专业匹配做整体评估。" },
  { question: "可以同时申请多个国家吗？", answer: "可以，但不同国家材料逻辑和时间线不同，需要提前做优先级和预算规划。" }
];

export const footerColumns = [
  { title: "服务", links: ["留学规划", "选校定位", "文书制作", "签证辅导"] },
  { title: "目的地", links: ["英国", "美国", "澳大利亚", "法国", "德国", "意大利", "西班牙"] },
  { title: "关于", links: ["顾问团队", "成功案例", "联系我们", "隐私政策"] }
];
