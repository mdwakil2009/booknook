
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  BookPlus,
  Loader2,
  BookMarked,
  Sparkles,
  Library,
  ArrowRight,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { IBook } from "@/lib/type";
import EditBook from "@/components/EditBook";
import DeleteBook from "@/components/DeleteBook";

const MyBooksPage = ({ book }: { book: IBook[] }) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState(true);

  const { data: session, isPending } = authClient.useSession();

  const email = session?.user?.email;

  useEffect(() => {
    if (isPending) return;

    if (!email) {
      setBooks([]);
      setLoading(false);
      return;
    }

    const fetchMyBooks = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `http://localhost:8000/my-books/${encodeURIComponent(email)}`,
          { cache: "no-store" },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("My Books Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyBooks();
  }, [email, isPending]);

  if (isPending || loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#E2ECE8]">
        <Loader2 className="size-9 animate-spin text-[#123C3A]" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#E2ECE8] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <section className="relative isolate overflow-hidden rounded-2xl shadow-xl">

          {/* Banner Image */}
          <Image
            src="/image/banner8.avif"
            alt="BookNook Library Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#123C3A]/75" />

          {/* Header Content */}
          <div className="relative z-10 flex min-h-[230px] flex-col justify-center px-6 py-7 text-white sm:min-h-[250px] sm:px-10">

            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-[#D8E8DF] backdrop-blur-sm">
              <Sparkles size={13} />
              YOUR PERSONAL LIBRARY
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              My Bookshelf
            </h1>

            <p className="mt-2 max-w-xl text-xs leading-6 text-[#E0EAE5] sm:text-sm">
              Your personal collection of favorite books. Manage your library
              and keep your reading journey organized.
            </p>

            <p className="mt-3 text-xs text-[#D0DFD9] sm:text-sm">
              Welcome back,{" "}
              <span className="font-bold text-white">
                {session?.user?.name}
              </span>
            </p>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="mt-4 grid grid-cols-2 gap-3">

          {/* Total Books */}
          <div className="flex items-center gap-2.5 rounded-xl border border-[#D4E1DA] bg-[#FAFCFA] p-3 shadow-sm sm:gap-3 sm:p-3.5">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E2ECE8] text-[#123C3A] sm:h-10 sm:w-10">
              <Library size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-medium text-[#81948A] sm:text-xs">
                Total Books
              </p>

              <h2 className="text-lg font-bold text-[#123C3A] sm:text-xl">
                {books.length}
              </h2>
            </div>
          </div>

          {/* Library Status */}
          <div className="flex items-center gap-2.5 rounded-xl border border-[#E5DCCB] bg-[#FBF8F1] p-3 shadow-sm sm:gap-3 sm:p-3.5">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F0E7D7] text-[#92764E] sm:h-10 sm:w-10">
              <BookMarked size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-medium text-[#92764E] sm:text-xs">
                Library Status
              </p>

              <h2 className="truncate text-sm font-bold text-[#765D3E] sm:text-base">
                {books.length > 0 ? "Collection Active" : "No Books Yet"}
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
                Manage your books and organize your personal library.
              </p>
            </div>

            <Link
              href="/add-book"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#123C3A] transition hover:gap-3"
            >
              Add Another Book <ArrowRight size={17} />
            </Link>
          </div>

          {books.length === 0 ? (

            /* Empty State */
            <div className="rounded-[2rem] border border-dashed border-[#A9BEB3] bg-[#FAFCFA] px-6 py-16 text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#E2ECE8] text-[#123C3A]">
                <BookOpen size={38} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#123C3A]">
                Your Bookshelf Is Empty
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#60766D]">
                You haven't added any books yet. Start building your personal
                library with your favorite books.
              </p>

              <Link
                href="/add-book"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#123C3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1C514D]"
              >
                <BookPlus size={17} />
                Add Your First Book
              </Link>
            </div>

          ) : (

            /* Books Grid */
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

              {books.map((book) => (
                <article
                  key={book._id}
                  className="group overflow-hidden rounded-[1.75rem] border border-[#D4E1DA] bg-[#FAFCFA] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Book Cover */}
                  <div className="relative h-64 overflow-hidden bg-[#D9E5DE]">

                    {book.image ? (
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[#60766D]">
                        <BookOpen size={60} />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123C3A]/80 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#123C3A]/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      {book.category}
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">

                      <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#D8E8DF]">
                        BOOKNOOK COLLECTION
                      </p>

                      <h3 className="line-clamp-2 text-2xl font-bold leading-tight text-white">
                        {book.title}
                      </h3>

                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="p-5 sm:p-6">

                    <p className="truncate text-sm font-medium text-[#60766D]">
                      By {book.author}
                    </p>

                    <div className="my-5 border-t border-dashed border-[#D4E1DA]" />

                    {/* Available Copies */}
                    <div className="flex items-center justify-between rounded-2xl bg-[#EAF1EC] p-4">

                      <div className="flex items-center gap-2 text-[#60766D]">
                        <BookMarked size={17} />

                        <span className="text-xs font-semibold">
                          Available Copies
                        </span>
                      </div>

                      <span className="flex size-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-[#123C3A] shadow-sm">
                        {book.totalCopies}
                      </span>

                    </div>

                    <div className="my-5 border-t border-dashed border-[#D4E1DA]" />

                    {/* Manage Book */}
                    <div className="flex items-center justify-between gap-3">

                      <div>
                        <p className="text-xs font-bold text-[#123C3A]">
                          Manage Your Book
                        </p>

                        <p className="mt-1 text-[11px] text-[#81948A]">
                          Edit or remove this book
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <EditBook book={book} />
                        <DeleteBook book={book} />
                      </div>

                    </div>
                  </div>
                </article>
              ))}

            </div>
          )}

        </section>

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t border-[#C9D9D0] pt-7 text-center">

          <p className="text-sm font-semibold text-[#123C3A]">
            Your Books, Your Stories!
          </p>

          <p className="text-xs text-[#81948A]">
            Every book opens a new world of possibilities.
          </p>

        </div>

      </div>
    </main>
  );
};

export default MyBooksPage;
