import { Calendar, FileText, AlertCircle, Phone, Clock, UserCheck, Stethoscope, Heart, Pill, Activity, Droplet, Syringe, Shield } from 'lucide-react'

export function AppointmentGuideSection() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-slate-800 mb-4">راهنمای نوبت‌گیری و مراقبت‌ها</h1>
        <p className="text-lg text-slate-600">اطلاعات کامل درباره نحوه دریافت نوبت و مراقبت‌های قبل و بعد از عمل</p>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        
        {/* دیتاهای مورد نیاز بیمار */}
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-800">دیتاهایی که بیمار لازم دارد</h2>
          </div>
          <p className="text-slate-600 mb-6 text-right leading-relaxed">چه موقع نوبت می‌گیرید یا مراجعه می‌کنید این اطلاعات را آماده داشته باشید:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">مشخصات فردی</h3>
              <ul className="space-y-2 text-slate-700 text-right">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>نام و نام‌خانوادگی، سن</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>شماره تماس همراه (موبایل)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>آدرس (در صورت نیاز به ارسال مدارک)</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">شرح حال و علت مراجعه</h3>
              <ul className="space-y-2 text-slate-700 text-right">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>توضیح کوتاه مشکل (مثال: درد و تورم ساق چپ از ۶ ماه پیش)</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">سوابق پزشکی</h3>
              <ul className="space-y-2 text-slate-700 text-right">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>بیماری‌های زمینه‌ای (قلبی، دیابت، فشار خون)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>جراحی‌های قبلی</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>حساسیت دارویی</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>بارداری/شیردهی</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">داروها و آزمایشات</h3>
              <ul className="space-y-2 text-slate-700 text-right">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>فهرست داروهای روزانه (آسپرین، وارفارین، هورمون‌ها)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>سونوگرافی داپلر و آزمایشات قبلی</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 rounded-xl p-5 border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3 text-right">سایر اطلاعات</h3>
            <ul className="space-y-2 text-slate-700 text-right">
              <li className="flex items-start gap-2">
                <span className="text-slate-600 mt-1">•</span>
                <span>وضعیت شغلی/فعالیت روزانه: نیاز به ایستادن طولانی یا سفر</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600 mt-1">•</span>
                <span>انتظارات/ترجیحات: درمان کم‌تهاجمی یا جراحی</span>
              </li>
            </ul>
          </div>
        </section>

        {/* نحوه نوبت‌گیری */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 lg:p-8 shadow-lg text-white">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="w-8 h-8" />
            <h2 className="text-2xl font-bold">نحوه نوبت‌گیری</h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="font-bold text-xl mb-4 text-right">نمونه پیام برای نوبت‌گیری:</h3>
            <div className="bg-white/20 rounded-lg p-4 text-right leading-relaxed border border-white/30">
              <p className="mb-2">سلام، نام: <span className="text-blue-200">[نام کامل]</span>، سن: <span className="text-blue-200">[سن]</span></p>
              <p className="mb-2">جهت نوبت‌گیری برای ویزیت/مشاوره واریس در مطب دکتر <span className="text-blue-200">[نام دکتر]</span> تماس می‌گیرم.</p>
              <p className="mb-2">سابقه/شکایت: <span className="text-blue-200">[مثلاً درد و رگ‌های برجسته ساق چپ از ۶ ماه]</span></p>
              <p className="mb-2">شماره تماس: <span className="text-blue-200">[۰۹…]</span></p>
              <p>لطفاً زمان‌های خالی و مدارک موردنیاز را اعلام کنید. ممنون.</p>
            </div>
          </div>

          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
            <p className="text-white/90 text-right leading-relaxed">
              <AlertCircle className="inline w-5 h-5 ml-2" />
              اگر قبلاً سونوگرافی دارید، از ابتدا اشاره کنید و فایل/عکس را پیوست کنید تا وقت مناسب‌تر داده شود.
            </p>
          </div>
        </section>

        {/* مراقبت‌های کلی */}
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-slate-800">مراقبت‌های کلی (قبل و بعد از عمل)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="font-bold text-lg text-slate-800 mb-4 text-right flex items-center justify-end gap-2">
                <span>قبل از عمل</span>
                <Clock className="w-6 h-6 text-green-600" />
              </h3>
              <ul className="space-y-3 text-slate-700 text-right">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>داروهای رقیق‌کننده:</strong> طبق دستور پزشک متوقف یا تنظیم شوند</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>ناشتا:</strong> در صورت بی‌هوشی، ۶-۸ ساعت ناشتا لازم است</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>لباس راحت و همراه:</strong> برای کمک در رفت‌وآمد</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>مرخصی کار:</strong> هماهنگی استراحت کوتاه</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-lg text-slate-800 mb-4 text-right flex items-center justify-end gap-2">
                <span>بعد از عمل</span>
                <UserCheck className="w-6 h-6 text-blue-600" />
              </h3>
              <ul className="space-y-3 text-slate-700 text-right">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>استراحت نسبی:</strong> ۲۴-۴۸ ساعت اول + پیاده‌روی سبک</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>پانسمان:</strong> مراقبت از محل و دنبال کردن دستورات</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>داروها:</strong> مصرف مسکن‌ها طبق نسخه</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>پیگیری:</strong> ویزیت و سونوگرافی طبق برنامه</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="font-bold text-lg text-red-800 mb-4 text-right flex items-center justify-end gap-2">
              <span>علائم هشدار</span>
              <AlertCircle className="w-6 h-6 text-red-600" />
            </h3>
            <p className="text-slate-700 text-right leading-relaxed mb-3">
              در صورت مشاهده این علائم <strong className="text-red-600">فوراً</strong> با پزشک تماس بگیرید:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-slate-700 text-right">
              <li className="flex items-center gap-2">
                <span className="text-red-600">⚠</span>
                <span>تب بالای ۳۸ درجه</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">⚠</span>
                <span>افزایش ناگهانی درد</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">⚠</span>
                <span>قرمزی و گرمی شدید</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">⚠</span>
                <span>ترشح چرکی</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">⚠</span>
                <span>خونریزی فعال</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">⚠</span>
                <span>تورم ناگهانی یک پا</span>
              </li>
            </ul>
          </div>
        </section>

        {/* واریس چیست */}
        <section className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 lg:p-8 shadow-lg text-white">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-8 h-8" />
            <h2 className="text-2xl font-bold">واریس چیست؟</h2>
          </div>
          
          <p className="text-white/90 text-right leading-relaxed mb-6">
            واریس عبارت است از اتساع و پیچ‌خوردگی وریدهای سطحی (معمولاً اندام تحتانی) به‌دلیل نارسایی دریچه‌های وریدی، که باعث برگشت خون و تجمع آن در وریدها می‌شود.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h3 className="font-bold mb-3 text-right">علائم شایع</h3>
              <ul className="space-y-2 text-white/80 text-right text-sm">
                <li>• رگ‌های متورم و پیچ‌خورده</li>
                <li>• سنگینی یا درد ساق</li>
                <li>• تورم و خستگی پا</li>
                <li>• گرفتگی‌های شبانه</li>
                <li>• مشکلات پوستی</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h3 className="font-bold mb-3 text-right">عوامل خطر</h3>
              <ul className="space-y-2 text-white/80 text-right text-sm">
                <li>• سابقه خانوادگی</li>
                <li>• بارداری</li>
                <li>• ایستادن طولانی</li>
                <li>• اضافه وزن</li>
                <li>• سن و جنس</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h3 className="font-bold mb-3 text-right">درمان‌ها</h3>
              <ul className="space-y-2 text-white/80 text-right text-sm">
                <li>• مراقبت محافظه‌کارانه</li>
                <li>• اسکلروتراپی</li>
                <li>• لیزر درون‌رگی (EVLA)</li>
                <li>• RF ablation</li>
                <li>• جراحی سنتی</li>
              </ul>
            </div>
          </div>
        </section>

        {/* دستورات بعد از لیزر/RF */}
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold text-slate-800">دستورات بعد از لیزر یا RF واریس</h2>
          </div>
          
          <div className="bg-red-50 rounded-xl p-6 border border-red-100 mb-4">
            <p className="text-slate-700 text-right leading-relaxed">
              <strong>هدف:</strong> بستن ورید ناقص از درون با انرژی حرارتی — دوره نقاهت کوتاه است.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">جوراب/بانداژ فشاری</h3>
              <ul className="space-y-2 text-slate-700 text-right">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>۴۸-۷۲ ساعت اول:</strong> پوشیدن پیوسته (حتی هنگام خواب)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>۱-۲ هفته بعد:</strong> پوشیدن در طول روز (حداقل ۴ هفته)</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-bold text-slate-800 mb-3 text-right">استراحت و فعالیت</h3>
                <p className="text-slate-700 text-right text-sm leading-relaxed">
                  پیاده‌روی سبک بلافاصله توصیه می‌شود. از استراحت کامل طولانی خودداری کنید. رانندگی معمولاً بلافاصله مجاز است.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-slate-800 mb-3 text-right">حمام و شست‌وشو</h3>
                <p className="text-slate-700 text-right text-sm leading-relaxed">
                  بعد از ۲۴-۴۸ ساعت دوش گرفتن مجاز است. از غوطه‌ور شدن در وان/استخر تا تأیید پزشک خودداری کنید.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">ویزیت پیگیری</h3>
              <p className="text-slate-700 text-right leading-relaxed">
                معمولاً ۱ هفته و ۴-۶ هفته + سونوگرافی داپلر در یکی از ویزیت‌ها
              </p>
            </div>
          </div>
        </section>

        {/* دستورات بعد از ابلیشن تیروئید */}
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Stethoscope className="w-8 h-8 text-teal-600" />
            <h2 className="text-2xl font-bold text-slate-800">دستورات بعد از ابلیشن ندول تیروئید</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">استراحت و فعالیت</h3>
              <p className="text-slate-700 text-right leading-relaxed">
                روز اول استراحت نسبی، فعالیت سبک از روز دوم مجاز است. از ورزش شدید تا ۴۸ ساعت خودداری کنید.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">بلع و صدا</h3>
              <p className="text-slate-700 text-right leading-relaxed">
                ممکن است حساسیت هنگام بلع یا گرفتگی صدا داشته باشید. اگر صدا تغییر کرد یا ماندگار شد → سریعاً تماس بگیرید.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">پیگیری آزمایشگاهی</h3>
              <p className="text-slate-700 text-right leading-relaxed">
                سونوگرافی کنترل + TSH و T4 طبق برنامه (۱، ۳ و ۶ ماه) برای بررسی تأثیر و کاهش سایز ندول
              </p>
            </div>
          </div>
        </section>

        {/* دستورات بعد از ابلیشن پاراتیروئید */}
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Pill className="w-8 h-8 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-800">دستورات بعد از ابلیشن ندول پاراتیروئید</h2>
          </div>

          <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
            <h3 className="font-bold text-red-800 mb-3 text-right flex items-center justify-end gap-2">
              <span>نکته مهم: نظارت بر کلسیم</span>
              <AlertCircle className="w-6 h-6" />
            </h3>
            <p className="text-slate-700 text-right leading-relaxed mb-3">
              پیگیری سطح کلسیم سرم بلافاصله و در روزهای بعد (روز ۱، روز ۳، ۱ هفته) ضروری است.
            </p>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-slate-800 mb-2 text-right">علائم هیپوکلسمی (کم‌کلسیمی):</p>
              <ul className="space-y-1 text-slate-700 text-right text-sm">
                <li>• گزگز لب/انگشتان</li>
                <li>• کرامپ عضلانی</li>
                <li>• اسپاسم صورت</li>
                <li>• گیجی</li>
              </ul>
              <p className="mt-3 text-red-600 text-right font-bold">
                در صورت بروز فوراً تماس بگیرید یا به اورژانس مراجعه کنید!
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">آزمایشات پیگیری</h3>
              <p className="text-slate-700 text-right leading-relaxed">
                اندازه‌گیری PTH و کلسیم طبق برنامه برای اطمینان از موثر بودن درمان و جلوگیری از افت شدید کلسیم
              </p>
            </div>
          </div>
        </section>

        {/* دستورات بعد از اسکلروتراپی */}
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Syringe className="w-8 h-8 text-cyan-600" />
            <h2 className="text-2xl font-bold text-slate-800">دستورات بعد از اسکلروتراپی</h2>
          </div>

          <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100 mb-4">
            <p className="text-slate-700 text-right leading-relaxed">
              <strong>روش:</strong> تزریق ماده اسکلروزان در وریدها/تلانژکتازی‌ها
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">جوراب فشاری</h3>
              <ul className="space-y-2 text-slate-700 text-right">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>۴۸-۷۲ ساعت اول:</strong> پوشیدن پیوسته</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>۱-۳ هفته بعد:</strong> پوشیدن روزها</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-bold text-slate-800 mb-3 text-right">پیاده‌روی</h3>
                <p className="text-slate-700 text-right text-sm leading-relaxed">
                  پیاده‌روی سبک بلافاصله توصیه می‌شود. از ایستادن یا نشستن طولانی خودداری کنید.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-slate-800 mb-3 text-right">حمام</h3>
                <p className="text-slate-700 text-right text-sm leading-relaxed">
                  دوش گرفتن معمولاً بلامانع است. از حمام داغ یا سونا تا ۴۸ ساعت خودداری کنید.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">رنگ‌پریدگی/تیرگی پوست</h3>
              <p className="text-slate-700 text-right leading-relaxed">
                ممکن است نقاط قهوه‌ای یا خطوط سیاه‌رنگ ایجاد شود — معمولاً طی چند ماه بهبود می‌یابد.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
              <h3 className="font-bold text-slate-800 mb-3 text-right">ویزیت‌های پیگیری</h3>
              <p className="text-slate-700 text-right leading-relaxed">
                معمولاً ۲-۶ هفته بعد برای ارزیابی پاسخ و تکرار تزریق در صورت نیاز
              </p>
            </div>
          </div>
        </section>

        {/* واریس و تلانژکتازی */}
        <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 lg:p-8 shadow-lg text-white">
          <div className="flex items-center gap-3 mb-6">
            <Droplet className="w-8 h-8" />
            <h2 className="text-2xl font-bold">واریس و تلانژکتازی — تفاوت و درمان</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-xl mb-4 text-right">تلانژکتازی (Spider Veins)</h3>
              <p className="text-white/90 text-right leading-relaxed mb-3">
                رگ‌های ریز و پراکنده نزدیک سطح پوست، معمولاً ظاهری شبکه‌ای یا شاخه‌ای دارند.
              </p>
              <p className="text-white/80 text-right text-sm">
                اغلب تنها مشکل زیبایی ایجاد می‌کنند.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-xl mb-4 text-right">واریس</h3>
              <p className="text-white/90 text-right leading-relaxed mb-3">
                وریدهای بزرگ‌تر، برجسته و پیچ‌خورده با علائم بیشتر (درد، تورم، خطر زخم).
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-6">
            <h3 className="font-bold text-xl mb-4 text-right">علت‌های مشترک</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-white/90 text-right">
              <li className="flex items-center gap-2">
                <span>•</span>
                <span>نارسایی دریچه وریدی</span>
              </li>
              <li className="flex items-center gap-2">
                <span>•</span>
                <span>ژنتیک و سابقه خانوادگی</span>
              </li>
              <li className="flex items-center gap-2">
                <span>•</span>
                <span>بارداری</span>
              </li>
              <li className="flex items-center gap-2">
                <span>•</span>
                <span>ایستادن طولانی</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="font-bold text-xl mb-4 text-right">درمان‌ها</h3>
            <ul className="space-y-2 text-white/90 text-right">
              <li className="flex items-start gap-2">
                <span className="text-emerald-300">→</span>
                <span>مراقبت محافظه‌کارانه (بالا نگه داشتن پا، جوراب فشاری)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-300">→</span>
                <span>اسکلروتراپی (برای هر دو ولی بیشتر برای تلانژکتازی)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-300">→</span>
                <span>لیزرهای سطحی / IPL (برای تلانژکتازی‌های ریز)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-300">→</span>
                <span>لیزر/RF درون‌رگی یا جراحی (برای وریدهای بزرگ)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-300">→</span>
                <span>ترکیب روش‌ها برای بهترین نتیجه</span>
              </li>
            </ul>
            <p className="mt-4 text-white/80 text-right text-sm leading-relaxed">
              <strong>انتظار معقول:</strong> چند جلسه ممکن است لازم باشد؛ نتایج تدریجی و بهتر می‌شوند.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
