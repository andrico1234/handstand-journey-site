import { Link } from "gatsby"
import React from "react"

export const LandingPageFooter: React.FunctionComponent = () => {
  return (
    <p className="text-center text-white text-lg underline p-2">
      <Link to="/privacy-policy">Privacy Policy</Link>
    </p>
  )
}
