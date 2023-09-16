"use client";

import { usePathname } from "next/navigation";

export const GetPathname = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").filter((segment) => segment)[1];

  return slug;
};
