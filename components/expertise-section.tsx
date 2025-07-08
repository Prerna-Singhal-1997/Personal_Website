import Image from "next/image"

export default function ExpertiseSection() {
  const expertiseItems = [
    {
      title: "Casualty Insurance Pricing",
      description:
        "Priced employer's liability, general liability & Auto using experience analysis. Analyzed actual versus expected experience to make appropriate adjustments.",
      image: "/images/casualty-insurance-pricing.jpg",
    },
    {
      title: "Property Insurance Pricing",
      description:
        "Collaborated with a team to develop a rating algorithm to price Hurricane peril for Commercial Property business through data simulations and CAT model deconstruction.",
      image: "/images/property-insurance-pricing.jpg",
    },
    {
      title: "Business Reports",
      description:
        "Created price monitoring reports with rate changes and bind ratio reports showcasing trends in the no. of quotes bound v/s total quoted. Aggregated and created visualizations based on region, sector, LoB, industry etc.",
      image: "/images/business-reports.jpg",
    },
    {
      title: "Rater Validation",
      description: "Ensured all possible scenarios are being validated in the updated rater for property policies.",
      image: "/images/rater-validation.jpg",
    },
    {
      title: "Data Visualizations",
      description: "Created geo-spatial visualizations for hurricane risk assessment using QGIS.",
      image: "/images/data-visualizations.jpg",
    },
    {
      title: "Documentation",
      description:
        "Maintained comprehensive documentation of projects and workflows, ensuring reproducibility and efficiency in analytical processes.",
      image: "/images/documentation.jpg",
    },
    {
      title: "Auto Rate Review",
      description: "Conducted personal auto insurance rate reviews to ensure premium accuracy and compliance.",
      image: "/images/auto-rate-review.jpeg",
    },
    {
      title: "AI Startup Branding & Strategy",
      description: "Assisted an AI startup with branding, marketing strategy and product development.",
      image: "/images/ai-startup.jpeg",
    },
  ]

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Professional Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow h-[280px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-4">
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
