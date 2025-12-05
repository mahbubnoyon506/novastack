import React from "react";
import { Button } from "@/components/ui/button";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function CustomButton({
  children,
  icon: Icon,
  className = "",
  ...props
}: CustomButtonProps) {
  return (
    <Button
      className={`
        h-11 px-8 py-6 text-lg rounded-md bg-[#0A0A0A] text-primary-foreground 
         inline-flex items-center gap-2 font-medium transition-all 
        duration-300 hover:bg-black hover:scale-105 cursor-pointer
        ${className}
      `}
      {...props}
    >
      <span>{children}</span>
      {Icon}
    </Button>
  );
}
