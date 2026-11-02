
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
      image: image.trim(),
      description: String(bookData.description).trim(),
      userName: user.name,
      userEmail: user.email,
      addedAt: new Date().toISOString(),
    };

    console.log("New Book Data:", newBook);

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/add-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
      <div className="flex min-h-[70vh] items-center justify-center bg-[#E2ECE8]">
        <Loader2 className="size-9 animate-spin text-[#123C3A]" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#E2ECE8] px-4 pt-4 pb-10 sm:px-6 lg:pt-4 lg:pb-14">
      <div className="mx-auto max-w-4xl">
        {/* Page Heading */}
        <div className="mb-3 text-center">
          <h1 className=" text-3xl font-extrabold tracking-tight text-[#123C3A] sm:text-4xl lg:text-5xl">
            Add a New Book
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6B8279] sm:text-base">
            Have a book worth sharing? Add it to BookNook and let other readers
            discover something wonderful.
          </p>
        </div>

        {/* Form Card */}
        <Card className="overflow-hidden rounded-2xl border border-[#D5B982]/50 bg-white py-0 shadow-xl shadow-[#123C3A]/5">
          {/* Card Header */}
          <div className="relative overflow-hidden bg-[#123C3A] px-6 py-7 text-white sm:px-9">
            <div className="absolute -right-10 -top-16 size-48 rounded-full border border-white/10" />
            <div className="absolute -right-2 -top-8 size-32 rounded-full border border-[#D5B982]/20" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D5B982]">
                Book Submission
              </p>

              <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                Book Details
              </h2>

              <p className="mt-2 text-sm text-white/65">
                Complete the information below to publish your book.
              </p>
            </div>
          </div>

          <CardContent className="p-5 sm:p-8 lg:p-9">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Book Information */}
              <section className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#E2ECE8] text-[#123C3A]">
                    <BookOpen size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#123C3A]">
                      Book Information
                    </h3>
                    <p className="text-xs text-[#6B8279]">
                      Enter the basic details of your book.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Book Title */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="title"
                      className="font-semibold text-[#123C3A]"
                    >
                      Book Title <span className="text-red-500">*</span>
                    </Label>

                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g. The Great Gatsby"
                      required
                      minLength={2}
                      className="h-12 border-[#D5B982]/50 bg-[#F4F7F5] focus-visible:border-[#123C3A]"
                    />
                  </div>

                  {/* Author Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="author"
                      className="font-semibold text-[#123C3A]"
                    >
                      Author Name <span className="text-red-500">*</span>
                    </Label>

                    <Input
                      id="author"
                      name="author"
                      placeholder="e.g. F. Scott Fitzgerald"
                      required
                      minLength={2}
                      className="h-12 border-[#D5B982]/50 bg-[#F4F7F5] focus-visible:border-[#123C3A]"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label className="font-semibold text-[#123C3A]">
                    Book Category <span className="text-red-500">*</span>
                  </Label>

                  <Select
                    value={category}
                    onValueChange={(value) => setCategory(value ?? "")}
                  >
                    <SelectTrigger className="h-12 w-full border-[#D5B982]/50 bg-[#F4F7F5]">
                      <SelectValue placeholder="Choose a book category" />
                    </SelectTrigger>

                    <SelectContent>
                      {categories.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Total Copies */}
                <div className="space-y-2">
                  <Label className="font-semibold text-[#123C3A]">
                    Total Copies <span className="text-red-500">*</span>
                  </Label>

                  <Select
                    value={totalCopies}
                    onValueChange={(value) => setTotalCopies(value ?? "1")}
                  >
                    <SelectTrigger className="h-12 w-full border-[#D5B982]/50 bg-[#F4F7F5]">
                      <SelectValue placeholder="Choose total copies" />
                    </SelectTrigger>

                    <SelectContent>
                      {Array.from({ length: 20 }, (_, index) => index + 1).map(
                        (number) => (
                          <SelectItem key={number} value={String(number)}>
                            {number} {number === 1 ? "Copy" : "Copies"}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>

                  <p className="text-xs leading-5 text-[#6B8279]">
                    Select how many copies of this book are available in your
                    library.
                  </p>
                </div>

                {/* Book Image */}
                <div className="space-y-3">
                  <Label
                    htmlFor="image"
                    className="font-semibold text-[#123C3A]"
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
                      className="h-12 border-[#D5B982]/50 bg-[#F4F7F5] pl-10"
                    />
                  </div>

                  <p className="text-xs leading-5 text-[#6B8279]">
                    Upload your book cover to ImgBB or Postimages, then paste
                    the image URL here.
                  </p>

                  {image && (
                    <div className="relative w-fit overflow-hidden rounded-xl border border-[#D5B982]/50 bg-[#F4F7F5] p-2">
                      <img
                        src={image}
                        alt="Book cover preview"
                        className="h-44 w-32 rounded-lg object-cover"
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
                        <X size={15} />
                      </Button>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="font-semibold text-[#123C3A]"
                  >
                    Short Description <span className="text-red-500">*</span>
                  </Label>

                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Write a short and interesting description about this book..."
                    required
                    minLength={10}
                    rows={5}
                    className="min-h-32 resize-none border-[#D5B982]/50 bg-[#F4F7F5]"
                  />

                  <p className="text-right text-xs text-[#6B8279]">
                    Write a short description of your book.
                  </p>
                </div>
              </section>

              <div className="h-px bg-[#D5B982]/40" />

              {/* Contributor Information */}
              <section className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#E2ECE8] text-[#123C3A]">
                    <User size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#123C3A]">
                      Contributor Information
                    </h3>
                    <p className="text-xs text-[#6B8279]">
                      Your account details are automatically added.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* User Name */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 font-semibold text-[#123C3A]">
                      <User size={15} />
                      User Name
                    </Label>

                    <Input
                      value={user?.name || ""}
                      readOnly
                      className="h-12 border-[#D5B982]/40 bg-[#F4F7F5] text-[#405A51]"
                    />
                  </div>

                  {/* User Email */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 font-semibold text-[#123C3A]">
                      <Mail size={15} />
                      Email Address
                    </Label>

                    <Input
                      value={user?.email || ""}
                      readOnly
                      className="h-12 border-[#D5B982]/40 bg-[#F4F7F5] text-[#405A51]"
                    />
                  </div>
                </div>
              </section>

              {/* Submit Button */}
              <div className="space-y-4 border-t border-[#D5B982]/40 pt-6">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-13 w-full rounded-xl bg-[#123C3A] text-base font-bold text-white shadow-lg hover:bg-[#1D514D] disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 size-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <BookPlus className="mr-2 size-5" />
                      Add Book to BookNook
                      <ArrowRight className="ml-2 size-5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-[#6B8279]">
                  By adding this book, you agree to share it with the BookNook
                  community.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Bottom Note */}
        <div className="mt-7 flex items-center justify-center gap-2 text-center text-sm text-[#6B8279]">
          <Sparkles size={15} className="text-[#A88B54]" />
          Every book has a story. Let yours be discovered.
        </div>
      </div>
    </main>
  );
}
