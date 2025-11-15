"use client"

import { Phone, MessageSquare, MapPin, ChevronDown } from 'lucide-react'

export function AppointmentSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="h-screen snap-start snap-always flex items-center justify-center bg-gradient-to-br from-white to-blue-50 relative">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            نحوه دریافت نوبت
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            سه روش آسان برای دریافت نوبت جراحی
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-4">
                تلفنی
              </h3>
              <p className="text-slate-600 text-center mb-6 leading-relaxed">
                با شماره زیر تماس بگیرید
              </p>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-blue-600 font-mono">
                  013-33542301
                </p>
              </div>
            </div>

            {/* SMS */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-cyan-100 hover:border-cyan-300 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-4">
                پیامکی
              </h3>
              <p className="text-slate-600 text-center mb-6 leading-relaxed">
                به شماره زیر پیامک ارسال کنید
              </p>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-cyan-600 font-mono">
                  30007890
                </p>
              </div>
            </div>

            {/* In-Person */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-4">
                حضوری
              </h3>
              <p className="text-slate-600 text-center mb-6 leading-relaxed">
                مراجعه به پذیرش بیمارستان
              </p>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <p className="text-sm text-slate-700 leading-relaxed">
                  واحد پذیرش بخش جراحی
                  <br />
                  طبقه اول
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
