"use client";

import { useState } from "react";
import { BookmarkPlus, User, Mail, X } from "lucide-react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { GetTokenFromClient } from "@/lib/GetTokenFromClient";

interface BorrowButtonProps {
  bookId: string;
  bookTitle: string;
  bookImage: string;
}

const BorrowButton = ({ bookId, bookTitle, bookImage }: BorrowButtonProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Borrow Form Submit Function
  const handleBorrows = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first!");
      return;
    }

    if (!bookId || !bookTitle || !bookImage) {
      toast.error("Book information is missing!");
      return;
    }

    try {
      setLoading(true);

      const borrowDate = new Date();

      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 7);

      const data = {
        bookId,
        bookTitle,
        bookImage,
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        userImage: user.image,
        borrowDate: borrowDate.toISOString(),
        returnDate: returnDate.toISOString(),
      };

      const token = await GetTokenFromClient();

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/borrows`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const borrowsresponse = await res.json();

      // Check if user already borrowed a book
      if (res.status === 409) {
        toast.error(borrowsresponse.message);
        return;
      }

      // Check other errors
      if (!res.ok) {
        throw new Error(borrowsresponse.message || "Borrow failed");
      }

      console.log("Borrow Success:", borrowsresponse);

      toast.success("Book borrowed successfully!");

      setOpen(false);
    } catch (error) {
      console.error("Borrow Error:", error);

      toast.error(
        error instanceof Error ? error.message : "Failed to borrow book!",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Borrow Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={isPending || !user}
        className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#123C3A] px-6 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#60766D] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <BookmarkPlus
          size={19}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        {isPending ? "Loading..." : "Borrow This Book"}
      </button>

      {/* Borrow Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-[#E8DDCE] bg-[#FFFDF8] p-6 shadow-2xl sm:p-8">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-[#F1E9DD] text-[#654321] transition hover:bg-[#E8DDCE]"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-[#E9DDCC] text-[#654321]">
                <BookmarkPlus size={24} />
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#123C3A]">
                Borrow This Book
              </h2>

              <p className="mt-2 text-sm text-[#7B6B59]">
                Please confirm your account information before borrowing this
                book.
              </p>
            </div>

            {/* Borrow Form */}
            <form onSubmit={handleBorrows}>
              <div className="space-y-4">
                {/* User Name */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#654321]">
                    <User size={16} />
                    User Name
                  </label>

                  <input
                    type="text"
                    value={user?.name || ""}
                    readOnly
                    className="w-full rounded-xl border border-[#E8DDCE] bg-[#F7F2E9] px-4 py-3 text-sm text-[#654321] outline-none"
                  />
                </div>

                {/* User Email */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#654321]">
                    <Mail size={16} />
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={user?.email || ""}
                    readOnly
                    className="w-full rounded-xl border border-[#E8DDCE] bg-[#F7F2E9] px-4 py-3 text-sm text-[#654321] outline-none"
                  />
                </div>
              </div>

              {/* Confirm Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-7 w-full rounded-xl bg-[#123C3A] px-5 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#60766D] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Borrowing..." : "Confirm Borrow"}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-[#9B704B]">
              Your account information cannot be changed.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BorrowButton;
