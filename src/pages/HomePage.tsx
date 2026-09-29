import { Hero } from '../components/Hero'
import { SelectedWork } from '../components/SelectedWork'
import { CompactContact } from '../components/CompactContact'
import { FeaturedExperiment } from '../components/FeaturedExperiment'
import { BuilderAbout } from '../components/BuilderAbout'
import { Xiaohongshu } from '../components/Xiaohongshu'

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedExperiment />
      <SelectedWork />
      <BuilderAbout />
      <Xiaohongshu />
      <CompactContact />
    </>
  )
}
