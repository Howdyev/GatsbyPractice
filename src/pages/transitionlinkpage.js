import * as React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from 'gatsby-plugin-transition-link'
import { StaticImage } from "gatsby-plugin-image"
import {swipe} from "../components/Common/swipe"
import gsap from 'gsap'
import Layout from "../components/layout"

const TransitionLinkPage = props => {
    const direction = props.direction || 'right'
    const top = props.top || 'exit'
    const entryOffset = 40
    const exitLength = props.duration || 0.7
    const entryLength = exitLength / 3.5
    const entryZ = top === 'entry' ? 1 : 0
    const exitZ = top === 'exit' ? 1 : 0
  const mytriggerStart = () => {
    console.log("hello world")
  }
  const mytriggerEndStart = () => {
    console.log("hello world")
  }
    return (
      <Layout>
        <TransitionLink
          entry={{
            length: entryLength,
            trigger: ({ node, exit }) =>
              swipe({ node, exit, direction: 'right', top: 'exit', entryOffset: 40, triggerName: 'entry' }), zIndex: 0 }}
              
          exit={{
            length: exitLength,
            trigger: ({ node, exit }) =>
              swipe({ node, exit, direction: 'right', top: 'exit', entryOffset: 40, triggerName: 'exit' }),
              zIndex: 1
          }}
          to="/">
            Go Back to the homepage in style! 🎉
        </TransitionLink>
        <br /><br />
        <Link to="/">Go back to the homepage the boring way 👎.</Link>
      </Layout>
    )
  }

  export default TransitionLinkPage