export const navItems = [
  { label: "首页", href: "#home" },
  { label: "留学服务", href: "#services" },
  { label: "国家/地区", href: "#countries" },
  { label: "成功案例", href: "#offers" },
  { label: "关于我们", href: "#consultants" }
];

export const heroImage = "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1600&q=90";

export const whyUsItems = [
  { icon: "landmark", title: "名校申请经验", description: "覆盖英美澳加日与欧洲热门院校申请路径。" },
  { icon: "trending", title: "高录取率", description: "以数据与策略提升定位、材料与递交确定性。" },
  { icon: "users", title: "专属顾问团队", description: "规划、文书、申请与签证多角色协同陪伴。" },
  { icon: "scan", title: "全程透明", description: "关键节点、材料进度与申请结果实时同步。" },
  { icon: "sparkles", title: "后续支持", description: "入学、住宿、行前与职业发展持续支持。" }
];

export const services = [
  { icon: "route", title: "出国规划", description: "建立出国目标与时间线" },
  { icon: "target", title: "目标定位", description: "匹配留学、工作或复合路径" },
  { icon: "pen", title: "材料制作", description: "整理个人背景与申请亮点" },
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
  { tag: "双非逆袭", student: "林同学", background: "双非财经类 · 均分82 · 两段普通市场实习", school: "University of Manchester", chinese: "曼彻斯特大学", rankLabel: "院校亮点", rank: "英国名校", programLabel: "录取方向", program: "MSc Marketing", result: "从只敢申普通院校，到拿下英国名校商科录取", strategy: "把零散实习重构成品牌增长、用户洞察与数据复盘的商业故事线。", detail: "我们重新拆解实习内容，把社媒投放、用户访谈和销售数据复盘串成完整增长案例，最终材料呈现出清晰的商业判断力。", status: "Offer", highlights: ["重构2段实习", "文书主线升级", "申请梯度上移"] },
  { tag: "低GPA突破", student: "陈同学", background: "三本院校 · GPA 3.1 · 有家族企业经历", school: "University of Sydney", chinese: "悉尼大学", rankLabel: "院校亮点", rank: "澳洲八大", programLabel: "录取方向", program: "Master of Commerce", result: "低起点背景，也能进入澳洲八大商科", strategy: "弱化单一分数短板，强化课程匹配、商业场景和未来职业规划。", detail: "把家族企业运营经历拆成供应链、客户维护、财务记录三个模块，再结合本科课程证明商科基础。", status: "Offer", highlights: ["低GPA解释策略", "家族企业经历提炼", "职业目标闭环"] },
  { tag: "跨专业申请", student: "王同学", background: "文科背景 · 编程基础弱 · 想转数据分析", school: "National University of Singapore", chinese: "新加坡国立大学", rankLabel: "院校亮点", rank: "亚洲名校", programLabel: "录取方向", program: "Data / Analytics", result: "文科生转数据方向，不靠空喊热爱也能讲通", strategy: "用可验证项目、补课计划和职业场景证明转专业可行性。", detail: "把论文研究里的定性分析转化为问题定义、数据整理、趋势观察和结论表达的方法迁移。", status: "Offer", highlights: ["跨专业逻辑搭建", "项目经历补强", "技能路径可验证"] },
  { tag: "高端冲刺", student: "赵同学", background: "985背景 · 科研项目 · 目标顶尖院校", school: "University of Oxford", chinese: "牛津大学", rankLabel: "院校亮点", rank: "英国顶尖", programLabel: "录取方向", program: "Social Science / Management", result: "高端申请更看重研究逻辑和长期叙事", strategy: "把课程、科研、实习和未来目标串成一条可信的学术成长线。", detail: "重点不是堆砌奖项，而是证明学生为什么适合这个项目，以及未来如何把专业训练转化为长期影响力。", status: "Offer", highlights: ["高端定位", "研究主线", "面试准备"] }
];

export const workCases: ShowcaseCase[] = [
  { tag: "日本就业", student: "刘同学", background: "中专学历 · 餐饮经验3年 · 日语零基础起步", school: "日本 · 关西地区", chinese: "餐饮服务岗位", rankLabel: "目的地", rank: "日本关西", programLabel: "岗位方向", program: "餐饮服务 / 后厨协助", result: "从本地餐饮店，到海外餐饮岗位面试更有底气", strategy: "先做岗位匹配，再补语言面试和工作场景表达。", detail: "把餐饮经验拆成备餐、出餐、库存、顾客沟通四个可迁移能力。", status: "面试推进", highlights: ["岗位定位", "日语面试辅导", "材料表达优化"] },
  { tag: "新加坡服务", student: "黄同学", background: "大专 · 酒店前台2年 · 英语基础一般", school: "新加坡", chinese: "酒店与客户服务岗位", rankLabel: "目的地", rank: "新加坡", programLabel: "岗位方向", program: "酒店前台 / 客户服务", result: "把普通酒店前台经历，讲成海外服务岗位竞争力", strategy: "强化服务流程、投诉处理和英文场景表达。", detail: "把接待、入住、房态沟通和订单核对改造成更具体的服务能力。", status: "复试准备", highlights: ["英文场景训练", "简历重写", "服务能力提炼"] },
  { tag: "澳洲技能", student: "周同学", background: "技校 · 汽修经验4年 · 想提升技术路径", school: "澳大利亚", chinese: "汽修与技术岗位路径", rankLabel: "目的地", rank: "澳洲", programLabel: "岗位方向", program: "汽修助理 / 技术提升路径", result: "把汽修经验整理成海外雇主看得懂的技能档案", strategy: "用工具、车型、维修流程和安全规范证明真实动手能力。", detail: "按发动机维护、刹车系统、轮胎定位、故障初筛和车间安全规范重新整理经验。", status: "材料评估", highlights: ["技能清单梳理", "英文技术简历", "路径风险评估"] },
  { tag: "欧洲基础岗", student: "马同学", background: "高中 · 工厂流水线经验5年 · 追求稳定路径", school: "欧洲方向", chinese: "仓储与生产辅助岗位", rankLabel: "目的地", rank: "欧洲方向", programLabel: "岗位方向", program: "仓储 / 包装 / 生产辅助", result: "没有高学历，也能把稳定性和执行力讲清楚", strategy: "突出出勤稳定、体力适应、现场纪律和长期工作意愿。", detail: "把5年工厂经验转化为岗位关心的稳定性、排班适应、安全规则和现场执行力。", status: "岗位匹配", highlights: ["岗位筛选", "稳定性表达", "面试问答训练"] }
];

export const partners = [
  { name: "University of Melbourne", english: "墨尔本大学", badge: "澳洲八大", rank: "澳洲名校", logo: "/pics/墨尔本大学.png", intro: "澳大利亚代表性研究型大学，适合商科、数据、教育、法律、工程和生命科学等方向规划。" },
  { name: "University of Sydney", english: "悉尼大学", badge: "澳洲八大", rank: "澳洲名校", logo: "/pics/悉尼大学.png", intro: "澳洲历史悠久的综合型大学，商科、工程、计算机、传媒、教育和健康科学方向选择丰富。" },
  { name: "Stanford University", english: "斯坦福大学", badge: "美国顶尖", rank: "美国名校", logo: "/pics/斯坦福大学.png", intro: "位于硅谷核心创新生态，适合计算机、工程、创业、商业分析、教育科技和交叉学科方向。" },
  { name: "National University of Singapore", english: "新加坡国立大学", badge: "亚洲名校", rank: "亚洲名校", logo: "/pics/新加坡国立.png", intro: "亚洲高认可度综合型大学，适合计算机、数据、金融、工程、公共政策和商业管理方向。" },
  { name: "University of Oxford", english: "牛津大学", badge: "英国顶尖", rank: "英国名校", logo: "/pics/牛津大学.png", intro: "英国顶尖研究型大学，适合高端学术规划、研究型项目和跨学科方向。" },
  { name: "Imperial College London", english: "帝国理工学院", badge: "理工强校", rank: "英国名校", logo: "/pics/帝国理工.png", intro: "工程、计算机、数据、医学和商科方向优势突出，适合理工与创新型背景学生。" }
];

export const testimonials = [
  { name: "Chen", country: "UK", text: "从选校到文书都很清晰，最终拿到理想 offer。" },
  { name: "Liu", country: "Australia", text: "顾问把时间线拆得很细，家长也能看懂每一步。" },
  { name: "Wang", country: "US", text: "我的背景不算强，但方案让我更有方向。" }
];

export const faqItems = [
  { q: "什么时候开始准备比较合适？", a: "一般建议提前 8-18 个月规划，热门专业和名校申请越早越好。" },
  { q: "没有语言成绩可以先申请吗？", a: "很多国家和院校支持有条件录取，具体要看学校、专业和申请季政策。" },
  { q: "预算有限还能申请吗？", a: "可以，我们会结合国家、城市、学制、奖学金和住宿成本给出可执行方案。" }
];
