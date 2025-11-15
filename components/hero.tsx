import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/30 to-background">
      <div className="container py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            راهنمای جامع بیماران
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            به مرکز تخصصی درمان واریس خوش آمدید. ما در اینجا هستیم تا شما را در مسیر درمان و بهبودی همراهی کنیم.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#appointment">
                دریافت نوبت آنلاین
                <ArrowLeft className="mr-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#about">اطلاعات بیشتر</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
