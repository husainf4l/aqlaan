"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-yellow-400" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--accent)]" />
      )}
    </button>
  );
}