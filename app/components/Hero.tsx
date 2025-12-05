import CustomButton from "@/components/CustomButton";
import PillBadge from "@/components/PillBadge";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoAnalyticsOutline, IoCodeSlash } from "react-icons/io5";
import { TiMediaPlayOutline } from "react-icons/ti";

export default function Hero() {
  return (
    <SectionWrapper className="bg-neutral-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-primary">
        {/* LEFT CONTENT  */}
        <div className="space-y-8 animate-slide-in-left">
          <PillBadge
            title="Full-Stack Digital Solutions"
            icon={<AiOutlineThunderbolt />}
          />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-50">
            Build. Market. <br />
            Scale.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
            From cutting-edge web applications to viral social media campaigns.
            We&apos;re your complete digital growth partner.
          </p>
          {/* Guaranteed Badge  */}
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r 
                    from-green-500/20 to-blue-500/20 border border-green-400/30 
                    text-green-400 text-sm font-medium backdrop-blur-sm"
          >
            <AiOutlineThunderbolt color="#438C38" />⚡ Demo Ready in 14 Days or
            Less - Guaranteed!
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <CustomButton icon={<FaArrowRightLong />}>
              Start Your Project
            </CustomButton>
            <CustomButton
              className="bg-gray-100 hover:bg-gray-200 text-black"
              icon={<IoChatbubbleOutline />}
            >
              Free Strategy Call
            </CustomButton>
          </div>
          {/* Stats  */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="text-center group">
              <div className="text-3xl font-bold text-blue-500 group-hover:animate-pulse">
                200+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-green-500 group-hover:animate-pulse">
                150+
              </div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-purple-500 group-hover:animate-pulse">
                400%
              </div>
              <div className="text-sm text-muted-foreground">Average ROAS</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-orange-500 group-hover:animate-pulse">
                99%
              </div>
              <div className="text-sm text-muted-foreground">
                Uptime Guarantee
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (CARDS) */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {/* Card 1  */}
            <div className="rounded-lg p-6 bg-[#0A0A0A] backdrop-blur-sm border border-[#171717] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <IoCodeSlash color="white" size={30} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-50">
                    Modern Web Apps
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    React, TypeScript, Next.js
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2  */}
            <div className="rounded-lg p-6 bg-[#0A0A0A] backdrop-blur-sm border border-[#171717] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-pink-500 to-red-500 flex items-center justify-center">
                  <TiMediaPlayOutline color="white" size={32} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-50">
                    Social Media Ads
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    TikTok, Instagram, Meta
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3  */}
            <div className="rounded-lg p-6 bg-[#0A0A0A] backdrop-blur-sm border border-[#171717] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <IoAnalyticsOutline color="white" size={32} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-50">
                    Analytics & Growth
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Performance tracking, optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
