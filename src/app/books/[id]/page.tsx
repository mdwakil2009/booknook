import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  UserRound,
  BookmarkPlus,
  BookMarked,
  Sparkles,
} from "lucide-react";
import { IBook } from "@/lib/type";
import BorrowButton from "@/components/Borrows/BorrowButton";

const BookDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  console.log("Details Page ID:", id);

  const res = await fetch(`http://localhost:8000/book/${id}`, {
    cache: "no-store",
  });

  console.log("API Status:", res.status);

  if (!res.ok) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#E2ECE8] px-4">
        <div className="text-center">
          <BookOpen size={50} className="mx-auto text-[#123C3A]" />
          <h1 className="mt-5 font-serif text-2xl font-bold text-[#123C3A]">
            Book Not Found
          </h1>
          <Link
            href="/books"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#123C3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#60766D]"
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
    <main className="min-h-screen bg-[#E2ECE8] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Back Navigation */}
        <Link
          href="/books"
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-[#D5E0D9] bg-[#123C3A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:border-[#123C3A] hover:bg-[#3B2922] hover:text-white"
        >
          <ArrowLeft
            size={17}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Books
        </Link>

        {/* Details Card */}
        <div className="overflow-hidden rounded-[28px] border border-[#D5E0D9] bg-[#FAFCFA] shadow-xl shadow-[#123C3A]/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Book Cover Section */}
            <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden bg-[#E9EDE7] p-8 sm:p-12 lg:min-h-[650px]">
              <div className="absolute -left-20 -top-20 size-64 rounded-full bg-[#123C3A]/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-[#60766D]/10 blur-3xl" />

              <div className="relative z-10 flex h-[390px] w-full max-w-[290px] items-center justify-center sm:h-[450px]">
                {book?.image ? (
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full rounded-xl object-contain drop-shadow-2xl"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-[#60766D]">
                    <BookOpen size={75} strokeWidth={1.2} />
                    <p className="mt-4 text-sm font-medium">
                      Cover Unavailable
                    </p>
                  </div>
                )}
              </div>

              <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[2px] text-[#60766D]">
                <Sparkles size={14} />
                BookNook Collection
              </div>
            </div>

            {/* Book Information */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              {/* Category */}
              <div className="mb-6 flex items-center gap-2">
                <span className="rounded-lg border border-[#D5E0D9] bg-[#E9EDE7] px-4 py-2 text-[10px] font-bold uppercase tracking-[1.8px] text-[#123C3A]">
                  {book?.category || "General"}
                </span>

                <span className="flex items-center gap-1.5 text-xs font-semibold text-[#60766D]">
                  <BookMarked size={15} />
                  Book Details
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl font-bold leading-tight text-[#123C3A] sm:text-4xl lg:text-[42px]">
                {book?.title}
              </h1>

              {/* Author */}
              <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[#60766D]">
                Written by
                <span className="font-bold text-[#123C3A]">{book?.author}</span>
              </p>

              <div className="my-8 h-px bg-[#D5E0D9]" />

              {/* Description */}
              <div>
                <h2 className="mb-3 font-serif text-xl font-bold text-[#123C3A]">
                  About This Book
                </h2>

                <p className="text-sm leading-8 text-[#60766D]">
                  {book?.description ||
                    "No description available for this book."}
                </p>
              </div>

              <div className="my-8 h-px bg-[#D5E0D9]" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Added By */}
                <div className="flex items-center gap-3 rounded-2xl border border-[#D5E0D9] bg-[#E9EDE7] p-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#123C3A] text-white">
                    <UserRound size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#60766D]">
                      Added By
                    </p>
                    <p className="mt-1 truncate text-sm font-bold text-[#123C3A]">
                      {book?.userName || "Unknown"}
                    </p>
                  </div>
                </div>

                {/* Added Date */}
                <div className="flex items-center gap-3 rounded-2xl border border-[#D5E0D9] bg-[#E9EDE7] p-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#123C3A] text-white">
                    <CalendarDays size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#60766D]">
                      Added On
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#123C3A]">
                      {book?.createdAt
                        ? new Date(book?.createdAt).toLocaleDateString(
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
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#D5E0D9] bg-gradient-to-r from-[#E9EDE7] to-[#FAFCFA] p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#123C3A] text-white shadow-md shadow-[#123C3A]/15">
                    <BookOpen size={22} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#123C3A]">
                      Available Copies
                    </h3>
                    <p className="mt-1 text-xs text-[#60766D]">
                      Books currently in the library
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-3xl font-extrabold tabular-nums text-[#123C3A]">
                    {book?.totalCopies ?? 0}
                  </span>
                  <span className="text-xs font-semibold text-[#60766D]">
                    Copies
                  </span>
                </div>
              </div>
              <BorrowButton
                bookId={String(book._id)}
                bookTitle={book.title}
                bookImage={book.image}
              />

              <p className="mt-4 text-center text-xs text-[#60766D]">
                Discover your next favorite story with BookNook.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-8 text-center">
          <p className="font-serif text-sm italic text-[#60766D]">
            "Every book holds a story. Every story opens a new world."
          </p>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;
