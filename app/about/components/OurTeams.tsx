export default function OurTeams() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <img
              src="https://i.pravatar.cc/200?img=12"
              alt="Team Member"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500 mb-3">Frontend Developer</p>
            <p className="text-gray-600 text-sm">
              Expert in React, Tailwind, and building immersive UI experiences.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <img
              src="https://i.pravatar.cc/200?img=32"
              alt="Team Member"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Sarah Lee</h3>
            <p className="text-sm text-gray-500 mb-3">Backend Engineer</p>
            <p className="text-gray-600 text-sm">
              Specialized in Node.js, databases, and scalable architecture.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <img
              src="https://i.pravatar.cc/200?img=48"
              alt="Team Member"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Michael Smith</h3>
            <p className="text-sm text-gray-500 mb-3">UI/UX Designer</p>
            <p className="text-gray-600 text-sm">
              Creates beautiful, intuitive designs with a user‑first mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
