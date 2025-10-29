import { extendVariants, Input } from "@heroui/react";

export const ReusableInput = extendVariants(Input, {
  variants: {
    // <- modify/add variants
    color: {
      stone: {
        // <- add a new color variant
        inputWrapper: [
          "bg-gray-50/50",
          "border",
          "shadow-sm",
          "transition-colors",
          "p-1",
          "focus:border-gray-50",
          "focus-within:bg-gray-100",
          "data-[hover=true]:border-gray-50",
          "group-data-[focus=true]:border-gray-200",
          "rounded-md",
          // for dark themes
          // "dark:bg-zinc-900",
          // "dark:border-zinc-800",
          // "dark:data-[hover=true]:bg-zinc-900",
          // "dark:focus-within:bg-zinc-900",
        ],
        input: [
          "bg-transparent",
          "border-0",
          "outline-0",
          "text-zinc-800",
          "placeholder:text-zinc-600",
          //for  dark themes
          // "dark:text-zinc-400",
          // "dark:placeholder:text-zinc-600",
        ],
      },
    },
    size: {
      xs: {
        inputWrapper: "h-6 min-h-6 px-1",
        input: "text-tiny",
      },
      md: {
        inputWrapper: "h-10 min-h-10",
        input: "text-small",
      },
      xl: {
        inputWrapper: "h-14 min-h-14",
        input: "text-medium",
      },
    },
    radius: {
      xs: {
        inputWrapper: "rounded-sm",
      },
      sm: {
        inputWrapper: "rounded-[4px]",
      },
    },
    textSize: {
      base: {
        input: "text-base",
      },
    },
  },
  defaultVariants: {
    color: "stone",
    textSize: "base",
    removeLabel: true,
  },
});
