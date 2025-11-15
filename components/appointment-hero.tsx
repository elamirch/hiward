import { Phone, MessageSquare, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AppointmentHero() {
  return (
    <section id="appointment" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance mb-4 md:mb-6">
            نوبت‌دهی بخش جراحی
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            برای دریافت نوبت ویزیت و مشاوره، می‌توانید از یکی از روش‌های زیر استفاده کنید
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">تماس تلفنی</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">تماس با واحد پذیرش برای دریافت نوبت</p>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-bold text-primary" dir="ltr">
                  013-33542211
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">شنبه تا پنجشنبه: ۸ صبح تا ۸ شب</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-lg md:scale-105">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">پیامک (توصیه می‌شود)</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">ارسال پیامک برای دریافت نوبت سریع</p>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-bold text-primary" dir="ltr">
                  30007890
                </p>
                <div className="bg-muted p-3 rounded-lg mt-4">
                  <p className="text-xs font-medium mb-1">متن پیامک:</p>
                  <p className="text-sm">نام و نام خانوادگی + شماره تماس</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-1">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">مراجعه حضوری</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">مراجعه به واحد پذیرش بیمارستان</p>
              <div className="space-y-2">
                <p className="text-sm font-medium">بخش جراحی - طبقه دوم</p>
                <p className="text-xs md:text-sm text-muted-foreground">شنبه تا پنجشنبه</p>
                <p className="text-xs md:text-sm text-muted-foreground">۸ صبح تا ۸ شب</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
          <Card className="bg-accent/10 border-accent">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-base md:text-lg mb-3 text-center">مدارک مورد نیاز برای نوبت‌دهی:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>کارت ملی یا شناسنامه</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>دفترچه بیمه (در صورت داشتن)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>نتایج آزمایش‌ها و سونوگرافی‌های قبلی (در صورت وجود)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>معرفی‌نامه پزشک (در صورت داشتن)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
