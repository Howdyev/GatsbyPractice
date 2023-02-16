import React, { useContext } from "react"
import { Link } from "gatsby"

// Lets import our GlobalContext
import { GlobalContext } from "../components/GlobalContext"

const IndexPage = () => {
  // We interpret our current context with useContext
  // and get our "openMenu" state and our "setOpenMenu" function from it.
  const { openMenu, setOpenMenu } = useContext(GlobalContext)

  return (
    <>
      <button
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
      >
        Toggle Menu State
      </button>
      <p>The menu state is currently {openMenu ? `true` : `false`}.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </>
  )
}

export default IndexPage