
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  // Email Login
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const result = await authClient.signIn.email({
        email: email.trim(),
        password,
        callbackURL: "/",
      });

      if (result.error) {
        toast.error(result.error.message || "Login failed. Please try again.");
        return;
      }

      toast.success("Welcome back to BookNook!");

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Login Error:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error("Google Login Error:", error);

      toast.error("Google login failed. Please try again.");
      setIsGoogleLoading(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#E2ECE8] px-4 py-12 dark:bg-[#172522] sm:px-6">
      <div className="w-full max-w-lg">
        <div className="rounded-2xl border border-[#D5B982]/50 bg-white p-6 shadow-xl shadow-[#123C3A]/5 dark:border-[#526B60] dark:bg-[#20332F] sm:p-8">
          {/* Logo & Welcome Heading */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#123C3A] text-[#D5B982] shadow-md dark:bg-[#30463D] dark:text-[#D5B982]">
              <BookOpen size={30} />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[#123C3A] dark:text-[#E8F0EA]">
              Welcome Back!
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#6B8279] dark:text-[#A8BDB3]">
              Login to your BookNook account and continue your reading journey.
            </p>
          </div>

          {/* Login Form */}
          <form autoComplete="off" onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
              >
                Email Address
              </Label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279] dark:text-[#A8BDB3]" />

                <Input
                  id="email"
                  name="login-email"
                  type="email"
                  autoComplete="new-password"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 border-[#D5B982]/60 bg-[#F4F7F5] pl-10 text-[#123C3A] placeholder:text-[#9AA9A2] focus-visible:border-[#123C3A] focus-visible:ring-[#123C3A]/20 dark:border-[#526B60] dark:bg-[#30463D] dark:text-[#E8F0EA] dark:placeholder:text-[#A8BDB3] dark:focus-visible:border-[#A8C9B5] dark:focus-visible:ring-[#A8C9B5]/20"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-sm font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
                >
                  Password
                </Label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-[#A88B54] transition hover:text-[#123C3A] hover:underline dark:text-[#D5B982] dark:hover:text-[#A8C9B5]"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279] dark:text-[#A8BDB3]" />

                <Input
                  id="password"
                  name="login-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 border-[#D5B982]/60 bg-[#F4F7F5] pl-10 pr-11 text-[#123C3A] placeholder:text-[#9AA9A2] focus-visible:border-[#123C3A] focus-visible:ring-[#123C3A]/20 dark:border-[#526B60] dark:bg-[#30463D] dark:text-[#E8F0EA] dark:placeholder:text-[#A8BDB3] dark:focus-visible:border-[#A8C9B5] dark:focus-visible:ring-[#A8C9B5]/20"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B8279] transition hover:text-[#123C3A] dark:text-[#A8BDB3] dark:hover:text-[#E8F0EA]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading || isGoogleLoading}
              className="h-11 w-full bg-[#123C3A] text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D514D] disabled:opacity-60 dark:bg-[#A8C9B5] dark:text-[#172522] dark:hover:bg-[#D5B982]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Logging In...
                </>
              ) : (
                <>
                  Login
                  <ArrowRight className="ml-2 size-4" />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#D5B982]/50 dark:bg-[#526B60]" />

            <span className="text-xs font-medium text-[#9AA9A2] dark:text-[#A8BDB3]">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-[#D5B982]/50 dark:bg-[#526B60]" />
          </div>

          {/* Google Login */}
          <Button
            type="button"
            variant="outline"
            disabled={isLoading || isGoogleLoading}
            onClick={handleGoogleLogin}
            className="h-11 w-full border-[#D5B982]/60 bg-white font-semibold text-[#123C3A] transition hover:bg-[#F4F7F5] dark:border-[#526B60] dark:bg-[#30463D] dark:text-[#E8F0EA] dark:hover:bg-[#3B554A]"
          >
            {isGoogleLoading ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
              <FcGoogle className="mr-2 size-5" />
            )}

            {isGoogleLoading
              ? "Connecting to Google..."
              : "Continue with Google"}
          </Button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-[#6B8279] dark:text-[#A8BDB3]">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-[#123C3A] underline-offset-4 transition hover:text-[#A88B54] hover:underline dark:text-[#A8C9B5] dark:hover:text-[#D5B982]"
            >
              Create Account
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-[#6B8279] dark:text-[#A8BDB3]">
          Welcome to BookNook — where every book opens a new world.
        </p>
      </div>
    </main>
  );
}
