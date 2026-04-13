import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type ParseMode = "local" | "ai" | null;

export default function UploadPage() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadDone, setUploadDone] = useState(false);
  const [parseMode, setParseMode] = useState<ParseMode>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setUploading(true);
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      setUploadDone(true);
    }, 1500);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const f = e.dataTransfer.files[0];
      if (f) handleFile(f);
    },
    [handleFile]
  );

  const handleStartParse = () => {
    if (!file || !parseMode) return;
    navigate("/projects");
  };

  return (
    <div className="mx-auto max-w-[800px] px-6 py-16">
      <h1 className="text-4xl font-bold text-white">导入你的简历</h1>
      <p className="mt-3 text-[15px] text-[#8c8c96]">
        上传简历文件或粘贴在线链接，我们将自动提取你的项目经历
      </p>

      {/* File upload area */}
      {!file ? (
        <div
          className={`mt-10 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed py-20 transition ${
            dragOver
              ? "border-[#6b59eb] bg-[#6b59eb]/5"
              : "border-[#5959994d] bg-[#12121a]"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = ".pdf,.doc,.docx";
            input.onchange = (e) => {
              const f = (e.target as HTMLInputElement).files?.[0];
              if (f) handleFile(f);
            };
            input.click();
          }}
        >
          <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-[14px] bg-[#26263a]">
            <span className="text-2xl text-[#7b6bcc]">↑</span>
          </div>
          <p className="mt-4 text-base font-semibold text-[#d9d9e0]">
            拖拽简历到这里，或点击选择文件
          </p>
          <p className="mt-2 text-sm text-[#72727e]">
            📄 支持 PDF / Word &nbsp;•&nbsp; 🔗 支持在线链接 &nbsp;•&nbsp; 最大
            10MB
          </p>
        </div>
      ) : (
        /* File card */
        <div className="mt-10 flex items-center gap-4 rounded-xl border border-[#2e2e38] bg-[#1e1e28] px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#2e2e40]">
            📄
          </div>
          <div className="flex-1">
            <p className="text-[15px] font-semibold text-white">{file.name}</p>
            <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-[#333]">
              <div
                className={`h-full rounded-full bg-gradient-to-r from-[#33ccb3] to-[#6699ff] transition-all duration-1000 ${
                  uploadDone ? "w-full" : uploading ? "w-3/4" : "w-0"
                }`}
              />
            </div>
          </div>
          <span className="text-sm text-[#80808c]">
            {(file.size / 1024 / 1024).toFixed(1)} MB
          </span>
          {uploadDone && (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#33bf9f]">
              <span className="text-xs text-white">✓</span>
            </div>
          )}
        </div>
      )}

      {/* Parse mode selection - show after upload done */}
      {uploadDone && (
        <>
          <p className="mt-10 text-base font-semibold text-[#d9d9e0]">
            请选择解析模式
          </p>

          <div className="mt-4 grid grid-cols-2 gap-6">
            {/* Local */}
            <button
              onClick={() => setParseMode("local")}
              className={`flex flex-col gap-3.5 rounded-2xl border p-7 text-left transition ${
                parseMode === "local"
                  ? "border-[#33bf99] bg-[#1a1a24]"
                  : "border-[#2e2e38] bg-[#1a1a24] hover:border-[#444]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#262633]">
                  🔒
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#264d4a] px-3 py-1 text-xs font-semibold text-[#4ddb9f]">
                    隐私优先
                  </span>
                  {parseMode === "local" && (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#33bf99]">
                      <span className="text-[10px] text-white">✓</span>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-lg font-bold text-white">本地极速解析</p>
              <p className="text-[13px] leading-[22px] text-[#80808c]">
                数据全程不离开你的设备。解析速度极快，适合使用标准排版模板、格式规范的简历。
              </p>
            </button>

            {/* AI */}
            <button
              onClick={() => setParseMode("ai")}
              className={`flex flex-col gap-3.5 rounded-2xl border p-7 text-left transition ${
                parseMode === "ai"
                  ? "border-[#7b59cc] bg-[#1a1a24]"
                  : "border-[#2e2e38] bg-[#1a1a24] hover:border-[#444]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#2e2640]">
                  ✨
                </div>
                <span className="rounded-full bg-[#402659] px-3 py-1 text-xs font-semibold text-[#b373f2]">
                  精度优先
                </span>
              </div>
              <p className="text-lg font-bold text-white">AI 智能深度解析</p>
              <p className="text-[13px] leading-[22px] text-[#80808c]">
                采用云端大模型深度理解简历语义，能自动推导模糊内容并补全缺失信息，解析结果极其准确。
              </p>
            </button>
          </div>

          <p className="mt-6 text-center text-[13px] text-[#666]">
            不确定？建议两种模式都试试，对比解析结果择优。
          </p>
        </>
      )}

      {/* Bottom bar */}
      <div className="mt-16 flex items-center justify-between border-t border-[#2e2e38] pt-6">
        <button
          onClick={() => navigate("/")}
          className="text-[15px] text-[#80808c] hover:text-white"
        >
          ← 返回首页
        </button>
        <button
          onClick={handleStartParse}
          disabled={!file || !parseMode}
          className={`rounded-[14px] px-8 py-3.5 text-base font-semibold transition ${
            file && parseMode
              ? "bg-gradient-to-r from-[#6b59eb] to-[#9473ff] text-white hover:opacity-90"
              : "bg-[#262630] text-[#666] cursor-not-allowed"
          }`}
        >
          开始解析 →
        </button>
      </div>
    </div>
  );
}
