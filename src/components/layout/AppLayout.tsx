import { Outlet, Link, useLocation } from "react-router-dom";

export default function AppLayout() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const breadcrumbMap: Record<string, string> = {
    upload: "上传简历",
    projects: "项目解析与分类",
    config: "参数配置",
    chat: "AI 问答",
    mindmap: "结构化导图",
    voice: "语音模拟面试",
    result: "面试综合评估",
    feedback: "强化与反馈",
  };

  return (
    <div className="min-h-screen bg-[#12121a]">
      {/* Top breadcrumb bar */}
      <div className="flex items-center justify-between border-b border-[#1e1e28] bg-[#17171f] px-10 py-3">
        <div className="flex items-center gap-2 text-sm text-[#9999a6]">
          <Link to="/" className="flex items-center gap-2 hover:text-white">
            <div className="h-5 w-5 rounded-md bg-gradient-to-r from-[#9966ff] to-[#e580b2]" />
            <span>首页</span>
          </Link>
          {pathParts.map((part, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-[#555]">&gt;</span>
              <span className="text-[#ccc]">
                {breadcrumbMap[part] || part}
              </span>
            </span>
          ))}
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2e2e38] bg-[#1a1a24]">
          <span className="text-sm text-[#666]">👤</span>
        </div>
      </div>

      {/* Page content */}
      <Outlet />
    </div>
  );
}
