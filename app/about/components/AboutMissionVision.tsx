"use client";

import CustomButton from "@/components/CustomButton";
import PillBadge from "@/components/PillBadge";
import SectionHeader from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { RiGroupLine } from "react-icons/ri";
import { GoLightBulb } from "react-icons/go";
import { FiTarget } from "react-icons/fi";

export default function AboutMissionVision() {
  return (
    <SectionWrapper className="bg-neutral-900">
      <SectionHeader
        title="About Us"
        subtitle="Innovation-First Development Agency"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col justify-center">
          <div>
            <PillBadge
              title="About Nova Stack"
              icon={<FiTarget className="mr-1" />}
            />
          </div>

          <SectionHeader
            className="text-left"
            title="Who we are"
            subtitle="Nova Stack emerged from a vision to bridge the gap between
            cutting-edge technology and practical business solutions. We
            don't just build applications – we architect the future."
          />

          {/* Features */}
          <div className="space-y-6 mb-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-nova-purple/10 flex items-center justify-center">
                <RiGroupLine color="white" />
              </div>
              <div>
                <h3 className="text-gray-100 font-semibold text-lg mb-2">
                  Expert Team
                </h3>
                <p className="text-muted-foreground">
                  Seasoned engineers and designers with experience at top global
                  companies.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-nova-cyan/10 flex items-center justify-center">
                <GoLightBulb color="white" />
              </div>
              <div>
                <h3 className="text-gray-100 font-semibold text-lg mb-2">
                  Future-Focused
                </h3>
                <p className="text-muted-foreground">
                  We embrace emerging technologies and methodologies to stay
                  ahead of the curve.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <CustomButton
            className="bg-neutral-950 lg:w-1/2"
            icon={<FaArrowRightLong />}
          >
            Free Strategy Call
          </CustomButton>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">
          <div className="relative md:p-8">
            <div className="rounded-3xl bg-neutral-950 p-8 border border-[#191919] transition-all duration-300">
              <div className="space-y-6">
                {/* Badge */}
                <div className="flex items-center gap-4">
                  <TbTargetArrow color="white" />
                  <span className="text-sm text-muted-foreground">
                    Mission-Driven Development
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-100">
                  Transforming Ideas Into Reality
                </h3>

                <p className="text-muted-foreground">
                  Every project is an opportunity to push boundaries and create
                  something extraordinary. We combine technical excellence with
                  creative vision to deliver solutions that matter.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 rounded-xl bg-nova-purple/5">
                    <div className="text-2xl font-bold text-gray-100 mb-1">
                      5+
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Years Experience
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-nova-cyan/5">
                    <div className="text-2xl font-bold text-gray-100 mb-1">
                      100%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Passion Driven
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
