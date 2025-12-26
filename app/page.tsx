import Link from "next/link"
import { Hospital, Stethoscope, Activity, HeartPulse } from 'lucide-react'

export default function Home() {
  const departments = [
    {
      id: "surgery",
      name: "بخش جراحی",
      description: "راهنمای کامل جراحی‌های واریس، ندول تیروئید و پاراتیروئید",
      icon: Stethoscope,
      href: "/razi-surgery",
      color: "from-blue-500 to-cyan-500",
    },
    // {
    //   id: "hematology",
    //   name: "بخش هماتولوژی",
    //   description: "راهنمای کامل آزمایشات و درمان‌های خونی",
    //   icon: Activity,
    //   href: "/razi-hematology",
    //   color: "from-red-500 to-pink-500",
    // },
    // {
    //   id: "cardiology",
    //   name: "بخش قلب و عروق",
    //   description: "راهنمای کامل خدمات قلب و عروق",
    //   icon: HeartPulse,
    //   href: "/razi-cardiology",
    //   color: "from-emerald-500 to-teal-500",
    // },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <Hospital className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              های‌وارد | HiWard    
            </h1>
          </div>
          <p className="text-center text-slate-600 mt-2 text-sm md:text-base">
            راهنمای جامع بخش‌های بیمارستان
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 text-balance leading-tight">
          به راهنمای جامع{" "}
          <span className="relative inline-block px-2 text-green-700 font-extrabold">
            بیمارستان رازی رشت
            <span className="absolute inset-x-0 -bottom-1 h-2 bg-blue-100 -z-10 rounded"></span>
          </span>
          <br />
          <span className="mt-3 inline-block bg-gradient-to-l from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            خوش آمدید
          </span>
        </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            اطلاعات کامل و دقیق درباره نحوه نوبت‌گیری، مراحل درمان و مراقبت‌های بعد از عمل بیمارستان رازی رشت   
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            بخش‌های بیمارستان رازی رشت
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {departments.map((dept) => {
              const Icon = dept.icon
              return (
                <Link
                  key={dept.id}
                  href={dept.href}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-transparent overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {dept.name}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {dept.description}
                    </p>
                    <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      <span>مشاهده راهنما</span>
                      <span className="inline-block group-hover:translate-x-1 transition-transform">←</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Hospital className="w-8 h-8" />
              <h3 className="text-2xl font-bold">های‌وارد</h3>
            </div>
            <p className="text-slate-400 mb-6">
              راهنمای جامع بخش‌های بیمارستان
            </p>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} تمامی حقوق محفوظ است
            </p>
            <p className="text-sm text-slate-500">
              ساخته شده توسط{" "}
              <a
                href="https://webernal.com"
                title="مشاهده وب‌سایت"
                className="hover:tracking-wide relative font-medium transition-colors duration-300 hover:text-blue-600 after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full text-primary-foreground"
              >
                وبرنال
              </a>{" "}
              و{" "}
              <a
                href="https://gilmeds.com"
                title="مشاهده وب‌سایت"
                className="hover:tracking-wide relative font-medium transition-colors duration-300 hover:text-emerald-600 after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full text-primary-foreground"
              >
                گیل‌مدز
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
