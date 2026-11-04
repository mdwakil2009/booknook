"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";

interface ViewDetailsButtonProps {
  bookId: string;
}

const ViewDetailsButton = ({ bookId }: ViewDetailsButtonProps) => {
  const { data: session, isPending } = authClient.useSession();

  const href = session?.user ? `/books/${bookId}` : "/login";

  return (
    <div className="mt-auto">
      <Link
        href={isPending ? "#" : href}
        aria-disabled={isPending}
        onClick={(e) => {
          if (isPending) e.preventDefault();
        }}
        className="group/link flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-bold text-[#123C3A] transition-all duration-300 hover:bg-[#123C3A] hover:text-white dark:text-[#E8F0EA] dark:hover:bg-[#A8C9B5] dark:hover:text-[#172522]"
      >
        <span>{isPending ? "Loading..." : "View Details"}</span>

        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover/link:translate-x-1"
        />
      </Link>
    </div>
  );
};

export default ViewDetailsButton;