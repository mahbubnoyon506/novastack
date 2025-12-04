import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-primary">
      {/* Content  */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT  */}
          <div className="space-y-8 animate-slide-in-left">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#222222] text-sm 
                    font-medium text-gray-50 backdrop-blur-sm border border-[#4D4D4D]"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
              Full-Stack Digital Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-50">
              Build. Market. <br />
              Scale.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              From cutting-edge web applications to viral social media
              campaigns. We&apos;re your complete digital growth partner.
            </p>
            {/* Guaranteed Badge  */}
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r 
                    from-green-500/20 to-blue-500/20 border border-green-400/30 
                    text-green-400 text-sm font-medium backdrop-blur-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
              ⚡ Demo Ready in 14 Days or Less - Guaranteed!
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="h-11 px-8 py-6 text-lg rounded-md bg-[#0A0A0A] text-primary-foreground shadow-xl
                        inline-flex items-center gap-2 font-medium transition-all duration-300 
                        hover:bg-[#000000] hover:scale-105"
              >
                Start Your Project
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>

              <button
                className="h-11 px-8 py-6 text-lg rounded-md border bg-background hover:bg-accent hover:text-accent-foreground 
                        inline-flex items-center gap-2 font-medium transition-all duration-300 hover:scale-105"
              >
                Free Strategy Call
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </button>
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
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-purple-500 group-hover:animate-pulse">
                  400%
                </div>
                <div className="text-sm text-muted-foreground">
                  Average ROAS
                </div>
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
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="m18 16 4-4-4-4"></path>
                      <path d="m6 8-4 4 4 4"></path>
                      <path d="m14.5 4-5 16"></path>
                    </svg>
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
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
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
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
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
      </div>
    </section>
  );
}
