import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Heading } from "./heading"
import { AppStoreButtons } from "./app-store-buttons"

export const LandingPageHero: React.FunctionComponent = () => {
  return (
    <div className="min-h-3/4 text-white py-8">
      <Heading level={1}>Handstand Journey</Heading>
      <div className="ml-12 max-w-3/4">
        <Heading level={2}>Grow stronger.</Heading>
        <Heading level={2}>Build muscle.</Heading>
        <Heading level={2}>Look awesome.</Heading>
        <p className="text-2xl font-light font-body mt-6">
          Handstand Journey makes learning incredible exercises like the
          Handstand and the Handstand Push Up fun and exciting. You can begin
          your handstand journey from home, with no equipment, great for getting
          fit without a gym.
        </p>
      </div>
      <AppStoreButtons />
    </div>
  )
}

// @media (min-width: 600px)
// .LandingPageHeader--solid {
//     font-size: 52px;
// }
// @media (min-width: 600px)
// .LandingPageHeader--hollow, .LandingPageHeader--solid {
//     text-align: left;
// }
// .LandingPageHeader--solid {
//     font-size: 40px;
//     margin-top: 0;
// }
