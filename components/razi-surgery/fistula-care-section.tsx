import { AlertCircle, CheckCircle, Heart } from 'lucide-react'

export function FistulaCareSection() {
  const careInstructions = [
    "بعد از کار گذاشتن فیستول شریانی وریدی برای اینکه دست ورم نکند تا چند هفته دست را بالاتر از سطح بدن نگه دارید.",
    "روزانه محل زخم جراحی را با بتادین یا سرم شستشو تمیز کرده و دوباره پانسمان کنید.",
    "تا سه روز پس از عمل حمام نکنید و بعد سه روز موقع حمام روی بخیه ها لیف و صابون نکشید.",
    "در صورت خروج ترشح یا خون یا چرک از محل عمل حساس شوید و به پزشک معالج مراجعه کنید.",
    "تمام داروهای تجویز شده را درست مصرف نمایید.",
    "انگشتان را به طور مرتب ورز دهید تا فیستول کار کرد بهتری داشته باشد.",
    "دست را از آرنج خم نکنید و موقع استراحت دست را بالاتر از سطح بدن بگذارید.",
    "از گرفتن فشار و خون از این دست خودداری کنید.",
    "جهت جلوگیری از عفونت بعد دیالیز به حمام نروید.",
    "از خوابیدن و چرخیدن روی دست پرهیز کنید.",
    "از ساعت و دستبند تنگ روی دست فیستول دار خودداری کنید.",
    "با لمس روی فیستول مرتب کار کرد آن را چک نمایید.",
    "در صورت پاره شدن فیستول یا خونریزی شدید و ناگهانی بالای فیستول را ببندید و هر چه سریعتر خود را به بیمارستان برسانید.",
    "جهت کشیدن بخیه ها به پزشک معالج مراجعه کنید.",
    "جهت اطمینان از زمان استفاده از فیستول فقط با پزشک جراح خود مشورت نمایید."
  ]

  return (
    <div className="min-h-screen" dir="rtl">
      <div className="relative bg-gradient-to-l from-red-600 via-rose-600 to-pink-600 text-white py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-20 h-20 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl font-black mb-4">مراقبت‌های بیماران دارای فیستول</h1>
          <p className="text-2xl text-rose-100">راهنمای کامل مراقبت از فیستول شریانی وریدی</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded-lg">
            <p className="text-slate-700 leading-relaxed text-right">
              مددجوی گرامی با آرزوی شفای عاجل برای شما، مطالب زیر جهت افزایش آگاهی شما در مورد بیماریتان می‌باشد.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-rose-100 rounded-lg">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">فیستول شریانی وریدی چیست؟</h2>
            </div>
            
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                فیستول شریانی وریدی که برای شما بیمار محترم کار گذاشته شده است یک راه خوب و مطمئن برای دیالیز شما می‌باشد و روش‌های دیگر دیالیز کیفیت و سهولت انجام دیالیز از راه فیستول را ندارد.
              </p>
              <p>
                فیستول یا گرافت فود ارتباطی است بین شریان و ورید و موجب دسترسی بهتر به جریان خون می‌شود.
              </p>
              <p className="font-semibold text-rose-700">
                لذا با رعایت نکات زیر شما می‌توانید طول عمر فیستول خود را طولانی‌تر نموده و از عوارض و یا از کار افتادن آن پیشگیری نمایید.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">نکات مراقبتی ضروری</h2>
            </div>

            <div className="space-y-4">
              {careInstructions.map((instruction, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed flex-1 pt-1">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-l from-amber-50 to-orange-50 border-r-4 border-orange-500 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div className="text-slate-700 leading-relaxed">
                <p className="font-bold text-orange-800 mb-2">توجه مهم:</p>
                <p>
                  در صورت بروز هرگونه مشکل یا سوال درباره فیستول خود، حتماً با پزشک جراح خود مشورت نمایید و از خودسرانه تصمیم‌گیری خودداری کنید.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 p-6 rounded-lg text-sm text-slate-600 text-right">
            <p className="font-semibold mb-2">منبع:</p>
            <p>
              هند بوک آموزش به بیمار - ویراست سوم<br />
              تالیف: ماری ام. کابینو<br />
              ترجمه: خدیجه نصیریانی، محمد رضا خواجه امینیان، علیرضا حبیبی، معصومه ایمانی<br />
              صفحه ۷۵۰ الی ۷۵۵
            </p>
          </div>

          <div className="text-center py-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-l from-rose-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg">
              <Heart className="w-6 h-6" />
              <span>با آرزوی سلامتی برای شما</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
