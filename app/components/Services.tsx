export default function Services() {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#222222] text-gray-100 text-sm font-medium mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield w-4 h-4 mr-2"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
            Our Services
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-50">
            Everything You Need to Succeed Online
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From development to marketing, we provide comprehensive digital
            solutions that drive real results
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <ServiceCard
            delay="0ms"
            title="Web Development"
            desc="Modern, responsive web applications built with React, TypeScript, and cutting-edge frameworks"
            icon={
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
            }
            gradient="from-blue-500 to-cyan-500"
            tags={[
              "React/Next.js",
              "TypeScript",
              "Responsive Design",
              "Performance Optimization",
            ]}
          />

          {/* CARD 2 */}
          <ServiceCard
            delay="100ms"
            title="Mobile Development"
            desc="Cross-platform mobile apps that deliver native performance and seamless user experiences"
            icon={
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" />
                <path d="M12 18h.01" />
              </svg>
            }
            gradient="from-purple-500 to-pink-500"
            tags={[
              "React Native",
              "iOS & Android",
              "Cross-Platform",
              "Native Features",
            ]}
          />

          {/* CARD 3 */}
          <ServiceCard
            delay="200ms"
            title="Social Media Ads"
            desc="Targeted Instagram and TikTok advertising campaigns that drive engagement and conversions"
            icon={
              <svg
                className="w-8 h-8 text-white"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            }
            gradient="from-pink-500 to-red-500"
            tags={[
              "TikTok In-Feed Ads",
              "Instagram Stories",
              "Brand Takeovers",
              "Shopping Ads",
            ]}
          />

          {/* CARD 4 */}
          <ServiceCard
            delay="300ms"
            title="Backend Development"
            desc="Scalable server-side solutions with robust APIs, databases, and microservices architecture"
            icon={
              <svg
                className="w-8 h-8 text-white"
                strokeWidth="2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect width="20" height="8" x="2" y="2" rx="2" />
                <rect width="20" height="8" x="2" y="14" rx="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            }
            gradient="from-green-500 to-emerald-500"
            tags={[
              "Node.js/Python",
              "Database Design",
              "REST/GraphQL APIs",
              "Microservices",
            ]}
          />

          {/* CARD 5 */}
          <ServiceCard
            delay="400ms"
            title="Cloud Solutions"
            desc="Deploy and scale applications with modern cloud infrastructure and DevOps practices"
            icon={
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              </svg>
            }
            gradient="from-orange-500 to-red-500"
            tags={[
              "AWS/Azure",
              "Docker/Kubernetes",
              "CI/CD Pipelines",
              "Auto Scaling",
            ]}
          />

          {/* CARD 6 */}
          <ServiceCard
            delay="500ms"
            title="Digital Analytics"
            desc="Data-driven insights and performance optimization across all digital touchpoints"
            icon={
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
            }
            gradient="from-indigo-500 to-blue-500"
            tags={[
              "User Analytics",
              "Performance Monitoring",
              "Conversion Tracking",
              "Custom Dashboards",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, icon, gradient, delay, tags }: any) {
  return (
    <div
      className="rounded-lg border bg-[#0C0C0C] shadow-sm group hover:shadow-xl transition-all duration-500 border-[#191919] backdrop-blur-sm animate-fade-in-up cursor-pointer"
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col p-6 space-y-4">
        <div
          className={`w-16 h-16 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>

        <div>
          <h3 className="font-semibold tracking-tight text-xl mb-2 text-gray-50 transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold border-transparent bg-[#262626] text-gray-100 text-xs transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center text-gray-50 text-sm font-medium">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
