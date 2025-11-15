"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/razi-surgery/header"
import { HeroSection } from "@/components/razi-surgery/hero-section"
import { PhysicalSpaceSection } from "@/components/razi-surgery/physical-space-section"
import { StaffSection } from "@/components/razi-surgery/staff-section"
import { InsuranceSection } from "@/components/razi-surgery/insurance-section"
import { ImportantInfoSection } from "@/components/razi-surgery/important-info-section"
import { VisitorSection } from "@/components/razi-surgery/visitor-section"
import { ServicesSection } from "@/components/razi-surgery/services-section"
import { ContactSection } from "@/components/razi-surgery/contact-section"
import { AppointmentGuideSection } from "@/components/razi-surgery/appointment-guide-section"
import { CholecystectomyCareSection } from "@/components/razi-surgery/cholecystectomy-care-section"
import { ThyroidectomyCareSection } from "@/components/razi-surgery/thyroidectomy-care-section"
import { HerniaCareSection } from "@/components/razi-surgery/hernia-care-section"
import { AngiographyCareSection } from "@/components/razi-surgery/angiography-care-section"
import { FistulaCareSection } from "@/components/razi-surgery/fistula-care-section"
import { BookOpen, Calendar, ChevronLeft, ChevronRight, Heart, Stethoscope, Activity, Droplets } from 'lucide-react'

export default function RaziSurgeryPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "appointment" | "cholecystectomy" | "thyroidectomy" | "hernia" | "angiography" | "fistula">("overview")
  const [isMenuMinimized, setIsMenuMinimized] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY.current) {
        setShowMobileMenu(true)
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowMobileMenu(false)
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const tabs = [
    {
      id: "overview" as const,
      label: "راهنمای جامع بخش",
      icon: BookOpen,
      description: "اطلاعات کامل بخش جراحی"
    },
    {
      id: "appointment" as const,
      label: "چگونه نوبت بگیرم؟",
      icon: Calendar,
      description: "راهنمای نوبت‌گیری و مراقبت‌ها"
    },
    {
      id: "cholecystectomy" as const,
      label: "مراقبت کله سیستکتومی",
      icon: Heart,
      description: "برداشتن کیسه صفرا"
    },
    {
      id: "thyroidectomy" as const,
      label: "مراقبت تیروئیدکتومی",
      icon: Stethoscope,
      description: "برداشتن غده تیروئید"
    },
    {
      id: "hernia" as const,
      label: "مراقبت جراحی هرنی",
      icon: Activity,
      description: "فتق و عمل جراحی"
    },
    {
      id: "angiography" as const,
      label: "مراقبت آنژیوگرافی",
      icon: Droplets,
      description: "آنژیوگرافی و آنژیوپلاستی"
    },
    {
      id: "fistula" as const,
      label: "مراقبت بیماران فیستول",
      icon: Heart,
      description: "فیستول شریانی وریدی"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      
      <div className="flex flex-col lg:flex-row lg:pt-20 min-h-screen">
        <aside className={`bg-white/90 backdrop-blur-sm border-b lg:border-b-0 lg:border-l border-slate-200/60 shadow-md fixed z-20 transition-all duration-300 ${
          isMenuMinimized ? 'lg:w-24' : 'lg:w-80'
        } w-full lg:h-[calc(100vh-5rem)] h-28 ${
          showMobileMenu ? 'top-20' : '-top-28'
        } lg:top-20 right-0`}>
          <div className="lg:hidden overflow-x-auto scrollbar-hide h-full flex items-center" dir="rtl">
            <div className="flex gap-3 px-4 min-w-max">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 text-right p-4 rounded-xl transition-all duration-300 min-w-[280px] ${
                      activeTab === tab.id
                        ? "bg-gradient-to-l from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center justify-end gap-3">
                      <div className="flex-1 text-right">
                        <div className="font-bold text-base mb-1">{tab.label}</div>
                        <div className={`text-sm ${activeTab === tab.id ? "text-blue-100" : "text-slate-500"}`}>
                          {tab.description}
                        </div>
                      </div>
                      <Icon className={`w-6 h-6 ${
                        activeTab === tab.id ? "text-white" : "text-blue-600"
                      }`} />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="hidden lg:block h-full relative">
            <button
              onClick={() => setIsMenuMinimized(!isMenuMinimized)}
              className="absolute left-2 top-4 z-10 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              title={isMenuMinimized ? "بزرگ کردن منو" : "کوچک کردن منو"}
            >
              {isMenuMinimized ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            <div className="p-6 overflow-y-auto h-full">
              {!isMenuMinimized && (
                <h2 className="text-lg font-bold text-slate-800 mb-4 text-right">بخش‌های راهنما</h2>
              )}
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-right p-4 rounded-xl transition-all duration-300 group ${
                        activeTab === tab.id
                          ? "bg-gradient-to-l from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 hover:shadow-md"
                      }`}
                      title={isMenuMinimized ? tab.label : undefined}
                    >
                      {isMenuMinimized ? (
                        <div className="flex items-center justify-center">
                          <Icon className={`w-6 h-6 transition-transform group-hover:scale-110 ${
                            activeTab === tab.id ? "text-white" : "text-blue-600"
                          }`} />
                        </div>
                      ) : (
                        <div className="flex items-center justify-end gap-3">
                          <div className="flex-1 text-right">
                            <div className="font-bold text-base mb-1">{tab.label}</div>
                            <div className={`text-sm ${activeTab === tab.id ? "text-blue-100" : "text-slate-500"}`}>
                              {tab.description}
                            </div>
                          </div>
                          <Icon className={`w-6 h-6 transition-transform group-hover:scale-110 ${
                            activeTab === tab.id ? "text-white" : "text-blue-600"
                          }`} />
                        </div>
                      )}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>
        </aside>

        <div className={`flex-1 pt-52 lg:pt-0 transition-all duration-300 ${
          isMenuMinimized ? 'lg:mr-24' : 'lg:mr-80'
        }`}>
          {activeTab === "overview" && (
            <div>
              <HeroSection />
              <PhysicalSpaceSection />
              <StaffSection />
              <InsuranceSection />
              <ImportantInfoSection />
              <VisitorSection />
              <ServicesSection />
              <ContactSection />
            </div>
          )}

          {activeTab === "appointment" && (
            <div className="min-h-screen">
              <AppointmentGuideSection />
            </div>
          )}

          {activeTab === "cholecystectomy" && (
            <div className="min-h-screen">
              <CholecystectomyCareSection />
            </div>
          )}

          {activeTab === "thyroidectomy" && (
            <div className="min-h-screen">
              <ThyroidectomyCareSection />
            </div>
          )}

          {activeTab === "hernia" && (
            <div className="min-h-screen">
              <HerniaCareSection />
            </div>
          )}

          {activeTab === "angiography" && (
            <div className="min-h-screen">
              <AngiographyCareSection />
            </div>
          )}

          {activeTab === "fistula" && (
            <div className="min-h-screen">
              <FistulaCareSection />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
