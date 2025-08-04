"use client";
import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    // Disable scroll restoration
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }

    // Force scroll to top on page load
    window.scrollTo(0, 0);

    // Ensure page starts at top after any layout shifts
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
