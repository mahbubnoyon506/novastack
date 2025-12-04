"use client";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, CraftWave",
    feedback:
      "Absolutely outstanding service! The team delivered a stunning website that boosted our conversions within weeks.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Carter",
    role: "CEO, FinEdge",
    feedback:
      "Professional, fast, and highly skilled. Our mobile app is now smoother and more user-friendly than ever.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Parker",
    role: "Marketing Director, Brandsly",
    feedback:
      "Their marketing and analytics strategy helped us scale our online presence significantly. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-linear-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-message-square w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Testimonials
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear experiences from clients who trusted our digital expertise
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-lg border shadow-sm group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm p-8 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full shadow-md border"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed">
                “{t.feedback}”
              </p>

              <div className="flex items-center mt-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-stars h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m12 3 2.4 4.9L20 9l-4 4 .9 5-4.9-2.6L7 18l1-5-4-4 5-.1z" />
                </svg>
                <span className="text-sm font-medium">5.0 Rating</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
