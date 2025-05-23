import Image from "next/image"

export default function EngagementsSection() {
  const engagements = [
    {
      title: "Diversity, Equity and Inclusion Committee",
      description: "Active member helping address issues related to gender diversity & equity",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diversity%2C%20Equity%20and%20Inclusion%20Committee%20%282%29.JPEG-8uWQxrcUjbwTHpiFZ7rraMytYmcGKS.jpeg",
      color: "bg-purple-50",
    },
    {
      title: "Dance Events",
      description: "Participated in and choreographed for several dance events",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dance%20Events.JPEG-wDo58bHsg8uceAI4eF1dtoFPeugtt2.jpeg",
      color: "bg-pink-50",
    },
    {
      title: "T-shirt Design",
      description: "Designed t-shirts for a running event",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/T-shirt%20Design.jpg-uFCgvcA61eJshy7iSwZxAeqJifUmlj.jpeg",
      color: "bg-blue-50",
    },
    {
      title: "Knowledge Committee Trainer",
      description: "Enhanced team's basic corporate Actuarial knowledge through engaging sessions",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Knowledge%20Committee%20Trainer.jpg-b5I383uPUXmFNxYqsAXeW7Al9xwFlD.jpeg",
      color: "bg-green-50",
    },
    {
      title: "Company Magazine Contributor",
      description: "Contributed articles to company magazine",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-26P2UzsnByM54V6x1LdMHAjCkpGO2N.png",
      color: "bg-orange-50",
    },
    {
      title: "Pricing Presentations",
      description: "Delivered pricing presentations to non-technical audiences and leadership",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pricing%20Presentations.jpg-sSHj7nT3rqTiCu98Dycy942y4DeLwc.jpeg",
      color: "bg-red-50",
    },
  ]

  return (
    <section id="engagements" className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Supplementary Engagements</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagements.map((item, index) => (
            <div key={index} className={`${item.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} layout="fill" objectFit="cover" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">{item.title}</h3>
                <p className="text-slate-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
