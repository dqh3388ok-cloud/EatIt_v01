import { useState } from "react";
import { useNavigate } from "react-router-dom";

const rounds = [
  {
    id: "tech1",
    icon: ">_",
    title: "技术一面",
    desc: "基础实现细节、代码能力、技术理解",
  },
  {
    id: "tech2",
    icon: "⚙",
    title: "技术二面",
    desc: "系统设计、核心难点、技术选型与权衡",
  },
  {
    id: "arch",
    icon: "🌐",
    title: "架构面",
    desc: "全局视野、系统演进规划、容灾与高并发扩展",
  },
  {
    id: "hr",
    icon: "👥",
    title: "HR / 综合面",
    desc: "团队协作沟通、冲突处理、个人规划与成长",
  },
];

export default function ConfigPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("tech1");

  return (
    <div className="mx-auto max-w-[1280px] px-10 py-12">
      <h1 className="text-[30px] font-bold text-white">选择面试轮次</h1>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {rounds.map((r) => (
          <button
            key={r.id}
            onClick={() => setSelected(r.id)}
            className={`flex items-center gap-4 rounded-[14px] border p-5 text-left transition ${
              selected === r.id
                ? "border-[#6659cc] bg-[#1e1e2e]"
                : "border-[#2e2e38] bg-[#1a1a24] hover:border-[#444]"
            }`}
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                selected === r.id ? "bg-[#4d3ea6]" : "bg-[#262633]"
              }`}
            >
              <span className="text-base text-[#b399ff]">{r.icon}</span>
            </div>
            <div className="flex-1">
              <p className="text-[17px] font-bold text-white">{r.title}</p>
              <p className="mt-1 text-[13px] text-[#80808c]">{r.desc}</p>
            </div>
            {selected === r.id && (
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6659cc]">
                <span className="text-[10px] text-white">✓</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-16 flex items-center justify-between border-t border-[#2e2e38] pt-6">
        <div>
          <p className="text-base font-bold text-white">准备就绪</p>
          <p className="mt-1 text-[13px] text-[#80808c]">
            基于高复杂度项目，预计 8-10 轮深度问答
          </p>
        </div>
        <button
          onClick={() => navigate("/chat")}
          className="rounded-[14px] bg-gradient-to-r from-[#6b59eb] to-[#9473ff] px-8 py-3.5 text-base font-semibold text-white transition hover:opacity-90"
        >
          开始 AI 问答 →
        </button>
      </div>
    </div>
  );
}
