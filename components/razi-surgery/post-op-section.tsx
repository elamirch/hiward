"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle } from 'lucide-react'

export function PostOpSection() {
  const [activeTab, setActiveTab] = useState("laser-rf")

  const instructions = {
    "laser-rf": {
      title: "دستورالعمل‌های بعد از لیزر / RF واریس",
      items: [
        "جوراب فشاری را به مدت ۲-۳ هفته به طور مداوم استفاده کنید",
        "از راه رفتن منظم (۳۰ دقیقه در روز) برای بهبود گردش خون استفاده کنید",
        "از ایستادن طولانی مدت در ۲ هفته اول خودداری کنید",
        "پاها را در حالت استراحت بالاتر از سطح قلب نگه دارید",
        "داروهای تجویز شده را طبق دستور پزشک مصرف کنید",
        "از ورزش‌های سنگین و بلند کردن اجسام سنگین به مدت ۲ هفته پرهیز کنید",
      ],
      warnings: [
        "در صورت تورم شدید، درد غیرعادی یا قرمزی پا فوراً به پزشک مراجعه کنید",
        "از قرار گرفتن در معرض حرارت مستقیم (حمام آفتاب، سونا) به مدت ۱ ماه خودداری کنید",
      ],
    },
    "sclerotherapy": {
      title: "دستورالعمل‌های بعد از اسکلروتراپی واریس و تلانژکتازی",
      items: [
        "جوراب فشاری را به مدت ۱-۲ هفته استفاده کنید",
        "بلافاصله بعد از تزریق ۱۵-۲۰ دقیقه پیاده‌روی کنید",
        "از فعالیت‌های ورزشی سبک برای تقویت گردش خون استفاده کنید",
        "از نور مستقیم خورشید به مدت ۲ هفته اجتناب کنید",
        "کبودی و تغییر رنگ موقت پوست طبیعی است و ظرف چند هفته برطرف می‌شود",
        "از حمام داغ و سونا به مدت ۱ هفته پرهیز کنید",
      ],
      warnings: [
        "در صورت درد شدید، سوزش غیرعادی یا تغییر رنگ شدید پوست مراجعه کنید",
        "نتیجه کامل معمولاً طی ۴-۶ هفته مشخص می‌شود",
      ],
    },
    "thyroid": {
      title: "دستورالعمل‌های بعد از ابلیشن ندول تیروئید",
      items: [
        "کمپرس سرد روی ناحیه گردن برای کاهش تورم استفاده کنید",
        "از بلند کردن اشیاء سنگین به مدت ۱ هفته خودداری کنید",
        "داروهای ضد درد تجویز شده را در صورت نیاز مصرف کنید",
        "از خوردن غذاهای خیلی داغ یا سرد در ۲۴ ساعت اول پرهیز کنید",
        "آزمایشات پیگیری تیروئید را طبق برنامه پزشک انجام دهید",
        "فعالیت‌های عادی را می‌توانید از روز بعد شروع کنید",
      ],
      warnings: [
        "تورم خفیف گردن و احساس فشار در چند روز اول طبیعی است",
        "در صورت تنگی نفس، تب یا درد شدید فوراً مراجعه کنید",
      ],
    },
    "parathyroid": {
      title: "دستورالعمل‌های بعد از ابلیشن ندول پاراتیروئید",
      items: [
        "کمپرس سرد برای کاهش تورم و کبودی استفاده کنید",
        "از فعالیت‌های سنگین به مدت ۳-۵ روز پرهیز کنید",
        "سطح کلسیم خون را طبق دستور پزشک کنترل کنید",
        "در صورت تجویز، مکمل کلسیم مصرف کنید",
        "آزمایشات پیگیری PTH و کلسیم را انجام دهید",
        "فعالیت‌های روزمره معمولاً بعد از ۲-۳ روز امکان‌پذیر است",
      ],
      warnings: [
        "در صورت بروز علائم کاهش کلسیم (گزگز، اسپاسم عضلانی) فوراً مراجعه کنید",
        "تورم و کبودی خفیف در چند روز اول طبیعی است",
      ],
    },
  }

  const tabs = [
    { id: "laser-rf", label: "لیزر / RF واریس" },
    { id: "sclerotherapy", label: "اسکلروتراپی" },
    { id: "thyroid", label: "ندول تیروئید" },
    { id: "parathyroid", label: "ندول پاراتیروئید" },
  ]

  const currentInstructions = instructions[activeTab as keyof typeof instructions]

  return (
    <section className="min-h-screen snap-start snap-always flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            دستورالعمل‌های پس از عمل
          </h2>
          <p className="text-center text-slate-300 mb-12 text-lg">
            راهنمای مراقبت بعد از جراحی برای بهبودی سریع‌تر
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-slate-900 shadow-lg scale-105"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              {currentInstructions.title}
            </h3>

            <div className="space-y-8">
              {/* Instructions */}
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  دستورالعمل‌ها
                </h4>
                <ul className="space-y-3">
                  {currentInstructions.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warnings */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                  نکات مهم
                </h4>
                <ul className="space-y-3">
                  {currentInstructions.warnings.map((warning, index) => (
                    <li key={index} className="flex items-start gap-3 text-amber-900">
                      <span className="flex-shrink-0 text-amber-600 mt-1">⚠</span>
                      <span className="leading-relaxed font-medium">{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-300 mb-4">
              در صورت بروز هرگونه سوال یا مشکل، با ما تماس بگیرید
            </p>
            <a
              href="tel:01333542301"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              تماس با بخش جراحی: 013-33542301
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
