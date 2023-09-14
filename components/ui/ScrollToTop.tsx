'use client'

import { useEffect, useState } from "react";
import { PinTopIcon } from "@radix-ui/react-icons";


import { cn } from "@/lib/utils";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-7 right-7 z-20">
      <button
        type="button"
        onClick={scrollToTop}
        className={cn(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-primary hover:bg-[#AC8B14] focus:ring-yellow-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
        )}
      >
        <PinTopIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
