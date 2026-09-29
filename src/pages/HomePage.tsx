import { Hero } from '../components/Hero'
import { SelectedWork } from '../components/SelectedWork'
import { FeaturedExperiment } from '../components/FeaturedExperiment'
import { Closing } from '../components/Closing'

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedExperiment />
      <SelectedWork />
      <Closing />
    </>
  )
}
