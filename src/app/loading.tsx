
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonBook = () => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300">

      {/* Book Cover Area */}
      <div className="relative flex h-[270px] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-6">

        {/* Background Decoration */}
        <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full border border-gray-200/70" />
        <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full border border-gray-200/70" />

        {/* Book Shadow */}
        <div className="absolute bottom-7 h-5 w-36 rounded-[50%] bg-gray-300/40 blur-md" />

        {/* Book */}
        <div className="relative h-[215px] w-[150px]">

          {/* Book Spine */}
          <div className="absolute left-0 top-1 h-[210px] w-4 rounded-l-md bg-gray-300 shadow-inner" />

          {/* Book Cover */}
          <div className="absolute left-3 top-0 h-[215px] w-[137px] overflow-hidden rounded-r-lg border border-gray-200 bg-gray-100 shadow-[5px_8px_12px_rgba(0,0,0,0.10)]">

            {/* Cover Texture */}
            <div className="absolute inset-2 border border-gray-200" />

            {/* Top Decoration */}
            <div className="absolute left-1/2 top-7 flex -translate-x-1/2 flex-col items-center gap-2">
              <Skeleton className="h-2 w-12 bg-gray-300" />
              <Skeleton className="h-1 w-8 bg-gray-200" />
            </div>

            {/* Center Illustration */}
            <div className="absolute left-1/2 top-1/2 flex h-[75px] w-[75px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-gray-200">
              <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
            </div>

            {/* Bottom Title */}
            <div className="absolute bottom-7 left-1/2 w-[85px] -translate-x-1/2 space-y-2">
              <Skeleton className="h-2.5 w-full bg-gray-300" />
              <Skeleton className="mx-auto h-1.5 w-3/5 bg-gray-200" />
            </div>

          </div>
        </div>

        {/* Cover Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40" />
      </div>

      {/* Book Information */}
      <div className="space-y-4 bg-white p-4 sm:p-5">

        {/* Category & Status */}
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-6 w-20 rounded-full bg-gray-200" />
          <Skeleton className="h-5 w-16 rounded-full bg-gray-200" />
        </div>

        {/* Book Title */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-[90%] rounded-md bg-gray-200" />
          <Skeleton className="h-5 w-[60%] rounded-md bg-gray-200" />
        </div>

        {/* Author Information */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-9 shrink-0 rounded-full bg-gray-200" />

          <div className="flex-1 space-y-2">
            <Skeleton className="h-2.5 w-14 bg-gray-300" />
            <Skeleton className="h-3.5 w-28 max-w-full bg-gray-200" />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2 border-t border-gray-100 pt-3">
          <Skeleton className="h-3 w-full bg-gray-200" />
          <Skeleton className="h-3 w-[85%] bg-gray-200" />
        </div>

        {/* Bottom Button */}
        <Skeleton className="h-11 w-full rounded-xl bg-gray-200" />

      </div>
    </div>
  );
};

export default SkeletonBook;
