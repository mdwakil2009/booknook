
import { BookOpen, Library } from "lucide-react";
import { IBook } from "@/lib/type";
import ViewDetailsButton from "@/components/ViewDetailsButtonProps";

interface AllBookPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

const AllBookPage = async ({ searchParams }: AllBookPageProps) => {
  const { category } = await searchParams;

  const url = category
    ? `http://localhost:8000/books?category=${encodeURIComponent(category)}`
    : "http://localhost:8000/books";

  const res = await fetch(url, {
    cache: "no-store",
  });

  const data: IBook[] = await res.json();

  return (
    <main className="min-h-screen bg-[#E2ECE8] px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <section className="mb-10 text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-[#D0DDD6] bg-[#123C3A] px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-white sm:text-xs">
            <BookOpen size={14} />
            Your Little Corner of Books
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-[#123C3A] sm:text-5xl lg:text-6xl">
            Explore Our <span className="text-[#9B704B]">Bookshelf</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-[#60766D] sm:text-sm sm:leading-7">
            Discover amazing stories, explore new ideas, and find your next
            favorite book from our growing collection.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#A67C52]" />
        </section>

        {/* Books Section Header */}
        <section className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-[#6B8279] sm:text-xs">
              Discover Something New
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#123C3A] sm:text-3xl">
              {category || "All Books"}
            </h2>

            <p className="mt-1.5 text-xs text-[#123C3A] sm:text-sm">
              {category
                ? `Explore our ${category} collection and find your next read.`
                : "Browse our collection and find your next read."}
            </p>
          </div>

          {/* Book Count */}
          <div className="flex w-fit items-center gap-3 rounded-xl border border-[#C9D8D0] bg-[#F8FBF8] px-3 py-2.5 shadow-sm">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[#123C3A] text-white">
              <Library size={18} />
            </div>

            <div>
              <p className="text-lg font-bold leading-tight text-[#123C3A]">
                {data.length}
              </p>
              <p className="text-[10px] text-[#6B8279] sm:text-xs">
                Books Available
              </p>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        {data.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-4">
            {data.map((book) => (
              <article
                key={book._id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E1E6DF] bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#123C3A]/10"
              >
                {/* Book Image */}
                <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#F0EADF] sm:h-52">
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-[#9B704B]">
                      <BookOpen size={42} strokeWidth={1.3} />
                      <p className="mt-2 text-xs">No Cover Available</p>
                    </div>
                  )}

                  {/* Book Icon */}
                  <div className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-white/90 text-[#123C3A] shadow-sm backdrop-blur-sm">
                    <BookOpen size={15} />
                  </div>
                </div>

                {/* Book Information */}
                <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
                  {/* Category */}
                  <div className="mb-2">
                    <span className="inline-block max-w-full truncate rounded-full bg-[#E8F0EA] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#37665A] sm:text-[10px]">
                      {book.category || "General"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    title={book.title}
                    className="line-clamp-2 min-h-10 font-serif text-sm font-bold leading-snug text-[#123C3A] transition-colors group-hover:text-[#9B704B] sm:text-base"
                  >
                    {book.title}
                  </h3>

                  {/* Author */}
                  <p className="mt-1.5 truncate text-[11px] text-[#718078] sm:text-xs">
                    By{" "}
                    <span className="font-semibold text-[#4D6258]">
                      {book.author}
                    </span>
                  </p>

                  {/* Divider */}
                  <div className="my-3 border-t border-[#E9EDE9]" />

                  {/* View Details Button */}
                  <div className="mt-auto">
                    <ViewDetailsButton bookId={book._id} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-[#B8C9BE] bg-[#FAFCFA] px-5 py-16 text-center">
            <BookOpen
              size={42}
              className="mx-auto text-[#9B704B]"
              strokeWidth={1.3}
            />

            <h3 className="mt-4 font-serif text-xl font-bold text-[#123C3A] sm:text-2xl">
              No Books Found!
            </h3>

            <p className="mt-2 text-xs text-[#718078] sm:text-sm">
              There are no books available in this category.
            </p>
          </div>
        )}

        {/* Bottom Section */}
        <section className="mt-12 border-t border-[#C9D8D0] pt-7 text-center">
          <p className="font-serif text-base italic text-[#795C43] sm:text-lg">
            Every book is a new journey waiting to begin.
          </p>

          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[3px] text-[#82958A]">
            Welcome to BookNook
          </p>
        </section>
      </div>
    </main>
  );
};

export default AllBookPage;
