import Link from "next/link"

export default function HobbiesSection() {
  const hobbies = [
    {
      emoji: "💃",
      title: "Dancing",
      description:
        "Dance has been my passion since childhood! I learnt Indian classical dance in school, was part of my college's Western dance society (winning multiple competitions), and even choreographed an international competition in the UK securing first place.",
      link: "https://youtu.be/f_bm4rBuVO4?si=DAaSd1t-KOq7Kl0z",
      linkText: "Watch my choreography",
    },
    {
      emoji: "🎨",
      title: "Artsy",
      description: "I love painting, crafting, and DIY projects, turning imagination into tangible art.",
      link: "https://drive.google.com/file/d/1G82w4SgQQBGpbsKlQekXxhoK4k1V1_e9/view?usp=drive_link",
      linkText: "See my artwork",
    },
    {
      emoji: "🏸",
      title: "Badminton",
      description: "A sport I thoroughly enjoy, combining agility, precision, and strategy to keep me active.",
    },
    {
      emoji: "✈️",
      title: "Travelling",
      description:
        "I love exploring diverse cultures and have visited most parts of India along with some international travels to Thailand, Hong Kong, Malaysia, Macau, Denmark, Canada, and a special highlight of visiting NASA! I hold degrees from India (BSc), the UK (MSc), and the US (MS), shaping my multicultural perspective.",
    },
    {
      emoji: "👩‍🍳",
      title: "Cooking",
      description:
        "What started as a survival skill turned into a passion. I love cooking for others and enjoy making yogurt, paneer (Indian cheese), chapati (Indian bread) and more—all from scratch.",
    },
    {
      emoji: "🌿",
      title: "Nature & Wellness Enthusiast",
      description:
        'I love being close to nature and enjoy reading about naturopathy, Ayurveda, acupressure, and more. I truly live by the quote "Health is Wealth." This passion led me to create a website in less than an hour, utilizing AI tools for deep research, content, videos, and image generation. It explores the balance between technology and nature—my favorite part being the lessons from Wall-E, which inspired me to embrace AI\'s potential while staying mindful of its impact.',
      link: "https://v0-return-to-nature.vercel.app/",
      linkText: "Visit my nature website",
    },
  ]

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Hobbies</h2>

        <div className="space-y-6">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-3xl">
                  {hobby.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{hobby.title}</h3>
                  <p className="text-slate-600 mb-2">{hobby.description}</p>
                  {hobby.link && (
                    <Link
                      href={hobby.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 text-sm"
                    >
                      {hobby.linkText} <span aria-hidden="true">→</span>
                    </Link>
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

