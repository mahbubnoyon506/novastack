import PillBadge from "@/components/PillBadge";
import SectionHeader from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { CiMobile3 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiServer } from "react-icons/fi";
import { IoAnalyticsOutline, IoCodeSlash } from "react-icons/io5";
import { MdDesignServices, MdOutlineCloud } from "react-icons/md";
import { TiMediaPlayOutline } from "react-icons/ti";

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive web applications built with React, TypeScript, and cutting-edge frameworks",
    icon: <IoCodeSlash color="white" size={32} />,
    gradient: "from-blue-500 to-cyan-500",
    delay: "",
    tags: [
      "React/Next.js",
      "TypeScript",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    title: "Mobile Development",
    desc: "Cross-platform mobile apps that deliver native performance and seamless user experiences",
    icon: <CiMobile3 color="white" size={32} />,
    gradient: "from-purple-500 to-pink-500",
    delay: "",
    tags: [
      "React Native",
      "iOS & Android",
      "Cross-Platform",
      "Native Features",
    ],
  },
  {
    title: "Social Media Ads",
    desc: "Targeted Instagram and TikTok advertising campaigns that drive engagement and conversions",
    icon: <TiMediaPlayOutline color="white" size={32} />,
    gradient: "from-pink-500 to-red-500",
    delay: "",
    tags: [
      "TikTok In-Feed Ads",
      "Instagram Stories",
      "Brand Takeovers",
      "Shopping Ads",
    ],
  },
  {
    title: "Backend Development",
    desc: "Scalable server-side solutions with robust APIs, databases, and microservices architecture",
    icon: <FiServer color="white" size={32} />,
    gradient: "from-green-500 to-emerald-500",
    delay: "",
    tags: [
      "Node.js/Python",
      "Database Design",
      "REST/GraphQL APIs",
      "Microservices",
    ],
  },
  {
    title: "Cloud Solutions",
    desc: "Deploy and scale applications with modern cloud infrastructure and DevOps practices",
    icon: <MdOutlineCloud color="white" size={32} />,
    gradient: "from-orange-500 to-red-500",
    delay: "",
    tags: ["AWS/Azure", "Docker/Kubernetes", "CI/CD Pipelines", "Auto Scaling"],
  },
  {
    title: "Digital Analytics",
    desc: "Deploy and scale applications with modern cloud infrastructure and DevOps practices",
    icon: <IoAnalyticsOutline color="white" size={32} />,
    gradient: "from-indigo-500 to-blue-500",
    delay: "",
    tags: [
      "User Analytics",
      "Performance Monitoring",
      "Conversion Tracking",
      "Custom Dashboards",
    ],
  },
];

export default function Services() {
  return (
    <SectionWrapper className="bg-neutral-950">
      <div className="flex justify-center">
        <PillBadge title="Our Services mx-auto" icon={<MdDesignServices />} />
      </div>

      <SectionHeader
        className="text-center"
        title="Everything You Need to Succeed Online"
        subtitle="From development to marketing, we provide comprehensive digital
          solutions that drive real results"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, desc, icon, gradient, tags }, idx) => (
          <div
            key={idx}
            className="rounded-lg border bg-[#0C0C0C] shadow-sm group hover:shadow-xl transition-all duration-500 border-[#191919] backdrop-blur-sm animate-fade-in-up cursor-pointer"
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
                <FaArrowRightLong className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
