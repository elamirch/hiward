import { Activity } from "lucide-react"

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container flex h-16 items-center justify-center px-4">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          <span className="text-base md:text-lg font-bold text-center">بخش جراحی بیمارستان رازی رشت</span>
        </div>
      </div>
    </header>
  )
}
