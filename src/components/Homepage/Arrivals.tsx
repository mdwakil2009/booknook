import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { IBook } from "@/lib/type";
import ViewDetailsButton from "../ViewDetailsButtonProps";

const Arrivals = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/arrivals`, {
    cache: "no-store",
  });

  const data: IBook[] = await res.json();

  return (
    <section className="bg-white px-4 py-14 dark:bg-[#172522] sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-9 text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D8E5DF] bg-[#E8F0EC] px-4 py-2 text-[11px] font-bold tracking-[2px] text-[#123C3A] dark:border-[#526B60] dark:bg-[#30463D] dark:text-[#E8F0EA]">
            <Sparkles size={14} />
            FRESH FROM OUR LIBRARY
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[#123C3A] dark:text-[#E8F0EA] sm:text-4xl md:text-5xl">
            New Arrivals
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#65766E] dark:text-[#A8BDB3] sm:text-base">
            Discover the latest additions to our collection and find your next
            favorite book.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#C2F800]" />
        </div>

        {/* Books Grid */}
        {data.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-4">
            {data.map((book) => (
              <article
                key={book._id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E1E6DF] bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#123C3A]/10 dark:border-[#526B60] dark:bg-[#20332F] dark:hover:shadow-black/20"
              >
                {/* Book Image */}
                <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#F0EADF] dark:bg-[#30463D] sm:h-52">
                  {book.image ? (
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-[#9B704B] dark:text-[#C7A887]">
                      <BookOpen size={42} strokeWidth={1.3} />
                      <p className="mt-2 text-xs">No Cover Available</p>
                    </div>
                  )}

                  {/* Book Icon */}
                  <div className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-white/90 text-[#123C3A] shadow-sm backdrop-blur-sm dark:bg-[#20332F]/90 dark:text-[#E8F0EA]">
                    <BookOpen size={15} />
                  </div>
                </div>

                {/* Book Information */}
                <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
                  {/* Category */}
                  <div className="mb-2">
                    <span className="inline-block max-w-full truncate rounded-full bg-[#E8F0EA] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#37665A] dark:bg-[#30463D] dark:text-[#B8D8C5] sm:text-[10px]">
                      {book.category || "General"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    title={book.title}
                    className="line-clamp-2 min-h-10 font-serif text-sm font-bold leading-snug text-[#123C3A] transition-colors group-hover:text-[#9B704B] dark:text-[#E8F0EA] dark:group-hover:text-[#C7A887] sm:text-base"
                  >
                    {book.title}
                  </h3>

                  {/* Author */}
                  <p className="mt-1.5 truncate text-[11px] text-[#718078] dark:text-[#A8BDB3] sm:text-xs">
                    By{" "}
                    <span className="font-semibold text-[#4D6258] dark:text-[#C1D2C8]">
                      {book.author}
                    </span>
                  </p>

                  {/* Divider */}
                  <div className="my-3 border-t border-[#E9EDE9] dark:border-[#526B60]" />

                  <ViewDetailsButton bookId={book._id} />
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-[#C8D8CF] bg-white py-16 text-center dark:border-[#526B60] dark:bg-[#20332F]">
            <BookOpen
              className="mx-auto mb-3 text-[#123C3A] dark:text-[#A8C9B5]"
              size={40}
            />

            <h3 className="text-xl font-bold text-[#123C3A] dark:text-[#E8F0EA]">
              No Books Available
            </h3>

            <p className="mt-2 text-sm text-[#74847B] dark:text-[#A8BDB3]">
              New books will appear here soon.
            </p>
          </div>
        )}

        {/* See All Books Button */}
        <div className="mt-10 text-center">
          <Link
            href="/books"
            className="group inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-[#123C3A] px-7 text-sm font-bold text-white shadow-lg shadow-[#123C3A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1B514D] hover:shadow-xl dark:bg-[#A8C9B5] dark:text-[#172522] dark:hover:bg-[#C1D8CA]"
          >
            Explore All Books
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <p className="mt-3 text-xs text-[#84938A] dark:text-[#A8BDB3]">
            Explore more stories waiting for you
          </p>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
