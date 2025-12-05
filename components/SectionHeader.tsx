import React from "react";
import clsx from "clsx";

export default function SectionHeader({
  title = "",
  subtitle = "",
  className = "",
  ...props
}) {
  return (
    <div className={clsx("mb-16 text-center", className)} {...props}>
      {title && (
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-50">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
