import React from "react"

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  level: 1 | 2 | 3
}

export const Heading: React.FunctionComponent<Props> = props => {
  const { level, ...headingProps } = props

  if (level === 1) {
    return (
      <h1
        className="text-center text-5xl font-semibold py-4"
        {...headingProps}
      />
    )
  }

  if (level === 2) {
    return <h2 className="text-4xl font-semibold py-4" {...headingProps} />
  }

  return <h3 className="text-2xl font-semibold py-4" {...headingProps} />
}
