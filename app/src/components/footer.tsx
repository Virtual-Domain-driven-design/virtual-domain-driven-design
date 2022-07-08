import { Link } from "gatsby"
import * as React from "react"
import "twin.macro"
import "styled-components/macro"

const Footer = () => {
  return (
    <div tw="bg-white flex flex-col items-center justify-center p-4  text-center">
      <div>Copyright © Virtual Domain-Driven Design</div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Virtual-Domain-driven-design/virtual-domain-driven-design/graphs/contributors"
        >
          Developed by Virtual Domain-Driven Design Community
        </a>
      </div>
      <Link to="/code-of-conduct" className="link p-2">
        Code of conduct
      </Link>
      <a href="https://www.netlify.com">
        <img
          src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </div>
  )
}

export default Footer
