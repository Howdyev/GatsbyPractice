import React from "react"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';

const IndexPage = () => (
  <PageTransition
    defaultStyle={{
      transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      left: '100%',
      position: 'absolute',
      width: '100%',
    }}
    transitionStyles={{
      entering: { left: '0%' },
      entered: { left: '0%' },
      exiting: { left: '100%' },
    }}
    transitionTime={500}
  >
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/dog/">Go to my blog</Link> <br /><br></br>
    <Link to="/about/">Go to my about page</Link> <br /><br></br>
    <Link to="/contact/">Go to my contact page</Link> <br />
  </PageTransition>
)
export default IndexPage