"use client";

export default function AboutAndMissionVision() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex w-[200px] justify-center items-center gap-2 px-4 py-2 rounded-full glass border border-nova-cyan/30 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-nova-cyan"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <span className="text-sm text-nova-cyan font-medium">
                About Nova Stack
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Innovation-First</span>
              <br />
              Development Agency
            </h2>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nova Stack emerged from a vision to bridge the gap between
              cutting-edge technology and practical business solutions. We
              don&apos;t just build applications – we architect the future.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-nova-purple/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-nova-purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Seasoned engineers and designers with experience at top
                    global companies.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-nova-cyan/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-nova-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Future-Focused</h3>
                  <p className="text-muted-foreground">
                    We embrace emerging technologies and methodologies to stay
                    ahead of the curve.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-8 py-3 bg-nova-cyan text-black rounded-xl font-semibold hover:bg-nova-cyan/80 transition duration-300 shadow-lg w-fit">
              Learn More About Us
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="relative md:p-8">
              <div className="glass rounded-3xl p-8 border border-nova-purple/30 hover:border-nova-purple/50 transition-all duration-300">
                <div className="space-y-6">
                  {/* Badge */}
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-nova-purple animate-pulse-glow"></div>
                    <span className="text-sm text-muted-foreground">
                      Mission-Driven Development
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    Transforming Ideas Into Reality
                  </h3>

                  <p className="text-muted-foreground">
                    Every project is an opportunity to push boundaries and
                    create something extraordinary. We combine technical
                    excellence with creative vision to deliver solutions that
                    matter.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 rounded-xl bg-nova-purple/5">
                      <div className="text-2xl font-bold text-nova-purple mb-1">
                        5+
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Years Experience
                      </div>
                    </div>

                    <div className="text-center p-4 rounded-xl bg-nova-cyan/5">
                      <div className="text-2xl font-bold text-nova-cyan mb-1">
                        100%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Passion Driven
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-nova-cyan/20 animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-nova-purple/20 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-br from-nova-purple/10 via-transparent to-nova-cyan/10 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
