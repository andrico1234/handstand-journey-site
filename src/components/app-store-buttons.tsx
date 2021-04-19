import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { AppStoreIcon } from "../icons/AppStoreIcon"

export const AppStoreButtons: React.FunctionComponent = () => {
  return (
    <div className="w-full text-center pt-10 flex justify-center">
      <div className="flex">
        <a
          rel="noopener noreferrer"
          target="_blank"
          style={{ height: 65 }}
          href="https://play.google.com/store/apps/details?id=com.caliskillsapp&hl=en_GB&gl=US"
        >
          <StaticImage
            width={180}
            src="../images/play-store.png"
            alt="Get it on Play Store"
          />
        </a>
      </div>
      <div className="w-12" />
      <div className="flex justify-center">
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="h-full"
          href="https://apps.apple.com/gb/app/handstand-journey/id1554916546"
        >
          <AppStoreIcon width={180} height={60} />
        </a>
      </div>
    </div>
  )
}
