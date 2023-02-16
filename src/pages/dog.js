/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';

const Dog = () => (
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
  <div>
    <h1>ruff</h1>
    <div>
      <Link to="/">Go to home</Link>
    </div>
    <div>
      <Link to="/cat/">Go to cat</Link>
    </div>
    <div>
      <Link to="/long-page/">Go to long page</Link>
    </div>
  </div>
  </PageTransition>
)

export default Dog