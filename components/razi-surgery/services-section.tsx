"use client"

import { Home, HeartPulse, GraduationCap, HandHeart, ChevronDown } from 'lucide-react'

export function ServicesSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="min-h-screen snap-start snap-always flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            خدمات و واحدهای پشتیبان
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            مراکز خدماتی در دسترس بیماران
          </p>

          <div className="space-y-6">
            {/* Home Care */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">مراقبت در منزل</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    مؤسساتی در استان گیلان افتتاح شده که در صورت نیاز مبرم شما در منزل به حضور یک پرستار خبره جهت انجام کارهای درمانی، حمایتی، عاطفی، روحی و روانی آماده خدمت‌رسانی می‌باشند.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-700"><span className="font-bold">مسئول آموزش سلامت:</span> خانم‌ها دیپور</p>
                    <p className="text-slate-600 text-sm">محل: ساختمان شماره ۴</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow-up Nurse */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HeartPulse className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">واحد پرستار پیگیر</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    این واحد در ساختمان شماره ۷ کنار سنگ‌شکن واقع شده است. پیگیری و آموزش بیماران دیابتی، COPD و آمپوتاسیون پای دیابتی در این واحد انجام می‌شود.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 mb-4">
                    <p className="text-slate-700"><span className="font-bold">پرستار پیگیر:</span> خانم مژدهی</p>
                    <p className="text-slate-600 text-sm">محل: ساختمان شماره ۷ کنار سنگ‌شکن</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                    <p className="font-bold text-slate-900 mb-2">آموزش‌ها شامل:</p>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>خودمراقبتی و تغذیه سالم</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>کنترل قند خون و تزریق انسولین</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>پیشگیری از عوارض دیابت</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>فعالیت بدنی مناسب</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Work */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HandHeart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">واحد مددکاری</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    آماده خدمت‌رسانی به بیماران نیازمند
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-700"><span className="font-bold">مسئول مددکاری:</span> خانم دلیر</p>
                    <p className="text-slate-600 text-sm">محل: ساختمان شماره ۹</p>
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
