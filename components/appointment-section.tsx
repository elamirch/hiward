import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Calendar, Clock } from "lucide-react"

export function AppointmentSection() {
  return (
    <section id="appointment" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">نحوه نوبت‌دهی</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            شما می‌توانید به سه روش مختلف نوبت دریافت کنید
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <Phone className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">تماس تلفنی</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed mb-4">
                با شماره تلفن مرکز تماس بگیرید و نوبت خود را رزرو کنید. کارشناسان ما آماده پاسخگویی هستند.
              </CardDescription>
              <Button className="w-full bg-transparent" variant="outline">
                <Phone className="ml-2 h-4 w-4" />
                021-1234-5678
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary">
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">پیامک نوبت‌دهی</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed mb-4">
                عبارت "نوبت" را به شماره زیر ارسال کنید تا لینک نوبت‌دهی آنلاین برای شما ارسال شود.
              </CardDescription>
              <div className="bg-primary/10 border border-primary rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">ارسال پیامک به:</p>
                <p className="text-2xl font-bold text-primary">30007890</p>
                <p className="text-sm text-muted-foreground mt-2">
                  متن پیام: <span className="font-bold">نوبت</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">نوبت‌دهی حضوری</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed mb-4">
                مراجعه حضوری به مرکز و دریافت نوبت از پذیرش. ساعات کاری: شنبه تا پنجشنبه ۸ صبح تا ۸ شب
              </CardDescription>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>پاسخگویی ۲۴ ساعته</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
