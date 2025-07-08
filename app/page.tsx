import Image from "next/image"
import Link from "next/link"
import { LinkedinIcon, GithubIcon, ChevronDown } from "lucide-react"
import AboutSection from "@/components/about-section"
import ExpertiseSection from "@/components/expertise-section"
import ProjectsSection from "@/components/projects-section"
import CertificationToolkitSection from "@/components/certification-toolkit-section"
import EngagementsSection from "@/components/engagements-section"
import HobbiesSection from "@/components/hobbies-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-90">
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-9n0bf0OVF3vTaipKaGKeXJjp1PoIIF.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-8 mx-auto">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshot.jpg-mnzlitmhp0kMCKspbxCNlMjFW6H58q.jpeg"
                alt="Prerna Singhal"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Prerna Singhal</h1>
            <p className="text-xl md:text-2xl text-white/90 italic mb-6">"Actuarial at Core, Everything More"</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://www.linkedin.com/in/prerna-singhal-aia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#005885] text-white px-6 py-3 rounded-full transition-colors duration-300"
              >
                <LinkedinIcon size={20} />
                Connect on LinkedIn
              </Link>
              <Link
                href="https://github.com/Prerna-Singhal-1997"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#24292e] hover:bg-[#1a1e22] text-white px-6 py-3 rounded-full transition-colors duration-300"
              >
                <GithubIcon size={20} />
                View GitHub Profile
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-white w-10 h-10" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Expertise Section */}
      <div id="expertise">
        <ExpertiseSection />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Combined Certification and Toolkit Section */}
      <div id="certification">
        <CertificationToolkitSection />
      </div>

      {/* Engagements Section */}
      <div id="engagements">
        <EngagementsSection />
      </div>

      {/* Hobbies Section */}
      <div id="hobbies">
        <HobbiesSection />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Prerna Singhal. All rights reserved.</p>
      </footer>
    </main>
  )
}
