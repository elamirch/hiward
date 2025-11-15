"use client"

import { Award as IdCard, Clock, Trash2, HandHelping as HandWashing, Utensils, FileWarning, ChevronDown } from 'lucide-react'

export function ImportantInfoSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  const mealTimes = [
    { meal: "صبحانه", time: "۶:۳۰" },
    { meal: "نهار", time: "۱۲:۳۰" },
    { meal: "شام", time: "۱۸:۳۰" },
  ]

  const hygieneTips = [
    "دستهای خود را مرتب بشویید، مخصوصاً پس از رفتن به دستشویی و قبل از غذا",
    "در طول بستری از آب معدنی استفاده نمایید",
    "مواد غذایی را با پلاستیک مشکی در یخچال قرار ندهید",
    "از نگهداری مواد غذایی اضافه در داخل کمد و فضای باز بپرهیزید",
    "بهداشت ناحیه تناسلی را رعایت کنید و مرتب لباس زیر خود را تعویض کنید",
    "لاک ناخن پاک شود",
    "بهداشت دهان و دندان رعایت شود و پس از هر وعده غذا مسواک زده شود",
    "دستمال کاغذی، گاز و آشغال در داخل دستشویی نریزید",
  ]

  return (
    <section className="min-h-screen snap-start snap-always flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            اطلاعات مهم
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            نکات ضروری برای بستری در بخش
          </p>

          <div className="space-y-6">
            {/* ID Wristband */}
            <div className="bg-gradient-to-br from-rose-500 to-red-500 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IdCard className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">اهمیت دستبند شناسایی</h3>
                  <div className="space-y-2 text-red-50">
                    <p>این دستبند باید تا زمان بستری به دست بیمار وصل باشد و در صورت پاره و خراب شدن حتماً به پرستار اطلاع داده شود.</p>
                    <p>پرستار و سایر اعضای کادر درمان از دستبند برای شناسایی صحیح بیمار حین داروهی و اقدامات درمانی استفاده می‌کنند.</p>
                    <div className="mt-4 bg-white/10 rounded-lg p-4">
                      <ul className="space-y-1 text-sm">
                        <li><span className="font-bold">برچسب قرمز:</span> حساسیت دارویی یا غذایی</li>
                        <li><span className="font-bold">برچسب زرد:</span> مشکلاتی نظیر زخم بستر، احتمال سقوط، تشنج و ...</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meal Times */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">ساعات سرو غذا</h3>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {mealTimes.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 text-center">
                    <Clock className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                    <p className="text-lg font-bold text-slate-900">{item.meal}</p>
                    <p className="text-2xl font-bold text-blue-600">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Waste Segregation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trash2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">چگونگی تفکیک زباله</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-slate-700 rounded flex-shrink-0"></div>
                      <p className="text-slate-700"><span className="font-bold">سطل زباله آبی با کیسه مشکی:</span> مخصوص زباله‌های معمولی و غیر عفونی (در هر اتاق موجود است)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded flex-shrink-0"></div>
                      <p className="text-slate-700"><span className="font-bold">سطل زباله زرد:</span> مخصوص زباله‌های عفونی مثل دستمال کاغذی خونی (در داخل راهرو)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Hygiene */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HandWashing className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">رعایت بهداشت فردی</h3>
                  <ul className="space-y-2">
                    {hygieneTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold flex-shrink-0">•</span>
                        <span className="text-slate-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Complaints */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileWarning className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">رسیدگی به شکایات</h3>
                  <div className="space-y-3 text-slate-700">
                    <p>اگر شکایتی از بخش یا نحوه ارائه خدمات آن دارید:</p>
                    <ol className="space-y-2 mr-4">
                      <li className="flex gap-2"><span className="font-bold">۱.</span><span>ابتدا به مسئول بخش خانم مقدم‌نیا و در نبود ایشان به جانشین‌های وی (خانم‌ها سیفی و جوانمرد) اطلاع دهید</span></li>
                      <li className="flex gap-2"><span className="font-bold">۲.</span><span>فرم مربوطه را پر کرده و در صندوق شکایات بیاندازید</span></li>
                      <li className="flex gap-2"><span className="font-bold">۳.</span><span>به صورت حضوری به ساختمان شماره ۹ مراجعه کرده و به آقای عاشوری (مسئول رسیدگی به شکایات) اطلاع دهید</span></li>
                    </ol>
                    <div className="bg-white rounded-lg p-4 mt-4">
                      <p className="font-bold">تلفن واحد رسیدگی به شکایات:</p>
                      <p className="text-xl font-bold text-amber-600 font-mono mt-1">۰۹۱۱۳۳۳۹۳۷۶</p>
                      <p className="text-sm text-slate-600 mt-1">داخلی: ۳۳۸</p>
                    </div>
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
