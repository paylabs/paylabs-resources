import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ResourceGrid from "@/components/ResourceGrid"
import Footer from "@/components/Footer"

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ResourceGrid />
      </main>
      <Footer />
    </div>
  )
}
