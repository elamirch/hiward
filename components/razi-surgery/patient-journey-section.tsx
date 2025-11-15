"use client"

import { Calendar, FileText, Stethoscope, ClipboardCheck, Scissors, BedDouble, HomeIcon, HeartPulse, ChevronDown } from 'lucide-react'

export function PatientJourneySection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  const steps = [
    {
      icon: Calendar,
      title: "۱. دریافت نوبت",
      description: "تماس تلفنی، پیامکی یا مراجعه حضوری به پذیرش",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "۲. آماده‌سازی پرونده",
      description: "تکمیل اطلاعات، ارائه مدارک و انجام آزمایشات مورد نیاز",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Stethoscope,
      title: "۳. ویزیت پزشک",
      description: "معاینه توسط جراح و تعیین نوع درمان مناسب",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: ClipboardCheck,
      title: "۴. تایید جراحی",
      description: "تعیین تاریخ عمل و دریافت دستورات قبل از جراحی",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Scissors,
      title: "۵. انجام جراحی",
      description: "انجام عمل توسط تیم جراحی در اتاق عمل مجهز",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: BedDouble,
      title: "۶. ریکاوری",
      description: "استراحت در بخش بستری و نظارت پرستاری",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: HomeIcon,
      title: "۷. ترخیص",
      description: "دریافت دستورالعمل‌های مراقبتی و داروها",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: HeartPulse,
      title: "۸. پیگیری و فالوآپ",
      description: "ویزیت‌های بعدی و کنترل روند بهبودی",
      color: "from-rose-500 to-rose-600",
    },
  ]

  return (
    <section className="min-h-screen snap-start snap-always flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            مراحل سفر درمانی شما
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            هشت مرحله از دریافت نوبت تا بهبودی کامل
          </p>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-slate-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
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
