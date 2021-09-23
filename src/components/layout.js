import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"



const Layout = ({ location, title, children }) => {
 
  return (
    <div>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
