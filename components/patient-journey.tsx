import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Stethoscope,
  ClipboardList,
  Syringe,
  BedDouble,
  Home,
  UserCheck,
  CheckCircle,
  ArrowDown,
} from "lucide-react"

export function PatientJourney() {
  const steps = [
    {
      number: 1,
      icon: Calendar,
      title: "دریافت نوبت",
      description: "با استفاده از روش‌های تلفنی، پیامکی یا حضوری، نوبت ویزیت خود را دریافت کنید",
      duration: "۱ روز قبل از ویزیت",
      tasks: ["تماس یا ارسال پیامک برای نوبت‌دهی", "دریافت زمان و تاریخ ویزیت", "آماده‌سازی مدارک و آزمایش‌های قبلی"],
    },
    {
      number: 2,
      icon: Stethoscope,
      title: "ویزیت و معاینه",
      description: "در روز تعیین شده، به بخش جراحی مراجعه کنید. پزشک شما را معاینه کرده و درمان مناسب را تعیین می‌کند",
      duration: "روز ویزیت",
      tasks: [
        "مراجعه به واحد پذیرش با مدارک",
        "معاینه توسط پزشک متخصص",
        "دریافت تشخیص و برنامه درمانی",
        "دریافت نسخه آزمایش‌های تکمیلی (در صورت نیاز)",
      ],
    },
    {
      number: 3,
      icon: ClipboardList,
      title: "آزمایش‌های پیش از عمل",
      description: "آزمایش‌های لازم را انجام داده و نتایج را به پزشک ارائه دهید",
      duration: "۱-۳ روز قبل از عمل",
      tasks: [
        "انجام آزمایش‌های خون و سونوگرافی",
        "ارائه نتایج به پزشک",
        "دریافت تایید نهایی برای عمل",
        "آشنایی با دستورات قبل از عمل",
      ],
    },
    {
      number: 4,
      icon: Syringe,
      title: "روز عمل - انجام جراحی",
      description: "در روز مشخص شده، به بیمارستان مراجعه کنید. جراحی با روش‌های مدرن و کم‌تهاجمی انجام می‌شود",
      duration: "روز عمل",
      tasks: [
        "مراجعه به بیمارستان ناشتا (حداقل ۶ ساعت)",
        "پذیرش در بخش جراحی",
        "انجام عمل توسط تیم پزشکی (۳۰-۹۰ دقیقه)",
        "استراحت در ریکاوری",
      ],
    },
    {
      number: 5,
      icon: BedDouble,
      title: "بستری و مراقبت",
      description: "بسته به نوع عمل، ممکن است نیاز به بستری شدن داشته باشید یا همان روز ترخیص شوید",
      duration: "چند ساعت تا ۱ روز",
      tasks: [
        "مراقبت پس از عمل توسط پرستاران",
        "کنترل علائم حیاتی",
        "دریافت دستورات ترخیص",
        "دریافت داروها و توصیه‌های پزشکی",
      ],
    },
    {
      number: 6,
      icon: Home,
      title: "مراقبت در منزل",
      description: "دستورالعمل‌های پس از عمل را به دقت رعایت کنید و در صورت بروز مشکل با پزشک تماس بگیرید",
      duration: "۱-۴ هفته",
      tasks: [
        "مصرف داروها طبق دستور پزشک",
        "رعایت دستورالعمل‌های مراقبتی",
        "پیاده‌روی منظم و استراحت کافی",
        "تماس با پزشک در صورت بروز مشکل",
      ],
    },
    {
      number: 7,
      icon: UserCheck,
      title: "ویزیت‌های پیگیری",
      description: "در زمان‌های تعیین شده برای ویزیت کنترلی مراجعه کنید تا روند بهبودی بررسی شود",
      duration: "۱، ۲، ۴ هفته بعد",
      tasks: ["ویزیت هفته اول پس از عمل", "ویزیت ماه اول", "بررسی نتایج درمان", "دریافت مجوز برای فعالیت‌های عادی"],
    },
    {
      number: 8,
      icon: CheckCircle,
      title: "بهبودی کامل",
      description: "پس از تایید پزشک، می‌توانید به فعالیت‌های عادی خود بازگردید",
      duration: "۱-۳ ماه",
      tasks: [
        "بازگشت کامل به فعالیت‌های روزمره",
        "انجام آزمایش‌های نهایی (در صورت نیاز)",
        "ویزیت‌های دوره‌ای سالیانه برای پیگیری",
      ],
    },
  ]

  return (
    <section id="journey" className="py-12 md:py-16 lg:py-20 xl:py-28 bg-muted/30">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            مراحل کامل سفر درمانی شما
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            از نوبت‌گیری تا بهبودی کامل، گام به گام در کنار شما هستیم
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLeft = index % 2 === 0
            const isLast = index === steps.length - 1

            return (
              <div key={step.number} className="relative">
                {/* Timeline connector with arrow */}
                {!isLast && (
                  <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full items-center justify-center z-0">
                    <div className="w-full h-full bg-gradient-to-b from-primary/30 to-primary/10"></div>
                    <ArrowDown
                      className="absolute bottom-0 h-8 w-8 text-primary/40 animate-bounce"
                      style={{ animationDuration: "2s" }}
                    />
                  </div>
                )}

                <div
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-16 relative z-10 ${isLeft ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Card */}
                  <div className="w-full md:w-5/12">
                    <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                      <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                        <div className="flex items-start gap-3 md:gap-4 mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/30">
                              <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-base font-bold flex-shrink-0">
                                {step.number}
                              </span>
                              <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{step.description}</p>
                            <div className="inline-flex items-center gap-1.5 text-xs bg-accent/20 text-accent-foreground px-3 py-1.5 rounded-full font-medium">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{step.duration}</span>
                            </div>
                          </div>
                        </div>

                        <div className={`${isLeft ? "mr-0 md:mr-16" : "mr-0 md:ml-16"} mt-4 pt-4 border-t`}>
                          <h4 className="font-semibold text-sm mb-3 text-primary">وظایف این مرحله:</h4>
                          <ul className="space-y-2">
                            {step.tasks.map((task, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center circle - visible only on desktop */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-primary shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
