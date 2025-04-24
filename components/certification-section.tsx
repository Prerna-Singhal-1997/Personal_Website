import Image from "next/image"

export default function CertificationSection() {
  return (
    <section id="certification" className="py-20 bg-gradient-to-b from-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-12 text-slate-800">Certification</h2>

        <div className="inline-block bg-white rounded-xl shadow-lg p-10 max-w-2xl">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-16 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IFoA%20logo.jpg-TEtzNtvaM1345fpOucOd2oy4WYRm0t.jpeg"
                alt="Institute and Faculty of Actuaries Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              Associate of Institute and Faculty of Actuaries (AIA)
            </h3>
            <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
            <p className="text-slate-600 mb-6">
              Achieved professional designation through rigorous examination and practical application of actuarial
              principles.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-2">CAS Exam Equivalencies</h4>
              <p className="text-slate-600">EXAM 1, 2, 3F, M1, VE, VF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

