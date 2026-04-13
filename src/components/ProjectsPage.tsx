import { useNavigate } from "react-router-dom";

const projects = [
  {
    role: "技术负责人",
    roleColor: "text-[#33bf8c]",
    roleBg: "bg-[#1a4033]",
    complexity: "复杂 •••",
    title: "跨境电商推荐系统重构",
    date: "2023.06 - 2024.01",
    desc: "针对原有推荐链路耗时过高的问题，主导重构核心召回与排序引擎，大幅提升系统吞吐量，带来15...",
    tags: ["React", "Node.js", "Redis", "Kafka"],
  },
  {
    role: "核心开发者",
    roleColor: "text-[#9973ff]",
    roleBg: "bg-[#33264d]",
    complexity: "中等 ••",
    title: "企业级全链路监控平台",
    date: "2022.08 - 2023.05",
    desc: "从零搭建前端错误日志与性能监控SDK，构建大盘数据可视化看板，降低线上故障平均排查时长。",
    tags: ["Vue3", "TypeScript", "ECharts"],
  },
  {
    role: "前端开发",
    roleColor: "text-[#ff738c]",
    roleBg: "bg-[#4d262e]",
    complexity: "中等 ••",
    title: "低代码营销活动引擎",
    date: "2021.11 - 2022.07",
    desc: "设计并实现基于 JSON Schema 的拖拽式页面搭建工具，将常规营销活动的上线周期从 3 天缩短至...",
    tags: ["React", "Zustand", "Webpack"],
  },
];

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-[1280px] px-10 py-12">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#26263a]">
          <span className="text-xl">📋</span>
        </div>
        <div>
          <h1 className="text-[30px] font-bold text-white">
            共识别 3 个项目经历
          </h1>
          <p className="mt-1 text-[15px] text-[#8c8c96]">
            已基于 STAR 框架完成初步清洗与智能评级
          </p>
        </div>
      </div>

      {/* Project cards */}
      <div className="mt-10 grid grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col gap-4 rounded-2xl border border-[#2e2e38] bg-[#1a1a24] p-7"
          >
            <div className="flex items-center justify-between">
              <span
                className={`rounded-md ${p.roleBg} px-2.5 py-1 text-xs font-semibold ${p.roleColor}`}
              >
                {p.role}
              </span>
              <span className="text-[13px] text-[#80808c]">
                {p.complexity}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">{p.title}</h3>
            <p className="text-[13px] text-[#72727e]">📅 {p.date}</p>
            <p className="text-sm leading-6 text-[#8c8c96]">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-[#2e2e38] bg-[#21212b] px-3 py-1.5 text-[13px] text-[#b3b3bf]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => navigate("/config")}
              className="mt-auto rounded-[10px] border border-[#6659cc] py-3 text-center text-sm font-semibold text-[#8c73ff] transition hover:bg-[#6659cc]/10"
            >
              选择此项目 →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
