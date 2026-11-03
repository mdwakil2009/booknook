
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  Menu,
  X,
  UserRound,
  LogOut,
  ChevronDown,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { authClient, useSession } from "@/lib/auth-client";
import { toast } from "sonner";

type NavLink = {
  name: string;
  href: string;
};

const publicLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "All Books", href: "/books" },
];

const privateLinks: NavLink[] = [
  { name: "Add Book", href: "/add-book" },
  { name: "My Books", href: "/my-books" },
  { name: "My Borrows", href: "/my-borrows" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = useSession();
  const user = session?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Sign Out
  const handleSignOut = async () => {
    if (isSigningOut) return;

    setIsSigningOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        console.error("Sign Out Error:", error);
        toast.error("Logout failed!");
        setIsSigningOut(false);
        return;
      }

      setIsMenuOpen(false);
      toast.success("Logged out successfully!");
      window.location.replace("/");
    } catch (error) {
      console.error("Sign Out Error:", error);
      toast.error("Something went wrong!");
      setIsSigningOut(false);
    }
  };

  // Navigation Link
  const renderLink = (link: NavLink) => (
    <Link
      key={link.href}
      href={link.href}
      onClick={() => setIsMenuOpen(false)}
      className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
        isActive(link.href)
          ? "bg-[#123C3A] text-white shadow-sm"
          : "text-[#123C3A] hover:bg-[#D5B982] hover:text-[#123C3A]"
      }`}
    >
      {link.name}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D5B982]/50 bg-[#E2ECE8] shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex size-11 items-center justify-center rounded-xl bg-[#123C3A] text-[#D5B982] shadow-sm">
            <BookOpen size={24} />
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-[#123C3A]">
              BookNook
            </span>

            <span className="text-[10px] font-semibold tracking-[2px] text-[#6B8279]">
              YOUR LITTLE LIBRARY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {publicLinks.map(renderLink)}

          {!isPending && user && privateLinks.map(renderLink)}
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden items-center gap-3 lg:flex">
          {!isPending && !user && (
            <>
              <Link
                href="/login"
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-[#123C3A] transition hover:bg-[#D5B982]/50"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-[#123C3A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D514D] hover:shadow-md"
              >
                Register
              </Link>
            </>
          )}

          {!isPending && user && (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-[#D5B982] bg-white/70 py-1.5 pl-1.5 pr-3 outline-none transition hover:bg-[#D5B982]/30">
                <Avatar className="size-9 border border-[#D5B982]">
                  <AvatarImage
                    src={user.image || ""}
                    alt={user.name || "User"}
                  />

                  <AvatarFallback className="bg-[#123C3A] font-semibold text-white">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>

                <span className="max-w-24 truncate text-sm font-semibold text-[#123C3A]">
                  {user.name}
                </span>

                <ChevronDown size={15} className="text-[#6B8279]" />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-60 border-[#D5B982]/60 bg-[#F4F7F5] p-2 text-[#123C3A] shadow-xl"
              >
                {/* User Information */}
                <div className="px-3 py-2">
                  <p className="text-sm font-bold text-[#123C3A]">
                    {user.name}
                  </p>

                  <p className="truncate text-xs text-[#6B8279]">
                    {user.email}
                  </p>
                </div>

                <DropdownMenuSeparator className="bg-[#D5B982]/50" />

                {/* Profile */}
               <Link href={"/profile"} > <DropdownMenuItem
                  className="cursor-pointer rounded-md text-[#123C3A] focus:bg-[#D5B982]/40 focus:text-[#123C3A]"
                  onClick={() => router.push("/dashboard/profile")}
                >
                  <UserRound size={16} />
                  My Profile
                </DropdownMenuItem></Link>

                <DropdownMenuSeparator className="bg-[#D5B982]/50" />

                {/* Desktop Logout */}
                <DropdownMenuItem
                  variant="destructive"
                  disabled={isSigningOut}
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>
                    {isSigningOut ? "Logging out..." : "Logout"}
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex size-10 items-center justify-center rounded-lg border border-[#123C3A]/20 text-[#123C3A] transition hover:bg-[#D5B982]/50 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-[#D5B982]/50 bg-[#E2ECE8] px-4 py-4 shadow-lg sm:px-6 lg:hidden">
          <div className="flex flex-col gap-1">
            {publicLinks.map(renderLink)}

            {!isPending && user && privateLinks.map(renderLink)}
          </div>

          <div className="my-4 border-t border-[#D5B982]/50" />

          {/* Mobile Login & Register */}
          {!isPending && !user && (
            <div className="flex gap-3">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 rounded-lg border border-[#123C3A] px-4 py-2.5 text-center text-sm font-semibold text-[#123C3A] transition hover:bg-[#D5B982]/40"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 rounded-lg bg-[#123C3A] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#1D514D]"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile User Section */}
          {!isPending && user && (
            <div className="space-y-3">
              {/* User Information */}
              <div className="flex items-center gap-3 rounded-xl border border-[#D5B982]/40 bg-white/60 p-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src={user.image || ""}
                    alt={user.name || "User"}
                  />

                  <AvatarFallback className="bg-[#123C3A] text-white">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#123C3A]">
                    {user.name}
                  </p>

                  <p className="truncate text-xs text-[#6B8279]">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Mobile Profile */}
              <Link
                href="/dashboard/profile"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[#123C3A] transition hover:bg-[#D5B982]/40"
              >
                <UserRound size={17} />
                My Profile
              </Link>

              {/* Mobile Logout */}
              <button
                type="button"
                onClick={handleSignOut}
                disabled={isSigningOut}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
              >
                <LogOut size={17} />
                {isSigningOut ? "Logging out..." : "Logout"}
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
