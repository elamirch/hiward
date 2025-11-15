import { Heart, AlertCircle, CheckCircle, Home } from 'lucide-react'

export function ThyroidectomyCareSection() {
  return (
    <div className="min-h-screen" dir="rtl">
      <div className="bg-gradient-to-l from-blue-600 to-blue-700 text-white py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            مراقبت‌های بیماران تیروئیدکتومی
          </h1>
          <p className="text-xl text-blue-100">
            راهنمای جامع مراقبت قبل و بعد از عمل جراحی برداشت غده تیروئید
          </p>
        </div>
      </div>

      <div className="p-8 space-y-8">
        <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded-lg">
          <p className="text-slate-700 leading-relaxed text-right">
            مطالب زیر جهت ارتقای آگاهی شما در ارتباط با بیماریتان می‌باشد.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">تعریف تیروئیدکتومی</h2>
          </div>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              <strong>تیروئیدکتومی:</strong> برداشت کامل و یا بخشی از غده تیروئید می‌باشد.
            </p>
            <p>
              <strong>تیروئید:</strong> غده‌ی پروانه‌ای شکل در قسمت پایین گردن است که مسئول تولید هورمون‌های کنترل‌کننده متابولیسم بدن و تنظیم ضربان قلب برای سرعت سوزاندن کالری است.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">مراقبت‌های قبل از عمل</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                شب قبل از عمل شام سبک میل کرده و از ۱۲ شب ناشتا باشید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                موهای زائد ناحیه عمل کاملاً تراشیده شود.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                اگر جسم فلزی (طلا یا زیورآلات)، دندان لق و مصنوعی و یا پلاتین در بدن خود دارید به پرستار خود اطلاع دهید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                در صورت داشتن سابقه حساسیت به دارو یا مواد غذایی به پزشک و یا پرستار خود اطلاع دهید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                در صورت داشتن لاک ناخن آن را پاک کنید.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">مراقبت‌های بعد از عمل</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                بعد از عمل باید ناشتا باشید، پرستار در ارتباط با شروع رژیم غذایی به شما اطلاع می‌دهد. ابتدا مایعات نرم میل می‌کنید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                از چرخاندن سر به طور ناگهانی اجتناب کنید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                در ناحیه عمل برای شما یک یا دو عدد لوله درن (همووک) جهت خروج ترشحات تعبیه می‌شود. لوله‌ها نباید کشیده شوند.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                اگر احساس گزگز در اطراف لب و لرزش ماهیچه در بدن خود را داشتید به پرستار خود اطلاع دهید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                جهت جلوگیری از تورم تارهای صوتی آرام صحبت کنید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                در صورت اینکه اشکال در بلع و احساس پری در گردن داشتید به پرستار خود اطلاع دهید.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">توصیه‌های بعد از ترخیص</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                به طور معمول ۱۰-۱۴ روز گلودرد خواهید داشت.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                تورم و کبودی در ناحیه برش جراحی چند روز وجود دارد که در روز دوم و سوم بعد از عمل به حداکثر می‌رسد. درن‌های شما در روز ترخیص جدا می‌شوند.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                روز ترخیص می‌توانید حمام کنید. اگر پانسمان محل عمل خیس شد مجدداً پانسمان کنید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                از حرکات ناگهانی گردن خودداری کنید. تا یک ماه نباید ورزش کنید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                به موضع عمل فشار وارد نکنید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                داروهای تجویزی پزشک را سر وقت مصرف کنید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                در صورت بروز تب و خروج ترشحات چرکی و بدبو از محل عمل به پزشک مراجعه کنید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                پس از ترخیص از بیمارستان شما باید یک هفته در منزل استراحت نمایید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                توصیه می‌شود هنگام خواب سه عدد بالش زیر سر خود بگذارید تا سر شما بالاتر از سطح قلب باشد.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                از رانندگی کردن خودداری کنید.
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                همه برش‌های جراحی به نور آفتاب حساس هستند. توصیه می‌شود بعد از بهبودی کامل برش جراحی تا شش ماه از ضد آفتاب روی محل عمل استفاده شود.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 rounded-lg p-6 text-center">
          <p className="text-sm text-slate-600">
            منبع: داخلی جراحی برونر و سودارث
          </p>
        </div>
      </div>
    </div>
  )
}
