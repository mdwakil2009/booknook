"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  BookOpen,
  Loader2,
  User,
  Mail,
  Pencil,
  ArrowRight,
  X,
  Link as LinkIcon,
  Save,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { IBook } from "@/lib/type";
import { GetTokenFromClient } from "@/lib/GetTokenFromClient";

interface EditBookProps {
  book: IBook;
}

const EditBook = ({ book }: EditBookProps) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [title, setTitle] = useState(book?.title || "");
  const [author, setAuthor] = useState(book?.author || "");
  const [category, setCategory] = useState(book?.category || "");

  const [totalCopies, setTotalCopies] = useState(
    String(book?.totalCopies ?? 1),
  );

  const [image, setImage] = useState(book?.image || "");
  const [description, setDescription] = useState(book?.description || "");

  const categories = ["Fiction", "Science", "History", "Kids", "Others"];

  // Update Book
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!book?._id) {
      toast.error("Book information not found.");
      return;
    }

    if (!user) {
      toast.error("Please login first.");
      router.push("/login");
      return;
    }

    if (!title.trim() || !author.trim() || !category) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!image.trim()) {
      toast.error("Please enter a book cover image URL.");
      return;
    }

    if (Number(totalCopies) < 1) {
      toast.error("Total copies must be at least 1.");
      return;
    }

    const updatedBook = {
      title: title.trim(),
      author: author.trim(),
      category,
      totalCopies: Number(totalCopies),
      image: image.trim(),
      description: description.trim(),
      userName: book.userName,
      userEmail: book.userEmail,
    };

    setIsLoading(true);
    const token = await GetTokenFromClient();
    try {
      const res = await fetch(`http://localhost:8000/my-book/${book._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedBook),
      });

      const result = await res.json();
      console.log(result);

      toast.success("Book updated successfully!");

      setOpen(false);

      window.location.reload();
    } catch (error) {
      console.error("Update Book Error:", error);

      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            type="button"
            variant="outline"
            className="group h-10 gap-2 rounded-xl border border-[#123C3A]/20 bg-[#E9EDE7] px-5 text-sm font-semibold text-[#123C3A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#123C3A] hover:bg-[#123C3A] hover:text-white dark:border-[#A8C9B5]/30 dark:bg-[#30463D] dark:text-[#E8F0EA] dark:hover:border-[#A8C9B5] dark:hover:bg-[#A8C9B5] dark:hover:text-[#172522]"
          >
            <Pencil size={16} />
            Edit
          </Button>
        }
      />

      {/* Dialog Content */}
      <DialogContent className="max-h-[90vh] overflow-y-auto border-[#D5E0D9] bg-[#FAFCFA] p-0 dark:border-[#526B60] dark:bg-[#20332F] sm:max-w-2xl">
        {/* Header */}
        <div className="border-b border-[#D5E0D9] bg-[#E2ECE8] px-6 py-5 dark:border-[#526B60] dark:bg-[#30463D]">
          <DialogHeader>
            <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-[#123C3A] text-white dark:bg-[#A8C9B5] dark:text-[#172522]">
              <BookOpen size={22} />
            </div>

            <DialogTitle className="text-xl font-bold text-[#123C3A] dark:text-[#E8F0EA]">
              Edit Book Details
            </DialogTitle>

            <DialogDescription className="text-sm text-[#6B8279] dark:text-[#A8BDB3]">
              Update your book information and keep your library up to date.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 px-6 py-5">
          {/* Book Information */}
          <section className="space-y-5">
            {/* Section Heading */}
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#E2ECE8] text-[#123C3A] dark:bg-[#30463D] dark:text-[#A8C9B5]">
                <Sparkles size={19} />
              </div>

              <div>
                <h3 className="font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                  Book Information
                </h3>

                <p className="text-xs text-[#6B8279] dark:text-[#A8BDB3]">
                  Update the basic details of your book.
                </p>
              </div>
            </div>

            {/* Title and Author */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
                >
                  Book Title *
                </Label>

                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter book title"
                  required
                  minLength={2}
                  className="h-11 border-[#D5E0D9] bg-[#F4F7F5] text-[#123C3A] placeholder:text-[#81948A] focus-visible:border-[#123C3A] dark:border-[#526B60] dark:bg-[#172522] dark:text-[#E8F0EA] dark:placeholder:text-[#81948A] dark:focus-visible:border-[#A8C9B5]"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="author"
                  className="font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
                >
                  Author Name *
                </Label>

                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Enter author name"
                  required
                  minLength={2}
                  className="h-11 border-[#D5E0D9] bg-[#F4F7F5] text-[#123C3A] placeholder:text-[#81948A] focus-visible:border-[#123C3A] dark:border-[#526B60] dark:bg-[#172522] dark:text-[#E8F0EA] dark:placeholder:text-[#81948A] dark:focus-visible:border-[#A8C9B5]"
                />
              </div>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label className="font-semibold text-[#123C3A] dark:text-[#E8F0EA]">
                Book Category *
              </Label>

              <Select
                value={category}
                onValueChange={(value) => setCategory(value ?? "")}
              >
                <SelectTrigger className="h-11 w-full border-[#D5E0D9] bg-[#F4F7F5] text-[#123C3A] dark:border-[#526B60] dark:bg-[#172522] dark:text-[#E8F0EA]">
                  <SelectValue placeholder="Choose a book category" />
                </SelectTrigger>

                <SelectContent className="border-[#D5E0D9] bg-[#FAFCFA] dark:border-[#526B60] dark:bg-[#20332F]">
                  {categories.map((item) => (
                    <SelectItem
                      key={item}
                      value={item}
                      className="text-[#123C3A] dark:text-[#E8F0EA] dark:focus:bg-[#30463D] dark:focus:text-[#E8F0EA]"
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <Label
                htmlFor="image"
                className="font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
              >
                Book Cover Image URL *
              </Label>

              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B8279] dark:text-[#A8BDB3]" />

                <Input
                  id="image"
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Paste book cover image URL"
                  required
                  className="h-11 border-[#D5E0D9] bg-[#F4F7F5] pl-10 text-[#123C3A] placeholder:text-[#81948A] dark:border-[#526B60] dark:bg-[#172522] dark:text-[#E8F0EA] dark:placeholder:text-[#81948A]"
                />
              </div>

              {/* Image Preview */}
              {image && (
                <div className="flex items-center gap-4 rounded-xl border border-[#D5E0D9] bg-[#F4F7F5] p-3 dark:border-[#526B60] dark:bg-[#172522]">
                  <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-lg border border-[#D5E0D9] dark:border-[#526B60]">
                    <Image
                      src={image}
                      alt="Book cover preview"
                      fill
                      unoptimized
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1.5 text-sm font-semibold text-[#123C3A] dark:text-[#E8F0EA]">
                      <CheckCircle2 size={14} />
                      Cover Preview
                    </p>

                    <p className="mt-1 truncate text-xs text-[#6B8279] dark:text-[#A8BDB3]">
                      {image}
                    </p>
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setImage("")}
                    className="shrink-0 text-red-500 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30"
                  >
                    <X size={17} />
                  </Button>
                </div>
              )}

              <p className="text-xs leading-5 text-[#6B8279] dark:text-[#A8BDB3]">
                Enter your uploaded book cover image URL.
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="font-semibold text-[#123C3A] dark:text-[#E8F0EA]"
              >
                Book Description *
              </Label>

              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a short description about this book..."
                required
                minLength={10}
                rows={4}
                className="min-h-28 resize-none border-[#D5E0D9] bg-[#F4F7F5] text-[#123C3A] placeholder:text-[#81948A] focus-visible:border-[#123C3A] dark:border-[#526B60] dark:bg-[#172522] dark:text-[#E8F0EA] dark:placeholder:text-[#81948A] dark:focus-visible:border-[#A8C9B5]"
              />

              <p className="text-right text-xs text-[#6B8279] dark:text-[#A8BDB3]">
                Write at least 10 characters.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="h-px bg-[#D5E0D9] dark:bg-[#526B60]" />

          {/* Contributor Information */}
          <section className="space-y-4 rounded-xl border border-[#D5E0D9] bg-[#F4F7F5] p-4 dark:border-[#526B60] dark:bg-[#172522]">
            <div className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#E2ECE8] text-[#123C3A] dark:bg-[#30463D] dark:text-[#A8C9B5]">
                <User size={17} />
              </div>

              <div>
                <h3 className="font-bold text-[#123C3A] dark:text-[#E8F0EA]">
                  Contributor Information
                </h3>

                <p className="text-xs text-[#6B8279] dark:text-[#A8BDB3]">
                  Your account information.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* User Name */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-xs font-semibold text-[#6B8279] dark:text-[#A8BDB3]">
                  <User size={14} />
                  User Name
                </Label>

                <Input
                  value={book.userName || user?.name || ""}
                  readOnly
                  className="h-10 border-[#D5E0D9] bg-white text-[#405A51] dark:border-[#526B60] dark:bg-[#30463D] dark:text-[#C4D5CA]"
                />
              </div>

              {/* User Email */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-xs font-semibold text-[#6B8279] dark:text-[#A8BDB3]">
                  <Mail size={14} />
                  Email Address
                </Label>

                <Input
                  value={book.userEmail || user?.email || ""}
                  readOnly
                  className="h-10 border-[#D5E0D9] bg-white text-[#405A51] dark:border-[#526B60] dark:bg-[#30463D] dark:text-[#C4D5CA]"
                />
              </div>
            </div>
          </section>

          {/* Footer Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-[#D5E0D9] pt-5 dark:border-[#526B60] sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isLoading}
              className="h-11 rounded-xl border-[#D5E0D9] px-5 text-[#123C3A] hover:bg-[#E2ECE8] dark:border-[#526B60] dark:bg-[#30463D] dark:text-[#E8F0EA] dark:hover:bg-[#526B60]"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isLoading}
              className="h-11 rounded-xl bg-[#123C3A] px-6 font-bold text-white shadow-sm transition hover:bg-[#1D514D] disabled:opacity-60 dark:bg-[#A8C9B5] dark:text-[#172522] dark:hover:bg-[#D5B982]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <Save className="mr-2 size-4" />
                  Update Book
                  <ArrowRight className="ml-2 size-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBook;
