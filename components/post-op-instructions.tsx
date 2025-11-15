import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function PostOpInstructions() {
  return (
    <section id="instructions" className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            دستورالعمل‌های پس از عمل
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            رعایت این دستورالعمل‌ها برای بهبودی سریع‌تر و جلوگیری از عوارض ضروری است
          </p>
        </div>

        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="leading-relaxed">
            لطفاً دستورالعمل‌های مربوط به نوع درمان خود را با دقت مطالعه کنید و در صورت بروز هرگونه مشکل با پزشک معالج
            تماس بگیرید.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>راهنمای مراقبت‌های پس از درمان</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-right">
                  دستورات بعد از لیزر یا RF واریس
                </AccordionTrigger>
                <AccordionContent className="space-y-4 text-base leading-relaxed">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">روز اول تا سوم:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>جوراب فشاری را به مدت ۷۲ ساعت به صورت مداوم استفاده کنید</li>
                      <li>از فعالیت‌های سنگین و ورزش‌های شدید خودداری کنید</li>
                      <li>پیاده‌روی آرام و منظم (هر ۲ ساعت یکبار، ۱۰-۱۵ دقیقه) توصیه می‌شود</li>
                      <li>از ایستادن یا نشستن طولانی مدت جلوگیری کنید</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">هفته اول:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>جوراب فشاری را در طول روز به مدت ۲ هفته استفاده کنید</li>
                      <li>از حمام آب گرم، سونا و جکوزی خودداری کنید</li>
                      <li>هنگام خواب، پاها را بالاتر از سطح قلب قرار دهید</li>
                      <li>داروهای ضد درد تجویز شده را طبق دستور پزشک مصرف کنید</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">هفته‌های بعدی:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>بازگشت تدریجی به فعالیت‌های عادی با تایید پزشک</li>
                      <li>ورزش‌های سبک مانند شنا و دوچرخه‌سواری مجاز است</li>
                      <li>مراجعه برای ویزیت کنترلی طبق برنامه تعیین شده</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-right">
                  دستورات بعد از اسکلروتراپی واریس و تلانژکتازی
                </AccordionTrigger>
                <AccordionContent className="space-y-4 text-base leading-relaxed">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">بلافاصله بعد از عمل:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>پیاده‌روی ملایم به مدت ۳۰ دقیقه بلافاصله بعد از تزریق</li>
                      <li>جوراب فشاری را به مدت ۴۸-۷۲ ساعت پوشیده نگه دارید</li>
                      <li>از مالش یا فشار مستقیم به ناحیه تزریق خودداری کنید</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">اولین هفته:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>از قرار گرفتن در معرض نور مستقیم خورشید خودداری کنید</li>
                      <li>حمام با آب ولرم مجاز است، اما حمام آب داغ ممنوع</li>
                      <li>کبودی و قرمزی موضعی طبیعی است و ظرف ۲-۳ هفته برطرف می‌شود</li>
                      <li>از فعالیت‌های ورزشی شدید و حمل اجسام سنگین پرهیز کنید</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">نکات مهم:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>ممکن است نیاز به چند جلسه درمان باشد</li>
                      <li>نتایج نهایی پس از ۳-۶ ماه قابل مشاهده است</li>
                      <li>استفاده از کرم ضد آفتاب روی نواحی درمان شده ضروری است</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-right">
                  دستورات بعد از ابلیشن ندول تیروئید
                </AccordionTrigger>
                <AccordionContent className="space-y-4 text-base leading-relaxed">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">۲۴ ساعت اول:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>کمپرس سرد روی ناحیه گردن هر ۲-۳ ساعت به مدت ۱۵-۲۰ دقیقه</li>
                      <li>از غذاهای سخت و داغ خودداری کنید، غذاهای نرم و ولرم مصرف کنید</li>
                      <li>سر را هنگام خواب کمی بالا نگه دارید (۲-۳ بالش)</li>
                      <li>داروهای ضد التهاب تجویز شده را طبق دستور مصرف کنید</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">هفته اول:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>تورم و ناراحتی خفیف در ناحیه گردن طبیعی است</li>
                      <li>از فعالیت‌های سنگین و بلند کردن اشیاء سنگین خودداری کنید</li>
                      <li>آزمایش خون تیروئید طبق برنامه تعیین شده انجام شود</li>
                      <li>در صورت بروز تب، درد شدید یا مشکل در بلع، فوراً با پزشک تماس بگیرید</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">پیگیری:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>سونوگرافی کنترلی بعد از ۱، ۳ و ۶ ماه</li>
                      <li>ندول به تدریج در طی ۳-۶ ماه کوچک می‌شود</li>
                      <li>بهبود کامل علائم فشاری ممکن است ۶-۱۲ ماه طول بکشد</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-right">
                  دستورات بعد از ابلیشن ندول پاراتیروئید
                </AccordionTrigger>
                <AccordionContent className="space-y-4 text-base leading-relaxed">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">بلافاصله بعد از عمل:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>کمپرس یخ روی محل درمان به مدت ۲۰ دقیقه در هر ساعت</li>
                      <li>استراحت کامل در ۴-۶ ساعت اول</li>
                      <li>مایعات فراوان بنوشید (حداقل ۸-۱۰ لیوان آب در روز)</li>
                      <li>از حرکات شدید گردن و سر خودداری کنید</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">روزهای بعد:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>آزمایش سطح کلسیم و PTH خون در روزهای ۱، ۳ و ۷ بعد از عمل</li>
                      <li>مصرف مکمل کلسیم و ویتامین D در صورت تجویز پزشک</li>
                      <li>کبودی و تورم خفیف در ناحیه گردن طبیعی است</li>
                      <li>از ورزش‌های سنگین به مدت ۱ هفته پرهیز کنید</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">علائم هشدار دهنده:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>گزگز یا بی‌حسی دور دهان، دست‌ها یا پاها (نشانه کاهش کلسیم)</li>
                      <li>گرفتگی عضلانی یا اسپاسم</li>
                      <li>تورم شدید یا درد غیر قابل تحمل</li>
                      <li>تب بالای ۳۸ درجه</li>
                      <li>در صورت بروز هر یک از این علائم، فوراً با پزشک تماس بگیرید</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">پیگیری دراز مدت:</h4>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>سونوگرافی و آزمایش خون بعد از ۱، ۳، ۶ و ۱۲ ماه</li>
                      <li>کاهش اندازه ندول ممکن است تا ۶ ماه طول بکشد</li>
                      <li>نرمال شدن سطح کلسیم خون معمولاً در عرض چند هفته</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
