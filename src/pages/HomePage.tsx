import { Hero } from '../components/Hero'
import { SelectedWork } from '../components/SelectedWork'
import {
  EvalsFeature,
  Capabilities,
  MoreWork,
  LatestLearning,
  About,
  Contact,
} from '../components/HomeSections'

export function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <EvalsFeature />
      <Capabilities />
      <MoreWork />
      <LatestLearning />
      <About />
      <Contact />
    </>
  )
}
