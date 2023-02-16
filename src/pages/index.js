import React from "react"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';

const IndexPage = () => (
  <PageTransition>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/dog/">Go to my blog</Link> <br />
    <Link to="/about/">Go to my about page</Link> <br />
    <Link to="/contact/">Go to my contact page</Link> <br />
  </PageTransition>
)
export default IndexPage