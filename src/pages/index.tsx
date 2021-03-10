import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LandingPageHero } from "../components/landing-page-hero"
import { LandingPageValues } from "../components/landing-page-values"
import { LandingPageFooter } from "../components/landing-page-footer"
import { LandingPageCTA } from "../components/landing-page-cta"
import { LandingPageValue } from "../components/landing-page-value"
import { TrophyIcon, RulerIcon, ComputerIcon, PlanningIcon } from "../icons"
import { StaticImage } from "gatsby-plugin-image"

const valueProps = [
  {
    title: "Achieve",
    subtitle: "Grow stronger, build muscle, and look awesome",
    icon: <TrophyIcon size={32} />,
    body:
      "Pick from a choice of goals, and we'll give you your easy to follow program",
    image: (
      <StaticImage
        width={300}
        placeholder="blurred"
        src="../images/pixel.png"
        alt="iPhone showing workout preview"
      />
    ),
  },
  {
    title: "Measure",
    subtitle: "We're with you, every rep of the way",
    icon: <RulerIcon size={32} />,
    body:
      "Follow along to each workout in real time with our easy to use in-app workout and we'll keep track of the workouts you've completed.",
    image: (
      <StaticImage
        width={300}
        placeholder="blurred"
        src="../images/galaxy.png"
        alt="iPhone showing workout preview"
      />
    ),
  },
  {
    title: "Perform",
    subtitle: "We're by your side, during your ups and upside-downs",
    icon: <ComputerIcon size={32} />,
    body:
      "We'll guide you through your workout and check-in with form cues, timers, and advice.",
    image: (
      <StaticImage
        width={300}
        placeholder="blurred"
        src="../images/iphone-sr.png"
        alt="iPhone showing workout preview"
      />
    ),
  },
  {
    title: "Learn",
    subtitle: "Turn knowledge into power, and power into strength",
    icon: <PlanningIcon size={32} />,
    body:
      "Learn how to perform each exercise with perfect form with out exercise diary.",
    image: (
      <StaticImage
        width={300}
        placeholder="blurred"
        src="../images/iphone-12.png"
        alt="iPhone showing workout preview"
      />
    ),
  },
]

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Handstand Journey" />
    <LandingPageHero />
    <LandingPageValues />
    {valueProps.map((value, i) => {
      return (
        <LandingPageValue
          key={value.title}
          isAlternate={i % 2 === 1}
          {...value}
        />
      )
    })}
    <LandingPageCTA />
    <LandingPageFooter />
  </Layout>
)

export default IndexPage
