export const navItems = [
  { label: "首页", href: "#home" },
  { label: "留学服务", href: "#services" },
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
