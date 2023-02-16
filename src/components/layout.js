import React from "react"
  
export default function Layout({ children }) {
  return (
    <div>
        <h3>This is the content of the shared layout file.</h3>
        {children}
    </div>
  )
}