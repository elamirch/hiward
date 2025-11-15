import { Droplets, AlertCircle, CheckCircle2 } from 'lucide-react'

export function AngiographyCareSection() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen" dir="rtl">
      <div className="max-w-6xl mx-auto p-4 lg:p-8 space-y-8">
        <div className="text-center space-y-4 py-8">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
            <Droplets className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-l from-blue-600 to-blue-800 bg-clip-text text-transparent">
            مراقبت‌های بیماران آنژیوگرافی و آنژیوپلاستی
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            راهنمای جامع مراقبت قبل و بعد از عمل آنژیوگرافی و آنژیوپلاستی
          </p>
        </div>

        <div className="p-8 space-y-8">
          <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded-lg">
            <p className="text-slate-700 leading-relaxed text-right">
              مددجوی گرامی با آرزوی شفای عاجل برای شما، مطالب زیر جهت ارتقای آگاهی شما در مورد بیماریتان می‌باشد.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">آنژیوگرافی و آنژیوپلاستی چیست؟</h2>
            </div>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                آنژیوگرافی یک روش طلایی جهت تشخیص بیماری‌های عروق است.
                با استفاده از آنژیوگرافی می‌توان با تزریق ماده حاجب که داخل رگ را قابل مشاهده می‌کند اطلاعات کامل و دقیقی از وضعیت عروقی بیماران بدست آورد.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border-r-4 border-blue-500">
                <h3 className="font-bold text-lg mb-4 text-slate-800">نحوه انجام آنژیوگرافی:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>برای این منظور پس از وارد کردن سوزن مخصوص به داخل رگ‌های پا یا دست سیم قابل ارتجاعی را وارد رگ کرده و سپس لوله ظریفی به نام شیت را داخل رگ قرار می‌دهند</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>به طور موقت و سپس با استفاده از لوله‌های مخصوص مواد حاجب مایع را به داخل رگ‌ها می‌فرستند</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>این کار باعث می‌شود که رگ‌ها قابل دیدن شوند و قابل فیلم‌برداری توسط دستگاه‌های مخصوص گردند</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-500">
                <h3 className="font-bold text-lg mb-4 text-slate-800">روش‌های درمان:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>پس از تشخیص اندازه و محل تنگی‌ها درمان شروع می‌شود</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>اگر تنگی خفیف باشد ممکن است فقط به درمان دارویی بسنده کنند</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>اگر تنگی شدید باشد می‌توان با استفاده از آنژیوپلاستی یعنی استفاده از بالون و استنت که اصطلاحاً به آن فتر می‌گویند مسیر رگ‌ها را باز کرد که این یک درمان فوری است</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>در مواقعی که تنگی‌ها به آنژیوپلاستی جواب ندهد از روش جراحی استفاده می‌شود</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-xl">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">مراقبت‌های قبل از عمل</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-5 rounded-xl border border-orange-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">آماده‌سازی بدن</h3>
                    <p className="text-slate-700 text-sm">شیو کامل شکم و کشاله ران و پاها</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-5 rounded-xl border border-orange-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">ناشتا بودن</h3>
                    <p className="text-slate-700 text-sm">از ۶ تا ۸ ساعت قبل عمل بهتر است ناشتا باشید و شب قبل غذای سبک مصرف کنید</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-5 rounded-xl border border-orange-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">قطع آسپرین</h3>
                    <p className="text-slate-700 text-sm">مصرف آسپرین روز قبل عمل قطع شود</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-5 rounded-xl border border-orange-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">قطع داروها</h3>
                    <p className="text-slate-700 text-sm">صبح روز عمل داروهایی مثل هپارین و انسولین و متفورمین قطع شود</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">مراقبت‌های بعد از عمل</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-5 rounded-xl border-r-4 border-green-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">استراحت مطلق</h3>
                    <p className="text-slate-700">بعد از انجام آنژیوگرافی تا چند ساعت باید استراحت مطلق باشید و کیسه شن به مدت ۶ ساعت روی محل آنژیو شده باشد</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-xl border-r-4 border-green-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">محدودیت فعالیت</h3>
                    <p className="text-slate-700">بعد از عمل از بلند کردن اجسام سنگین خودداری کنید</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-xl border-r-4 border-green-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">مصرف دارو</h3>
                    <p className="text-slate-700">داروهای تجویز شده را سر وقت مصرف نمایید</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-xl border-r-4 border-green-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">بررسی محل جراحی</h3>
                    <p className="text-slate-700">اطراف محل جراحی را مرتب چک کنید و در صورت قرمزی، سختی بیش از حد و سیاه شدن به پزشک اطلاع دهید</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-xl border-r-4 border-green-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">مراجعه دوره‌ای</h3>
                    <p className="text-slate-700">مراجعه دوره‌ای به پزشک معالج فراموش نشود</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-xl border-r-4 border-green-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">رژیم غذایی</h3>
                    <p className="text-slate-700">رژیم غذایی مناسب و کم نمک و کم چرب مصرف کنید</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-xl border-r-4 border-green-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">پرهیز از مصرف دخانیات</h3>
                    <p className="text-slate-700">از مصرف سیگار قلیان و الکل به شدت پرهیز نمایید</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-xl border-r-4 border-green-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">رژیم غذایی مناسب</h3>
                    <p className="text-slate-700">جهت کارکرد صحیح لوله‌های گوارشی و اجابت مزاج غذاهای نرم و ملین مصرف نمایید</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-l from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-200 text-center">
            <p className="text-lg font-semibold text-slate-800 mb-4">با آرزوی سلامتی برای شما</p>
            <div className="text-sm text-slate-600 space-y-2">
              <p className="font-medium">منبع: هند بوک آموزش به بیمار</p>
              <p>ویراست سوم تألیف: ماری ام کابینو</p>
              <p>ترجمه: خدیجه نصیریانی - محمد رضا خواجه امینیان - علیرضا حبیبی - معصومه ایمانی</p>
              <p>صفحه ۴۰۲ الی ۴۰۷</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
