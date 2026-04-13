import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh-49px)] flex-col items-center justify-center bg-[#0f0f17]">
      {/* Dimmed background area */}
      <div className="absolute left-[70px] top-[100px] h-[500px] w-[1300px] rounded-[20px] bg-[#14141e] opacity-60" />

      {/* Result modal */}
      <div className="relative z-10 flex w-[700px] flex-col items-center gap-6 rounded-[20px] border border-[#383846] bg-[#1e1e28] px-10 py-9">
        <h2 className="text-2xl font-bold text-white">本次面试综合评估</h2>
        <p className="text-base text-[#9999a6]">
          你已经击败了本次项目中 <span className="font-bold text-white">76%</span>{" "}
          的求职者！
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/chat")}
            className="rounded-xl border border-[#4d4d59] px-7 py-3.5 text-sm font-semibold text-[#d9d9e6] transition hover:bg-white/5"
          >
            重新练习
          </button>
          <button
            onClick={() => navigate("/feedback")}
            className="flex items-center gap-2 rounded-xl border border-[#4d4d59] px-7 py-3.5 text-sm font-semibold text-[#d9d9e6] transition hover:bg-white/5"
          >
            📄 查看反馈报告
          </button>
          <button
            onClick={() => navigate("/mindmap")}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6b59eb] to-[#9473ff] px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            📊 回到导图补强短板
          </button>
        </div>
      </div>

      {/* Faded end button */}
      <button className="mt-16 rounded-xl bg-[#d93340] px-7 py-3.5 text-[15px] font-semibold text-white opacity-40">
        结束面试
      </button>
    </div>
  );
}
