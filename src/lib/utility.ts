import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// utility function for custom button for classname which takes classnames
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}