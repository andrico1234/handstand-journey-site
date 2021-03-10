import React from "react"
import { Heading } from "./heading"
import { SegmentWrapper } from "./segment-wrapper"

interface Props {
  title: string
  subtitle: string
  icon: JSX.Element
  body: string
  image: JSX.Element
  isAlternate: boolean
}

export const LandingPageValue: React.FunctionComponent<Props> = props => {
  const { title, subtitle, icon, body, image, isAlternate } = props
  const flexDirection = isAlternate ? "flex-row-reverse" : "flex-row"
  const imageMargin = isAlternate ? "mr-8" : "ml-8"

  return (
    <SegmentWrapper>
      <div className={`text-white px-4 flex ${flexDirection} justify-between`}>
        <div className="flex flex-col justify-center">
          <div className="flex-row flex items-center">
            <div className="mr-4">{icon}</div>
            <Heading level={2}>{title}</Heading>
          </div>
          <Heading className="text-2xl font-semibold py-0" level={3}>
            {subtitle}
          </Heading>
          <p className="text-xl font-light font-body my-4">{body}</p>
        </div>
        <div className={`${imageMargin} w-80 min-w-max`}>{image}</div>
      </div>
    </SegmentWrapper>
  )
}
