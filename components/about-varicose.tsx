import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Zap, Shield, CheckCircle } from "lucide-react"

export function AboutVaricose() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">مراقبت‌های واریس چیست؟</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            واریس یک بیماری شایع رگ‌های سطحی است که با درمان‌های مدرن و کم‌تهاجمی قابل درمان است.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-2">
            <CardHeader>
              <Heart className="h-10 w-10 text-primary mb-2" />
              <CardTitle>واریس چیست؟</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                واریس ورید‌هایی هستند که بزرگ، پیچ‌خورده و برجسته شده‌اند. معمولاً در پاها ظاهر می‌شوند و می‌توانند باعث درد و
                ناراحتی شوند.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>علائم واریس</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                احساس سنگینی در پاها، تورم مچ پا و ساق، درد یا گرفتگی عضلات، خارش اطراف رگ‌ها و تغییر رنگ پوست از علائم
                واریس هستند.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-2" />
              <CardTitle>روش‌های درمان</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                لیزر درون‌وریدی (EVLT)، رادیوفرکانسی (RF)، اسکلروتراپی و ابلیشن از جدیدترین روش‌های درمان کم‌تهاجمی واریس
                هستند.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-accent mb-2" />
              <CardTitle>مزایای درمان</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                بدون جراحی باز، بدون بستری شدن، بازگشت سریع به فعالیت‌های روزمره، عوارض جانبی کمتر و نتایج بهتر از
                مهم‌ترین مزایاست.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
