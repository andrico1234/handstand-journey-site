import { Link } from "gatsby"
import React from "react"
import { SegmentWrapper } from "./segment-wrapper"

export const LandingPageFooter: React.FunctionComponent = () => {
  return (
    <SegmentWrapper>
      <p className="text-center text-white text-lg underline flex flex-col">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
      </p>
    </SegmentWrapper>
  )
}
