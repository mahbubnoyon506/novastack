"use client";

import CustomButton from "@/components/CustomButton";
import PillBadge from "@/components/PillBadge";
import SectionHeader from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";

export default function CalltoAction() {
  return (
    <SectionWrapper className="bg-neutral-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center">
          <PillBadge
            title="Fast Track: Working Demo in 14 Days or Less"
            icon={<FiTarget className="mr-1" />}
          />
        </div>
        <SectionHeader
          title="Ready to Transform Your Business?"
          subtitle="Let's discuss how our development and marketing expertise can
          accelerate your growth. Get a free consultation and project roadmap
          today."
        />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <CustomButton className="bg-neutral-900" icon={<FaArrowRightLong />}>
            Free Strategy Call
          </CustomButton>
          <CustomButton
            className="bg-gray-100 hover:bg-gray-200 text-black"
            icon={<IoChatbubbleOutline />}
          >
            Chat With Us
          </CustomButton>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { content: "24/7", content2: "Project Support" },
            { content: "≤14 Days", content2: "Demo Guarantee" },
            { content: "100%", content2: "Satisfaction Guarantee" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-transparent border border-[#191919]"
            >
              <div className="text-2xl font-bold text-gray-100 mb-2">
                {item.content}
              </div>
              <div className="text-muted-foreground">{item.content2}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
