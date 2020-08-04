import React, { ReactElement } from "react"
import { Link } from "gatsby"

const Footer = (): ReactElement => {
  return (
    <div className="section footer bg-gray-200">
      <div>Copyright © Virtual Domain-Driven Design</div>
      <div>'Developed by Kenny Baas-Schwegler &amp; Marco Heimeshoff </div>
      <Link to="/code-of-conduct" className="link p-2">
        Code of Conduct
      </Link>
    </div>
  )
}

export default Footer
