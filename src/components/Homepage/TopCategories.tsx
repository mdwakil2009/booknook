
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Atom,
  BookOpen,
  Check,
  Landmark,
  Library,
  Smile,
} from "lucide-react";

const TopCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    null,
  );

  return (
    <section className="bg-[#E2ECE8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D5B982]/50 bg-white px-4 py-2 text-sm font-semibold text-[#A88B54]">
            <Library size={16} />
            Explore Our Collection
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[#123C3A] sm:text-4xl lg:text-5xl">
            Explore Top
            <span className="text-[#A88B54]">Categories</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#6B8279] sm:text-base">
            Find your next favorite book from collections made for
            every curious mind.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Fiction */}
          <div
            onClick={() =>
              setSelectedCategory(
                selectedCategory === "Fiction" ? null : "Fiction",
              )
            }
            className={`group relative cursor-pointer rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#123C3A]/10 ${
              selectedCategory === "Fiction"
                ? "border-[#A88B54] shadow-lg shadow-[#123C3A]/10 ring-4 ring-[#D5B982]/20"
                : "border-[#DCE7E1] hover:border-[#D5B982]"
            }`}
          >
            {selectedCategory === "Fiction" && (
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#123C3A] text-white shadow-md">
                <Check size={15} strokeWidth={3} />
              </span>
            )}

            <div className="mb-7 flex items-center justify-between">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                  selectedCategory === "Fiction"
                    ? "bg-[#123C3A] text-white"
                    : "bg-[#E2ECE8] text-[#123C3A] group-hover:bg-[#123C3A] group-hover:text-white"
                }`}
              >
                <BookOpen size={28} strokeWidth={1.8} />
              </div>

              <span className="rounded-full bg-[#F8F3E8] px-3 py-1 text-xs font-semibold text-[#A88B54]">
                {selectedCategory === "Fiction" ? "Selected" : "Popular"}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#123C3A]">
              Fiction
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-6 text-[#6B8279]">
              Stories that take you beyond imagination.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Romance
              </span>
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Mystery
              </span>
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Fantasy
              </span>
            </div>

            <Link
              href="/categories"
              onClick={(event) => event.stopPropagation()}
              className="mt-7 flex items-center justify-between border-t border-[#E2ECE8] pt-5 text-sm font-bold text-[#123C3A] transition-colors hover:text-[#A88B54]"
            >
              Explore Collection
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E2ECE8] transition-all duration-300 group-hover:bg-[#123C3A] group-hover:text-white">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>

          {/* Science & Technology */}
          <div
            onClick={() =>
              setSelectedCategory(
                selectedCategory === "Science & Tech"
                  ? null
                  : "Science & Tech",
              )
            }
            className={`group relative cursor-pointer rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#123C3A]/10 ${
              selectedCategory === "Science & Tech"
                ? "border-[#A88B54] shadow-lg shadow-[#123C3A]/10 ring-4 ring-[#D5B982]/20"
                : "border-[#DCE7E1] hover:border-[#D5B982]"
            }`}
          >
            {selectedCategory === "Science & Tech" && (
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#123C3A] text-white shadow-md">
                <Check size={15} strokeWidth={3} />
              </span>
            )}

            <div className="mb-7 flex items-center justify-between">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                  selectedCategory === "Science & Tech"
                    ? "bg-[#123C3A] text-white"
                    : "bg-[#E2ECE8] text-[#123C3A] group-hover:bg-[#123C3A] group-hover:text-white"
                }`}
              >
                <Atom size={28} strokeWidth={1.8} />
              </div>

              <span className="rounded-full bg-[#F4F7F5] px-3 py-1 text-xs font-semibold text-[#405A51]">
                {selectedCategory === "Science & Tech" ? "Selected" : "Learn"}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#123C3A]">
              Science & Tech
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-6 text-[#6B8279]">
              Discover ideas that shape our future.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Programming
              </span>
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Science
              </span>
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Innovation
              </span>
            </div>

            <Link
              href="/categories"
              onClick={(event) => event.stopPropagation()}
              className="mt-7 flex items-center justify-between border-t border-[#E2ECE8] pt-5 text-sm font-bold text-[#123C3A] transition-colors hover:text-[#A88B54]"
            >
              Explore Collection
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E2ECE8] transition-all duration-300 group-hover:bg-[#123C3A] group-hover:text-white">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>

          {/* History */}
          <div
            onClick={() =>
              setSelectedCategory(
                selectedCategory === "History" ? null : "History",
              )
            }
            className={`group relative cursor-pointer rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#123C3A]/10 ${
              selectedCategory === "History"
                ? "border-[#A88B54] shadow-lg shadow-[#123C3A]/10 ring-4 ring-[#D5B982]/20"
                : "border-[#DCE7E1] hover:border-[#D5B982]"
            }`}
          >
            {selectedCategory === "History" && (
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#123C3A] text-white shadow-md">
                <Check size={15} strokeWidth={3} />
              </span>
            )}

            <div className="mb-7 flex items-center justify-between">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                  selectedCategory === "History"
                    ? "bg-[#123C3A] text-white"
                    : "bg-[#E2ECE8] text-[#123C3A] group-hover:bg-[#123C3A] group-hover:text-white"
                }`}
              >
                <Landmark size={28} strokeWidth={1.8} />
              </div>

              <span className="rounded-full bg-[#F4F7F5] px-3 py-1 text-xs font-semibold text-[#405A51]">
                {selectedCategory === "History" ? "Selected" : "Discover"}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#123C3A]">
              History
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-6 text-[#6B8279]">
              Explore the past and learn from history.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Ancient
              </span>
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Biography
              </span>
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Civilization
              </span>
            </div>

            <Link
              href="/categories"
              onClick={(event) => event.stopPropagation()}
              className="mt-7 flex items-center justify-between border-t border-[#E2ECE8] pt-5 text-sm font-bold text-[#123C3A] transition-colors hover:text-[#A88B54]"
            >
              Explore Collection
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E2ECE8] transition-all duration-300 group-hover:bg-[#123C3A] group-hover:text-white">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>

          {/* Kids & Comics */}
          <div
            onClick={() =>
              setSelectedCategory(
                selectedCategory === "Kids & Comics"
                  ? null
                  : "Kids & Comics",
              )
            }
            className={`group relative cursor-pointer rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#123C3A]/10 ${
              selectedCategory === "Kids & Comics"
                ? "border-[#A88B54] shadow-lg shadow-[#123C3A]/10 ring-4 ring-[#D5B982]/20"
                : "border-[#DCE7E1] hover:border-[#D5B982]"
            }`}
          >
            {selectedCategory === "Kids & Comics" && (
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#123C3A] text-white shadow-md">
                <Check size={15} strokeWidth={3} />
              </span>
            )}

            <div className="mb-7 flex items-center justify-between">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                  selectedCategory === "Kids & Comics"
                    ? "bg-[#123C3A] text-white"
                    : "bg-[#E2ECE8] text-[#123C3A] group-hover:bg-[#123C3A] group-hover:text-white"
                }`}
              >
                <Smile size={28} strokeWidth={1.8} />
              </div>

              <span className="rounded-full bg-[#F8F3E8] px-3 py-1 text-xs font-semibold text-[#A88B54]">
                {selectedCategory === "Kids & Comics" ? "Selected" : "For Kids"}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#123C3A]">
              Kids & Comics
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-6 text-[#6B8279]">
              Fun stories and adventures for young readers.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Fairy Tales
              </span>
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Comics
              </span>
              <span className="rounded-lg bg-[#F4F7F5] px-3 py-1.5 text-xs font-medium text-[#405A51]">
                Adventure
              </span>
            </div>

            <Link
              href="/categories"
              onClick={(event) => event.stopPropagation()}
              className="mt-7 flex items-center justify-between border-t border-[#E2ECE8] pt-5 text-sm font-bold text-[#123C3A] transition-colors hover:text-[#A88B54]"
            >
              Explore Collection
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E2ECE8] transition-all duration-300 group-hover:bg-[#123C3A] group-hover:text-white">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <p className="text-sm text-[#6B8279]">
            Your next favorite book is waiting to be discovered.
          </p>

          <Link
            href="/categories"
            className="inline-flex items-center gap-1 text-sm font-bold text-[#123C3A] transition-colors hover:text-[#A88B54]"
          >
            View All Categories
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
