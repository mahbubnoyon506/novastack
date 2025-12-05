import React from "react";
import { Button } from "@/components/ui/button";

export default function CustomButton({
  children,
  icon: Icon,
  className = "",
  ...props
}) {
  return (
    <Button
      className={`
        h-11 px-8 py-6 text-lg rounded-md bg-[#0A0A0A] text-primary-foreground 
         inline-flex items-center gap-2 font-medium transition-all 
        duration-300 hover:bg-black hover:scale-105
        ${className}
      `}
      {...props}
    >
      <span>{children}</span>
      {Icon}
    </Button>
  );
}
