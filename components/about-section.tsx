import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P8NJLCASH7prSz0vPIRGpGC0YxTEn4.png"
              alt="Data Analysis Illustration"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">About Me</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Hey there! I'm Prerna Singhal, a data enthusiast, blending statistical precision with machine learning,
                visual storytelling, and creative problem-solving. Currently pursuing my MS in Information Systems, I
                thrive at the intersection of actuarial science, analytics, and AI-driven innovation.
              </p>
              <p>
                With a strong math and actuarial foundation, I've tackled pricing models, predictive analytics,
                simulations and more, rapidly picking up new skills to turn complex data into actionable insights. My
                quick learning, curiosity, and efficiency drive me to explore new frontiers and evolving technologies.
              </p>
              <p>
                Beyond numbers, I love organizing events, travelling, cooking, dancing, and more. Let's connect and
                shape the future with data, creativity, and technology!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

