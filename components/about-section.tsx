import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Section - Content and Photo */}
        <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
          {/* Content - Left Side */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Jack of All Trades, Master of Actuarial!</h2>
            <div className="max-w-2xl">
              <p className="text-base text-slate-700 mb-4">
                Hey there! I'm Prerna Singhal, a data enthusiast, blending statistical precision with machine learning,
                visual storytelling, and creative problem-solving. I thrive at the intersection of numbers and
                narratives, models and meanings, always exploring, always learning. My curiosity, speed, and efficiency
                fuel my journey across the Actuarial space.
              </p>
              <p className="text-base text-slate-700">
                There's more to me than just numbers — a colorful mix of interests waiting in the hobbies section!
              </p>
            </div>
          </div>

          {/* Graduation Photo - Right Side */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-60 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/resume.png" alt="Prerna Singhal Graduation" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width Timeline */}
        <div className="w-full">
          <div className="relative w-full">
            <Image
              src="/images/resume-timeline.png"
              alt="Professional and Educational Timeline"
              width={1200}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
