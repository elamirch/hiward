import Link from "next/link"
import { ArrowRight, Hospital } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            <span className="text-sm font-medium">بازگشت به صفحه اصلی</span>
          </Link>
          <div className="flex items-center gap-3">
            <Hospital className="w-8 h-8 text-blue-600" />
            <div className="text-right">
              <h1 className="text-lg font-bold text-slate-900">بخش جراحی</h1>
              <p className="text-xs text-slate-600">بیمارستان رازی رشت</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
