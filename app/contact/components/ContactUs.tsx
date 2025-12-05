import SectionHeader from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import ContactForm from "./ContactForm";

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

                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contacts.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-transparent shadow-sm border border-neutral-950"
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
