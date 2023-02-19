import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// We need again our GlobalContext
import { GlobalContext } from "../components/GlobalContext"

const ThirdPage = () => {
  //And we have to use the Global Context the exact same way.
  const { openMenu } = React.useContext(GlobalContext)
  return (
    <Layout>
      <p>Welcome to page 2</p>
      <p>The menu state is currently {openMenu ? `true` : `false`}.</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ThirdPage