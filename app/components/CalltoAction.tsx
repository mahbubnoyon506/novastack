"use client";

export default function CalltoAction() {
  return (
    <section
      id="contact"
      className="py-24 bg-linear-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how our development and marketing expertise can
            accelerate your growth. Get a free consultation and project roadmap
            today.
          </p>

          {/* Highlight Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-sm border border-primary/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            Fast Track: Working Demo in 14 Days or Less
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Primary CTA */}
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-11 rounded-md px-8 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Free Strategy Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>

            {/* Secondary CTA */}
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-11 rounded-md px-8 border border-border bg-background text-foreground hover:bg-muted hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              Chat With Us
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4 rounded-lg bg-card border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Project Support</div>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">
                ≤14 Days
              </div>
              <div className="text-muted-foreground">Demo Guarantee</div>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">
                Satisfaction Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
