
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  BookPlus,
  Loader2,
  User,
  Mail,
  ArrowRight,
  Sparkles,
  X,
  Link as LinkIcon,
} from "lucide-react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

import ClientPageTitle from "@/lib/ClientPageTitle";
import { GetTokenFromClient } from "@/lib/GetTokenFromClient";
import Image from "next/image";

const categories = ["Fiction", "Science", "History", "Kids", "Others"];

export default function AddBookPage() {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [totalCopies, setTotalCopies] = useState("1");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!user) {
      toast.error("Please login first.");
      router.push("/login");
      return;
    }

    const formData = new FormData(form);
    const bookData = Object.fromEntries(formData.entries());

    if (!category) {
      toast.error("Please select a book category.");
      return;
    }

    if (!image.trim()) {
      toast.error("Please enter a book image URL.");
      return;
    }

    const newBook = {
      title: String(bookData.title).trim(),
      author: String(bookData.author).trim(),
      category,
      totalCopies: Number(totalCopies),
      availableCopies: Number(totalCopies),
      image: image.trim(),
      description: String(bookData.description).trim(),
      userName: user.name,
      userEmail: user.email,
      addedAt: new Date().toISOString(),
    };

    console.log("New Book Data:", newBook);

    setIsLoading(true);

    try {
      const token = await GetTokenFromClient();

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newBook),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to add book.");
      }

      console.log("API Response:", result);

      toast.success("Book added successfully!");

      form.reset();
      setCategory("");
      setTotalCopies("1");
      setImage("");

      router.refresh();
    } catch (error) {
      console.error("Add Book Error:", error);

      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#E2ECE8] dark:bg-[#172522]">
        <Loader2 className="size-8 animate-spin text-[#123C3A] dark:text-[#A8C9B5]" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 pt-3 pb-8 dark:bg-[#172522] sm:px-6 lg:pt-3 lg:pb-10">
      <ClientPageTitle title="Add Book" />

      <div className="mx-auto max-w-3xl">
        {/* Page Heading */}
        <div className="mb-3 text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#123C3A] dark:text-[#E8F0EA] sm:text-3xl lg:text-4xl">
            Add a New Book
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-[#6B8279] dark:text-[#A8BDB3] sm:text-sm">
            Have a book worth sharing? Add it to BookNook and let other readers
            discover something wonderful.
          </p>
        </div>

        {/* Form Card */}
        <Card className="overflow-hidden rounded-2xl border border-[#D5B982]/50 bg-white py-0 shadow-lg shadow-[#123C3A]/5 dark:border-[#526B60] dark:bg-[#20332F] dark:shadow-black/20">
          {/* Card Header */}
          <div className="relative overflow-hidden bg-[#123C3A] px-5 py-5 text-white dark:bg-[#30463D] sm:px-7">
            <div className="absolute -right-10 -top-16 size-40 rounded-full border border-white/10" />
            <div className="absolute -right-2 -top-8 size-28 rounded-full border border-[#D5B982]/20" />

            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D5B982]">
                Book Submission
              </p>

              <h2 className="mt-1.5 text-lg font-bold sm:text-xl">
                Book Details
              </h2>

              <p className="mt-1 text-xs text-white/65">
                Complete the information below to publish your book.
              </p>
            </div>
          </div>

          <CardContent className="p-4 sm:p-6 lg:p-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Book Information */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#E2ECE8] text-[#123C3A] dark:bg-[#30463D] dark:text-[#A8C9B5]">
                    <BookOpen size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                      Book Information
                    </h3>

                    <p className="text-[11px] text-[#6B8279] dark:text-[#A8BDB3]">
                      Enter the basic details of your book.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Book Title */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="title"
                      className="text-xs font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
                    >
                      Book Title <span className="text-red-500">*</span>
                    </Label>

                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g. The Great Gatsby"
                      required
                      minLength={2}
                      className="h-10 border-[#D5B982]/50 bg-white text-sm text-[#123C3A] placeholder:text-gray-400 focus-visible:border-[#123C3A] dark:border-[#526B60] dark:bg-white dark:text-[#123C3A] dark:placeholder:text-gray-400"
                    />
                  </div>

                  {/* Author Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="author"
                      className="text-xs font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
                    >
                      Author Name <span className="text-red-500">*</span>
                    </Label>

                    <Input
                      id="author"
                      name="author"
                      placeholder="e.g. F. Scott Fitzgerald"
                      required
                      minLength={2}
                      className="h-10 border-[#D5B982]/50 bg-white text-sm text-[#123C3A] placeholder:text-gray-400 focus-visible:border-[#123C3A] dark:border-[#526B60] dark:bg-white dark:text-[#123C3A] dark:placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-[#123C3A] dark:text-[#E8F0EA]">
                    Book Category <span className="text-red-500">*</span>
                  </Label>

                  <Select
                    value={category}
                    onValueChange={(value) => setCategory(value ?? "")}
                  >
                    <SelectTrigger className="h-10 w-full border-[#D5B982]/50 bg-white text-sm text-[#123C3A] dark:border-[#526B60] dark:bg-white dark:text-[#123C3A]">
                      <SelectValue placeholder="Choose a book category" />
                    </SelectTrigger>

                    <SelectContent className="border-[#D5B982]/50 bg-white text-[#123C3A]">
                      {categories.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Total Copies */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-[#123C3A] dark:text-[#E8F0EA]">
                    Total Copies <span className="text-red-500">*</span>
                  </Label>

                  <Select
                    value={totalCopies}
                    onValueChange={(value) => setTotalCopies(value ?? "1")}
                  >
                    <SelectTrigger className="h-10 w-full border-[#D5B982]/50 bg-white text-sm text-[#123C3A] dark:border-[#526B60] dark:bg-white dark:text-[#123C3A]">
                      <SelectValue placeholder="Choose total copies" />
                    </SelectTrigger>

                    <SelectContent className="border-[#D5B982]/50 bg-white text-[#123C3A]">
                      {Array.from({ length: 20 }, (_, index) => index + 1).map(
                        (number) => (
                          <SelectItem
                            key={number}
                            value={String(number)}
                          >
                            {number} {number === 1 ? "Copy" : "Copies"}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>

                  <p className="text-[11px] leading-4 text-[#6B8279] dark:text-[#A8BDB3]">
                    Select how many copies are available in your library.
                  </p>
                </div>

                {/* Book Image */}
                <div className="space-y-2">
                  <Label
                    htmlFor="image"
                    className="text-xs font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
                  >
                    Book Cover Image <span className="text-red-500">*</span>
                  </Label>

                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279]" />

                    <Input
                      id="image"
                      name="image"
                      type="url"
                      placeholder="Paste your uploaded image URL here"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      required
                      className="h-10 border-[#D5B982]/50 bg-white pl-10 text-sm text-[#123C3A] placeholder:text-gray-400 dark:border-[#526B60] dark:bg-white dark:text-[#123C3A] dark:placeholder:text-gray-400"
                    />
                  </div>

                  <p className="text-[11px] leading-4 text-[#6B8279] dark:text-[#A8BDB3]">
                    Upload your book cover to ImgBB or Postimages, then paste
                    the image URL here.
                  </p>

                  {image && (
                    <div className="relative w-fit overflow-hidden rounded-xl border border-[#D5B982]/50 bg-white p-2">
                      <Image
                        src={image}
                        width={100}
                        height={100}
                        alt="Book cover preview"
                        className="h-36 w-24 rounded-lg object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => setImage("")}
                        className="absolute right-3 top-3 size-7 rounded-full"
                      >
                        <X size={14} />
                      </Button>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="description"
                    className="text-xs font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
                  >
                    Short Description <span className="text-red-500">*</span>
                  </Label>

                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Write a short and interesting description about this book..."
                    required
                    minLength={10}
                    rows={4}
                    className="min-h-24 resize-none border-[#D5B982]/50 bg-white text-sm text-[#123C3A] placeholder:text-gray-400 dark:border-[#526B60] dark:bg-white dark:text-[#123C3A] dark:placeholder:text-gray-400"
                  />

                  <p className="text-right text-[11px] text-[#6B8279] dark:text-[#A8BDB3]">
                    Write a short description of your book.
                  </p>
                </div>
              </section>

              <div className="h-px bg-[#D5B982]/40 dark:bg-[#526B60]" />

              {/* Contributor Information */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#E2ECE8] text-[#123C3A] dark:bg-[#30463D] dark:text-[#A8C9B5]">
                    <User size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                      Contributor Information
                    </h3>

                    <p className="text-[11px] text-[#6B8279] dark:text-[#A8BDB3]">
                      Your account details are automatically added.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* User Name */}
                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-2 text-xs font-semibold text-[#123C3A] dark:text-[#E8F0EA]">
                      <User size={14} />
                      User Name
                    </Label>

                    <Input
                      value={user?.name || ""}
                      readOnly
                      className="h-10 border-[#D5B982]/40 bg-white text-sm text-[#405A51] dark:border-[#526B60] dark:bg-white dark:text-[#405A51]"
                    />
                  </div>

                  {/* User Email */}
                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-2 text-xs font-semibold text-[#123C3A] dark:text-[#E8F0EA]">
                      <Mail size={14} />
                      Email Address
                    </Label>

                    <Input
                      value={user?.email || ""}
                      readOnly
                      className="h-10 border-[#D5B982]/40 bg-white text-sm text-[#405A51] dark:border-[#526B60] dark:bg-white dark:text-[#405A51]"
                    />
                  </div>
                </div>
              </section>

              {/* Submit Button */}
              <div className="space-y-3 border-t border-[#D5B982]/40 pt-5 dark:border-[#526B60]">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-11 w-full rounded-xl bg-[#123C3A] text-sm font-bold text-white shadow-md hover:bg-[#1D514D] disabled:opacity-60 dark:bg-[#A8C9B5] dark:text-[#172522] dark:hover:bg-[#D5B982]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <BookPlus className="mr-2 size-4" />
                      Add Book to BookNook
                      <ArrowRight className="ml-2 size-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-[11px] text-[#6B8279] dark:text-[#A8BDB3]">
                  By adding this book, you agree to share it with the BookNook
                  community.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Bottom Note */}
        <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-[#6B8279] dark:text-[#A8BDB3]">
          <Sparkles size={14} className="text-[#A88B54] dark:text-[#D5B982]" />
          Every book has a story. Let yours be discovered.
        </div>
      </div>
    </main>
  );
}
