"use client"

import { Building2, Bed, ThermometerSnowflake, Refrigerator, BellRing, DoorOpen, ChevronDown } from 'lucide-react'

export function PhysicalSpaceSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  const facilities = [
    {
      icon: Bed,
      title: "30 تخت بستری",
      description: "اتاق‌های دو تخته و سه تخته با تخت‌های استاندارد دارای نرده و اهرم",
    },
    {
      icon: ThermometerSnowflake,
      title: "سیستم گرمایش و سرمایش",
      description: "هر اتاق مجهز به کولر، شوفاژ و تهویه مناسب",
    },
    {
      icon: Refrigerator,
      title: "کمد و یخچال اختصاصی",
      description: "امکانات نگهداری وسایل شخصی برای هر بیمار",
    },
    {
      icon: BellRing,
      title: "زنگ اخبار",
      description: "سیستم احضار سریع پرستار در هر تخت",
    },
    {
      icon: DoorOpen,
      title: "سرویس بهداشتی مجزا",
      description: "توالت فرنگی، حمام و آب گرم و سرد در هر اتاق",
    },
    {
      icon: Building2,
      title: "تجهیزات پزشکی",
      description: "اکسیژن و ساکشن مرکزی بالای سر هر تخت",
    },
  ]

  return (
    <section className="min-h-screen snap-start snap-always flex items-center justify-center bg-gradient-to-br from-white to-slate-50 relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            فضای فیزیکی بخش
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            امکانات و تجهیزات بخش جراحی ۱
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {facilities.map((facility, index) => {
              const Icon = facility.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {facility.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              امکانات اضافی
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>مهر و کتاب قرآن برای عبادت بیماران و همراهان</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>جهت نما نصب شده در هر اتاق</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>تابلوی معرفی پرستار و پزشک معالج بالای هر تخت</span>
              </li>
            </ul>
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
