import BannerPlanet from "@/components/BannerPlanet"
import CoverParticles from "@/components/CoverParticles"
import DragonSphere from "@/components/DragonSphere"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import IconicPhrases from "@/components/IconicPhrases"
import TopCharacters from "@/components/TopCharacters"
import TransitionPage from "@/components/TransitionPage"

function Home() {
  return (
    <>
      <TransitionPage />

      <div className="min-h-screen bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Hero />
        <TopCharacters />
        <Gallery />
        <IconicPhrases />
        <BannerPlanet />
        {/* <DragonSphere /> */}
      </div>
    </>
  )
}

export default Home