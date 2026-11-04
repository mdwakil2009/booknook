
import {
  Search,
  BookOpen,
  Bookmark,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export default function HowBookNookWorks() {
  return (
    <section className="bg-[#E2ECE8] px-4 py-16 dark:bg-[#172522] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D5B982]/30 px-4 py-2 text-sm font-semibold text-[#123C3A] dark:bg-[#D5B982]/15 dark:text-[#D5B982]">
            <Sparkles size={15} />
            Your Reading Journey
          </span>

          <h2 className="text-3xl font-bold text-[#123C3A] dark:text-[#E8F0EA] sm:text-4xl lg:text-5xl">
            How  Borrowing  Works
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#405A51] dark:text-[#B8C9C1] sm:text-base">
            Three simple steps between you and your next favorite book.
            Reading has never been this easy.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          {/* Step 01 */}
          <div className="rounded-2xl border border-[#D5B982]/50 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#123C3A]/5 dark:border-[#526B60] dark:bg-[#20332F] sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold tracking-[3px] text-[#A88B54] dark:text-[#D5B982]">
                STEP 01
              </span>

              <div className="flex size-9 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982] dark:bg-[#A8C9B5] dark:text-[#172522]">
                <Search size={18} />
              </div>
            </div>

            <div className="relative mb-6 flex h-32 items-center justify-center">
              <div className="absolute size-28 rounded-full bg-[#E2ECE8] dark:bg-[#30463D]" />

              <div className="relative flex size-20 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982] shadow-md dark:bg-[#A8C9B5] dark:text-[#172522]">
                <BookOpen size={38} strokeWidth={1.6} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                Discover Your Next Read
              </h3>

              <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#405A51] dark:text-[#B8C9C1]">
                Explore our collection and find books that match your interests,
                mood, and imagination.
              </p>

              <div className="mt-4 inline-flex items-center rounded-full bg-[#E2ECE8] px-4 py-2 text-xs font-semibold text-[#123C3A] dark:bg-[#30463D] dark:text-[#B8D8C5]">
                Explore Library
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="rounded-2xl border border-[#D5B982]/50 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#123C3A]/5 dark:border-[#526B60] dark:bg-[#20332F] sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold tracking-[3px] text-[#A88B54] dark:text-[#D5B982]">
                STEP 02
              </span>

              <div className="flex size-9 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982] dark:bg-[#A8C9B5] dark:text-[#172522]">
                <Bookmark size={18} />
              </div>
            </div>

            <div className="relative mb-6 flex h-32 items-center justify-center">
              <div className="absolute size-28 rounded-full bg-[#F0E8D5] dark:bg-[#3B4035]" />

              <div className="relative flex size-20 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982] shadow-md dark:bg-[#A8C9B5] dark:text-[#172522]">
                <Bookmark size={38} strokeWidth={1.6} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                Borrow & Enjoy
              </h3>

              <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#405A51] dark:text-[#B8C9C1]">
                Choose your favorite book and borrow it with just one click.
                Your next adventure starts here.
              </p>

              <div className="mt-4 inline-flex items-center rounded-full bg-[#E2ECE8] px-4 py-2 text-xs font-semibold text-[#123C3A] dark:bg-[#30463D] dark:text-[#B8D8C5]">
                7 Days Reading
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="rounded-2xl border border-[#D5B982]/50 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#123C3A]/5 dark:border-[#526B60] dark:bg-[#20332F] sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold tracking-[3px] text-[#A88B54] dark:text-[#D5B982]">
                STEP 03
              </span>

              <div className="flex size-9 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982] dark:bg-[#A8C9B5] dark:text-[#172522]">
                <RefreshCw size={18} />
              </div>
            </div>

            <div className="relative mb-6 flex h-32 items-center justify-center">
              <div className="absolute size-28 rounded-full bg-[#E2ECE8] dark:bg-[#30463D]" />

              <div className="relative flex size-20 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982] shadow-md dark:bg-[#A8C9B5] dark:text-[#172522]">
                <RefreshCw size={38} strokeWidth={1.6} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                Return & Repeat
              </h3>

              <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#405A51] dark:text-[#B8C9C1]">
                Return your book when you're done and discover another wonderful
                story to enjoy.
              </p>

              <div className="mt-4 inline-flex items-center rounded-full bg-[#E2ECE8] px-4 py-2 text-xs font-semibold text-[#123C3A] dark:bg-[#30463D] dark:text-[#B8D8C5]">
                Happy Reading
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
