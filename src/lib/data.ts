export const navItems = [
  { label: "首页", href: "#home" },
  { label: "留学服务", href: "#services" },
  { label: "国家/地区", href: "#countries" },
  { label: "成功案例", href: "#offers" },
  { label: "关于我们", href: "#consultants" }
];

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
  { tag: "双非逆袭", student: "林同学", background: "双非财经类 · 均分82 · 两段普通市场实习", school: "University of Manchester", chinese: "曼彻斯特大学", rankLabel: "院校亮点", rank: "QS Top 35", programLabel: "录取方向", program: "MSc Marketing", result: "从只敢申QS100，到拿下曼大商科Offer", strategy: "把零散实习重构成“品牌增长 + 用户洞察 + 数据复盘”的商业故事线。", detail: "初次评估时，学生最大的问题不是背景差，而是每段经历都写得像流水账。我们重新拆解实习内容，把社媒投放、用户访谈和销售数据复盘串成完整增长案例；文书不再强调“我很努力”，而是展示她如何发现问题、提出假设、跟踪数据、总结复盘。最终材料呈现出清晰的商业判断力。", status: "Offer", highlights: ["重构2段实习", "文书主线升级", "申请梯度上移"] },
  { tag: "低GPA突破", student: "陈同学", background: "三本院校 · GPA 3.1 · 无科研 · 有家族企业经历", school: "University of Sydney", chinese: "悉尼大学", rankLabel: "院校亮点", rank: "澳洲八大", programLabel: "录取方向", program: "Master of Commerce", result: "低起点背景，也能进入澳洲八大商科", strategy: "弱化单一分数短板，强化课程匹配、商业场景和未来职业规划。", detail: "学生最担心的是GPA和本科院校不占优势。我们没有硬包装成绩，而是把他参与家族企业运营的经历拆成供应链、客户维护、财务记录三个模块，再结合本科课程证明商科基础。申请材料重点展示“为什么现在读商科、为什么需要系统训练、毕业后如何回到真实商业场景应用”。", status: "Offer", highlights: ["低GPA解释策略", "家族企业经历提炼", "职业目标闭环"] },
  { tag: "跨专业申请", student: "王同学", background: "文科背景 · 编程基础弱 · 想转数据分析", school: "University of Glasgow", chinese: "格拉斯哥大学", rankLabel: "院校亮点", rank: "QS Top 80", programLabel: "录取方向", program: "MSc Data Analytics", result: "文科生转数据方向，不靠空喊热爱也能讲通", strategy: "用可验证项目、补课计划和职业场景证明转专业可行性。", detail: "原始文书里只有“我对数据感兴趣”，说服力非常弱。我们帮她补充一个小型数据清洗与可视化项目，把论文研究里的定性分析转化为“问题定义—数据整理—趋势观察—结论表达”的方法迁移，再用明确的Python、统计、数据库补课计划降低跨专业风险。", status: "Offer", highlights: ["跨专业逻辑搭建", "项目经历补强", "技能路径可验证"] },
  { tag: "大龄重启", student: "赵同学", background: "工作5年 · 语言一般 · 想转教育管理", school: "University of Leeds", chinese: "利兹大学", rankLabel: "院校亮点", rank: "英国罗素集团", programLabel: "录取方向", program: "MA Education", result: "工作多年后重启申请，把年龄变成优势", strategy: "把工作年限转化为管理经验、沟通能力和长期职业稳定性。", detail: "学生最初觉得自己年龄偏大、语言成绩不突出，竞争不过应届生。我们反而把5年工作经历作为核心资产：她做过培训、带过新人、协调过跨部门项目，这些都能自然连接到教育管理。文书重点不是解释“为什么离开工作”，而是说明“为什么工作之后更清楚自己需要什么”。", status: "Offer", highlights: ["工作经历转优势", "教育管理叙事", "时间线重新设计"] }
];

export const workCases: ShowcaseCase[] = [
  { tag: "日本就业", student: "刘同学", background: "中专学历 · 餐饮经验3年 · 日语零基础起步", school: "日本 · 关西地区", chinese: "餐饮服务岗位", rankLabel: "目的地", rank: "日本关西", programLabel: "岗位方向", program: "餐饮服务 / 后厨协助", result: "从本地餐饮店，到海外餐饮岗位面试更有底气", strategy: "先做岗位匹配，再补语言面试和工作场景表达，避免盲目投递。", detail: "学生一开始只知道想去海外工作，但不清楚自己适合什么岗位。我们把他的餐饮经验拆成备餐、出餐、库存、顾客沟通四个可迁移能力，再安排生活口语和门店面试问答训练。材料里不夸大背景，而是突出稳定出勤、能适应轮班和餐饮现场经验。", status: "面试推进", highlights: ["岗位定位", "日语面试辅导", "材料表达优化"] },
  { tag: "新加坡服务", student: "黄同学", background: "大专 · 酒店前台2年 · 英语基础一般", school: "新加坡", chinese: "酒店与客户服务岗位", rankLabel: "目的地", rank: "新加坡", programLabel: "岗位方向", program: "酒店前台 / 客户服务", result: "把普通酒店前台经历，讲成海外服务岗位竞争力", strategy: "强化服务流程、投诉处理和英文场景表达，让经历更贴近国际岗位。", detail: "她原本的简历只写“负责接待客人、办理入住”，看起来非常普通。我们把工作内容改造成更具体的服务能力：高峰期入住协调、客诉安抚、房态沟通、订单核对，并设计英文自我介绍和常见服务场景回答。", status: "复试准备", highlights: ["英文场景训练", "简历重写", "服务能力提炼"] },
  { tag: "澳洲技能", student: "周同学", background: "技校 · 汽修经验4年 · 想提升技术路径", school: "澳大利亚", chinese: "汽修与技术岗位路径", rankLabel: "目的地", rank: "澳洲", programLabel: "岗位方向", program: "汽修助理 / 技术提升路径", result: "把汽修经验整理成海外雇主看得懂的技能档案", strategy: "用工具、车型、维修流程和安全规范证明真实动手能力。", detail: "学生会做事，但不会表达技术价值。我们把他的经验按发动机基础维护、刹车系统检查、轮胎定位、故障初筛、车间安全规范重新整理，并补充工具使用和案例描述。材料重点放在“做过什么、熟练到什么程度、是否懂规范”。", status: "材料评估", highlights: ["技能清单梳理", "英文技术简历", "路径风险评估"] },
  { tag: "欧洲基础岗", student: "马同学", background: "高中 · 工厂流水线经验5年 · 追求稳定路径", school: "欧洲方向", chinese: "仓储与生产辅助岗位", rankLabel: "目的地", rank: "欧洲方向", programLabel: "岗位方向", program: "仓储 / 包装 / 生产辅助", result: "没有高学历，也能把稳定性和执行力讲清楚", strategy: "突出出勤稳定、体力适应、现场纪律和长期工作意愿。", detail: "他的背景看似普通，但基础岗位非常看重稳定性。我们没有把他包装成高级人才，而是把5年工厂经验转化为岗位关心的信号：能适应重复性工作、能接受排班、熟悉安全规则、服从现场管理、离职频率低。", status: "岗位匹配", highlights: ["岗位筛选", "稳定性表达", "面试问答训练"] },
  { tag: "护理辅助", student: "孙同学", background: "护理中专 · 养老院经验2年 · 希望长期发展", school: "德国 / 新西兰方向", chinese: "护理辅助与照护岗位", rankLabel: "目的地", rank: "德国 / 新西兰", programLabel: "岗位方向", program: "护理辅助 / 照护支持", result: "护理背景不只是经验，更是长期发展入口", strategy: "把照护经验、基础护理流程和沟通耐心转化为海外岗位语言。", detail: "她在养老院做过基础护理，但不知道如何证明自己的价值。我们把经验拆成生命体征记录、老人沟通、日常照护、基础卫生和团队交接，再结合目标国家的语言与证书要求，制定先岗位后提升的路径。", status: "路径规划", highlights: ["护理经历梳理", "语言路径建议", "长期发展设计"] }
];
