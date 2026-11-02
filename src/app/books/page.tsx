
import Link from "next/link";
import { ArrowUpRight, BookOpen, Library, UserRound } from "lucide-react";
import { IBook } from "@/lib/type";

const AllBookPage = async () => {
  const res = await fetch("http://localhost:8000/books", {
    cache: "no-store",
  });

  const data: IBook[] = await res.json();

  return (
    <main className="min-h-screen bg-[#E2ECE8] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <section className="-mt-2 mb-12 text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-[#D0DDD6] bg-[#123C3A] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-white">
            <BookOpen size={15} />
            Your Little Corner of Books
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#123C3A] sm:text-5xl lg:text-6xl">
            Explore Our{" "}
            <span className="text-[#9B704B]">Bookshelf</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#60766D] sm:text-base">
            Discover amazing stories, explore new ideas, and find your next
            favorite book from our growing collection.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#A67C52]" />
        </section>

        {/* Collection Information */}
        <section className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#6B8279]">
              Discover Something New
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#123C3A] sm:text-3xl">
              All Books
            </h2>

            <p className="mt-2 text-sm text-[#6B8279]">
              Browse our collection and find your next read.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-xl border border-[#C9D8D0] bg-[#F8FBF8] px-4 py-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#123C3A] text-white">
              <Library size={20} />
            </div>

            <div>
              <p className="text-xl font-bold text-[#123C3A]">
                {data.length}
              </p>
              <p className="text-xs text-[#6B8279]">Books Available</p>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        {data.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((book) => (
              <article
                key={book._id}
                className="group overflow-hidden rounded-2xl border border-[#D5E0D9] bg-[#FAFCFA] p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#9B704B]/50 hover:shadow-xl hover:shadow-[#123C3A]/10"
              >
                {/* Book Cover */}
                <div className="relative flex h-[330px] items-center justify-center overflow-hidden rounded-xl bg-[#E9EDE7] p-3">
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full w-full rounded-lg object-contain shadow-md transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-[#987A5C]">
                      <BookOpen size={48} strokeWidth={1.3} />
                      <p className="mt-3 text-xs">Cover Unavailable</p>
                    </div>
                  )}

                  {/* Category Badge */}
                  <span className="absolute left-3 top-3 max-w-[75%] truncate rounded-full border border-[#D5E0D9] bg-[#FAFCFA]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#123C3A] shadow-sm">
                    {book?.category || "General"}
                  </span>
                </div>

                {/* Book Information */}
                <div className="px-2 pb-2 pt-5">
                  <h3 className="line-clamp-1 font-serif text-lg font-bold text-[#263D35] transition-colors group-hover:text-[#9B704B]">
                    {book?.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#718078]">
                    By{" "}
                    <span className="font-semibold text-[#4D6258]">
                      {book.author}
                    </span>
                  </p>

                  {/* Uploaded By */}
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#EDF3EF] px-3 py-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123C3A] text-white">
                      <UserRound size={15} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-[#84948B]">
                        Added By
                      </p>
                      <p className="truncate text-xs font-semibold text-[#3E554A]">
                        {book?.userName}
                      </p>
                    </div>
                  </div>

                  <div className="my-4 border-t border-[#E5EBE6]" />

                  {/* View Details */}
                  <Link
                    href={`/books/${book?._id}`}
                    className="flex w-full items-center justify-between rounded-xl bg-[#123C3A] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#9B704B]"
                  >
                    <span>View Details</span>

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-[#B8C9BE] bg-[#FAFCFA] px-5 py-20 text-center">
            <BookOpen
              size={45}
              className="mx-auto text-[#9B704B]"
              strokeWidth={1.3}
            />

            <h3 className="mt-5 font-serif text-2xl font-bold text-[#123C3A]">
              No Books Found!
            </h3>

            <p className="mt-2 text-sm text-[#718078]">
              There are no books available at the moment.
            </p>
          </div>
        )}

        {/* Bottom Section */}
        <section className="mt-16 border-t border-[#C9D8D0] pt-8 text-center">
          <p className="font-serif text-lg italic text-[#795C43]">
            Every book is a new journey waiting to begin.
          </p>

          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[3px] text-[#82958A]">
            Welcome to BookNook
          </p>
        </section>
      </div>
    </main>
  );
};

export default AllBookPage;
