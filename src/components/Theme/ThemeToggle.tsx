"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Change theme"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8DDCE] bg-[#FFFDF8] text-[#654321]"
      >
        <Sun size={19} />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8DDCE] bg-[#FFFDF8] text-[#654321] transition-all duration-300 hover:bg-[#E9DDCC] dark:border-[#45534D] dark:bg-[#26352F] dark:text-[#F5E9D5] dark:hover:bg-[#34463E]"
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
};

export default ThemeToggle;