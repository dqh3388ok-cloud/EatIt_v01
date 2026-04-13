import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface Message {
  role: "ai" | "user";
  content: string;
}

const aiQuestions = [
  "你好！我是你的面试模拟官。请先用 30 秒简要概述一下这个推荐系统重构项目的背景和你的角色。",
  "你提到系统耗时过高，能具体说说是哪个环节的耗时？召回阶段还是排序阶段？",
  "针对排序阶段的优化，你们采用了什么技术方案？为什么选择这个方案？",
  "了解了。针对 Redis 缓存命中率低的问题，你们做了哪些调整？",
  "缓存策略调整后，QPS 提升了多少？有具体的数据对比吗？",
];

export default function ChatPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: aiQuestions[0] },
  ]);
  const [input, setInput] = useState("");
  const [round, setRound] = useState(1);

  function handleSend(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: input },
    ];

    // Add next AI question
    if (round < aiQuestions.length) {
      newMessages.push({ role: "ai", content: aiQuestions[round] });
      setRound(round + 1);
    }

    setMessages(newMessages);
    setInput("");
  }

  return (
    <div className="flex h-[calc(100vh-49px)]">
      {/* Sidebar */}
      <div className="flex w-[380px] flex-col border-r border-[#26262e] bg-[#0f0f14] p-8">
        <span className="w-fit rounded-md border border-[#6659cc] px-3 py-1 text-xs font-semibold text-[#8c73ff]">
          技术一面
        </span>
        <h2 className="mt-4 text-[22px] font-bold text-white">
          跨境电商推荐系统重构
        </h2>
      </div>

      {/* Chat area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#26262e] px-8 py-3.5">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#262633]">
              📋
            </div>
            <span className="text-[15px] font-semibold text-[#ccc]">
              第 {round}/10 轮 ·{" "}
              <span className="text-[#8c73ff]">技术方案与选型</span>
            </span>
          </div>
          <button
            onClick={() => navigate("/mindmap")}
            className="rounded-lg border border-[#993d4d] px-3.5 py-1.5 text-[13px] font-semibold text-[#e6596e] transition hover:bg-[#993d4d]/20"
          >
            ⊙ 提前结束并生成导图
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="flex flex-col gap-6">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {msg.role === "ai" && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6659cc]">
                    <span className="text-xs text-white">AI</span>
                  </div>
                )}
                <div
                  className={`max-w-[600px] rounded-2xl px-6 py-4 text-[15px] leading-[26px] ${
                    msg.role === "ai"
                      ? "bg-[#24242e] text-[#e6e6eb]"
                      : "bg-[#6b59eb]/20 text-[#d9d9e6]"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-[#26262e] px-8 py-4">
          <form onSubmit={handleSend} className="flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="描述你的回答..."
              className="flex-1 rounded-2xl border border-[#2e2e38] bg-[#1a1a24] px-6 py-4 text-[15px] text-white outline-none placeholder:text-[#595966] focus:border-[#6b59eb]"
            />
            <button
              type="submit"
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#262633] text-lg text-[#80808c] transition hover:bg-[#333] hover:text-white"
            >
              ➤
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
