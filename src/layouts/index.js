import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import Transition from '../components/transition'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }`}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
        <h1>Is this fixed?</h1>
        <Transition location = {location}>
          {children}
        </Transition>
        </div>
      </>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout