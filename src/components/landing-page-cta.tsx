import React from "react"
import { AppStoreButtons } from "./app-store-buttons"
import { Heading } from "./heading"

export const LandingPageCTA: React.FunctionComponent = () => {
  return (
    <div className="text-white text-center py-4">
      <Heading level={2}>
        Take your first steps into the world of handstands
      </Heading>
      <AppStoreButtons />
    </div>
  )
}
