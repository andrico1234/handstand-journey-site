import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Handstand Journey" />

    <p>
      <Link to="/privacy-policy/">Privacy Policy</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
