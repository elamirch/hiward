"use client"

import { UserCheck, Stethoscope, Users, Clock, ChevronDown } from 'lucide-react'

export function StaffSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="min-h-screen snap-start snap-always flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            پرسنل بخش جراحی ۱
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            تیم حرفه‌ای در خدمت سلامت شما
          </p>

          <div className="space-y-6">
            {/* Head of Surgery */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">رییس بخش جراحی</h3>
                  <p className="text-blue-100">آقای دکتر حسین همتی</p>
                </div>
              </div>
            </div>

            {/* Supervisor */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">سرپرستار بخش</h3>
                  <p className="text-slate-600">سرکار خانم مقدم‌نیا - روپوش سرمه‌ای با یک نوار روی سرآستین</p>
                </div>
              </div>
            </div>

            {/* Staff Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
                  پرستاران
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  ۱۶ پرستار کارشناس با روپوش سرمه‌ای
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
                  کمک بهیار و منشی
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  کمک بهیار با روپوش سفید، منشی با لباس قهوه‌ای
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
                  خدمات
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  ۶ نفر با لباس فرم آبی و اتیکت شناسایی
                </p>
              </div>
            </div>

            {/* Visit Hours */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    ساعات ویزیت پزشکان
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    صبح‌ها از ساعت <span className="font-bold">۷ الی ۸</span> بیماران توسط دستیاران و پزشکان معالج ویزیت می‌شوند.
                  </p>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <p className="text-slate-600 text-sm">
                      <span className="font-bold text-amber-600">توجه:</span> لطفاً در هنگام ویزیت همراهان بخش را ترک نموده و با مأمور انتظامی همکاری لازم را داشته باشند.
                    </p>
                  </div>
                </div>
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
