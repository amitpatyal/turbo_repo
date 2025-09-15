"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = cn;
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(
//     (clsx as any).default
//       ? (clsx as any).default(...inputs)
//       : (clsx as any)(...inputs)
//   );
// }
