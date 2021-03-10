/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Header from "./header"

interface Props {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pb-16 bg-gradient-to-b from-red to-purple">
        <main className="overflow-hidden">{children}</main>
      </div>
    </>
  )
}

export default Layout
