import { AlertCircle, CheckCircle, Heart } from 'lucide-react'

export function HerniaCareSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-l from-emerald-600 to-emerald-700 p-8 text-white">
            <div className="flex items-center justify-end gap-4">
              <div className="text-right">
                <h1 className="text-3xl font-bold mb-2">مراقبت در بیماران با عمل جراحی هرنی</h1>
                <p className="text-emerald-100 text-lg">راهنمای جامع مراقبت قبل و بعد از عمل</p>
              </div>
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded-lg">
              <p className="text-slate-700 leading-relaxed text-right">
                مددجوی گرامی با آرزوی شفای عاجل برای شما مطالب زیر جهت افزایش آگاهی شما در مورد بیماریتان می باشد.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-right flex items-center justify-end gap-2">
                <span>تعریف هرنی</span>
                <CheckCircle className="w-6 h-6" />
              </h2>
              <p className="text-slate-700 leading-relaxed text-right mb-4">
                تورم و بر آمدگی قسمتهایی از بدن که احتمال هرنی در آنها زیاد است مثل کشاله ران، اطراف ناف و جاهایی که قبلا سابقه جراحی در آنجا هست.
              </p>
              <p className="text-slate-700 leading-relaxed text-right">
                وقتی فتق اتفاق می‌افتد که قسمتی از بدن (معمولا روده) از طریق یک نقطه ضعیف و یا دیواره عضلانی که احشا را در جای خود نگه می‌دارد، پاره کرده و به محل غیر عادی دیگری می‌رود.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-right flex items-center justify-end gap-2">
                <span>علائم</span>
                <AlertCircle className="w-6 h-6" />
              </h2>
              <ul className="space-y-2 text-slate-700 text-right">
                <li className="flex items-start justify-end gap-2">
                  <span>درد در هنگام سرفه کردن</span>
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                </li>
                <li className="flex items-start justify-end gap-2">
                  <span>احساس سوزش و درد وحشتناک</span>
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                </li>
                <li className="flex items-start justify-end gap-2">
                  <span>احساس سنگینی در کشاله ران</span>
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                </li>
                <li className="flex items-start justify-end gap-2">
                  <span>ورم کردن بیضه‌ها در مردان</span>
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-l from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-right">پیشگیری از ایجاد هرنی</h2>
              <ul className="space-y-3 text-slate-700 text-right">
                <li className="flex items-start justify-end gap-2">
                  <span>حفظ وزن خود در حد ایده‌آل</span>
                  <span className="text-green-600 font-bold text-xl mt-0.5">✓</span>
                </li>
                <li className="flex items-start justify-end gap-2">
                  <span>داشتن رژیم با فیبر و سبزیجات فراوان</span>
                  <span className="text-green-600 font-bold text-xl mt-0.5">✓</span>
                </li>
                <li className="flex items-start justify-end gap-2">
                  <span>ترک مصرف سیگار</span>
                  <span className="text-green-600 font-bold text-xl mt-0.5">✓</span>
                </li>
                <li className="flex items-start justify-end gap-2">
                  <span>از برداشت بارهای سنگین پرهیز نمایید</span>
                  <span className="text-green-600 font-bold text-xl mt-0.5">✓</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-right">مراقبت پس از عمل جراحی</h2>
              <p className="text-slate-700 leading-relaxed text-right mb-4">
                برای اینکه زندگی راحت‌تری داشته باشید و هر چه سریع‌تر به زندگی عادی برگردید باید به نکات زیر توجه بیشتری داشته باشید:
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-700 text-right">
                    <strong className="text-emerald-700">استراحت و فعالیت:</strong> تا دو هفته بعد از عمل باید با احتیاط باشد و از انجام ورزش‌های سنگین و بلند کردن اجسام سنگین خودداری نمایید.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-700 text-right">
                    <strong className="text-emerald-700">مصرف دارو:</strong> داروهایی که برای شما توسط پزشک تجویز شده را درست و به موقع مصرف نمایید، به خصوص آنتی‌بیوتیک.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-r-4 border-amber-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-3 text-right">عوارض بعد از عمل هرنی</h3>
              <p className="text-amber-900 leading-relaxed text-right">
                شامل خونریزی و دردهای شدید می‌باشد که در صورت مشاهده هر چه سریع‌تر به پزشک خود مراجعه نمایید. البته درد بعد از چند روز بهبود می‌یابد.
              </p>
            </div>

            <div className="bg-gradient-to-l from-emerald-600 to-emerald-700 text-white rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-right">خودمراقبتی بعد از عمل جراحی هرنی</h2>
              <div className="space-y-3 text-right">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="leading-relaxed"><strong>۱.</strong> پس از عمل بعد از یک یا دو روز مرخص می‌شوید.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="leading-relaxed"><strong>۲.</strong> روزانه محل عمل را با سرم شستشو و یا بتادین شسته پانسمان کنید.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="leading-relaxed"><strong>۳.</strong> آرام آرام شروع به فعالیت و انجام کارهای روزمره نمایید.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="leading-relaxed"><strong>۴.</strong> از انجام کارهای سنگین به خاطر عود هرنی تا دو ماه جداً پرهیز نمایید.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="leading-relaxed"><strong>۵.</strong> بعد از سه روز پس از عمل می‌توانید حمام کنید ولی روی بخیه‌ها لیف و صابون نکشید.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="leading-relaxed"><strong>۶.</strong> در هرنی کشاله ران لباس زیر تنگ بپوشید و در هرنی‌های شکمی از شکم‌بند تنگ استفاده کنید.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="leading-relaxed"><strong>۷.</strong> جهت کار کردن بهتر شکم و جلوگیری از زور زدن از سبزیجات و سالاد و روغن زیتون استفاده نمایید.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="leading-relaxed"><strong>۸.</strong> در مورد شروع فعالیت‌های جنسی با پزشک مشورت نمایید.</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
              <p className="text-emerald-800 text-lg font-semibold mb-2">با آرزوی سلامتی و تندرستی برای شما مددجوی گرامی</p>
              <p className="text-slate-600 text-sm">
                منبع: کابینو ماری ام. هند بوک آموزش به بیمار ویراست سوم، ترجمه خدیجه نصیریانی و دیگران، صفحه ۳۹۰ الی ۳۹۶
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
