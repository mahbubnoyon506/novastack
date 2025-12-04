export default function ContactUs() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* background blur */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-nova-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Let's Build Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and let's
            discuss your next big project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm glass border-border/50 hover:border-nova-purple/50 transition-all duration-300">
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
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
                      className="w-full min-h-[80px] mt-2 rounded-md border px-3 py-2 text-sm bg-background/50 border-border/50 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus:border-nova-purple transition resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <button
                    type="submit"
                    className="relative w-full py-4 text-lg rounded-lg border border-secondary-foreground/20 bg-black text-white overflow-hidden transition-colors"
                  >
                    <span className="relative z-10">Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-card shadow-sm glass border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-nova-purple/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-nova-purple"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">
                    contact@novastacksolutions.io
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-card shadow-sm glass border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-nova-cyan/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-nova-cyan"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">+91-2250333576</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-card shadow-sm glass border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-nova-magenta/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-nova-magenta"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Visit Us</h4>
                  <p className="text-muted-foreground">
                    41, 1st Floor, Building No 3, Sunshine Commercial Complex,
                    Opposite Sunshine Heights, Near Railway Station, Nallasopara
                    East. Palghar – 401209
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-nova-purple/10 to-nova-cyan/10 border border-nova-purple/20">
              <h4 className="font-semibold text-foreground mb-2">
                Quick Response
              </h4>
              <p className="text-muted-foreground text-sm">
                We typically respond to all inquiries within 2-4 hours during
                business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
