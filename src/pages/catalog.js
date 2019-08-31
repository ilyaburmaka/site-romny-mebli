import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="catalog" />
    <h1>catalog</h1>
    <p>Welcome to catalog</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
