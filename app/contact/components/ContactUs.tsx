import CustomButton from "@/components/CustomButton";
import SectionHeader from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

const contacts = [
  {
    name: "Email Us",
    content: "contact@novastacksolutions.io",
    icon: <FaRegEnvelope color="white" size={26} />,
  },
  {
    name: "Call Us",
    content: "+91-2250333576",
    icon: <MdOutlineLocalPhone color="white" size={30} />,
  },
  {
    name: "Visit Us",
    content:
      "41, 1st Floor, Building No 3, Sunshine Commercial Complex, Opposite Sunshine Heights, Near Railway Station, Nallasopara East. Palghar – 401209",
    icon: <MdOutlineLocationOn color="white" size={30} />,
  },
  {
    name: "Quick Response",
    content:
      " We typically respond to all inquiries within 2-4 hours during business hours.",
    icon: <MdOutlineSupportAgent color="white" size={30} />,
  },
];

export default function ContactUs() {
  return (
    <SectionWrapper className="bg-neutral-900">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Let's Build Together"
          subtitle="Ready to transform your ideas into reality? Get in touch and let's
            discuss your next big project."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="rounded-lg border border-[#191919] bg-neutral-950 text-card-foreground shadow-sm glass transition-all duration-300">
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-100">
                  Send us a message
                </h3>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your full name"
                      required
                      className="w-full h-10 mt-2 rounded-md border px-3 py-2 text-base bg-background/50 border-border/50 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus:border-nova-purple transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full h-10 mt-2 rounded-md border px-3 py-2 text-base bg-background/50 border-border/50 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus:border-nova-purple transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us about your project, goals, and timeline..."
                      required
                      className="w-full min-h-20 mt-2 rounded-md border px-3 py-2 text-sm bg-background/50 border-border/50 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus:border-nova-purple transition resize-none"
                    />
                  </div>
                  <CustomButton
                    type="submit"
                    className="bg-neutral-900 w-full"
                    icon={<FaArrowRightLong />}
                  >
                    Send Message
                  </CustomButton>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contacts.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-transparent shadow-sm border border-[#7E7E7E]"
                >
                  <div>{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-100">{item.name}</h4>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
