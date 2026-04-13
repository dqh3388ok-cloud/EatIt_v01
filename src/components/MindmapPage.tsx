import { useNavigate } from "react-router-dom";

export default function MindmapPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh-49px)] flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[#26262e] px-6 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-lg text-[#80808c] hover:text-white"
          >
            ‹
          </button>
          <span className="text-base font-bold text-white">
            跨境电商推荐系统重构
          </span>
          <span className="rounded-md bg-[#33264d] px-2.5 py-1 text-xs font-semibold text-[#9973ff]">
            结构化梳练
          </span>
        </div>
        <button
          onClick={() => navigate("/voice")}
          className="rounded-[10px] border border-[#7359d9] px-5 py-2 text-sm font-semibold text-[#9973ff] transition hover:bg-[#7359d9]/10"
        >
          进入练习 →
        </button>
      </div>

      {/* Canvas area with grid */}
      <div className="relative flex-1 overflow-hidden bg-[#0d0d12]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(#1a1a24 1px, transparent 1px), linear-gradient(90deg, #1a1a24 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Center placeholder */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-2xl border border-[#4d4d8c] px-8 py-4 text-[15px] text-[#8c8ca6]">
            结构化导图画布 (示意)
          </div>
        </div>
      </div>
    </div>
  );
}
