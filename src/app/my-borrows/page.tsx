
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Library,
  Sparkles,
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
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#E2ECE8] px-4">
        <div className="max-w-md rounded-3xl bg-white p-10 text-center shadow-xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E2ECE8] text-[#123C3A]">
            <Library size={30} />
          </div>

          <h2 className="text-2xl font-bold text-[#123C3A]">
            Login Required
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#60766D]">
            Please sign in to view your borrowed books.
          </p>

          <Link
            href="/login"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#123C3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1C514D]"
          >
            Sign In <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  const user = session.user;

  const res = await fetch(
    `http://localhost:8000/my-borrows/${encodeURIComponent(user.email)}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch borrowed books");
  }

  const borrows: IBorrow[] = await res.json();

  return (
    <main className="min-h-screen bg-[#E2ECE8] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <section className="relative isolate overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/image/banner7.avif"
            alt="BookNook Library Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#123C3A]/75" />

          <div className="relative z-10 flex min-h-[230px] flex-col justify-center px-6 py-7 text-white sm:min-h-[250px] sm:px-10">
            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-[#D8E8DF] backdrop-blur-sm">
              <Sparkles size={13} />
              YOUR PERSONAL COLLECTION
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              My Borrowed Books
            </h1>

            <p className="mt-2 max-w-xl text-xs leading-6 text-[#E0EAE5] sm:text-sm">
              Every book is a new journey. Keep track of your reading, manage
              your borrowed books and enjoy your next chapter.
            </p>

            <p className="mt-3 text-xs text-[#D0DFD9] sm:text-sm">
              Welcome back,{" "}
              <span className="font-bold text-white">{user.name}</span>
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-4 grid grid-cols-2 gap-3">

          {/* Total Borrowed Books */}
          <div className="flex items-center gap-2.5 rounded-xl border border-[#D4E1DA] bg-[#FAFCFA] p-3 shadow-sm sm:gap-3 sm:p-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E2ECE8] text-[#123C3A] sm:h-10 sm:w-10">
              <Library size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-medium text-[#81948A] sm:text-xs">
                Total Borrowed
              </p>

              <h2 className="text-lg font-bold text-[#123C3A] sm:text-xl">
                {borrows.length}
              </h2>
            </div>
          </div>

          {/* Reading Status */}
          <div className="flex items-center gap-2.5 rounded-xl border border-[#E5DCCB] bg-[#FBF8F1] p-3 shadow-sm sm:gap-3 sm:p-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F0E7D7] text-[#92764E] sm:h-10 sm:w-10">
              <Clock3 size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-medium text-[#92764E] sm:text-xs">
                Reading Status
              </p>

              <h2 className="truncate text-sm font-bold text-[#765D3E] sm:text-base">
                {borrows.length > 0
                  ? "Currently Reading"
                  : "No Active Books"}
              </h2>
            </div>
          </div>

        </section>

        {/* Book Collection */}
        <section className="mt-12">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#8A9D93]">
                YOUR READING SPACE
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#123C3A] sm:text-3xl">
                Your Book Collection
              </h2>

              <p className="mt-2 text-sm text-[#60766D]">
                Manage your borrowed books and return them when finished.
              </p>
            </div>

            <Link
              href="/books"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#123C3A] transition hover:gap-3"
            >
              Explore Books <ArrowRight size={17} />
            </Link>
          </div>

          {borrows.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-[#A9BEB3] bg-[#FAFCFA] px-6 py-16 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#E2ECE8] text-[#123C3A]">
                <BookOpen size={38} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#123C3A]">
                Your Collection Is Empty
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#60766D]">
                You haven't borrowed any books yet. Explore our library and
                find a book that inspires you.
              </p>

              <Link
                href="/books"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#123C3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1C514D]"
              >
                Discover Books <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {borrows.map((book) => (
                <article
                  key={book._id}
                  className="group overflow-hidden rounded-[1.75rem] border border-[#D4E1DA] bg-[#FAFCFA] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Cover */}
                  <div className="relative h-64 overflow-hidden bg-[#D9E5DE]">
                    {book.bookImage ? (
                      <Image
                        src={book.bookImage}
                        alt={book.bookTitle}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[#60766D]">
                        <BookOpen size={60} />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123C3A]/80 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#123C3A]/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-[#A8D6B8]" />
                      Currently Borrowed
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#D8E8DF]">
                        BOOKNOOK COLLECTION
                      </p>

                      <h3 className="line-clamp-2 text-2xl font-bold leading-tight text-white">
                        {book.bookTitle}
                      </h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 sm:p-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-[#EAF1EC] p-4">
                        <div className="flex items-center gap-2 text-[#60766D]">
                          <CalendarDays size={15} />
                          <span className="text-[11px] font-semibold">
                            Borrow Date
                          </span>
                        </div>

                        <p className="mt-3 text-sm font-bold text-[#123C3A]">
                          {formatDate(book.borrowDate)}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#F3EDE1] p-4">
                        <div className="flex items-center gap-2 text-[#92764E]">
                          <Clock3 size={15} />
                          <span className="text-[11px] font-semibold">
                            Return Date
                          </span>
                        </div>

                        <p className="mt-3 text-sm font-bold text-[#765D3E]">
                          {formatDate(book.returnDate)}
                        </p>
                      </div>
                    </div>

                    <div className="my-5 border-t border-dashed border-[#D4E1DA]" />

                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold text-[#123C3A]">
                          Finished Reading?
                        </p>

                        <p className="mt-1 text-[11px] text-[#81948A]">
                          Return your book here
                        </p>
                      </div>

                      <ReturnButton borrowId={book._id} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Footer Note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t border-[#C9D9D0] pt-7 text-center">
          <p className="text-sm font-semibold text-[#123C3A]">
            Happy Reading!
          </p>

          <p className="text-xs text-[#81948A]">
            Every page you read takes you somewhere new.
          </p>
        </div>

      </div>
    </main>
  );
};

export default MyBorrowsPage;
