import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(
//     (clsx as any).default
//       ? (clsx as any).default(...inputs)
//       : (clsx as any)(...inputs)
//   );
// }
