"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  BookPlus,
  Loader2,
  BookMarked,
  Plus,
  Library,
  Sparkles,
  Feather,
  Layers,
  Copy,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { IBook } from "@/lib/type";
import EditBook from "@/components/EditBook";
import DeleteBook from "@/components/DeleteBook";

const MyBooksPage = ({ book: _book }: { book: IBook[] }) => {
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
      <div className="flex min-h-[60vh] items-center justify-center bg-[#E2ECE8]">
        <Loader2 className="size-7 animate-spin text-[#123C3A]" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#E2ECE8] px-3 py-5 sm:px-5 lg:px-7 lg:py-7">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-[#123C3A] sm:text-2xl">
                Manage My Books
              </h1>
              <Sparkles size={15} className="text-[#92764E]" />
            </div>

            <p className="text-xs text-[#81948A] sm:text-sm">
              Manage, organize and update your personal book collection.
            </p>
          </div>

          <Link
            href="/add-book"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#123C3A] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#1C514D] hover:shadow-md"
          >
            <Plus size={16} />
            Add New Book
          </Link>
        </section>

        {/* Decorative Line */}
        <div className="mb-6 h-px bg-gradient-to-r from-[#A9BEB3] via-[#123C3A]/40 to-transparent" />

        {/* Empty State */}
        {books.length === 0 ? (
          <section className="relative flex min-h-[350px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#D4E1DA] bg-[#FAFCFA] px-4 py-8 text-center shadow-sm">
            {/* Illustration */}
            <div className="relative mb-3 flex h-24 w-28 items-center justify-center">
              <Image
                src="/image/logo1.jpg"
                alt="Colorful stacked books illustration"
                width={120}
                height={120}
                priority
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>

            <p className="mb-2 text-[9px] font-bold tracking-[0.25em] text-[#92764E]">
              YOUR PERSONAL LIBRARY
            </p>

            <h2 className="text-xl font-bold text-[#123C3A] sm:text-2xl">
              No Books Listed Yet
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-xs leading-6 text-[#81948A] sm:text-sm">
              Your bookshelf is waiting for its first story. Add your favorite
              books and start building your personal collection.
            </p>

            <Link
              href="/add-book"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[#123C3A] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#1C514D] hover:shadow-md"
            >
              <BookPlus size={16} />
              Add Your First Book
            </Link>

            <div className="mt-6 flex items-center gap-1.5 text-[10px] font-medium text-[#81948A]">
              <Feather size={13} />
              Every great library starts with one book.
            </div>
          </section>
        ) : (
          /* Book Collection */
          <section>
            {/* Collection Heading */}
            <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <div className="mb-1.5 flex items-center gap-1.5 text-[#81948A]">
                  <Library size={15} />
                  <p className="text-[9px] font-bold tracking-[0.22em]">
                    YOUR READING SPACE
                  </p>
                </div>

                <h2 className="text-xl font-bold text-[#123C3A] sm:text-2xl">
                  Your Book Collection
                </h2>

                <p className="mt-1 text-xs text-[#81948A]">
                  Manage your books and organize your personal library.
                </p>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-lg border border-[#D4E1DA] bg-[#FAFCFA] px-3.5 py-2.5 text-xs font-semibold text-[#123C3A]">
                <BookMarked size={15} />
                {books.length} Books Listed
              </div>
            </div>

            {/* Books Grid */}

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-4">
              {books.map((book) => (
                <div
                  key={book._id}
                  className="group overflow-hidden rounded-2xl border border-[#D4E1DA] bg-[#FAFCFA] p-3 shadow-sm transition hover:shadow-lg sm:p-4"
                >
                  <div className="flex items-center gap-4">
                    {/* 1. Book Image */}
                    <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-[#EAF1EC] sm:h-40 sm:w-28">
                      {book.image ? (
                        <Image
                          src={book.image}
                          alt={book.title}
                          fill
                          sizes="112px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[#81948A]">
                          <BookOpen size={28} strokeWidth={1.3} />
                        </div>
                      )}
                    </div>

                    {/* 2. Book Title */}
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-[10px] text-[#81948A]">
                        Book Title
                      </p>

                      <h3 className="line-clamp-2 text-sm font-bold text-[#123C3A] sm:text-base">
                        {book.title}
                      </h3>

                      <p className="mt-1 truncate text-[11px] text-[#81948A] sm:text-xs">
                        By {book.author}
                      </p>
                    </div>

                    {/* 3. Category */}
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 flex items-center gap-1 text-[10px] text-[#81948A]">
                        <Layers className="size-3" />
                        Category
                      </p>

                      <p className="text-xs font-semibold text-[#60766D] sm:text-sm">
                        {book.category}
                      </p>
                    </div>

                    {/* 4. Total Copies */}
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 flex items-center gap-1 text-[10px] text-[#92764E]">
                        <Copy className="size-3" />
                        Total Copies
                      </p>

                      <p className="text-xs font-bold text-[#765D3E] sm:text-sm">
                        {book.totalCopies} Copies
                      </p>
                    </div>

                    {/* 5. Manage Book */}
                    <div className="shrink-0">
                      <div className="mb-2 text-center text-[10px] font-bold text-[#123C3A] sm:text-xs">
                        Manage Book
                      </div>

                      <div className="flex items-center gap-1.5">
                        <EditBook book={book} />
                        <DeleteBook book={book} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-8 border-t border-[#C9D9D0] py-6 text-center">
          <div className="mb-2 flex items-center justify-center gap-1.5 text-[#123C3A]">
            <BookOpen size={18} />
            <p className="text-sm font-bold">BookNook</p>
          </div>

          <p className="text-xs font-semibold text-[#123C3A]">
            Your Books, Your Stories!
          </p>

          <p className="mt-1 text-[10px] text-[#81948A]">
            Every book opens a new world of possibilities.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default MyBooksPage;
