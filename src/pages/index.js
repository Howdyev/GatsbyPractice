import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div>
     <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/dog/">Go to my dog</Link> <br />
  </div>
)
export default IndexPage