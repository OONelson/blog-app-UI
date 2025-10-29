import { extendVariants, Button } from "@heroui/react";

export const ReusableButton = extendVariants(Button, {
  variants: {
    color: {
      orange1: "bg-[#fff7ed] text-[#ffedd5]",
      orange2: "bg-[#ffedd5] text-[#fff]",
      orange3: "bg-[#fc8804] text-[#fff]",
      orange4: "bg-[#db7503] text-[#fff]",
    },

    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
      md: "px-4 min-w-18 h-9 text-small rounded-small",
      xl: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
    },

    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      xl: "rounded-xl",
    },
  },
  defaultVariants: {
    color: "orange2",
    size: "md",
    radius: "md",
  },
  compoundVariants: [
    {
      isDisabled: true,
      color: "orange1",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});
