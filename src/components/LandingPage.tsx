import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";

const features = [
  {
    emoji: "💬",
    bg: "bg-[#1a2640]",
    title: "AI 深度挖掘问答",
    desc: "模拟资深面试官的追问逻辑，通过多轮苏格拉底式提问，挖掘你未曾意识到的项目亮点与技术深度。",
  },
  {
    emoji: "🔗",
    bg: "bg-[#14332e]",
    title: "自动构建思维导图",
    desc: "基于你的回答内容，自动提炼 STAR 法则结构，实时生成脉络清晰的项目思维导图，一目了然。",
  },
  {
    emoji: "🎙",
    bg: "bg-[#381f2e]",
    title: "语音沉浸式模拟",
    desc: "支持全局暗黑模式下的语音交互面试，结合你的项目导图进行随机抽查提问，彻底克服面试紧张感。",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#12121a]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-[60px] py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-[10px] bg-gradient-to-r from-[#9966ff] to-[#e580b2]" />
          <span className="text-[22px] font-bold text-white">EatIt</span>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setLoginOpen(true)}
            className="text-[15px] text-[#d9d9d9] transition hover:text-white"
          >
            登录
          </button>
          <button className="rounded-[10px] border-[1.5px] border-[#d9d9d9] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
            免费开始
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center pt-[100px]">
        <h1 className="text-center text-[52px] font-bold leading-tight text-white">
          让每个项目经历，
          <br />
          <span className="text-white">都能</span>
          <span className="bg-gradient-to-r from-[#a673ff] to-[#ff73b2] bg-clip-text text-transparent">
            自信表达
          </span>
        </h1>

        <p className="mt-6 text-center text-base leading-7 text-[#9999a6]">
          导入你的简历，AI 自动进行深度追问并生成结构化思维导图。
          <br />
          构建牢不可破的项目记忆，在面试中脱颖而出。
        </p>

        <div className="mt-10 flex items-center gap-5">
          <button
            onClick={() => navigate("/upload")}
            className="flex items-center gap-2 rounded-[14px] bg-gradient-to-r from-[#6b59eb] to-[#9473ff] px-9 py-[18px] text-base font-semibold text-white transition hover:opacity-90"
          >
            <span className="text-lg">↑</span>
            上传简历，开始梳理
          </button>
          <button className="rounded-[14px] border border-[#595966] px-9 py-[18px] text-base font-semibold text-white transition hover:bg-white/5">
            查看演示样例
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-[100px] grid max-w-[1240px] grid-cols-3 gap-6 px-10 pb-[120px]">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col gap-5 rounded-2xl border border-[#2e2e38] bg-[#17171f] px-8 py-9"
          >
            <div
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-[14px] ${f.bg}`}
            >
              <span className="text-[20px]">{f.emoji}</span>
            </div>
            <h3 className="text-[22px] font-bold text-white">{f.title}</h3>
            <p className="text-sm leading-[26px] text-[#80808c]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Login Modal */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
