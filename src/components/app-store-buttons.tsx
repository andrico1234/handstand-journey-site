import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const AppStoreButtons: React.FunctionComponent = () => {
  return (
    <div className="w-full text-center pt-10">
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="relative"
        href="https://play.google.com/store/apps/details?id=com.caliskillsapp&hl=en_GB&gl=US"
      >
        <StaticImage
          width={180}
          src="../images/play-store.png"
          alt="Get it on playstore"
        />
      </a>
    </div>
  )
}
