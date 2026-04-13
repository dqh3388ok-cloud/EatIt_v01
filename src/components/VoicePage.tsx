import { useNavigate } from "react-router-dom";

export default function VoicePage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh-49px)] flex-col items-center bg-[#0f0f17] px-10 py-10">
      {/* Main interview area */}
      <div className="flex w-full max-w-[1300px] flex-1 flex-col rounded-[20px] border border-[#26262e] bg-[#14141e] p-6">
        {/* Status */}
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#e64050]" />
          <span className="text-sm font-semibold text-[#ccc]">
            技术二面 · 项目深挖
          </span>
        </div>

        <div className="flex-1" />

        {/* Clipboard button */}
        <div className="flex justify-end">
          <button className="flex h-[72px] w-[72px] items-center justify-center rounded-[14px] border border-[#333] bg-[#1e1e2a]">
            <span className="text-xl text-[#7359b3]">📋</span>
          </button>
        </div>
      </div>

      {/* End button */}
      <button
        onClick={() => navigate("/result")}
        className="mt-8 flex items-center gap-2 rounded-xl bg-[#d93340] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#c42d38]"
      >
        ⊙ 结束面试
      </button>
    </div>
  );
}
