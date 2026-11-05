
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonBook = () => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#C9DCD4] bg-[#E2ECE8] shadow-[0_8px_30px_rgba(18,60,58,0.06)] transition-colors duration-300 dark:border-[#354C43] dark:bg-[#20332F] dark:shadow-[0_8px_30px_rgba(0,0,0,0.15)]">

      {/* Book Cover Area */}
      <div className="relative flex h-[270px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#E2ECE8] via-[#D8E8E1] to-[#C9DED5] p-6 dark:from-[#30463D] dark:via-[#293D35] dark:to-[#24372F]">

        {/* Background Decoration */}
        <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full border border-[#123C3A]/10 dark:border-[#82998A]/20" />
        <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full border border-[#123C3A]/10 dark:border-[#82998A]/20" />

        {/* Book Shadow */}
        <div className="absolute bottom-7 h-5 w-36 rounded-[50%] bg-[#123C3A]/15 blur-md dark:bg-black/30" />

        {/* Book */}
        <div className="relative h-[215px] w-[150px]">

          {/* Book Spine */}
          <div className="absolute left-0 top-1 h-[210px] w-4 rounded-l-md bg-[#B9CEC3] shadow-inner dark:bg-[#536C5E]" />

          {/* Book Cover */}
          <div className="absolute left-3 top-0 h-[215px] w-[137px] overflow-hidden rounded-r-lg border border-[#B9CEC3] bg-[#D1E1D8] shadow-[5px_8px_12px_rgba(18,60,58,0.16)] dark:border-[#667F70] dark:bg-[#3D5548] dark:shadow-[5px_8px_16px_rgba(0,0,0,0.3)]">

            {/* Cover Texture */}
            <div className="absolute inset-2 border border-[#AFC8BB] dark:border-[#82998A]/40" />

            {/* Top Decoration */}
            <div className="absolute left-1/2 top-7 flex -translate-x-1/2 flex-col items-center gap-2">
              <Skeleton className="h-2 w-12 bg-[#AFC8BB] dark:bg-[#82998A]" />
              <Skeleton className="h-1 w-8 bg-[#B9CEC3] dark:bg-[#718A7A]" />
            </div>

            {/* Center Illustration */}
            <div className="absolute left-1/2 top-1/2 flex h-[75px] w-[75px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#AFC8BB] bg-[#C0D7CA] dark:border-[#82998A] dark:bg-[#4D6858]">
              <Skeleton className="h-10 w-10 rounded-full bg-[#AFC8BB] dark:bg-[#82998A]" />
            </div>

            {/* Bottom Title */}
            <div className="absolute bottom-7 left-1/2 w-[85px] -translate-x-1/2 space-y-2">
              <Skeleton className="h-2.5 w-full bg-[#AFC8BB] dark:bg-[#82998A]" />
              <Skeleton className="mx-auto h-1.5 w-3/5 bg-[#B9CEC3] dark:bg-[#718A7A]" />
            </div>

          </div>
        </div>

        {/* Cover Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 dark:via-white/[0.02] dark:to-white/[0.04]" />
      </div>

      {/* Book Information */}
      <div className="space-y-4 p-4 sm:p-5">

        {/* Category & Status */}
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-6 w-20 rounded-full bg-[#C9DCD2] dark:bg-[#40584B]" />
          <Skeleton className="h-5 w-16 rounded-full bg-[#C9DCD2] dark:bg-[#40584B]" />
        </div>

        {/* Book Title */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-[90%] rounded-md bg-[#BDD2C7] dark:bg-[#40584B]" />
          <Skeleton className="h-5 w-[60%] rounded-md bg-[#BDD2C7] dark:bg-[#40584B]" />
        </div>

        {/* Author Information */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-9 shrink-0 rounded-full bg-[#BDD2C7] dark:bg-[#40584B]" />

          <div className="flex-1 space-y-2">
            <Skeleton className="h-2.5 w-14 bg-[#AFC8BB] dark:bg-[#526B5D]" />
            <Skeleton className="h-3.5 w-28 max-w-full bg-[#BDD2C7] dark:bg-[#40584B]" />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2 border-t border-[#C9DCD2] pt-3 dark:border-[#40584B]">
          <Skeleton className="h-3 w-full bg-[#C9DCD2] dark:bg-[#40584B]" />
          <Skeleton className="h-3 w-[85%] bg-[#C9DCD2] dark:bg-[#40584B]" />
        </div>

        {/* Bottom Button */}
        <Skeleton className="h-11 w-full rounded-xl bg-[#BDD2C7] dark:bg-[#40584B]" />

      </div>
    </div>
  );
};

export default SkeletonBook;