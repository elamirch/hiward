"use client"

import { Shield, CreditCard, Percent, ChevronDown } from 'lucide-react'

export function InsuranceSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  const insuranceTypes = [
    {
      type: "روستایی، درمانی، نیروهای مسلح، کارمندی، سلامت",
      hospitalization: "بر اساس دهک: ۳%، ۵%، ۱۰% یا رایگان",
      outpatient: "۳۰%",
      color: "from-blue-500 to-blue-600",
    },
    {
      type: "تأمین اجتماعی",
      hospitalization: "۱۰% (ارجاعی و خاص: رایگان)",
      outpatient: "۳۰%",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      type: "جانبازان",
      hospitalization: "رایگان",
      outpatient: "رایگان",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      type: "ارتش",
      hospitalization: "رایگان",
      outpatient: "رایگان",
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <section className="min-h-screen snap-start snap-always flex items-center justify-center bg-gradient-to-br from-white to-slate-50 relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            بیمه‌ها و هزینه‌های درمان
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            اطلاعات تعرفه‌ها بر اساس نوع بیمه
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {insuranceTypes.map((insurance, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${insurance.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {insurance.type}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-slate-500 mb-1">بستری</p>
                      <p className="text-slate-700 font-medium">{insurance.hospitalization}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Percent className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-slate-500 mb-1">سرپایی</p>
                      <p className="text-slate-700 font-medium">{insurance.outpatient}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              توضیحات مهم
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>هزینه درمان با توجه به دهک تعیین شده در سیستم محاسبه می‌شود</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>دهک‌های مختلف شامل ۳%، ۵%، ۱۰% یا رایگان (دهک صفر) می‌باشد</span>
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
