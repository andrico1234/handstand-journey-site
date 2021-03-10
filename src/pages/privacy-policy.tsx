import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/heading"
import Header from "../components/header"

const PrivacyPolicy: React.FunctionComponent = () => (
  <div>
    <Header />
    <SEO title="Privacy Policy" />
    <div className="pb-16">
      <main className="min-h-3/4 relative overflow-hidden ">
        <Heading level={1}>Privacy Policy</Heading>
      </main>
    </div>
  </div>
)

export default PrivacyPolicy
