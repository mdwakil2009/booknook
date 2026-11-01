
import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaCopyright,
} from "react-icons/fa";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[#D5B982]/50 bg-[#E2ECE8] text-[#123C3A]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#123C3A] text-[#D5B982] shadow-md">
                <BookOpen size={23} />
              </div>

              <span className="text-2xl font-bold tracking-tight text-[#123C3A]">
                Book<span className="text-[#A88B54]">Nook</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#405A51]">
              Discover stories, explore knowledge, and find your next favorite
              book. Your little corner of endless possibilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-[#123C3A]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-[#405A51]">
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 hover:pl-1 hover:text-[#A88B54]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="transition-all duration-300 hover:pl-1 hover:text-[#A88B54]"
                >
                  All Books
                </Link>
              </li>

              <li>
                <Link
                  href="/add-book"
                  className="transition-all duration-300 hover:pl-1 hover:text-[#A88B54]"
                >
                  Add Book
                </Link>
              </li>

              <li>
                <Link
                  href="/my-borrows"
                  className="transition-all duration-300 hover:pl-1 hover:text-[#A88B54]"
                >
                  My Borrows
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-[#123C3A]">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm text-[#405A51]">
              <li className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/70 text-[#123C3A] shadow-sm">
                  <BiLogoGmail size={18} />
                </span>

                <a
                  href="mailto:mdwakil2009@gmail.com"
                  className="transition-colors hover:text-[#A88B54]"
                >
                  mdwakil2009@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/70 text-[#123C3A] shadow-sm">
                  <FaPhoneAlt />
                </span>

                <a
                  href="tel:+8801924809025"
                  className="transition-colors hover:text-[#A88B54]"
                >
                  01924809025
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/70 text-[#123C3A] shadow-sm">
                  <TiLocation size={20} />
                </span>

                <span>Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-[#123C3A]">
              Follow Us
            </h3>

            <p className="mb-5 text-sm leading-6 text-[#405A51]">
              Stay connected and discover more stories with us.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-xl border border-[#D5B982]/60 bg-white/70 text-lg text-[#123C3A] transition-all duration-300 hover:-translate-y-1 hover:border-[#123C3A] hover:bg-[#123C3A] hover:text-white"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/wakil0011/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-xl border border-[#D5B982]/60 bg-white/70 text-lg text-[#123C3A] transition-all duration-300 hover:-translate-y-1 hover:border-[#123C3A] hover:bg-[#123C3A] hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/wakil-ahammed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-xl border border-[#D5B982]/60 bg-white/70 text-lg text-[#123C3A] transition-all duration-300 hover:-translate-y-1 hover:border-[#123C3A] hover:bg-[#123C3A] hover:text-white"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/mdwakil2009"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-xl border border-[#D5B982]/60 bg-white/70 text-lg text-[#123C3A] transition-all duration-300 hover:-translate-y-1 hover:border-[#123C3A] hover:bg-[#123C3A] hover:text-white"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-[#123C3A]/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-[#405A51] sm:flex-row sm:text-left">
            <p className="flex items-center gap-2">
              <FaCopyright />
              2026 BookNook. All rights reserved.
            </p>

            <p>
              Made with <span className="text-red-500">♥</span> for book lovers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
