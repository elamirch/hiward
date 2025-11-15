import { Heart, AlertCircle, CheckCircle, Home, Utensils, Activity } from 'lucide-react'

export function CholecystectomyCareSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden">
          <div className="bg-gradient-to-l from-blue-600 to-blue-700 p-8">
            <div className="flex items-center justify-end gap-4">
              <div className="text-right">
                <h1 className="text-3xl font-bold text-white mb-2">
                  مراقبت‌های پس از عمل کله سیستکتومی
                </h1>
                <p className="text-blue-100 text-lg">
                  برداشتن کیسه صفرا
                </p>
              </div>
              <Heart className="w-16 h-16 text-white" />
            </div>
          </div>

          <div className="p-8 space-y-8" dir="rtl">
            <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded-lg">
              <p className="text-slate-700 leading-relaxed text-right">
                مددجوی گرامی با آرزوی شفای عاجل برای شما، مطالب زیر جهت ارتقای آگاهی شما در مورد بیماریتان می‌باشد.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4 text-right flex items-center justify-end gap-2">
                  <span>تعریف کیسه صفرا</span>
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                </h2>
                <div className="text-slate-700 leading-relaxed text-right space-y-3">
                  <p>
                    کیسه صفرا یک عضو گلابی شکل است که در زیر کبد قرار دارد و ماده صفرا که باعث هضم غذا و دیگر مواد ساخته شده درون کبد می‌شود را در خود نگه‌داری می‌کند.
                  </p>
                  <p>
                    منظور از کله سیستکتومی برداشتن کیسه صفرا می‌باشد و برای این عمل باید ۳ الی ۴ روز بستری باشید.
                  </p>
                  <p>
                    این عمل به دو روش <strong>باز</strong> یا <strong>بسته</strong> (لاپاروسکوپیک) انجام می‌شود. روش جایگزینی جراحی وجود ندارد و حتماً باید جراحی شود.
                  </p>
                  <p className="text-blue-700 font-semibold">
                    روند بهبود در جراحی بسته سریعتر از روش باز می‌باشد.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4 text-right flex items-center justify-end gap-2">
                  <span>مراقبت در بیمارستان</span>
                  <Activity className="w-6 h-6 text-green-600" />
                </h2>
                <ul className="space-y-3 text-slate-700 text-right">
                  <li className="flex items-start justify-end gap-3">
                    <span className="leading-relaxed">۱۲ الی ۲۴ ساعت پس از عمل با نظر پزشک برای شما رژیم غذایی شروع می‌شود که در ابتدا بهتر است از آب ولرم یا چای کم‌رنگ شروع شود.</span>
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  </li>
                  <li className="flex items-start justify-end gap-3">
                    <span className="leading-relaxed">به کمک همراه یا پرستار با اجازه پزشک کم‌کم از تخت پایین آمده و راه بروید.</span>
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  </li>
                  <li className="flex items-start justify-end gap-3">
                    <span className="leading-relaxed">بعد از مایعات رژیم غذایی نرم و کم‌چرب را شروع کنید.</span>
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  </li>
                  <li className="flex items-start justify-end gap-3">
                    <span className="leading-relaxed">هنگام راه رفتن حتماً شکم‌بند داشته باشید.</span>
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  </li>
                  <li className="flex items-start justify-end gap-3">
                    <span className="leading-relaxed">جهت خروج ترشحات سینه و جلوگیری از تب و عفونت سرفه کنید.</span>
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  </li>
                  <li className="flex items-start justify-end gap-3">
                    <span className="leading-relaxed">ممکن است اتصالاتی مثل درن، پن روز، هموبگ یا کاروگیت داشته باشید که باید مواظب آنها باشید و آنها برای خروج راحت‌تر ترشحات احتمالی بعد عمل شما هستند.</span>
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4 text-right flex items-center justify-end gap-2">
                  <span>پس از ترخیص از بیمارستان</span>
                  <Home className="w-6 h-6 text-amber-600" />
                </h2>
                <div className="space-y-4">
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h3 className="font-bold text-slate-800 mb-2 text-right">۱. مراقبت از زخم</h3>
                    <p className="text-slate-700 text-right leading-relaxed">
                      پانسمان را در منزل با سرم شستشو یا بتادین شستشو داده و مجدد پانسمان کنید.
                    </p>
                  </div>

                  <div className="bg-white/70 p-4 rounded-xl">
                    <h3 className="font-bold text-slate-800 mb-2 text-right flex items-center justify-end gap-2">
                      <span>۲. رژیم غذایی</span>
                      <Utensils className="w-5 h-5 text-amber-600" />
                    </h3>
                    <p className="text-slate-700 text-right leading-relaxed">
                      رژیم غذایی کم‌چرب و سرشار از سبزیجات و فیبر مثل کاهو، کلم، هویج مصرف کنید.
                    </p>
                  </div>

                  <div className="bg-white/70 p-4 rounded-xl">
                    <h3 className="font-bold text-slate-800 mb-2 text-right">۳. حمام</h3>
                    <p className="text-slate-700 text-right leading-relaxed">
                      سه روز بعد عمل حمام کنید و روی بخیه‌ها لیف نکشید.
                    </p>
                  </div>

                  <div className="bg-white/70 p-4 rounded-xl">
                    <h3 className="font-bold text-slate-800 mb-2 text-right">۴. شکم‌بند</h3>
                    <p className="text-slate-700 text-right leading-relaxed">
                      هنگام راه رفتن شکم‌بند داشته باشید.
                    </p>
                  </div>

                  <div className="bg-white/70 p-4 rounded-xl">
                    <h3 className="font-bold text-slate-800 mb-2 text-right">۵. فعالیت و استراحت</h3>
                    <p className="text-slate-700 text-right leading-relaxed">
                      فعالیت و استراحت در حد تحمل شما باشد.
                    </p>
                  </div>

                  <div className="bg-white/70 p-4 rounded-xl">
                    <h3 className="font-bold text-slate-800 mb-2 text-right">۶. محدودیت‌ها</h3>
                    <p className="text-slate-700 text-right leading-relaxed">
                      از بلند کردن وسایل سنگین خودداری نمایید.
                    </p>
                  </div>

                  <div className="bg-white/70 p-4 rounded-xl">
                    <h3 className="font-bold text-slate-800 mb-2 text-right">۷. داروها</h3>
                    <p className="text-slate-700 text-right leading-relaxed">
                      داروهای تجویز شده را درست و دقیق مصرف نمایید.
                    </p>
                  </div>

                  <div className="bg-white/70 p-4 rounded-xl">
                    <h3 className="font-bold text-slate-800 mb-2 text-right">۸. پیگیری پزشکی</h3>
                    <p className="text-slate-700 text-right leading-relaxed">
                      جهت کشیدن بخیه‌ها به پزشک معالج مراجعه نمایید.
                    </p>
                  </div>

                  <div className="bg-white/70 p-4 rounded-xl">
                    <h3 className="font-bold text-slate-800 mb-2 text-right">۹. جواب پاتولوژی</h3>
                    <p className="text-slate-700 text-right leading-relaxed">
                      جواب پاتولوژی را پیگیری و به پزشک نشان دهید.
                    </p>
                  </div>

                  <div className="bg-white/70 p-4 rounded-xl">
                    <h3 className="font-bold text-slate-800 mb-2 text-right">۱۰. فعالیت‌های جنسی</h3>
                    <p className="text-slate-700 text-right leading-relaxed">
                      در مورد شروع فعالیت‌های جنسی با پزشک مشورت نمایید.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-6 rounded-xl border border-slate-300">
                <p className="text-slate-600 text-sm text-right leading-relaxed">
                  <strong>منبع:</strong> پرستاری داخلی جراحی بر اساس آخرین ویراست برونر بلک و فیپس ص ۷۰-۷۵
                </p>
                <div className="mt-3 text-slate-700 text-sm text-right space-y-1">
                  <p><strong>تالیف:</strong></p>
                  <p>دکتر سمیه غفاری - دکترای تخصصی پرستاری</p>
                  <p>مهدی محمودی - کارشناس ارشد پرستاری مراقبت‌های جراحی داخلی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
