import { Blog } from "@/.contentlayer/generated";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { compareDesc, parseISO } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortBlogs = (blogs: Blog[]) => {
  return blogs.slice().sort((a,b) => compareDesc(parseISO(a.date), parseISO(b.date)))
};
