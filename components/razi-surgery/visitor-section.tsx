"use client"

import { Users, Clock, Moon, Ban, ChevronDown } from 'lucide-react'

export function VisitorSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  const hospitalRules = [
    "از صحبت با تلفن همراه خودداری کنید",
    "بیمارستان و بخش در ارتباط با اشیای قیمتی بیمار و همراه هیچ‌گونه مسئولیتی ندارد",
    "انجام تصویربرداری در بخش ممنوع می‌باشد",
    "از استعمال سیگار و دخانیات در بخش جداً خودداری کنید",
    "تابلوی منشور حقوق بیمار در راهرو بخش (سمت چپ در ورودی) قرار دارد",
    "از گذاشتن نایلون مشکی در یخچال خودداری کنید",
    "استفاده از ماسک در بیمارستان الزامی می‌باشد",
  ]

  return (
    <section className="min-h-screen snap-start snap-always flex items-center justify-center bg-gradient-to-br from-white to-slate-50 relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            شرایط حضور همراه و ملاقات
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            قوانین و ساعات ملاقات بیماران
          </p>

          <div className="space-y-6">
            {/* Companion Rules */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">حضور همراه نزد بیمار</h3>
                  <div className="space-y-3 text-blue-50">
                    <p className="flex items-start gap-2">
                      <Moon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">عصر و شب:</span> بهتر است بیمار یک همراه داشته باشد</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Ban className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">صبح تا ظهر:</span> به علت ویزیت پزشکان، حضور همراه لازم نیست</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">ساعات ملاقات</h3>
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                    <p className="text-slate-700 text-lg mb-2">همه روزه:</p>
                    <p className="text-3xl font-bold text-emerald-600">۱۴:۰۰ تا ۱۶:۰۰</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hospital Rules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                توجهات پس از حضور در بیمارستان
              </h3>
              <ul className="space-y-3">
                {hospitalRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-slate-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Patient Rights */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">منشور حقوق بیماران</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>بیمار حق دارد خدمات مطلوب دریافت کند</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>اطلاعات باید به نحو مطلوب و به میزان کافی در اختیار بیماران قرار بگیرد</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>بیمار حق انتخاب آزاد در دریافت خدمات مطلوب را دارد</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>ارائه خدمات مبتنی بر احترام به حریم خصوصی بیمار و رعایت اصل رازداری</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>دسترسی به نظام کارآمد و رسیدگی به شکایات حق بیمار است</span>
                </li>
              </ul>
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
