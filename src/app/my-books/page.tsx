"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  BookPlus,
  Loader2,
  Pencil,
  Trash2,
  BookMarked,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { IBook } from "@/lib/type";
import Image from "next/image";
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
        const response = await fetch(
          `http://localhost:8000/my-books/${encodeURIComponent(email)}`,
        );

        const data = await response.json();

        setBooks(data);
      } catch (error) {
        console.error("My Books Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyBooks();
  }, [session?.user?.email, isPending]);

  if (isPending || loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#E2ECE8]">
        <Loader2 className="size-9 animate-spin text-[#123C3A]" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#E2ECE8] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#9B704B]">
              <BookMarked size={17} />
              <span>YOUR PERSONAL LIBRARY</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#123C3A] sm:text-4xl">
              My Bookshelf
            </h1>

            <p className="mt-2 text-sm text-[#6B8279] sm:text-base">
              Manage and organize your personal book collection.
            </p>
          </div>

          <Link
            href="/add-book"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#123C3A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D514D] hover:shadow-md"
          >
            <BookPlus size={18} />
            Add New Book
          </Link>
        </div>

        <div className="mb-6 flex items-center justify-between rounded-xl border border-[#D5E0D9] bg-[#FAFCFA] px-5 py-4 shadow-sm">
          <div>
            <p className="text-sm font-medium text-[#6B8279]">
              Total Books in Your Collection
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#123C3A]">
              {books.length}{" "}
              <span className="text-sm font-medium text-[#6B8279]">
                {books.length === 1 ? "Book" : "Books"}
              </span>
            </h2>
          </div>

          <div className="flex size-12 items-center justify-center rounded-xl bg-[#E2ECE8] text-[#123C3A]">
            <BookOpen size={25} />
          </div>
        </div>

        {books.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#A8BDB2] bg-[#FAFCFA] px-5 text-center shadow-sm">
            <div className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-[#E2ECE8] text-[#123C3A]">
              <BookOpen size={32} />
            </div>

            <h2 className="text-xl font-bold text-[#123C3A]">
              Your Bookshelf is Empty
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[#6B8279]">
              Start building your personal library by adding your first book.
            </p>

            <Link
              href="/add-book"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#123C3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D514D]"
            >
              <BookPlus size={17} />
              Add Your First Book
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <div
                key={book._id}
                className="group relative overflow-hidden rounded-2xl border border-[#D5E0D9] bg-[#FAFCFA] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#123C3A]/30 hover:shadow-xl hover:shadow-[#123C3A]/10"
              >
                <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-[#E9EDE7] via-[#F5F5EF] to-[#D5E0D9] sm:h-48">
                  <div className="absolute -right-10 -top-10 size-28 rounded-full bg-[#123C3A]/5 blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 size-28 rounded-full bg-[#9B704B]/10 blur-2xl" />

                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="z-10 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 z-20 rounded-full border border-white/50 bg-[#123C3A]/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-sm">
                    {book.category}
                  </span>
                </div>

                <div className="p-3 sm:p-4">
                  <div className="min-h-[58px]">
                    <h2
                      className="line-clamp-2 font-serif text-sm font-bold leading-snug text-[#123C3A] transition-colors group-hover:text-[#9B704B] sm:text-base"
                      title={book.title}
                    >
                      {book.title}
                    </h2>

                    <p className="mt-1 truncate text-[11px] font-medium text-[#6B8279] sm:text-xs">
                      By {book.author}
                    </p>
                  </div>

                  <div className="my-3 h-px bg-[#D5E0D9]" />

                  <div className="flex items-center justify-between rounded-lg bg-[#E9EDE7] px-2.5 py-2">
                    <div className="flex items-center gap-2">
                      <BookMarked size={15} className="text-[#123C3A]" />

                      <span className="text-[10px] font-semibold text-[#6B8279] sm:text-xs">
                        Available Copies
                      </span>
                    </div>

                    <span className="flex size-7 items-center justify-center rounded-md bg-white text-xs font-bold text-[#123C3A] shadow-sm">
                      {book.totalCopies}
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <EditBook book={book} />
                    <DeleteBook book={book} />
                  </div>
                </div>

                <div className="h-1 w-0 bg-[#123C3A] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyBooksPage;
