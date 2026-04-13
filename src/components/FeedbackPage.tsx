import { useState } from "react";
import { useNavigate } from "react-router-dom";

const weaknesses = [
  {
    path: "思维导图 > 数据与成果 > 性能指标",
    title: "性能优化的具体数据支撑",
    percent: 45,
    color: "bg-[#e64050]",
    textColor: "text-[#e64050]",
  },
  {
    path: "思维导图 > 核心难点与解决 > 缓存策略",
    title: "Redis 缓存雪崩的防御机制",
    percent: 30,
    color: "bg-[#e64050]",
    textColor: "text-[#e64050]",
  },
  {
    path: "思维导图 > 反思与延伸 > 演进规划",
    title: "重来一次的架构设计反思",
    percent: 65,
    color: "bg-[#f2b326]",
    textColor: "text-[#f2b326]",
  },
];

const feedbackItems = [
  {
    title: "成果量化不足，缺乏对比感知",
    desc: "在描述系统重构收益时，你提到了吞吐量提升，但缺乏与重构前的明确数值对比（如 QPS 从 500 提升至 2000）。建议补充具体数据以增强说服力。",
  },
  {
    title: "高并发场景下的极端边界处理考虑不全",
    desc: "当问及 Redis 缓存宕机时的应对策略，你的回答较为单薄。面试官在这一环节主要考察你的系统容灾设计思维，建议补充多级缓存降级、限流熔断等方案。",
  },
];

export default function FeedbackPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"practice" | "report">("practice");

  return (
    <div className="mx-auto max-w-[1200px] px-10 py-8">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-xl text-[#80808c] hover:text-white"
          >
            ‹
          </button>
          <span className="text-[17px] font-bold text-white">强化与反馈</span>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl bg-[#1e1e26] p-1">
          <button
            onClick={() => setTab("practice")}
            className={`flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-sm font-semibold transition ${
              tab === "practice"
                ? "bg-[#2e2e38] text-[#8c73ff]"
                : "text-[#80808c] hover:text-[#bbb]"
            }`}
          >
            ⊙ 针对性练习
          </button>
          <button
            onClick={() => setTab("report")}
            className={`flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-sm font-semibold transition ${
              tab === "report"
                ? "bg-[#2e2e38] text-white border border-[#595980]"
                : "text-[#80808c] hover:text-[#bbb]"
            }`}
          >
            📊 反馈报告
          </button>
        </div>
      </div>

      {tab === "practice" ? (
        /* Practice tab */
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e64050]">
              <span className="text-lg font-bold text-[#e64050]">!</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                来自思维导图的 3 个薄弱点
              </h2>
              <p className="mt-1 text-[15px] text-[#8c8c96]">
                系统已为你提取表现欠佳的环节，逐个攻破以提高综合评分。
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            {weaknesses.map((w) => (
              <div
                key={w.title}
                className="flex items-center justify-between rounded-2xl border border-[#2e2e38] bg-[#17171f] p-7"
              >
                <div>
                  <p className="text-[13px] text-[#72727e]">📊 {w.path}</p>
                  <h3 className="mt-2 text-[19px] font-bold text-white">
                    {w.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="h-1.5 w-[320px] overflow-hidden rounded-full bg-[#2e2e38]">
                      <div
                        className={`h-full rounded-full ${w.color}`}
                        style={{ width: `${w.percent}%` }}
                      />
                    </div>
                    <span className={`text-[13px] font-semibold ${w.textColor}`}>
                      掌握度 {w.percent}%
                    </span>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 rounded-xl border border-[#4d4d66] px-5 py-2.5 text-sm font-semibold text-[#8c73ff] transition hover:bg-[#8c73ff]/10">
                  ▶ 开始练习
                </button>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-10 flex items-center justify-between border-t border-[#2e2e38] pt-6">
            <button
              onClick={() => navigate("/mindmap")}
              className="flex items-center gap-2 text-[15px] text-[#80808c] hover:text-white"
            >
              📊 返回思维导图
            </button>
            <button
              onClick={() => navigate("/voice")}
              className="rounded-xl border border-[#4d4d66] px-6 py-3 text-[15px] font-semibold text-[#d9d9e6] transition hover:bg-white/5"
            >
              进入模拟面试检验 →
            </button>
          </div>
        </div>
      ) : (
        /* Report tab */
        <div className="mt-10">
          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-6">
            {/* Score */}
            <div className="flex h-[340px] flex-col items-center justify-center rounded-[20px] border border-[#2e2e38] bg-[#17171f]">
              <div className="relative flex h-[160px] w-[160px] items-center justify-center">
                <svg className="absolute inset-0" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#262633" strokeWidth="12" />
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#1ae6bf" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 70 * 0.82} ${2 * Math.PI * 70}`} transform="rotate(-90 80 80)" />
                </svg>
                <div className="flex flex-col items-center">
                  <span className="text-[52px] font-bold leading-none text-white">82</span>
                  <span className="mt-1 text-base text-[#72727e]">/100</span>
                </div>
              </div>
              <span className="mt-6 rounded-lg bg-[#143326] px-5 py-2.5 text-sm font-semibold text-[#33e6b3]">
                ↗ 较上次提升 +12 分
              </span>
            </div>

            {/* Radar chart */}
            <div className="flex h-[340px] flex-col rounded-[20px] border border-[#2e2e38] bg-[#17171f] p-6">
              <h3 className="text-base font-bold text-white">⊙ 能力维度对比</h3>
              <div className="flex flex-1 items-center justify-center">
                <svg viewBox="0 0 260 240" className="h-[220px] w-[240px]">
                  {/* Grid hexagons */}
                  {[1, 0.66, 0.33].map((scale, i) => {
                    const r = 80 * scale;
                    const pts = Array.from({ length: 6 }, (_, j) => {
                      const angle = (Math.PI * 2 * j) / 6 - Math.PI / 2;
                      return `${130 + r * Math.cos(angle)},${110 + r * Math.sin(angle)}`;
                    }).join(" ");
                    return <polygon key={i} points={pts} fill="none" stroke="#2e2e38" strokeWidth="1" />;
                  })}
                  {/* Data polygon - "本次评估" */}
                  <polygon
                    points="130,40 195,72 195,148 130,180 75,138 75,82"
                    fill="rgba(90,100,200,0.25)" stroke="#6673cc" strokeWidth="2"
                  />
                  {/* Data polygon - "上次练习" (smaller, dashed) */}
                  <polygon
                    points="130,55 178,82 175,140 130,165 88,132 90,90"
                    fill="none" stroke="#4d4d66" strokeWidth="1" strokeDasharray="4 3"
                  />
                  {/* Labels */}
                  <text x="130" y="22" textAnchor="middle" fill="#80808c" fontSize="11">项目背景</text>
                  <text x="215" y="72" textAnchor="start" fill="#80808c" fontSize="11">技术方案</text>
                  <text x="215" y="155" textAnchor="start" fill="#80808c" fontSize="11">难点解决</text>
                  <text x="130" y="208" textAnchor="middle" fill="#80808c" fontSize="11">数据成果</text>
                  <text x="42" y="155" textAnchor="end" fill="#80808c" fontSize="11">反思深度</text>
                  <text x="42" y="72" textAnchor="end" fill="#80808c" fontSize="11">口头表达</text>
                </svg>
              </div>
              <div className="flex justify-center gap-6 text-[11px] text-[#80808c]">
                <span className="flex items-center gap-1.5"><span className="inline-block h-px w-4 bg-[#4d4d66]" style={{ borderTop: "1px dashed #4d4d66" }} /> 上次练习</span>
                <span className="flex items-center gap-1.5"><span className="inline-block h-px w-4 bg-[#6673cc]" /> 本次评估</span>
              </div>
            </div>

            {/* Trend chart */}
            <div className="flex h-[340px] flex-col rounded-[20px] border border-[#2e2e38] bg-[#17171f] p-6">
              <h3 className="text-base font-bold text-[#f266a6]">↗ 综合分数趋势</h3>
              <div className="flex flex-1 items-end justify-center pb-8">
                <svg viewBox="0 0 280 160" className="h-[140px] w-full">
                  {/* Grid lines */}
                  <line x1="20" y1="20" x2="260" y2="20" stroke="#2e2e38" strokeWidth="0.5" />
                  <line x1="20" y1="60" x2="260" y2="60" stroke="#2e2e38" strokeWidth="0.5" />
                  <line x1="20" y1="100" x2="260" y2="100" stroke="#2e2e38" strokeWidth="0.5" />
                  {/* Line */}
                  <polyline
                    points="30,110 78,80 126,75 174,70 222,65 260,35"
                    fill="none" stroke="#f266a6" strokeWidth="2"
                  />
                  {/* Dots */}
                  {[[30,110],[78,80],[126,75],[174,70],[222,65],[260,35]].map(([x,y], i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill="#f266a6" stroke="#17171f" strokeWidth="2" />
                  ))}
                  {/* X labels */}
                  <text x="30" y="140" textAnchor="middle" fill="#72727e" fontSize="10">10/12</text>
                  <text x="78" y="140" textAnchor="middle" fill="#72727e" fontSize="10">10/14</text>
                  <text x="126" y="140" textAnchor="middle" fill="#72727e" fontSize="10">10/15</text>
                  <text x="174" y="140" textAnchor="middle" fill="#72727e" fontSize="10">10/18</text>
                  <text x="222" y="140" textAnchor="middle" fill="#72727e" fontSize="10">10/20</text>
                  <text x="260" y="140" textAnchor="middle" fill="#33e6b3" fontSize="10" fontWeight="bold">今日</text>
                </svg>
              </div>
            </div>
          </div>

          {/* AI Summary */}
          <div className="mt-8 rounded-[20px] border border-[#2e2e38] bg-[#17171f] p-8">
            <h3 className="text-xl font-bold text-white">
              ✨ AI 导师深度总结
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              {feedbackItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between rounded-[14px] border border-[#2e2e38] bg-[#1a1a22] p-6"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#e68033]" />
                      <h4 className="text-base font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#80808c]">
                      {item.desc}
                    </p>
                  </div>
                  <button className="ml-6 shrink-0 rounded-[10px] border border-[#4d4d59] px-4 py-2 text-[13px] font-semibold text-[#ccc] transition hover:bg-white/5">
                    立即练习 ↗
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom buttons */}
          <div className="mt-8 flex items-center justify-between border-t border-[#2e2e38] pt-6">
            <div className="flex gap-4">
              <button className="rounded-xl border border-[#4d4d59] px-6 py-3.5 text-sm font-semibold text-[#d9d9e6] transition hover:bg-white/5">
                ↓ 导出报告 PDF
              </button>
              <button className="rounded-xl border border-[#4d4d59] px-6 py-3.5 text-sm font-semibold text-[#d9d9e6] transition hover:bg-white/5">
                🔗 分享给朋友帮我模拟
              </button>
            </div>
            <button
              onClick={() => navigate("/mindmap")}
              className="rounded-[14px] bg-gradient-to-r from-[#6b59eb] to-[#9473ff] px-8 py-3.5 text-[15px] font-semibold text-white transition hover:opacity-90"
            >
              ↻ 回到思维导图补强
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
