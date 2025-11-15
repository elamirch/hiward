import { Activity, MapPin, Phone, Mail, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">بیمارستان رازی رشت</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              بخش جراحی - ارائه خدمات تخصصی درمان واریس، ندول‌های تیروئید و پاراتیروئید با جدیدترین روش‌های درمانی
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#appointment" className="hover:text-primary transition-colors">
                  نوبت‌دهی
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-primary transition-colors">
                  مراحل درمان
                </a>
              </li>
              <li>
                <a href="#instructions" className="hover:text-primary transition-colors">
                  دستورالعمل‌ها
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">تماس با ما</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span dir="ltr">013-33542211</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>
                  پیامک: <span dir="ltr">30007890</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                surgery@razihospital.ir
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">آدرس</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-1 shrink-0" />
              <p className="leading-relaxed">گیلان، رشت، خیابان امام خمینی، بیمارستان رازی، بخش جراحی - طبقه دوم</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} بیمارستان رازی رشت - بخش جراحی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
