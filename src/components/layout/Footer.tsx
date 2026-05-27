const footerColumns = [
  { title: "服务", links: ["出国规划", "目标定位", "材料制作", "申请递交", "签证服务", "行前指导"] },
  { title: "国家/地区", links: ["英国", "美国", "澳洲", "欧洲", "日本", "更多国家"] },
  { title: "关于我们", links: ["公司简介", "顾问团队", "成功案例", "新闻资讯", "加入我们"] }
];

export function Footer() {
  return (
    <footer className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:p-8">
      <div className="mb-8">
        <p className="text-xl font-semibold tracking-[-0.04em]">吴桐树</p>
        <p className="mt-3 max-w-sm text-sm leading-6 text-[#6B7280]">专注全球留学与海外工作规划，助力客户走向世界。</p>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-[#0A0A0A]">{column.title}</h3>
            <ul className="mt-3 space-y-2.5 text-sm text-[#6B7280]">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-[#0A0A0A]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-[#E5E7EB] pt-6 text-sm text-[#6B7280]">
        <h3 className="mb-3 font-semibold text-[#0A0A0A]">联系我们</h3>
        <p>18559690435</p>
        <p>ladebangbangde@gmail.com</p>
        <p>厦门市集美区软件园F12大楼</p>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-[#E5E7EB] pt-6 text-xs text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 吴桐树. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">隐私政策</a>
          <a href="#">服务条款</a>
          <a href="#">网站地图</a>
        </div>
      </div>
    </footer>
  );
}
