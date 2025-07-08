import Image from "next/image"
import { FileSpreadsheet, Code, Database, BarChart4, MapPin, Cpu } from "lucide-react"

export default function CertificationToolkitSection() {
  const tools = [
    {
      name: "MS Excel",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Python",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "R",
      icon: <BarChart4 className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "ResQ",
      icon: <BarChart4 className="w-6 h-6" />,
      color: "bg-red-100 text-red-600",
    },
    {
      name: "SQL",
      icon: <Database className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "@Risk",
      icon: <BarChart4 className="w-6 h-6" />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "QGIS",
      icon: <MapPin className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-600",
    },
    {
      name: "AI tools",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  return (
    <section id="certification" className="py-20 bg-gradient-to-b from-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Certification Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Certification</h2>
          <div className="flex justify-center">
            <div className="inline-block bg-white rounded-xl shadow-lg p-8 max-w-xl">
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-12 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IFoA%20logo.jpg-TEtzNtvaM1345fpOucOd2oy4WYRm0t.jpeg"
                    alt="Institute and Faculty of Actuaries Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Associate of Institute and Faculty of Actuaries (AIA)
                </h3>
                <div className="w-16 h-1 bg-blue-600 rounded-full mb-4"></div>
                <p className="text-slate-600 mb-4 text-center">
                  Achieved professional designation through rigorous examination and practical application of actuarial
                  principles.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-1">CAS Exam Equivalencies</h4>
                  <p className="text-slate-600 text-sm">EXAM 1, 2, 3F, M1, VE, VF</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Toolkit Section */}
        <div id="toolkit">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Digital Toolkit</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center mb-3`}>
                  {tool.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-800">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
