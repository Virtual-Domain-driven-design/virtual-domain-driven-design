import { Link } from "gatsby"
import React, { FC } from "react"
import "twin.macro"

const Footer: FC = () => {
  return (
    <div tw="bg-white flex flex-col items-center justify-center p-4  text-center">
      <div>Copyright © Virtual Domain-Driven Design</div>
      <div>Developed by Kenny Baas-Schwegler &amp; Marco Heimeshoff </div>
      <Link to="/code-of-conduct" className="link p-2">
        Code of conduct
      </Link>
    </div>
  )
}

export default Footer
