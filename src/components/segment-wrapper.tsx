import React from "react"

interface Props {
  children: React.ReactNode
}

export const SegmentWrapper: React.FunctionComponent<Props> = props => {
  const { children } = props

  return <div className="py-8 max-w-screen-lg mx-auto">{children}</div>
}
