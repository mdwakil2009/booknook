import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Sparkles,
  BookPlus,
  Feather,
  BookMarkedIcon,
} from "lucide-react";

import { auth } from "@/lib/auth";
import ReturnButton from "@/components/Borrows/ReturnButton";

interface IBorrow {
  _id: string;
  bookId: string;
  bookTitle: string;
  bookImage: string;
  userEmail: string;
  borrowDate: string;
  returnDate: string;
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const MyBorrowsPage = async () => {
  // Get Logged In User
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  // Login Required
  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#E2ECE8] px-4 py-8">
        <div className="w-full max-w-md rounded-2xl border border-[#D4E1DA] bg-[#FAFCFA] p-7 text-center shadow-sm">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#EAF1EC] text-[#123C3A]">
            <BookOpen className="size-7" />
          </div>

          <h2 className="text-xl font-bold text-[#123C3A]">Login Required</h2>

          <p className="mt-2 text-sm text-[#81948A]">
            Please login to see your borrowed books.
          </p>

          <Link
            href="/login"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#123C3A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1B514D]"
          >
            Login Now
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </main>
    );
  }

  // Fetch Borrowed Books
  const res = await fetch(
    `http://localhost:8000/my-borrows/${encodeURIComponent(user.email)}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch borrowed books");
  }

  const borrows: IBorrow[] = await res.json();

  return (
    <main className="min-h-screen bg-[#E2ECE8] px-3 py-4 sm:px-5 lg:px-7 lg:py-5">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-lg font-bold text-[#123C3A] sm:text-xl">
                My Borrows
              </h1>

              <p className="mt-0.5 text-xs text-[#81948A] sm:text-sm">
                Keep track of the books you are reading
              </p>
            </div>
          </div>

          <Link
            href="/books"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-[#123C3A] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#1B514D]"
          >
            <BookPlus className="size-4" />
            Explore Books
        
          </Link>
        </div>

        {/* Decorative Line */}
        <div className="mb-5 mt-4 h-px bg-gradient-to-r from-[#123C3A]/30 via-[#D4E1DA] to-transparent" />

        {/* Empty State */}
        {borrows.length === 0 ? (
          <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-[#D4E1DA] bg-[#FAFCFA] px-5 py-8 text-center">
            <div className="relative mb-4 flex size-28 items-center justify-center rounded-full bg-[#EAF1EC]">
              <Image
                src="/image/logo1.jpg"
                alt="BookNook"
                width={85}
                height={85}
                className="rounded-full object-cover mix-blend-multiply"
              />
            </div>

            <h2 className="text-lg font-bold text-[#123C3A] sm:text-xl">
              No Borrowed Books Yet
            </h2>

            <p className="mt-2 max-w-sm text-xs leading-6 text-[#81948A] sm:text-sm">
              Your reading journey starts here. Explore our collection and
              borrow your favorite books.
            </p>

            <Link
              href="/books"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#123C3A] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#1B514D]"
            >
              <BookPlus className="size-4" />
              Borrow Your First Book
              <ArrowRight className="size-3.5" />
            </Link>

            <div className="mt-6 flex items-center gap-2 text-[11px] text-[#92764E]">
              <Feather className="size-3.5" />
              <span>Every book opens a new world</span>
            </div>
          </div>
        ) : (
          <>
            {/* Borrowed Books Count */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-[#123C3A] sm:text-base">
                  Your Reading List
                </h2>
                <p className="mt-0.5 text-[11px] text-[#81948A] sm:text-xs">
                  Books you have borrowed from BookNook
                </p>
              </div>

              <span className="rounded-full bg-[#123C3A] px-3 py-1.5 text-[11px] font-semibold text-white">
                {borrows.length} {borrows.length === 1 ? "Book" : "Books"}
              </span>
            </div>

            {/* Borrowed Books Grid */}
            <div className="grid grid-cols-1 gap-4">
              {borrows.map((borrow) => (
                <div
                  key={borrow._id}
                  className="group overflow-hidden rounded-2xl border border-[#D4E1DA] bg-[#FAFCFA] p-3 shadow-sm transition hover:shadow-lg sm:p-4"
                >
                  <div className="flex items-center gap-4">
                    {/* 1. Book Image */}
                    <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-[#EAF1EC] sm:h-40 sm:w-28">
                      <Image
                        src={borrow.bookImage}
                        alt={borrow.bookTitle}
                        fill
                        sizes="112px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* 2. Title */}
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-[10px] text-[#81948A]">
                        Book Title
                      </p>
                      <h3 className="line-clamp-2 text-sm font-bold text-[#123C3A] sm:text-base">
                        {borrow.bookTitle}
                      </h3>
                    </div>

                    {/* 3. Borrowed Date */}
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 flex items-center gap-1 text-[10px] text-[#81948A]">
                        <CalendarDays className="size-3" />
                        Borrowed Date
                      </p>
                      <p className="text-xs font-semibold text-[#60766D] sm:text-sm">
                        {formatDate(borrow.borrowDate)}
                      </p>
                    </div>

                    {/* 4. Return Date */}
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 flex items-center gap-1 text-[10px] text-[#92764E]">
                        <Clock3 className="size-3" />
                        Return Date
                      </p>
                      <p className="text-xs font-bold text-[#765D3E] sm:text-sm">
                        {formatDate(borrow.returnDate)}
                      </p>
                    </div>

                    {/* 5. Return Book Button */}
                    <div className="shrink-0">
                      <ReturnButton borrowId={borrow._id} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-7 flex items-center justify-center gap-2 border-t border-[#D4E1DA] py-5 text-[11px] text-[#81948A]">
          <Sparkles className="size-3.5 text-[#92764E]" />
          <span>Happy Reading with BookNook</span>
        </div>
      </div>
    </main>
  );
};

export default MyBorrowsPage;
