import React from "react"
import GlobalContextProvider from "../components/GlobalContext"

const Layout = ({ children }) => {
  return (
    <GlobalContextProvider>
      {/*Header*/}
      {children}
      {/*Footer*/}
    </GlobalContextProvider>
  )
}

export default Layout