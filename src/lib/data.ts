export const navItems = [
  { label: "首页", href: "#home" },
  { label: "留学服务", href: "#services" },
  { label: "快速咨询", href: "#consultation" },
  { label: "国家/地区", href: "#countries" },
  { label: "成功案例", href: "#offers" },
  { label: "关于我们", href: "#consultants" },
  { label: "常见问题", href: "#faq" }
];

export const whyUsItems = [
  { icon: "landmark", title: "名校申请经验", description: "覆盖英美澳加日与亚洲顶尖院校申请路径。" },
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
  { name: "美国", english: "United States", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1400&q=85" },
  { name: "澳大利亚", english: "Australia", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=85" },
  { name: "欧洲各国", english: "Europe", image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1400&q=85" },
  { name: "英国", english: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85" },
  { name: "亚洲", english: "Asia", image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1400&q=85" }
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
  { tag: "护理辅助", student: "孙同学", background: "护理中专 · 养老院经验2年 · 希望长期发展", school: "德国 / 新西兰方向", chinese: "护理辅助与照护岗位", rankLabel: "目的地", rank: "德新方向", programLabel: "岗位方向", program: "护理辅助 / 老年照护", result: "把照护经验从“辛苦工作”升级成长期职业路径", strategy: "围绕照护记录、沟通耐心、基础流程和语言计划建立可信度。", detail: "学生做过养老院照护，但不知道怎么证明专业性。我们帮她整理日常照护流程、老人沟通、异常情况记录、家属反馈协助等具体经历，再设计语言学习和资格提升时间线。她的材料不再只是“我能吃苦”，而是呈现出愿意长期做照护、理解岗位责任、能持续学习的人设。", status: "规划启动", highlights: ["护理经历提炼", "语言计划制定", "长期路线设计"] }
];

export const partners = [
  { name: "悉尼大学", english: "University of Sydney", rank: "19", logo: "/pics/悉尼大学.png", intro: "澳洲八大核心成员，商科、教育、数据与工程方向选择丰富，适合希望兼顾学术实力与就业落地的学生。" },
  { name: "斯坦福大学", english: "Stanford University", rank: "5", logo: "/pics/斯坦福大学.png", intro: "位于硅谷核心区域，创新创业、工程、计算机和商科生态极强，是全球顶尖研究型大学代表。" },
  { name: "麻省理工学院", english: "MIT", rank: "1", logo: "/pics/麻省理工.png", intro: "理工、计算机、人工智能和工程领域长期处于世界前列，对科研能力和项目经历要求极高。" },
  { name: "牛津大学", english: "University of Oxford", rank: "3", logo: "/pics/牛津大学.png", intro: "英国历史最悠久的顶尖大学之一，学术声誉极高，适合学术基础扎实、目标明确的申请者。" },
  { name: "墨尔本大学", english: "The University of Melbourne", rank: "13", logo: "/pics/墨尔本大学.png", intro: "澳洲综合实力领先院校，商科、教育、法律、医学和信息技术方向认可度高。" },
  { name: "新加坡国立大学", english: "NUS", rank: "8", logo: "/pics/新加坡国立.png", intro: "亚洲顶尖综合研究型大学，地理位置优越，适合关注亚洲就业机会和国际化发展的学生。" }
];

export const consultants = [
  { name: "Jora", role: "英国留学规划顾问", expertise: "负责英国方向。深耕英国硕士申请，擅长商科、传媒、教育与跨专业方案设计。", image: "/pics/consultant/Jora.png" },
  { name: "Christine", role: "澳洲留学规划顾问", expertise: "负责澳洲方向。熟悉澳洲八大、商科、数据与工程申请路径，擅长把普通背景拆成清晰可执行的申请时间线。", image: "/pics/consultant/Christine.png" },
  { name: "Irene", role: "欧洲留学规划顾问", expertise: "负责欧洲方向。覆盖德国、法国、荷兰、爱尔兰等项目，擅长课程匹配和材料逻辑搭建。", image: "/pics/consultant/Ierene.png" },
  { name: "Dango", role: "美国留学规划顾问", expertise: "负责美国方向。熟悉研究生申请节奏，擅长选校梯度、背景梳理与长期规划。", image: "/pics/consultant/Dango.png" }
];

export const testimonials = [
  { quote: "双非背景，也能冲进 QS 前 30。", detail: "原本只计划申请 QS100，顾问重新梳理经历后，最终拿到英国名校录取。", student: "林同学", result: "英国商科硕士录取" },
  { quote: "GPA 不高，也能进入澳洲八大。", detail: "顾问用课程匹配、实习证明和职业目标重构材料，让普通背景变得更有说服力。", student: "陈同学", result: "澳洲八大商科录取" },
  { quote: "跨专业申请，也能转数据方向。", detail: "文科背景通过项目包装和技能路线设计，成功拿到数据分析方向录取。", student: "王同学", result: "数据分析硕士录取" }
];

export const faqs = [
  { question: "留学申请需要提前多久准备？", answer: "建议至少提前 12-18 个月规划，便于完成背景提升、语言考试、选校定位与文书打磨。" },
  { question: "如何选择适合自己的学校？", answer: "我们会综合学术背景、职业目标、预算、城市偏好与项目匹配度，建立冲刺、匹配、保底梯度。" },
  { question: "申请过程中可以更换专业吗？", answer: "可以，但需要评估先修课程、经历关联度与职业叙事，避免降低申请材料的一致性。" },
  { question: "签证办理需要多长时间？", answer: "不同国家周期不同，通常在拿到录取与关键文件后预留 4-8 周更稳妥。" }
];

export const footerColumns = [
  { title: "服务", links: ["留学规划", "选校定位", "文书制作", "申请递交", "签证服务", "行前指导"] },
  { title: "国家/地区", links: ["美国", "澳大利亚", "欧洲各国", "英国", "亚洲"] },
  { title: "关于我们", links: ["公司简介", "顾问团队", "成功案例", "新闻资讯", "加入我们"] }
];

export const heroImage = "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1400&q=90";