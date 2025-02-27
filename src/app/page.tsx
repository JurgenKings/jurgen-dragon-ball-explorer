import CoverParticles from "@/components/CoverParticles"
import Hero from "@/components/Hero"
import TransitionPage from "@/components/TransitionPage"

function Home() {
  return (
    <>
      <TransitionPage />

      <div className="min-h-screen bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Hero />
      </div>
    </>
  )
}

export default Home