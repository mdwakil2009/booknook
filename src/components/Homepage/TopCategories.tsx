"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BookOpen,
  Check,
  Landmark,
  Smile,
  Sparkles,
} from "lucide-react";

const TopCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#E2ECE8] px-4 pt-6 pb-14 dark:bg-[#172522] sm:px-6 lg:px-8 lg:pt-8 lg:pb-20">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full bg-[#A88B54]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 size-72 rounded-full bg-[#123C3A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D5B982]/50 bg-white px-4 py-2 text-[10px] font-bold tracking-[2px] text-[#A88B54] shadow-sm dark:border-[#526B60] dark:bg-[#20332F] dark:text-[#D5B982]">
            <Sparkles size={14} />
            EXPLORE OUR LIBRARY
          </span>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#123C3A] dark:text-[#E8F0EA] sm:text-4xl lg:text-5xl">
            Find Your Next
            <span className="mt-2 block text-[#A88B54] dark:text-[#D5B982]">
              Favorite Collection
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#60766D] dark:text-[#A8BDB3]">
            Every great journey begins with a book. Explore our carefully
            organized collections and discover stories that inspire you.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#A88B54]" />
            <span className="h-1 w-12 rounded-full bg-[#123C3A] dark:bg-[#A8C9B5]" />
            <span className="h-1 w-8 rounded-full bg-[#A88B54]" />
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {/* Fiction */}
          <div
            onClick={() =>
              setSelectedCategory(
                selectedCategory === "Fiction" ? null : "Fiction",
              )
            }
            className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#123C3A]/10 dark:bg-[#20332F] dark:hover:shadow-black/20 ${
              selectedCategory === "Fiction"
                ? "border-[#A88B54] shadow-lg ring-4 ring-[#D5B982]/20 dark:border-[#D5B982] dark:ring-[#D5B982]/10"
                : "border-[#DCE7E1] hover:border-[#A88B54]/70 dark:border-[#526B60] dark:hover:border-[#D5B982]/70"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-[#E9EDE7] to-[#F8F3E8] opacity-80 transition-all duration-500 group-hover:h-36 dark:from-[#30463D] dark:to-[#3B4035]" />

            <div className="absolute -right-10 -top-10 size-28 rounded-full border border-[#123C3A]/5 transition-transform duration-700 group-hover:scale-125 dark:border-[#A8C9B5]/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[2px] text-[#A88B54] dark:text-[#D5B982]">
                COLLECTION 01
              </span>

              {selectedCategory === "Fiction" ? (
                <span className="flex size-7 items-center justify-center rounded-full bg-[#123C3A] text-white shadow-md dark:bg-[#A8C9B5] dark:text-[#172522]">
                  <Check size={14} strokeWidth={3} />
                </span>
              ) : (
                <span className="flex size-7 items-center justify-center rounded-full bg-white/80 text-[#A88B54] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#123C3A] group-hover:text-white dark:bg-[#30463D] dark:text-[#D5B982] dark:group-hover:bg-[#A8C9B5] dark:group-hover:text-[#172522]">
                  <ArrowUpRight size={16} />
                </span>
              )}
            </div>

            <div className="relative z-10 mt-5">
              <div className="flex size-14 items-center justify-center rounded-xl bg-[#123C3A] text-white shadow-sm transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 dark:bg-[#A8C9B5] dark:text-[#172522]">
                <BookOpen size={26} strokeWidth={1.7} />
              </div>
            </div>

            <div className="relative z-10 mt-5 flex-1">
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[1.6px] text-[#A88B54] dark:text-[#D5B982]">
                Stories & Imagination
              </p>

              <h3 className="font-serif text-xl font-bold text-[#123C3A] transition-colors duration-300 group-hover:text-[#A88B54] dark:text-[#E8F0EA] dark:group-hover:text-[#D5B982]">
                Fiction
              </h3>

              <p className="mt-2 min-h-[66px] text-xs leading-6 text-[#60766D] dark:text-[#A8BDB3]">
                Step into extraordinary worlds filled with imagination and
                unforgettable stories.
              </p>
            </div>

            <div className="mt-5 border-t border-[#E8EEE9] pt-3 dark:border-[#526B60]">
              <Link
                href="/books?category=Fiction"
                onClick={(event) => event.stopPropagation()}
                className="group/link flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-xs font-bold text-[#123C3A] transition-all duration-300 hover:bg-[#123C3A] hover:text-white dark:text-[#E8F0EA] dark:hover:bg-[#A8C9B5] dark:hover:text-[#172522]"
              >
                <span>Explore Collection</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </div>

            {selectedCategory === "Fiction" && (
              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#A88B54]" />
            )}
          </div>

          {/* Science */}
          <div
            onClick={() =>
              setSelectedCategory(
                selectedCategory === "Science" ? null : "Science",
              )
            }
            className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#123C3A]/10 dark:bg-[#20332F] dark:hover:shadow-black/20 ${
              selectedCategory === "Science"
                ? "border-[#A88B54] shadow-lg ring-4 ring-[#D5B982]/20 dark:border-[#D5B982] dark:ring-[#D5B982]/10"
                : "border-[#DCE7E1] hover:border-[#A88B54]/70 dark:border-[#526B60] dark:hover:border-[#D5B982]/70"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-[#E3EFEC] to-[#F1F5EF] opacity-80 transition-all duration-500 group-hover:h-36 dark:from-[#30463D] dark:to-[#263A35]" />

            <div className="absolute -right-10 -top-10 size-28 rounded-full border border-[#123C3A]/5 transition-transform duration-700 group-hover:scale-125 dark:border-[#A8C9B5]/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[2px] text-[#A88B54] dark:text-[#D5B982]">
                COLLECTION 02
              </span>

              {selectedCategory === "Science " ? (
                <span className="flex size-7 items-center justify-center rounded-full bg-[#123C3A] text-white shadow-md dark:bg-[#A8C9B5] dark:text-[#172522]">
                  <Check size={14} strokeWidth={3} />
                </span>
              ) : (
                <span className="flex size-7 items-center justify-center rounded-full bg-white/80 text-[#A88B54] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#123C3A] group-hover:text-white dark:bg-[#30463D] dark:text-[#D5B982] dark:group-hover:bg-[#A8C9B5] dark:group-hover:text-[#172522]">
                  <ArrowUpRight size={16} />
                </span>
              )}
            </div>

            <div className="relative z-10 mt-5">
              <div className="flex size-14 items-center justify-center rounded-xl bg-[#123C3A] text-white shadow-sm transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 dark:bg-[#A8C9B5] dark:text-[#172522]">
                <Atom size={26} strokeWidth={1.7} />
              </div>
            </div>

            <div className="relative z-10 mt-5 flex-1">
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[1.6px] text-[#A88B54] dark:text-[#D5B982]">
                Knowledge & Innovation
              </p>

              <h3 className="font-serif text-xl font-bold text-[#123C3A] transition-colors duration-300 group-hover:text-[#A88B54] dark:text-[#E8F0EA] dark:group-hover:text-[#D5B982]">
                Science & Tech
              </h3>

              <p className="mt-2 min-h-[66px] text-xs leading-6 text-[#60766D] dark:text-[#A8BDB3]">
                Explore groundbreaking discoveries, technology and ideas shaping
                tomorrow.
              </p>
            </div>

            <div className="mt-5 border-t border-[#E8EEE9] pt-3 dark:border-[#526B60]">
              <Link
                href={`/books?category=${encodeURIComponent("Science")}`}
                onClick={(event) => event.stopPropagation()}
                className="group/link flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-xs font-bold text-[#123C3A] transition-all duration-300 hover:bg-[#123C3A] hover:text-white dark:text-[#E8F0EA] dark:hover:bg-[#A8C9B5] dark:hover:text-[#172522]"
              >
                <span>Explore Collection</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </div>

            {selectedCategory === "Science" && (
              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#A88B54]" />
            )}
          </div>

          {/* History */}
          <div
            onClick={() =>
              setSelectedCategory(
                selectedCategory === "History" ? null : "History",
              )
            }
            className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#123C3A]/10 dark:bg-[#20332F] dark:hover:shadow-black/20 ${
              selectedCategory === "History"
                ? "border-[#A88B54] shadow-lg ring-4 ring-[#D5B982]/20 dark:border-[#D5B982] dark:ring-[#D5B982]/10"
                : "border-[#DCE7E1] hover:border-[#A88B54]/70 dark:border-[#526B60] dark:hover:border-[#D5B982]/70"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-[#F5EBDD] to-[#FAF7EF] opacity-80 transition-all duration-500 group-hover:h-36 dark:from-[#3B4035] dark:to-[#30463D]" />

            <div className="absolute -right-10 -top-10 size-28 rounded-full border border-[#123C3A]/5 transition-transform duration-700 group-hover:scale-125 dark:border-[#A8C9B5]/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[2px] text-[#A88B54] dark:text-[#D5B982]">
                COLLECTION 03
              </span>

              {selectedCategory === "History" ? (
                <span className="flex size-7 items-center justify-center rounded-full bg-[#123C3A] text-white shadow-md dark:bg-[#A8C9B5] dark:text-[#172522]">
                  <Check size={14} strokeWidth={3} />
                </span>
              ) : (
                <span className="flex size-7 items-center justify-center rounded-full bg-white/80 text-[#A88B54] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#123C3A] group-hover:text-white dark:bg-[#30463D] dark:text-[#D5B982] dark:group-hover:bg-[#A8C9B5] dark:group-hover:text-[#172522]">
                  <ArrowUpRight size={16} />
                </span>
              )}
            </div>

            <div className="relative z-10 mt-5">
              <div className="flex size-14 items-center justify-center rounded-xl bg-[#123C3A] text-white shadow-sm transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 dark:bg-[#A8C9B5] dark:text-[#172522]">
                <Landmark size={26} strokeWidth={1.7} />
              </div>
            </div>

            <div className="relative z-10 mt-5 flex-1">
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[1.6px] text-[#A88B54] dark:text-[#D5B982]">
                Past & Civilization
              </p>

              <h3 className="font-serif text-xl font-bold text-[#123C3A] transition-colors duration-300 group-hover:text-[#A88B54] dark:text-[#E8F0EA] dark:group-hover:text-[#D5B982]">
                History
              </h3>

              <p className="mt-2 min-h-[66px] text-xs leading-6 text-[#60766D] dark:text-[#A8BDB3]">
                Travel through time and discover the events that shaped our
                world.
              </p>
            </div>

            <div className="mt-5 border-t border-[#E8EEE9] pt-3 dark:border-[#526B60]">
              <Link
                href="/books?category=History"
                onClick={(event) => event.stopPropagation()}
                className="group/link flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-xs font-bold text-[#123C3A] transition-all duration-300 hover:bg-[#123C3A] hover:text-white dark:text-[#E8F0EA] dark:hover:bg-[#A8C9B5] dark:hover:text-[#172522]"
              >
                <span>Explore Collection</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </div>

            {selectedCategory === "History" && (
              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#A88B54]" />
            )}
          </div>

          {/* Kids */}
          <div
            onClick={() =>
              setSelectedCategory(selectedCategory === "Kids" ? null : "Kids")
            }
            className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#123C3A]/10 dark:bg-[#20332F] dark:hover:shadow-black/20 ${
              selectedCategory === "Kids"
                ? "border-[#A88B54] shadow-lg ring-4 ring-[#D5B982]/20 dark:border-[#D5B982] dark:ring-[#D5B982]/10"
                : "border-[#DCE7E1] hover:border-[#A88B54]/70 dark:border-[#526B60] dark:hover:border-[#D5B982]/70"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-[#EAECE0] to-[#F8F3E8] opacity-80 transition-all duration-500 group-hover:h-36 dark:from-[#30463D] dark:to-[#3B4035]" />

            <div className="absolute -right-10 -top-10 size-28 rounded-full border border-[#123C3A]/5 transition-transform duration-700 group-hover:scale-125 dark:border-[#A8C9B5]/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[2px] text-[#A88B54] dark:text-[#D5B982]">
                COLLECTION 04
              </span>

              {selectedCategory === "Kids" ? (
                <span className="flex size-7 items-center justify-center rounded-full bg-[#123C3A] text-white shadow-md dark:bg-[#A8C9B5] dark:text-[#172522]">
                  <Check size={14} strokeWidth={3} />
                </span>
              ) : (
                <span className="flex size-7 items-center justify-center rounded-full bg-white/80 text-[#A88B54] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#123C3A] group-hover:text-white dark:bg-[#30463D] dark:text-[#D5B982] dark:group-hover:bg-[#A8C9B5] dark:group-hover:text-[#172522]">
                  <ArrowUpRight size={16} />
                </span>
              )}
            </div>

            <div className="relative z-10 mt-5">
              <div className="flex size-14 items-center justify-center rounded-xl bg-[#123C3A] text-white shadow-sm transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 dark:bg-[#A8C9B5] dark:text-[#172522]">
                <Smile size={26} strokeWidth={1.7} />
              </div>
            </div>

            <div className="relative z-10 mt-5 flex-1">
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[1.6px] text-[#A88B54] dark:text-[#D5B982]">
                Fun & Adventure
              </p>

              <h3 className="font-serif text-xl font-bold text-[#123C3A] transition-colors duration-300 group-hover:text-[#A88B54] dark:text-[#E8F0EA] dark:group-hover:text-[#D5B982]">
                Kids
              </h3>

              <p className="mt-2 min-h-[66px] text-xs leading-6 text-[#60766D] dark:text-[#A8BDB3]">
                Bring young imaginations to life with fun stories and exciting
                adventures.
              </p>
            </div>

            <div className="mt-5 border-t border-[#E8EEE9] pt-3 dark:border-[#526B60]">
              <Link
                href={`/books?category=${encodeURIComponent("Kids")}`}
                onClick={(event) => event.stopPropagation()}
                className="group/link flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-xs font-bold text-[#123C3A] transition-all duration-300 hover:bg-[#123C3A] hover:text-white dark:text-[#E8F0EA] dark:hover:bg-[#A8C9B5] dark:hover:text-[#172522]"
              >
                <span>Explore Collection</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </div>

            {selectedCategory === "Kids" && (
              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#A88B54]" />
            )}
          </div>
        </div>

        {/* View All Books */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/books"
            className="group inline-flex items-center gap-2 border-b-2 border-[#123C3A]/30 pb-1.5 text-sm font-extrabold tracking-wide text-[#123C3A] transition-all duration-300 hover:border-[#123C3A] hover:text-[#60766D] dark:border-[#A8C9B5]/40 dark:text-[#E8F0EA] dark:hover:border-[#A8C9B5] dark:hover:text-[#A8C9B5]"
          >
            <span>View All Books</span>

            <ArrowRight
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
