import { FileSpreadsheet, Code, Database, BarChart4, MapPin, Cpu } from "lucide-react"

export default function DigitalToolkitSection() {
  const tools = [
    {
      name: "MS Excel",
      icon: <FileSpreadsheet className="w-8 h-8" />,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Python",
      icon: <Code className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "R",
      icon: <BarChart4 className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "ResQ",
      icon: <BarChart4 className="w-8 h-8" />,
      color: "bg-red-100 text-red-600",
    },
    {
      name: "SQL",
      icon: <Database className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "@Risk",
      icon: <BarChart4 className="w-8 h-8" />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "QGIS",
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-teal-100 text-teal-600",
    },
    {
      name: "AI tools",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  return (
    <section id="toolkit" className="py-20 bg-gradient-to-b from-yellow-50 to-green-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Digital Toolkit</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-20 h-20 ${tool.color} rounded-full flex items-center justify-center mb-4`}>
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

