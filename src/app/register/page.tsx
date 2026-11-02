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
} from "lucide-react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // Password Validation
  const validatePassword = (value: string) => {
    if (value.length < 6)
      return "Password must be at least 6 characters long.";

    if (!/[A-Z]/.test(value))
      return "Password must contain at least one uppercase letter.";

    if (!/[a-z]/.test(value))
      return "Password must contain at least one lowercase letter.";

    return "";
  };

  // Email Registration
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validatePassword(password);

    if (error) {
      setPasswordError(error);
      return;
    }

    if (!name.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    setPasswordError("");
    setIsLoading(true);

    try {
      const result = await authClient.signUp.email({
        name: name.trim(),
        email: email.trim(),
        password,
        image: photoUrl.trim() || undefined,
      });

      if (result.error) {
        toast.error(result.error.message || "Registration failed.");
        return;
      }

      toast.success("Account created successfully!");
      router.push("/login");
    } catch (error) {
      console.error("Registration Error:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Google Registration
  const handleGoogleRegister = async () => {
    setIsGoogleLoading(true);

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error("Google Registration Error:", error);
      toast.error("Google sign up failed. Please try again.");
      setIsGoogleLoading(false);
    }
  };

  const hasMinLength = password.length >= 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#E2ECE8] px-4 py-12 sm:px-6">
      <div className="w-full max-w-lg">
        <div className="rounded-2xl border border-[#D5B982]/50 bg-white p-6 shadow-xl shadow-[#123C3A]/5 sm:p-8">

          {/* Logo & Welcome Heading */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#123C3A] text-[#D5B982] shadow-md">
              <BookOpen size={30} />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[#123C3A]">
              Welcome to BookNook!
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#6B8279]">
              Your next favorite book is waiting for you.
              Create an account and start your reading journey with us.
            </p>
          </div>

          {/* Register Form */}
          <form
            autoComplete="off"
            onSubmit={handleRegister}
            className="space-y-4"
          >
            {/* Name */}
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-semibold text-[#123C3A]"
              >
                Full Name
              </Label>

              <div className="relative">
                <UserRound className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279]" />

                <Input
                  id="name"
                  name="register-name"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 border-[#D5B982]/60 bg-[#F4F7F5] pl-10 text-[#123C3A] placeholder:text-[#9AA9A2] focus-visible:border-[#123C3A] focus-visible:ring-[#123C3A]/20"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-[#123C3A]"
              >
                Email Address
              </Label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279]" />

                <Input
                  id="email"
                  name="register-email"
                  type="email"
                  autoComplete="off"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 border-[#D5B982]/60 bg-[#F4F7F5] pl-10 text-[#123C3A] placeholder:text-[#9AA9A2] focus-visible:border-[#123C3A] focus-visible:ring-[#123C3A]/20"
                  required
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="space-y-2">
              <Label
                htmlFor="photoUrl"
                className="text-sm font-semibold text-[#123C3A]"
              >
                Profile Photo URL
                <span className="ml-1 font-normal text-[#9AA9A2]">
                  (Optional)
                </span>
              </Label>

              <div className="relative">
                <Image className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279]" />

                <Input
                  id="photoUrl"
                  name="register-photo"
                  type="url"
                  autoComplete="off"
                  placeholder="https://example.com/photo.jpg"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  className="h-11 border-[#D5B982]/60 bg-[#F4F7F5] pl-10 text-[#123C3A] placeholder:text-[#9AA9A2] focus-visible:border-[#123C3A] focus-visible:ring-[#123C3A]/20"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-semibold text-[#123C3A]"
              >
                Password
              </Label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279]" />

                <Input
                  id="password"
                  name="register-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(validatePassword(e.target.value));
                  }}
                  className="h-11 border-[#D5B982]/60 bg-[#F4F7F5] pl-10 pr-11 text-[#123C3A] placeholder:text-[#9AA9A2] focus-visible:border-[#123C3A] focus-visible:ring-[#123C3A]/20"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B8279] transition hover:text-[#123C3A]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Only Unfulfilled Password Requirements */}
              {password.length > 0 && (
                <div className="space-y-1.5 rounded-lg border border-[#D5B982]/50 bg-[#F4F7F5] p-3">
                  {!hasMinLength && (
                    <p className="text-xs text-[#6B8279]">
                      ○ At least 6 characters
                    </p>
                  )}

                  {!hasUppercase && (
                    <p className="text-xs text-[#6B8279]">
                      ○ One uppercase letter (A-Z)
                    </p>
                  )}

                  {!hasLowercase && (
                    <p className="text-xs text-[#6B8279]">
                      ○ One lowercase letter (a-z)
                    </p>
                  )}
                </div>
              )}

              {passwordError && (
                <p className="text-xs font-medium text-red-600">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              disabled={isLoading || isGoogleLoading}
              className="h-11 w-full bg-[#123C3A] text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D514D] disabled:opacity-60"
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
            <div className="h-px flex-1 bg-[#D5B982]/50" />

            <span className="text-xs font-medium text-[#9AA9A2]">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-[#D5B982]/50" />
          </div>

          {/* Google Registration */}
          <Button
            type="button"
            variant="outline"
            disabled={isLoading || isGoogleLoading}
            onClick={handleGoogleRegister}
            className="h-11 w-full border-[#D5B982]/60 bg-white font-semibold text-[#123C3A] transition hover:bg-[#F4F7F5]"
          >
            {isGoogleLoading ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
              <span className="mr-2 flex size-5 items-center justify-center rounded-full bg-white text-lg font-bold text-[#4285F4]">
              <FcGoogle />
              </span>
            )}

            {isGoogleLoading
              ? "Connecting to Google..."
              : "Continue with Google"}
          </Button>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-[#6B8279]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-[#123C3A] underline-offset-4 transition hover:text-[#A88B54] hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-[#6B8279]">
          By creating an account, you agree to join the BookNook reading
          community.
        </p>
      </div>
    </main>
  );
}