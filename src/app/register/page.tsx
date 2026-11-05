
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  UserRound,
  Mail,
  Image,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const router = useRouter();

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // Password Validation
  const validatePassword = (value: string) => {
    if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter.";
    }

    if (!/[a-z]/.test(value)) {
      return "Password must contain at least one lowercase letter.";
    }

    if (value.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    return "";
  };

  // Email Registration
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get Form Data
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    // Extract Form Values
    const name = (user.name as string).trim();
    const email = (user.email as string).trim();
    const photoUrl = (user.photoUrl as string).trim();
    const password = user.password as string;

    // Name Validation
    if (!name) {
      toast.error("Please enter your name.");
      return;
    }

    // Email Validation
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    // Password Validation
    const error = validatePassword(password);

    if (error) {
      setPasswordError(error);
      toast.error(error);
      return;
    }

    setPasswordError("");
    setIsLoading(true);

    try {
      const result = await authClient.signUp.email({
        name,
        email,
        password,
        image: photoUrl || undefined,
      });

      if (result.error) {
        toast.error(result.error.message || "Registration failed.");
        return;
      }

      toast.success("Account created successfully!");

      // Redirect to Login Page
      router.replace("/login");
    } catch (error) {
      console.error("Registration Error:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Google Registration
  const handleGoogleRegister = async () => {
    setIsGoogleLoading(true);

    try {
      const result = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (result.error) {
        toast.error(
          result.error.message || "Google registration failed."
        );
        setIsGoogleLoading(false);
      }
    } catch (error) {
      console.error("Google Registration Error:", error);

      toast.error("Google sign up failed. Please try again.");
      setIsGoogleLoading(false);
    }
  };

  // Password Requirements
  const hasMinLength = password.length >= 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-white px-4 py-12 dark:bg-[#172522] sm:px-6">
      <div className="w-full max-w-lg">

        <div className="rounded-2xl border border-[#D5B982]/50 bg-white p-6 shadow-xl shadow-[#123C3A]/5 dark:border-[#526B60] dark:bg-[#20332F] sm:p-8">

          {/* Heading */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#123C3A] text-[#D5B982] shadow-md dark:bg-[#30463D] dark:text-[#D5B982]">
              <BookOpen size={30} />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[#123C3A] dark:text-[#E8F0EA]">
              Welcome to BookNook!
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#6B8279] dark:text-[#A8BDB3]">
              Your next favorite book is waiting for you.
              Create an account and start your reading journey with us.
            </p>
          </div>

          {/* Registration Form */}
          <form
            onSubmit={handleRegister}
            className="space-y-4"
          >

            {/* Name */}
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
              >
                Full Name
              </Label>

              <div className="relative">
                <UserRound className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279] dark:text-[#A8BDB3]" />

                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 border-[#D5B982]/60 bg-white pl-10 text-[#123C3A] placeholder:text-gray-400 dark:border-[#D5B982]/60 dark:bg-white dark:text-[#123C3A] dark:placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

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
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 border-[#D5B982]/60 bg-white pl-10 text-[#123C3A] placeholder:text-gray-400 dark:border-[#D5B982]/60 dark:bg-white dark:text-[#123C3A] dark:placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="space-y-2">
              <Label
                htmlFor="photoUrl"
                className="text-sm font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
              >
                Profile Photo URL
                <span className="ml-1 font-normal text-[#9AA9A2] dark:text-[#A8BDB3]">
                  (Optional)
                </span>
              </Label>

              <div className="relative">
                <Image className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279] dark:text-[#A8BDB3]" />

                <Input
                  id="photoUrl"
                  name="photoUrl"
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  className="h-11 border-[#D5B982]/60 bg-white pl-10 text-[#123C3A] placeholder:text-gray-400 dark:border-[#D5B982]/60 dark:bg-white dark:text-[#123C3A] dark:placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
              >
                Password
              </Label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279] dark:text-[#A8BDB3]" />

                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(validatePassword(e.target.value));
                  }}
                  className="h-11 border-[#D5B982]/60 bg-white pl-10 pr-11 text-[#123C3A] placeholder:text-gray-400 dark:border-[#D5B982]/60 dark:bg-white dark:text-[#123C3A] dark:placeholder:text-gray-400"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B8279] hover:text-[#123C3A] dark:text-[#6B8279] dark:hover:text-[#123C3A]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {/* Password Requirements */}
              {password.length > 0 && (
                <div className="space-y-2 rounded-lg border border-[#D5B982]/50 bg-[#F4F7F5] p-3 dark:border-[#526B60] dark:bg-[#30463D]">

                  <p className="mb-2 text-xs font-semibold text-[#123C3A] dark:text-[#E8F0EA]">
                    Password Requirements
                  </p>

                  <div className="flex items-center gap-2 text-xs">
                    {hasMinLength ? (
                      <CheckCircle2 className="size-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <Circle className="size-4 text-[#9AA9A2] dark:text-[#A8BDB3]" />
                    )}
                    <span className={hasMinLength ? "text-green-700 dark:text-green-400" : "text-[#6B8279] dark:text-[#A8BDB3]"}>
                      At least 6 characters
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {hasUppercase ? (
                      <CheckCircle2 className="size-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <Circle className="size-4 text-[#9AA9A2] dark:text-[#A8BDB3]" />
                    )}
                    <span className={hasUppercase ? "text-green-700 dark:text-green-400" : "text-[#6B8279] dark:text-[#A8BDB3]"}>
                      One uppercase letter (A-Z)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {hasLowercase ? (
                      <CheckCircle2 className="size-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <Circle className="size-4 text-[#9AA9A2] dark:text-[#A8BDB3]" />
                    )}
                    <span className={hasLowercase ? "text-green-700 dark:text-green-400" : "text-[#6B8279] dark:text-[#A8BDB3]"}>
                      One lowercase letter (a-z)
                    </span>
                  </div>
                </div>
              )}

              {passwordError && (
                <p className="text-xs font-medium text-red-600 dark:text-red-400">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              disabled={isLoading || isGoogleLoading}
              className="h-11 w-full bg-[#123C3A] text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D514D] disabled:opacity-60 dark:bg-[#A8C9B5] dark:text-[#172522] dark:hover:bg-[#D5B982]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
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

          {/* Google Registration */}
          <Button
            type="button"
            variant="outline"
            disabled={isLoading || isGoogleLoading}
            onClick={handleGoogleRegister}
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

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-[#6B8279] dark:text-[#A8BDB3]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-[#123C3A] underline-offset-4 transition hover:text-[#A88B54] hover:underline dark:text-[#A8C9B5] dark:hover:text-[#D5B982]"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-[#6B8279] dark:text-[#A8BDB3]">
          By creating an account, you agree to join the BookNook reading
          community.
        </p>
      </div>
    </main>
  );
}
