
"use client";

import Link from "next/link";
import { BookOpen, Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4 py-10 transition-colors duration-300 dark:bg-[#172522]">

      {/* Icon */}
      <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-3xl bg-[#654321] shadow-lg dark:bg-[#A8C9B5]">
        <BookOpen size={45} className="text-white dark:text-[#172522]" />
      </div>

      {/* 404 */}
      <h1 className="mb-3 text-8xl font-extrabold tracking-tight text-[#654321] dark:text-[#D5B982] sm:text-9xl">
        404
      </h1>

      <div className="mb-6 h-1.5 w-20 rounded-full bg-[#C5A47E] dark:bg-[#A8C9B5]" />

      {/* Message */}
      <h2 className="mb-4 text-center text-2xl font-bold text-[#3D2A1B] dark:text-[#E8F0EA] sm:text-4xl">
        Oops! Page Not Found
      </h2>

      <p className="mb-9 max-w-md text-center text-sm leading-7 text-[#80694F] dark:text-[#B8C9C0] sm:text-base">
        Looks like this page is missing from our bookshelf.
        The book you are looking for might have been moved or doesn't exist.
      </p>

      {/* Buttons */}
      <div className="flex w-full max-w-sm flex-col justify-center gap-3 sm:flex-row">

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#654321] px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#4A3018] hover:shadow-lg dark:bg-[#A8C9B5] dark:text-[#172522] dark:hover:bg-[#D5B982]"
        >
          <Home size={19} />
          Back to Home
        </Link>

        <Link
          href="/books"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D8C5AE] bg-[#F7F0E6] px-7 py-3.5 font-semibold text-[#654321] transition duration-300 hover:bg-[#E9DDCC] dark:border-[#526B60] dark:bg-[#20332F] dark:text-[#E8F0EA] dark:hover:bg-[#30463D]"
        >
          <Search size={19} />
          Explore Books
        </Link>

      </div>

      {/* Footer */}
      <p className="mt-14 text-center text-xs font-semibold tracking-[0.2em] text-[#A18A70] dark:text-[#A8BDB3] sm:text-sm">
        BOOKNOOK — YOUR LITTLE CORNER OF BOOKS
      </p>

    </main>
  );
};

export default NotFound;
