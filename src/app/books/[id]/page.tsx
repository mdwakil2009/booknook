import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  UserRound,
  BookMarked,
  Sparkles,
} from "lucide-react";
import { IBook } from "@/lib/type";
import BorrowButton from "@/components/Borrows/BorrowButton";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { GetTokenFromServer } from "@/lib/GetTokenFromServer";

const BookDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const token =await GetTokenFromServer()
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book/${id}`, {
     headers: {
      authorization:`Bearer ${token}`,
    },
    cache: "no-store",
  });

 

  if (!res.ok) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4 dark:bg-[#172522]">
        <div className="text-center">
          <BookOpen size={45} className="mx-auto text-[#123C3A] dark:text-[#A8C9B5]" />

          <h1 className="mt-4 font-serif text-xl font-bold text-[#123C3A] dark:text-[#E8F0EA]">
            Book Not Found
          </h1>

          <Link
            href="/books"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#123C3A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#60766D] dark:bg-[#A8C9B5] dark:text-[#172522] dark:hover:bg-[#D5B982]"
          >
            <ArrowLeft size={17} />
            Back to Books
          </Link>
        </div>
      </main>
    );
  }

  const text = await res.text();

  console.log("API Response:", text);

  const book: IBook = JSON.parse(text);

  return (
    <main className="min-h-screen bg-white px-4 py-6 dark:bg-[#172522] sm:px-6 lg:px-10 lg:py-9">
      <div className="mx-auto max-w-5xl">

        {/* Back Navigation */}
        <Link
          href="/books"
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-[#D5E0D9] bg-[#123C3A] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:border-[#123C3A] hover:bg-[#3B2922] dark:border-[#526B60] dark:bg-[#30463D] dark:hover:border-[#A8C9B5] dark:hover:bg-[#A8C9B5] dark:hover:text-[#172522]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Books
        </Link>

        {/* Details Card */}
        <div className="overflow-hidden rounded-[22px] border border-[#D5E0D9] bg-white shadow-lg shadow-[#123C3A]/10 dark:border-[#526B60] dark:bg-[#20332F] dark:shadow-black/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Book Cover Section */}
            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-white p-6 dark:bg-[#30463D] sm:p-8 lg:min-h-[530px]">
              <div className="absolute -left-20 -top-20 size-56 rounded-full bg-[#123C3A]/10 blur-3xl dark:bg-[#A8C9B5]/10" />
              <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-[#60766D]/10 blur-3xl dark:bg-[#D5B982]/10" />

              <div className="relative z-10 flex h-[300px] w-full max-w-[240px] items-center justify-center sm:h-[370px]">
                {book?.image ? (
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full rounded-lg object-contain drop-shadow-2xl"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-[#60766D] dark:text-[#A8BDB3]">
                    <BookOpen size={65} strokeWidth={1.2} />
                    <p className="mt-3 text-xs font-medium">
                      Cover Unavailable
                    </p>
                  </div>
                )}
              </div>

              <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#60766D] dark:text-[#A8BDB3]">
                <Sparkles size={13} />
                BookNook Collection
              </div>
            </div>

            {/* Book Information */}
            <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-9">

              {/* Category */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-[#D5E0D9] bg-[#E9EDE7] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[1.5px] text-[#123C3A] dark:border-[#526B60] dark:bg-[#30463D] dark:text-[#A8C9B5]">
                  {book?.category || "General"}
                </span>

                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#60766D] dark:text-[#A8BDB3]">
                  <BookMarked size={14} />
                  Book Details
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl font-bold leading-tight text-[#123C3A] dark:text-[#E8F0EA] sm:text-3xl lg:text-[36px]">
                {book?.title}
              </h1>

              {/* Author */}
              <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#60766D] dark:text-[#A8BDB3]">
                Written by
                <span className="font-bold text-[#123C3A] dark:text-[#D5B982]">
                  {book?.author}
                </span>
              </p>

              <div className="my-5 h-px bg-[#D5E0D9] dark:bg-[#526B60]" />

              {/* Description */}
              <div>
                <h2 className="mb-2 font-serif text-lg font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                  About This Book
                </h2>

                <p className="text-xs leading-7 text-[#60766D] dark:text-[#A8BDB3] sm:text-sm">
                  {book?.description ||
                    "No description available for this book."}
                </p>
              </div>

              <div className="my-5 h-px bg-[#D5E0D9] dark:bg-[#526B60]" />

              {/* Added By & Added Date */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Added By */}
                <div className="flex items-center gap-2.5 rounded-xl border border-[#D5E0D9] bg-[#E9EDE7] p-3 dark:border-[#526B60] dark:bg-[#30463D]">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#123C3A] text-white dark:bg-[#A8C9B5] dark:text-[#172522]">
                    <UserRound size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#60766D] dark:text-[#A8BDB3]">
                      Added By
                    </p>

                    <p className="mt-1 truncate text-xs font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                      {book?.userName || "Unknown"}
                    </p>
                  </div>
                </div>

                {/* Added Date */}
                <div className="flex items-center gap-2.5 rounded-xl border border-[#D5E0D9] bg-[#E9EDE7] p-3 dark:border-[#526B60] dark:bg-[#30463D]">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#123C3A] text-white dark:bg-[#A8C9B5] dark:text-[#172522]">
                    <CalendarDays size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#60766D] dark:text-[#A8BDB3]">
                      Added On
                    </p>

                    <p className="mt-1 text-xs font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                      {book?.createdAt
                        ? new Date(book.createdAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )
                        : "Date unavailable"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Available Copies */}
              <div className="mt-3 flex items-center justify-between rounded-xl border border-[#D5E0D9] bg-gradient-to-r from-[#E9EDE7] to-[#FAFCFA] p-3.5 shadow-sm dark:border-[#526B60] dark:from-[#30463D] dark:to-[#20332F]">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-[#123C3A] text-white shadow-md shadow-[#123C3A]/15 dark:bg-[#A8C9B5] dark:text-[#172522] dark:shadow-black/20">
                    <BookOpen size={19} />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                      Available Copies
                    </h3>

                    <p className="mt-1 text-[10px] text-[#60766D] dark:text-[#A8BDB3]">
                      Books currently in the library
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-extrabold tabular-nums text-[#123C3A] dark:text-[#D5B982]">
                    {book?.totalCopies ?? 0}
                  </span>

                  <span className="text-[10px] font-semibold text-[#60766D] dark:text-[#A8BDB3]">
                    Copies
                  </span>
                </div>
              </div>

              {/* Borrow Button */}
              <div className="mt-4">
                <BorrowButton
                  bookId={String(book._id)}
                  bookTitle={book.title}
                  bookImage={book.image}
                />
              </div>

              <p className="mt-3 text-center text-[10px] text-[#60766D] dark:text-[#A8BDB3]">
                Discover your next favorite story with BookNook.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-6 text-center">
          <p className="font-serif text-xs italic text-[#60766D] dark:text-[#A8BDB3]">
            "Every book holds a story. Every story opens a new world."
          </p>
        </div>

      </div>
    </main>
  );
};

export default BookDetailsPage;