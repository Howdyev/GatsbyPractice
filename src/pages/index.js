import * as React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/banner.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <AniLink paintDrip color="rebeccapurple" component={Link} to="/page-2/">Go to page 2</AniLink> <br />
      <AniLink swipe direction="left" component={Link} to="/page-3/">Go to "Using TypeScript"</AniLink><br />
      <AniLink swipe direction="right" component={Link} to="/transitionlinkpage/">Go to "Using TypeScript"</AniLink><br />
      <AniLink swipe direction="right" component={Link} to="/samplepage/">Go to SamplePage</AniLink><br />
    </p>
  </Layout>
)

export default IndexPage