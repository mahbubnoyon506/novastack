"use client";

import PillBadge from "@/components/PillBadge";
import SectionHeader from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, CraftWave",
    feedback:
      "Absolutely outstanding service! The team delivered a stunning website that boosted our conversions within weeks.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Carter",
    role: "CEO, FinEdge",
    feedback:
      "Professional, fast, and highly skilled. Our mobile app is now smoother and more user-friendly than ever.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Parker",
    role: "Marketing Director, Brandsly",
    feedback:
      "Their marketing and analytics strategy helped us scale our online presence significantly. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <SectionWrapper className="bg-neutral-900">
      <div className="flex justify-center">
        <PillBadge
          title="Testimonials"
          icon={<FaRegMessage className="mr-1" color="white" />}
        />
      </div>
      <SectionHeader
        title="What Our Clients Say"
        subtitle="Hear experiences from clients who trusted our digital expertise"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="rounded-lg border shadow-sm group hover:shadow-xl transition-all duration-500 border-[#7E7E7E] bg-transparent backdrop-blur-sm p-8 animate-fade-in-up"
          >
            <div className="flex items-center mb-6">
              <Image
                width={100}
                height={100}
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full shadow-md border"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-lg group text-gray-100 transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">{item.role}</p>
              </div>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed">
              “{item.feedback}”
            </p>

            <div className="flex items-center mt-4 text-primary">
              <FaRegStar color="white" />
              <span className="text-sm font-medium text-gray-100 ml-1">
                5.0 Rating
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
