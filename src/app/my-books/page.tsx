"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  BookPlus,
  Loader2,

  Trash2,
  BookMarked,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { IBook } from "@/lib/type";
import Image from "next/image";
import EditBook from "@/components/EditBook";

const MyBooksPage = ({book}:{book:IBook[]}) => {
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

        {/* Book Count */}
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

        {/* Empty State */}
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
          /* Books Grid */
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <div
                key={book._id}
                className="group overflow-hidden rounded-xl border border-[#D5E0D9] bg-[#FAFCFA] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Cover Image */}
                <div className="relative overflow-hidden bg-[#E9EDE7]">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={300}
                    height={100}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
                  />

                  <span className="absolute left-2 top-2 rounded-full bg-[#123C3A]/90 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm">
                    {book.category}
                  </span>
                </div>

                {/* Book Information */}
                <div className="p-3 sm:p-4">
                  <h2
                    className="line-clamp-1 text-sm font-bold text-[#123C3A] sm:text-base"
                    title={book.title}
                  >
                    {book.title}
                  </h2>

                  <p className="mt-1 truncate text-xs text-[#6B8279] sm:text-sm">
                    By {book.author}
                  </p>

                  <div className="mt-3 flex items-center justify-between border-t border-[#E2ECE8] pt-3">
                    <span className="text-[11px] text-[#6B8279] sm:text-xs">
                      Available Copies
                    </span>

                    <span className="rounded-md bg-[#E2ECE8] px-2 py-1 text-xs font-bold text-[#123C3A]">
                      {book.totalCopies}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                   
                      <EditBook book={book}></EditBook>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-red-100 bg-red-50 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 size={13} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyBooksPage;
