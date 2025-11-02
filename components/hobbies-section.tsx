import Link from "next/link"

export default function HobbiesSection() {
  // First row - 3 items with narrower content
  const firstRowHobbies = [
    {
      emoji: "🧘‍♀️",
      title: "Pranayama",
      description:
        "I practice pranayama and meditation regularly, striving to make them a daily habit for balance and mindfulness.",
    },
    {
      emoji: "🎨",
      title: "Art",
      description: "I love painting, craft, and DIY projects, turning imagination into tangible art.",
      link: "https://drive.google.com/file/d/1G82w4SgQQBGpbsKlQekXxhoK4k1V1_e9/view?usp=drive_link",
      linkText: "See my artwork",
    },
    {
      emoji: "🏸",
      title: "Badminton",
      description: "A sport I thoroughly enjoy, combining agility, precision, and strategy to keep me active.",
    },
  ]

  // Second row - 3 items with more content
  const secondRowHobbies = [
    {
      emoji: "💃",
      title: "Dance",
      description:
        "Dance has been my passion since childhood! I learnt Indian classical dance in school, was part of my college's Western dance society (winning multiple competitions), and even choreographed an international competition in the UK securing first place.",
      link: "https://youtu.be/f_bm4rBuVO4?si=DAaSd1t-KOq7Kl0z",
      linkText: "Watch my choreography",
    },
    {
      emoji: "✈️",
      title: "Travel & Exploration",
      description:
        "I love exploring diverse cultures and places rich in natural beauty through hiking, camping, or simply travelling. I've visited most parts of India and traveled internationally to Thailand, Hong Kong, Malaysia, Macau, Denmark, Canada, and had the unique experience of visiting NASA. I hold degrees from India (BSc), the UK (MSc), and the US (MS), shaping my multicultural perspective.",
    },
    {
      emoji: "👩‍🍳",
      title: "Cooking",
      description:
        "What started as a survival skill turned into a passion. I love cooking for others and enjoy blending flavors from different cuisines like Mediterranean, Italian, Indian, Chinese, and beyond. I love making yogurt, paneer (Indian cheese), chapati (Indian bread) etc all from scratch.",
    },
  ]

  // Third row - 2 remaining items
  const thirdRowHobbies = [
    {
      emoji: "🌿",
      title: "Nature & Wellness Enthusiast",
      description:
        'I enjoy reading and applying Naturopathy and Ayurveda principles. I truly live by the quote "Health is Wealth," even created a quick 30-min website using AI to research and showcase the balance between technology and nature, with Wall-E movie inspiring to embrace AI while staying mindful of its impact.',
      link: "https://v0-return-to-nature.vercel.app/",
      linkText: "Visit my nature website",
    },
    {
      emoji: "🧵",
      title: "Embroidery / Crochet",
      description: (
        <>
          I've recently started exploring{" "}
          <Link
            href="https://drive.google.com/file/d/17pAy5VNiOantUPcx136G-vl37MAw5b26/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            embroidery
          </Link>{" "}
          and{" "}
          <Link
            href="https://drive.google.com/file/d/19NgZzyGiylpcQsr2J6f8dHyRUjLSfyHq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            crochet
          </Link>
          ; both feel incredibly meditative and fulfilling. Stitch by stitch, they help me unwind, stay creative, and
          take mindful breaks from screens while creating something beautiful and tangible with my hands.
        </>
      ),
    },
  ]

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Hobbies</h2>

        {/* First Row - 3 items with narrower content */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8">
          {firstRowHobbies.map((hobby, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-3">{hobby.emoji}</div>
                <h3 className="text-lg font-bold mb-2 text-slate-800">{hobby.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{hobby.description}</p>
                {hobby.link && (
                  <Link
                    href={hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm flex items-center gap-1"
                  >
                    {hobby.linkText} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 items with more content */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8">
          {secondRowHobbies.map((hobby, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-3">{hobby.emoji}</div>
                <h3 className="text-lg font-bold mb-2 text-slate-800">{hobby.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{hobby.description}</p>
                {hobby.link && (
                  <Link
                    href={hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm flex items-center gap-1"
                  >
                    {hobby.linkText} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - 2 remaining items */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {thirdRowHobbies.map((hobby, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-3">{hobby.emoji}</div>
                <h3 className="text-lg font-bold mb-2 text-slate-800">{hobby.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{hobby.description}</p>
                {hobby.link && (
                  <Link
                    href={hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm flex items-center gap-1"
                  >
                    {hobby.linkText} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
