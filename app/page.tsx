import { Header } from "@/components/header"
import { AppointmentHero } from "@/components/appointment-hero"
import { PatientJourney } from "@/components/patient-journey"
import { PostOpInstructions } from "@/components/post-op-instructions"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <AppointmentHero />
      <PatientJourney />
      <PostOpInstructions />
      <Footer />
    </main>
  )
}
