
"use client";

import Link from "next/link";
import {
  BookOpen,
  Home,
  Search,
  ArrowLeft,
  Sparkles,
  Library,
} from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F8FAF7] px-4 py-6 transition-colors duration-300 dark:bg-[#172522] sm:px-6">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 size-64 rounded-full bg-[#123C3A]/5 blur-3xl dark:bg-[#A8C9B5]/5" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-64 rounded-full bg-[#C5A47E]/15 blur-3xl dark:bg-[#D5B982]/5" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

        {/* Top Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D5B982]/50 bg-white/80 px-3 py-1.5 shadow-sm dark:border-[#526B60] dark:bg-[#20332F]">
          <Sparkles size={12} className="text-[#A88B54] dark:text-[#D5B982]" />
          <span className="text-[9px] font-bold tracking-[1.8px] text-[#654321] dark:text-[#D5B982]">
            BOOKNOOK • PAGE NOT FOUND
          </span>
        </div>

        {/* Main Illustration */}
        <div className="relative mx-auto mb-5 flex size-28 items-center justify-center sm:size-32">

          <div className="absolute inset-0 rounded-full border border-dashed border-[#C5A47E]/60 dark:border-[#A8C9B5]/30" />
          <div className="absolute inset-2 rounded-full border border-[#123C3A]/10 dark:border-[#A8C9B5]/15" />

          <div className="relative flex size-20 rotate-[-6deg] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#123C3A] to-[#1E5A53] shadow-[0_12px_25px_rgba(18,60,58,0.22)] transition-transform duration-500 hover:rotate-0 sm:size-24">
            <BookOpen size={38} strokeWidth={1.5} className="text-[#F8F3E8] sm:size-11" />
          </div>

          <div className="absolute -right-1 top-2 flex size-8 items-center justify-center rounded-lg border border-[#E8DDCC] bg-white text-[#A88B54] shadow-md dark:border-[#526B60] dark:bg-[#20332F] dark:text-[#D5B982]">
            <Search size={15} />
          </div>

          <div className="absolute -bottom-1 left-0 flex size-8 items-center justify-center rounded-lg border border-[#E8DDCC] bg-white text-[#123C3A] shadow-md dark:border-[#526B60] dark:bg-[#20332F] dark:text-[#A8C9B5]">
            <Library size={15} />
          </div>
        </div>

        {/* 404 Text */}
        <div>
          <h1 className="select-none font-serif text-[76px] font-black leading-none tracking-[-6px] text-[#123C3A] sm:text-[100px] sm:tracking-[-8px] dark:text-[#D5B982]">
            404 
          </h1>

          <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#E8EEE9] px-3 py-1 text-[9px] font-bold uppercase tracking-[1.5px] text-[#123C3A] dark:bg-[#30463D] dark:text-[#D5B982]">
            <span className="size-1.5 rounded-full bg-[#A88B54]" />
            Lost Between The Pages
          </span>
        </div>

        {/* Message */}
        <div className="mx-auto mt-5 max-w-md">
          <h2 className="font-serif text-xl font-bold tracking-tight text-[#123C3A] sm:text-2xl dark:text-[#E8F0EA]">
            Oops! This Page Is Missing
          </h2>

          <p className="mt-2 text-xs leading-6 text-[#60766D] sm:text-sm dark:text-[#A8BDB3]">
            It looks like the page you are searching for has wandered
            off our bookshelf. Don't worry, there are plenty of
            wonderful stories waiting for you!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">

          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#123C3A] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#123C3A]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B514C] hover:shadow-lg active:translate-y-0 sm:text-sm"
          >
            <Home size={16} />
            Back to Home
            <ArrowLeft size={14} className="rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/books"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#123C3A] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#123C3A]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B514C] hover:shadow-lg active:translate-y-0 sm:text-sm"
          >
            <Search size={16} />
            Explore Books
            <ArrowLeft size={14} className="rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

        {/* Footer */}
        <div className="mx-auto mt-8 flex max-w-sm items-center justify-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C5A47E]/60 dark:to-[#526B60]" />

          <div className="flex items-center gap-2 text-[#A88B54] dark:text-[#D5B982]">
            <BookOpen size={14} />
            <span className="text-[9px] font-bold tracking-[1.8px]">
              HAPPY READING
            </span>
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C5A47E]/60 dark:to-[#526B60]" />
        </div>

        <p className="mt-3 text-[9px] font-semibold tracking-[1.8px] text-[#82958B] dark:text-[#829B90]">
          BOOKNOOK — YOUR LITTLE CORNER OF BOOKS
        </p>

      </div>
    </main>
  );
};

export default NotFound;
