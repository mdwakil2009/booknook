"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { GetTokenFromClient } from "@/lib/GetTokenFromClient";

interface ReturnButtonProps {
  borrowId: string;
}

const ReturnButton = ({ borrowId }: ReturnButtonProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleReturn = async () => {
    const token = await GetTokenFromClient();
    try {
      setLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/borrow/${borrowId}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Return failed");
      }

      toast.success("Book returned successfully!");
      router.refresh();
    } catch (error) {
      console.error("Return Error:", error);
      toast.error("Failed to return book!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleReturn}
      disabled={loading}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
    >
      <RotateCcw size={15} />
      {loading ? "Returning..." : "Return Book"}
    </button>
  );
};

export default ReturnButton;
