import { useState, type FormEvent } from "react";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  if (!open) return null;

  function validate() {
    const errs: { email?: string; password?: string } = {};
    if (!email.trim()) {
      errs.email = "请输入邮箱";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "邮箱格式不正确";
    }
    if (!password) {
      errs.password = "请输入密码";
    } else if (password.length < 6) {
      errs.password = "密码至少 6 位";
    }
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setApiError("");

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || `登录失败 (${res.status})`);
      }

      // 登录成功，关闭弹窗
      onClose();
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "网络错误，请稍后重试");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-[420px] rounded-2xl border border-[#2e2e38] bg-[#1a1a24] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          登录 EatIt
        </h2>

        {apiError && (
          <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="mb-1.5 block text-sm text-[#9999a6]">邮箱</label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              placeholder="you@example.com"
              className={`w-full rounded-xl border bg-[#12121a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#555] ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#2e2e38] focus:border-[#6b59eb]"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1.5 block text-sm text-[#9999a6]">密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: undefined }));
              }}
              placeholder="至少 6 位"
              className={`w-full rounded-xl border bg-[#12121a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#555] ${
                errors.password
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#2e2e38] focus:border-[#6b59eb]"
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-400">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6b59eb] to-[#9473ff] py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                登录中...
              </>
            ) : (
              "登录"
            )}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-[#666]">
          还没有账号？
          <span className="cursor-pointer text-[#9473ff] hover:underline">
            免费注册
          </span>
        </p>
      </div>
    </div>
  );
}
