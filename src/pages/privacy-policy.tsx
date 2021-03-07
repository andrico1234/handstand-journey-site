import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/heading"

const PrivacyPolicy: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <Heading level={1}>Privacy Policy</Heading>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PrivacyPolicy
