
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";

interface ViewDetailsButtonProps {
  bookId: string;
}

const ViewDetailsButton = ({ bookId }: ViewDetailsButtonProps) => {
  const { data: session, isPending } = authClient.useSession();

  const href = session?.user ? `/books/${bookId}` : "/login";

  return (
    <Link
      href={isPending ? "#" : href}
      aria-disabled={isPending}
      onClick={(e) => {
        if (isPending) e.preventDefault();
      }}
      className="mt-auto flex w-full items-center justify-between rounded-xl bg-[#123C3A] px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#123C3A]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#60766D] hover:shadow-lg"
    >
      <span>View Details</span>

      <span className="flex size-8 items-center justify-center rounded-lg bg-white/15 transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  );
};

export default ViewDetailsButton;
