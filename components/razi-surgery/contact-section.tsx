"use client"

import { MapPin, Phone, Globe } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="min-h-screen snap-start snap-always flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            اطلاعات تماس
          </h2>
          <p className="text-xl text-blue-100 mb-16">
            بخش جراحی بیمارستان رازی رشت
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Address */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">آدرس</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                رشت، خیابان سردار جنگل
                <br />
                مرکز آموزشی درمانی رازی
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">تلفن</h3>
              <p className="text-blue-100 font-mono text-sm">
                ۰۱۳۳۳۵۵۰۰۲۸
                <br />
                ۰۱۳۳۳۵۴۱۰۰۱
              </p>
            </div>

            {/* Website */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">وبسایت</h3>
              <a
                href="https://www.gums.ac.ir/razi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 transition-colors text-sm"
              >
                www.gums.ac.ir/razi
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-blue-100 leading-relaxed">
              همراهان و بیماران گرامی، خوشحالیم که می‌توانیم در خدمت سلامت شما باشیم.
              <br />
              برای هرگونه سؤال یا نیاز به راهنمایی، با ما در تماس باشید.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
