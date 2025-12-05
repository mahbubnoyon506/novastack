import React from "react";
import clsx from "clsx"; // optional but recommended

export default function SectionWrapper({ className = "", children, ...props }) {
  return (
    <section className={clsx("py-8 md:py-12 lg:py-24", className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
