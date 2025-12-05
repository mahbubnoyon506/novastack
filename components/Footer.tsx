"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const quickLinks = [
  {
    name: "About",
    route: "#",
  },
  {
    name: "Contact",
    route: "#",
  },
  {
    name: "Privacy Policy",
    route: "#",
  },
  {
    name: "Terms & Conditions",
    route: "#",
  },
];

const services = [
  {
    name: "Web Development",
    route: "#",
  },
  {
    name: "Mobile Apps",
    route: "#",
  },
  {
    name: "Social Media Ads",
    route: "#",
  },
  {
    name: "Analytics",
    route: "#",
  },
];

const contact = [
  {
    name: "+1 (555) 123-4567",
    icon: <MdOutlineLocalPhone size={18} />,
  },
  {
    name: "novastackand@gmail.com",
    icon: <FaRegEnvelope size={16} />,
  },
  {
    name: "New York, NY",
    icon: <MdOutlineLocationOn size={18} />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-50">NovaStack</span>
            </Link>
            <p className="text-muted-foreground">
              Full-stack digital solutions for modern businesses. Build, market,
              and scale with cutting-edge technology and proven strategies.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground">
                <FaRegEnvelope size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-muted-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.route}
                    className="text-muted-foreground hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-muted-foreground">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.route}
                    className="text-muted-foreground hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-muted-foreground">
              Contact
            </h4>
            <div className="space-y-3">
              {contact.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 text-muted-foreground"
                >
                  {item.icon}
                  <span className="">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 NovaStack. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
}
