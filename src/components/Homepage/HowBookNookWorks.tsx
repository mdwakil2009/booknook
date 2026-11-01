
import {
  Search,
  BookOpen,
  Bookmark,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export default function HowBookNookWorks() {
  return (
    <section className="bg-[#E2ECE8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D5B982]/30 px-4 py-2 text-sm font-semibold text-[#123C3A]">
            <Sparkles size={15} />
            Your Reading Journey
          </span>

          <h2 className="text-3xl font-bold text-[#123C3A] sm:text-4xl lg:text-5xl">
            How BookNook Works
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#405A51] sm:text-base">
            Three simple steps between you and your next favorite book.
            Reading has never been this easy.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          {/* Step 01 */}
          <div className="rounded-2xl border border-[#D5B982]/50 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#123C3A]/5 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold tracking-[3px] text-[#A88B54]">
                STEP 01
              </span>

              <div className="flex size-9 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982]">
                <Search size={18} />
              </div>
            </div>

            <div className="relative mb-6 flex h-32 items-center justify-center">
              <div className="absolute size-28 rounded-full bg-[#E2ECE8]" />

              <div className="relative flex size-20 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982] shadow-md">
                <BookOpen size={38} strokeWidth={1.6} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-[#123C3A]">
                Discover Your Next Read
              </h3>

              <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#405A51]">
                Explore our collection and find books that match your interests,
                mood, and imagination.
              </p>

              <div className="mt-4 inline-flex items-center rounded-full bg-[#E2ECE8] px-4 py-2 text-xs font-semibold text-[#123C3A]">
                Explore Library
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="rounded-2xl border border-[#D5B982]/50 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#123C3A]/5 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold tracking-[3px] text-[#A88B54]">
                STEP 02
              </span>

              <div className="flex size-9 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982]">
                <Bookmark size={18} />
              </div>
            </div>

            <div className="relative mb-6 flex h-32 items-center justify-center">
              <div className="absolute size-28 rounded-full bg-[#F0E8D5]" />

              <div className="relative flex size-20 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982] shadow-md">
                <Bookmark size={38} strokeWidth={1.6} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-[#123C3A]">
                Borrow & Enjoy
              </h3>

              <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#405A51]">
                Choose your favorite book and borrow it with just one click.
                Your next adventure starts here.
              </p>

              <div className="mt-4 inline-flex items-center rounded-full bg-[#E2ECE8] px-4 py-2 text-xs font-semibold text-[#123C3A]">
                7 Days Reading
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="rounded-2xl border border-[#D5B982]/50 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#123C3A]/5 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold tracking-[3px] text-[#A88B54]">
                STEP 03
              </span>

              <div className="flex size-9 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982]">
                <RefreshCw size={18} />
              </div>
            </div>

            <div className="relative mb-6 flex h-32 items-center justify-center">
              <div className="absolute size-28 rounded-full bg-[#E2ECE8]" />

              <div className="relative flex size-20 items-center justify-center rounded-full bg-[#123C3A] text-[#D5B982] shadow-md">
                <RefreshCw size={38} strokeWidth={1.6} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-[#123C3A]">
                Return & Repeat
              </h3>

              <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#405A51]">
                Return your book when you're done and discover another wonderful
                story to enjoy.
              </p>

              <div className="mt-4 inline-flex items-center rounded-full bg-[#E2ECE8] px-4 py-2 text-xs font-semibold text-[#123C3A]">
                Happy Reading
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
