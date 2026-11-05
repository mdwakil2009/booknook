import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Homepage/Navber";
import Footer from "@/components/Homepage/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "BookNook",
    template: "%s | BookNook",
  },
  description: "Discover, borrow, and enjoy your favorite books with BookNook.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        playfair.className,
        playfair.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Navbar />
          {children}
          <Toaster position="top-right" richColors />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
