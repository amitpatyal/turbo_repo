import { type ClassValue } from "clsx";
import * as clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(
    (clsx as any).default
      ? (clsx as any).default(...inputs)
      : (clsx as any)(...inputs)
  );
}
