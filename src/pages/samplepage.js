import * as React from "react"
import { useRef } from "react"
import { useTriggerTransition } from "gatsby-plugin-transition-link/hooks/useTriggerTransition"
import { swipe } from '../components/Common/swipe'
import Layout from "../components/layout"
import { Link } from "gatsby"
import gsap from 'gsap'

const SamplePage = props => {
  const direction = props.direction || 'down'
  const top = props.top || 'exit'
  const entryOffset = 40
  const exitLength = props.duration || 5
  const entryLength = exitLength / 3.5
  const entryZ = top === 'entry' ? 1 : 0
  const exitZ = top === 'exit' ? 1 : 0
  
  const swipeTransition = useTriggerTransition({
    to: `/`,
    exit: {
      length: exitLength,
      trigger: ({ node, exit }) =>
        swipe({ node, exit, direction: direction, top, entryOffset, triggerName: 'exit' }),
        zIndex: 1
    },
    entry: {
      length: entryLength,
      trigger: ({ node, exit }) =>
        swipe({ node, exit, direction: direction, top, entryOffset, triggerName: 'entry' }),
        zIndex: 0
    }
  })
  const testGsap = () => {
    gsap.timeline()
    .set(testRef.current, {rotation: 0})
    .to(testRef.current, {rotation: 360})
  }

  const testRef = useRef();

  return (
    <Layout>
      <h1>Gatsby supports TypeScript by default!</h1>
      <button onClick={swipeTransition}>Go Back to Homepage with click event</button>
      <br /><br />
      <button onClick={testGsap}>Rotate</button>
      <br /><br />
      <div ref={testRef} style={{width:100, height:100, backgroundColor:"#FF0000"}}></div>
      <Link to="/">Go back to the homepage the boring way 👎</Link>
    </Layout>
  )
}

export default SamplePage