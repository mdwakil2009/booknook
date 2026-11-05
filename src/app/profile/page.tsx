
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  UserRound,
  Mail,
  CalendarDays,
  Copy,
  Check,
  Fingerprint,
} from "lucide-react";
import ClientPageTitle from "@/lib/ClientPageTitle";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [copied, setCopied] = useState(false);

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Not available";

  const handleCopyId = async () => {
    if (!user?.id) return;

    await navigator.clipboard.writeText(user.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#E2ECE8] dark:bg-[#172522]">
        <p className="text-sm font-medium text-[#513B2B] dark:text-[#E8F0EA]">
          Loading profile...
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#E2ECE8] px-4 dark:bg-[#172522]">
        <UserRound size={34} className="text-[#513B2B] dark:text-[#A8C9B5]" />

        <h2 className="mt-3 text-xl font-bold text-[#513B2B] dark:text-[#E8F0EA]">
          Login Required
        </h2>

        <p className="mt-2 text-sm text-[#8C7B6B] dark:text-[#A8BDB3]">
          Please login to view your profile.
        </p>

        <Link
          href="/login"
          className="mt-5 rounded-full bg-[#513B2B] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#352619] dark:bg-[#A8C9B5] dark:text-[#172522] dark:hover:bg-[#D5B982]"
        >
          Login Now
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#E2ECE8] px-4 py-6 dark:bg-[#172522] sm:px-6 sm:py-8">
      <ClientPageTitle title="My Profile" />
      <div className="mx-auto max-w-4xl">

        {/* Page Heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1845F] dark:text-[#D5B982]">
              BookNook / Account
            </p>

            <h1 className="mt-2 font-serif text-3xl font-bold text-[#352619] dark:text-[#E8F0EA]">
              My Profile
            </h1>

            <p className="mt-1 text-xs text-[#8C7B6B] dark:text-[#A8BDB3]">
              Manage your personal information.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6B775B] dark:text-[#A8C9B5]">
            <span className="h-2 w-2 rounded-full bg-[#78966A] dark:bg-[#A8C9B5]" />
            Active Member
          </div>
        </div>

        {/* Profile Card */}
        <section className="overflow-hidden rounded-2xl border-2 border-[#B9C9C0] bg-[#E2ECE8] shadow-md dark:border-[#607D70] dark:bg-[#20332F]">

          {/* Profile Image */}
          <div className="flex justify-center border-b-2 border-[#C3D1C8] bg-[#E2ECE8] px-4 py-7 dark:border-[#607D70] dark:bg-[#20332F]">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#B9C9C0] bg-[#E2ECE8] shadow-md dark:border-[#789687] dark:bg-[#30463D]">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "Profile"}
                  fill
                  sizes="96px"
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="flex h-full items-center justify-center text-[#513B2B] dark:text-[#A8C9B5]">
                  <UserRound size={40} />
                </div>
              )}
            </div>
          </div>

          {/* Personal Information Heading */}
          <div className="flex items-center justify-between border-b-2 border-[#C3D1C8] px-4 py-4 dark:border-[#607D70]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#A1845F] dark:text-[#D5B982]">
                Account Details
              </p>

              <h3 className="mt-1 text-lg font-bold text-[#352619] dark:text-[#E8F0EA]">
                Personal Information
              </h3>
            </div>

            <UserRound size={20} className="text-[#A1845F] dark:text-[#D5B982]" />
          </div>

          {/* Full Name */}
          <div className="flex items-center gap-3 border-b border-[#C3D1C8] px-4 py-3 dark:border-[#607D70]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C5D2C9] bg-[#F5F8F5] text-[#806343] dark:border-[#607D70] dark:bg-[#30463D] dark:text-[#A8C9B5]">
              <UserRound size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[#8C7B6B] dark:text-[#A8BDB3]">
                Full Name
              </p>

              <p className="mt-0.5 break-all text-xs font-semibold text-[#493727] dark:text-[#E8F0EA]">
                {user.name || "Not available"}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 border-b border-[#C3D1C8] px-4 py-3 dark:border-[#607D70]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C5D2C9] bg-[#F5F8F5] text-[#806343] dark:border-[#607D70] dark:bg-[#30463D] dark:text-[#A8C9B5]">
              <Mail size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[#8C7B6B] dark:text-[#A8BDB3]">
                Email Address
              </p>

              <p className="mt-0.5 break-all text-xs font-semibold text-[#493727] dark:text-[#E8F0EA]">
                {user.email || "Not available"}
              </p>
            </div>
          </div>

          {/* Account Created */}
          <div className="flex items-center gap-3 border-b border-[#C3D1C8] px-4 py-3 dark:border-[#607D70]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C5D2C9] bg-[#F5F8F5] text-[#806343] dark:border-[#607D70] dark:bg-[#30463D] dark:text-[#A8C9B5]">
              <CalendarDays size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[#8C7B6B] dark:text-[#A8BDB3]">
                Account Created
              </p>

              <p className="mt-0.5 text-xs font-semibold text-[#493727] dark:text-[#E8F0EA]">
                {memberSince}
              </p>
            </div>
          </div>

          {/* User ID */}
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C5D2C9] bg-[#F5F8F5] text-[#806343] dark:border-[#607D70] dark:bg-[#30463D] dark:text-[#A8C9B5]">
              <Fingerprint size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[#8C7B6B] dark:text-[#A8BDB3]">
                User ID
              </p>

              <p className="mt-0.5 truncate text-xs font-semibold text-[#493727] dark:text-[#E8F0EA]">
                {user.id}
              </p>
            </div>

            <button
              onClick={handleCopyId}
              title="Copy User ID"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-[#B9C9C0] bg-[#F5F8F5] text-[#513B2B] transition hover:bg-[#513B2B] hover:text-white dark:border-[#607D70] dark:bg-[#30463D] dark:text-[#E8F0EA] dark:hover:bg-[#A8C9B5] dark:hover:text-[#172522]"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
            </button>
          </div>
        </section>

      </div>
    </main>
  );
};

export default ProfilePage;
