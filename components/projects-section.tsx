import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Computer Vision – GarbEDGE",
      date: "March 2025",
      description:
        "Collaborated with a team to develop an ML model for real-time waste sorting in recycling trucks, reducing contamination and improving recycling efficiency.",
      image: "/images/ai-computer-vision.jpeg",
      link: "https://drive.google.com/file/d/15pmHbFA4atOcN7If_LdlZxlxbqUjGF_f/view?usp=drive_link",
    },
    {
      title: "Cybersecurity in Space",
      date: "March 2025",
      description: "Analyzed cybersecurity vulnerabilities, mitigation & regulations in space vehicles.",
      image: "/images/cybersecurity-space.jpeg",
      link: "https://drive.google.com/file/d/1s16adnvWgD6Q-lYieYqnpzXJGjArvmvq/view?usp=drive_link",
    },
    {
      title: "Cybersecurity in Smart Apartment Buildings",
      date: "November 2024",
      description: "Examined cybersecurity vulnerabilities and mitigation strategies for IoT-integrated smart homes",
      image: "/images/cybersecurity-smart-buildings.jpeg",
      link: "https://docs.google.com/presentation/d/1eL0GQ44pTXM6o6uCLpG5x1KklE0k3BSv/edit?usp=drive_link&ouid=116255848911518624942&rtpof=true&sd=true",
    },
    {
      title: "EV Charging Insights",
      date: "November 2024",
      description:
        "Developed a predictive model to analyze EV charging demand and optimal station placements using data on vehicle model/age, battery type, time of day, location etc. Applied techniques like correlation analysis, linear regression, random forest, simulation, and GLM models, with visualizations to support the findings.",
      image: "/images/ev-charging.jpeg",
      link: "https://docs.google.com/presentation/d/16sNTuR-omsigx-dNzcEFsrkTD96uGWWN/edit?usp=drive_link&ouid=116255848911518624942&rtpof=true&sd=true",
    },
    {
      title: "Digital Twin for Cars",
      date: "November 2024",
      description:
        "Researched and presented on the use of digital twin technology in automotive sector for predictive maintenance & impact on insurance. Talked about car journey, end users of the technology, current industry and cost-benefit analysis.",
      image: "/images/digital-twin-cars.jpeg",
      link: "https://docs.google.com/presentation/d/1kRNjDgA5YpazNrQhngII15vvhqO0itgI/edit?usp=drive_link&ouid=116255848911518624942&rtpof=true&sd=true",
    },
    {
      title: "Space Insurance",
      date: "June 2020",
      description:
        "Developed a comprehensive analysis of the space insurance sector, covering key aspects such as coverage options, participant involvement, historical trends, and the current market landscape. Explored future developments and emerging trends within the industry to provide a thorough understanding of its evolution.",
      image: "/images/space-insurance.jpeg",
      link: "https://docs.google.com/presentation/d/19lQCXSzz2B_VEDDzNw9iqCoToq04gmZ_/edit?usp=drive_link&ouid=116255848911518624942&rtpof=true&sd=true",
    },
    {
      title: "How University Education impact wages",
      date: "December 2019",
      description:
        "Conducted an in-depth analysis of wage disparities by evaluating the influence of education level, gender, occupation, race, and ethnicity. Leveraged R programming to apply advanced statistical techniques such as regression analysis, hypothesis testing, and ANOVA. Presented findings in a structured and professional format using LaTeX documentation.",
      image: "/images/university-education.jpeg",
      link: "https://drive.google.com/file/d/1H-oY8-Scr109lBsSBY4DKGHNo0CcjwMz/view?usp=drive_link",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <div className="relative h-72 md:h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-1 text-slate-800">{project.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{project.date}</p>
                  <p className="text-slate-600">{project.description}</p>
                  {project.link && (
                    <div className="mt-4">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors text-sm flex items-center gap-1"
                      >
                        View Project <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

