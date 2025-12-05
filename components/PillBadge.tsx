import React from "react";

interface PillBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function PillBadge({
  title = "",
  icon: Icon,
  className = "",
  ...props
}: PillBadgeProps) {
  return (
    <div
      className={`
        inline-flex items-center px-4 py-2 mb-4 rounded-full bg-[#222222] text-sm 
        font-medium text-gray-50 backdrop-blur-sm border border-[#4D4D4D]
        ${className}
      `}
      {...props}
    >
      {Icon} {title}
    </div>
  );
}
