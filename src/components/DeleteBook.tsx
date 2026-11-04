"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { IBook } from "@/lib/type";

const DeleteBook = ({ book }: { book: IBook }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:8000/my-book/${book._id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete book");
      }

      toast.success("Book deleted successfully!");

      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Delete Book Error:", error);
      toast.error("Failed to delete book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {/* Delete Button */}
      <AlertDialogTrigger
        render={
          <button
            type="button"
            className="group flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 text-sm font-semibold text-red-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-600/20 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-400 dark:hover:border-red-600 dark:hover:bg-red-600 dark:hover:text-white"
          >
            <Trash2
              size={16}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
            />
            Delete
          </button>
        }
      />

      {/* Confirmation Dialog */}
      <AlertDialogContent className="max-w-md rounded-2xl border border-[#D5E0D9] bg-[#FAFCFA] p-6 dark:border-[#526B60] dark:bg-[#20332F]">
        <AlertDialogHeader>
          <div className="mb-3 flex size-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400">
            <Trash2 size={27} />
          </div>

          <AlertDialogTitle className="text-xl font-bold text-[#123C3A] dark:text-[#E8F0EA]">
            Remove This Book?
          </AlertDialogTitle>

          <AlertDialogDescription className="text-sm leading-6 text-[#6B8279] dark:text-[#A8BDB3]">
            Are you sure you want to remove{" "}
            <span className="font-bold text-[#123C3A] dark:text-[#E8F0EA]">
              {book.title}
            </span>{" "}
            from your library? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-5 flex flex-row justify-end gap-2">
          <AlertDialogCancel
            disabled={loading}
            className="h-10 rounded-xl border border-[#D5E0D9] bg-white px-4 text-sm font-semibold text-[#123C3A] hover:bg-[#E9EDE7] dark:border-[#526B60] dark:bg-[#30463D] dark:text-[#E8F0EA] dark:hover:bg-[#40594D]"
          >
            Cancel
          </AlertDialogCancel>

          <button
            type="button"
            disabled={loading}
            onClick={handleDelete}
            className="h-10 rounded-xl bg-red-600 px-5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-red-600 dark:hover:bg-red-500"
          >
            {loading ? "Deleting..." : "Yes, Remove"}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBook;