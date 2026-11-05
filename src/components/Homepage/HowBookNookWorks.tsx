"use client";

import {
  Users,
  Search,
  Bookmark,
  RefreshCw,
  BookOpen,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const HowBookNookWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 pt-14 pb-6 dark:bg-[#172522] sm:px-6 lg:px-8 lg:pt-20 lg:pb-8">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full bg-[#A88B54]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 size-72 rounded-full bg-[#123C3A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D5B982]/50 bg-white px-4 py-2 text-[10px] font-bold tracking-[2px] text-[#A88B54] shadow-sm dark:border-[#526B60] dark:bg-[#20332F] dark:text-[#D5B982]">
            <Sparkles size={14} />
            YOUR READING JOURNEY
          </span>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#123C3A] dark:text-[#E8F0EA] sm:text-4xl lg:text-5xl">
            How BookNook
            <span className="mt-2 block text-[#A88B54] dark:text-[#D5B982]">
              Works for You
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#60766D] dark:text-[#A8BDB3]">
            Your journey to discovering wonderful books is simple. Follow these
            four easy steps and enjoy a world of reading.
          </p>

          {/* Decorative Lines */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#A88B54]" />
            <span className="h-1 w-12 rounded-full bg-[#123C3A] dark:bg-[#A8C9B5]" />
            <span className="h-1 w-8 rounded-full bg-[#A88B54]" />
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {/* Step 01 */}
          <div className="group relative flex cursor-default flex-col overflow-hidden rounded-2xl border border-[#DCE7E1] bg-white p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A88B54]/70 hover:shadow-xl hover:shadow-[#123C3A]/10 dark:border-[#526B60] dark:bg-[#20332F] dark:hover:border-[#D5B982]/70 dark:hover:shadow-black/20">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-[#E9EDE7] to-[#F8F3E8] opacity-80 transition-all duration-500 group-hover:h-36 dark:from-[#30463D] dark:to-[#3B4035]" />

            <div className="absolute -right-10 -top-10 size-28 rounded-full border border-[#123C3A]/5 transition-transform duration-700 group-hover:scale-125 dark:border-[#A8C9B5]/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[2px] text-[#A88B54] dark:text-[#D5B982]">
                STEP 01
              </span>

              <span className="flex size-7 items-center justify-center rounded-full bg-white/80 text-[#A88B54] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#123C3A] group-hover:text-white dark:bg-[#30463D] dark:text-[#D5B982] dark:group-hover:bg-[#A8C9B5] dark:group-hover:text-[#172522]">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <div className="relative z-10 mt-5">
              <div className="flex size-14 items-center justify-center rounded-xl bg-[#123C3A] text-white shadow-sm transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 dark:bg-[#A8C9B5] dark:text-[#172522]">
                <Users size={26} strokeWidth={1.7} />
              </div>
            </div>

            <div className="relative z-10 mt-5 flex-1">
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[1.6px] text-[#A88B54] dark:text-[#D5B982]">
                Join Our Community
              </p>

              <h3 className="font-serif text-xl font-bold text-[#123C3A] transition-colors duration-300 group-hover:text-[#A88B54] dark:text-[#E8F0EA] dark:group-hover:text-[#D5B982]">
                Create Account
              </h3>

              <p className="mt-2 min-h-[66px] text-xs leading-6 text-[#60766D] dark:text-[#A8BDB3]">
                Create your account and become part of our wonderful reading
                community.
              </p>
            </div>

            {/* Footer - Not a Button */}
            <div className="mt-5 border-t border-[#E8EEE9] pt-3 dark:border-[#526B60]">
              <div className="flex w-full items-center justify-between px-3 py-2.5 text-xs font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                <span>Get Started</span>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="group relative flex cursor-default flex-col overflow-hidden rounded-2xl border border-[#DCE7E1] bg-white p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A88B54]/70 hover:shadow-xl hover:shadow-[#123C3A]/10 dark:border-[#526B60] dark:bg-[#20332F] dark:hover:border-[#D5B982]/70 dark:hover:shadow-black/20">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-[#E3EFEC] to-[#F1F5EF] opacity-80 transition-all duration-500 group-hover:h-36 dark:from-[#30463D] dark:to-[#263A35]" />

            <div className="absolute -right-10 -top-10 size-28 rounded-full border border-[#123C3A]/5 transition-transform duration-700 group-hover:scale-125 dark:border-[#A8C9B5]/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[2px] text-[#A88B54] dark:text-[#D5B982]">
                STEP 02
              </span>

              <span className="flex size-7 items-center justify-center rounded-full bg-white/80 text-[#A88B54] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#123C3A] group-hover:text-white dark:bg-[#30463D] dark:text-[#D5B982] dark:group-hover:bg-[#A8C9B5] dark:group-hover:text-[#172522]">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <div className="relative z-10 mt-5">
              <div className="flex size-14 items-center justify-center rounded-xl bg-[#123C3A] text-white shadow-sm transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 dark:bg-[#A8C9B5] dark:text-[#172522]">
                <Search size={26} strokeWidth={1.7} />
              </div>
            </div>

            <div className="relative z-10 mt-5 flex-1">
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[1.6px] text-[#A88B54] dark:text-[#D5B982]">
                Knowledge & Discovery
              </p>

              <h3 className="font-serif text-xl font-bold text-[#123C3A] transition-colors duration-300 group-hover:text-[#A88B54] dark:text-[#E8F0EA] dark:group-hover:text-[#D5B982]">
                Explore Books
              </h3>

              <p className="mt-2 min-h-[66px] text-xs leading-6 text-[#60766D] dark:text-[#A8BDB3]">
                Explore our library and discover books that match your
                interests.
              </p>
            </div>

            {/* Footer - Not a Button */}
            <div className="mt-5 border-t border-[#E8EEE9] pt-3 dark:border-[#526B60]">
              <div className="flex w-full items-center justify-between px-3 py-2.5 text-xs font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                <span>Find Your Book</span>
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="group relative flex cursor-default flex-col overflow-hidden rounded-2xl border border-[#DCE7E1] bg-white p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A88B54]/70 hover:shadow-xl hover:shadow-[#123C3A]/10 dark:border-[#526B60] dark:bg-[#20332F] dark:hover:border-[#D5B982]/70 dark:hover:shadow-black/20">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-[#F5EBDD] to-[#FAF7EF] opacity-80 transition-all duration-500 group-hover:h-36 dark:from-[#3B4035] dark:to-[#30463D]" />

            <div className="absolute -right-10 -top-10 size-28 rounded-full border border-[#123C3A]/5 transition-transform duration-700 group-hover:scale-125 dark:border-[#A8C9B5]/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[2px] text-[#A88B54] dark:text-[#D5B982]">
                STEP 03
              </span>

              <span className="flex size-7 items-center justify-center rounded-full bg-white/80 text-[#A88B54] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#123C3A] group-hover:text-white dark:bg-[#30463D] dark:text-[#D5B982] dark:group-hover:bg-[#A8C9B5] dark:group-hover:text-[#172522]">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <div className="relative z-10 mt-5">
              <div className="flex size-14 items-center justify-center rounded-xl bg-[#123C3A] text-white shadow-sm transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 dark:bg-[#A8C9B5] dark:text-[#172522]">
                <Bookmark size={26} strokeWidth={1.7} />
              </div>
            </div>

            <div className="relative z-10 mt-5 flex-1">
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[1.6px] text-[#A88B54] dark:text-[#D5B982]">
                Enjoy Your Reading
              </p>

              <h3 className="font-serif text-xl font-bold text-[#123C3A] transition-colors duration-300 group-hover:text-[#A88B54] dark:text-[#E8F0EA] dark:group-hover:text-[#D5B982]">
                Borrow & Enjoy
              </h3>

              <p className="mt-2 min-h-[66px] text-xs leading-6 text-[#60766D] dark:text-[#A8BDB3]">
                Borrow your favorite book and enjoy reading it for seven days.
              </p>
            </div>
            <div className="mt-5 border-t border-[#E8EEE9] pt-3 dark:border-[#526B60]">
              <div className="flex w-full items-center justify-between px-3 py-2.5 text-xs font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                <span>7 Days Reading</span>
              </div>
            </div>
          </div>

          {/* Step 04 */}
          <div className="group relative flex cursor-default flex-col overflow-hidden rounded-2xl border border-[#DCE7E1] bg-white p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A88B54]/70 hover:shadow-xl hover:shadow-[#123C3A]/10 dark:border-[#526B60] dark:bg-[#20332F] dark:hover:border-[#D5B982]/70 dark:hover:shadow-black/20">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-[#EAECE0] to-[#F8F3E8] opacity-80 transition-all duration-500 group-hover:h-36 dark:from-[#30463D] dark:to-[#3B4035]" />

            <div className="absolute -right-10 -top-10 size-28 rounded-full border border-[#123C3A]/5 transition-transform duration-700 group-hover:scale-125 dark:border-[#A8C9B5]/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[2px] text-[#A88B54] dark:text-[#D5B982]">
                STEP 04
              </span>

              <span className="flex size-7 items-center justify-center rounded-full bg-white/80 text-[#A88B54] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#123C3A] group-hover:text-white dark:bg-[#30463D] dark:text-[#D5B982] dark:group-hover:bg-[#A8C9B5] dark:group-hover:text-[#172522]">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <div className="relative z-10 mt-5">
              <div className="flex size-14 items-center justify-center rounded-xl bg-[#123C3A] text-white shadow-sm transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 dark:bg-[#A8C9B5] dark:text-[#172522]">
                <RefreshCw size={26} strokeWidth={1.7} />
              </div>
            </div>

            <div className="relative z-10 mt-5 flex-1">
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[1.6px] text-[#A88B54] dark:text-[#D5B982]">
                Keep Reading
              </p>

              <h3 className="font-serif text-xl font-bold text-[#123C3A] transition-colors duration-300 group-hover:text-[#A88B54] dark:text-[#E8F0EA] dark:group-hover:text-[#D5B982]">
                Return & Repeat
              </h3>

              <p className="mt-2 min-h-[66px] text-xs leading-6 text-[#60766D] dark:text-[#A8BDB3]">
                Return your borrowed book on time and discover another wonderful
                story.
              </p>
            </div>
            <div className="mt-5 border-t border-[#E8EEE9] pt-3 dark:border-[#526B60]">
              <div className="flex w-full items-center justify-between px-3 py-2.5 text-xs font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                <span>Happy Reading</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 border-b-2 border-[#123C3A]/30 pb-1.5 text-sm font-extrabold tracking-wide text-[#123C3A] dark:border-[#A8C9B5]/40 dark:text-[#E8F0EA]">
            <BookOpen size={18} />
            <span>Your Next Favorite Book Is Waiting!</span>
            <Sparkles
              size={16}
              className="text-[#A88B54] dark:text-[#D5B982]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowBookNookWorks;
