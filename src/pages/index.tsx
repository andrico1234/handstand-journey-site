import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LandingPageHero } from "../components/landing-page-hero"
import { LandingPageValues } from "../components/landing-page-values"
import { LandingPageFooter } from "../components/landing-page-footer"
import { LandingPageCTA } from "../components/landing-page-cta"

const valueProps = [
  {
    title: "",
    subtitle: "Grow stronger, build muscle, and look awesome",
    icon: "ison",
    body:
      "Pick from a choice of goals, and we'll give you your easy to follow program",
    image: "",
  },
  {
    title: "hi",
    subtitle: "We're with you, every rep of the way",
    icon: "ison",
    body:
      "Follow along to each workout in real time with our easy to use in-app workout",
    image: "",
  },
  {
    title: "hi",
    subtitle: "We're by your side, during your ups and upside-downs",
    icon: "ison",
    body:
      "We'll guide you through your workout and check-in with form cues, timers, and advice.",
    image: "",
  },
  {
    title: "hi",
    subtitle: "Turn knowledge into power, and power into strength",
    icon: "ison",
    body:
      "Learn how to perform each exercise with perfect form with out exercise diary.",
    image: "",
  },
]

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Handstand Journey" />
    <LandingPageHero />
    <LandingPageValues />
    <LandingPageCTA />
    <LandingPageFooter />
  </Layout>
)

export default IndexPage
