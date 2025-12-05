import SectionHeader from "@/components/SectionHeader";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";

const teams = [
  {
    avatar: "https://i.pravatar.cc/200?img=12",
    name: "John Doe",
    designation: "Frontend Developer",
    expertise:
      "Expert in React, Tailwind, and building immersive UI experiences.",
  },
  {
    avatar: "https://i.pravatar.cc/200?img=32",
    name: "Sarah Lee",
    designation: "Backend Engineer",
    expertise: "Specialized in Node.js, databases, and scalable architecture.",
  },
  {
    avatar: "https://i.pravatar.cc/200?img=48",
    name: "Michael Smith",
    designation: "UI/UX Designer",
    expertise:
      "Creates beautiful, intuitive designs with a user‑first mindset.",
  },
];

export default function OurTeams() {
  return (
    <SectionWrapper className="bg-neutral-950">
      <SectionHeader title="Meet Our Team" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teams.map((team, idx) => (
          <div
            key={idx}
            className="bg-transparent shadow-lg border border-[#191919] rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <Image
              className="w-32 h-32 rounded-full object-cover mb-4"
              width={125}
              height={125}
              src={team.avatar}
              alt="Team Member"
            />
            <h3 className="text-xl text-gray-100 font-semibold">{team.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {team.designation}
            </p>
            <p className="text-muted-foreground text-sm">{team.expertise}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
