import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi people</h1>
    <p>This is about page</p>
  </Layout>
)

export default IndexPage
