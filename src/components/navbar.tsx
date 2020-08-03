import React, { ReactElement, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

interface Props {}

const VDDDLogo = ({ data }) => {
  return (
    <Link
      to="/"
      className="p-4 cursor-pointer flex-shrink-0 flex items-center justify-center rounded-lg hover:bg-gray-400"
    >
      <Img
        fixed={data.vdddLogoTp.childImageSharp.fixed}
        className="object-contain mr-2 h-8"
      />
    </Link>
  )
}

const SocialMenu = ({ data }) => {
  const [isSocialOpen, setSocialOpen] = useState(false)
  return (
    <button
      onClick={() => {
        setSocialOpen(isSocialOpen => !isSocialOpen)
      }}
      className="reveal-menu-content px-2 py-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 text-blue-600 focus:outline-none"
    >
      Social
      <div className="menu-content">
        <a
          className="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
          href="https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
          target="_blank"
        >
          Meetup
        </a>
        <a
          className="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
          href="https://j.mp/ddd-es-cqrs"
          target="_blank"
        >
          <Img
            fixed={data.slackLogo.childImageSharp.fixed}
            className="mr-2 h-8"
          />
          Slack
        </a>
        <a
          className="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
          href="https://twitter.com/VirtualDDD"
          target="_blank"
        >
          <Img
            fixed={data.twitterLogo.childImageSharp.fixed}
            className="mr-2 h-8"
          />
          twitter
        </a>
      </div>
    </button>
  )
}

const DesktopNavigationItem = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="reveal-menu-content px-2 py-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 text-blue-600 focus:outline-none"
    >
      {label}
    </Link>
  )
}

const MobileNavigationItem = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="w-full p-4 text-lg leading-tight cursor-pointer flex-shrink-0 hover:bg-gray-400 hover:text-blue-700"
    >
      {label}
    </Link>
  )
}

const NavbarMobile = ({ data }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const visibility = () => {
    if (isMenuOpen) {
      return "block bg-white w-full z-25 shadow-md"
    }
    return "hidden bg-white w-full z-25 shadow-md"
  }
  return (
    <div className="lg:hidden">
      <div className="w-full flex flex-row items-center justify-between shadow-md">
        <VDDDLogo data={data}></VDDDLogo>
        <button
          className="reveal-menu-content flex-shrink-0 flex items-center m-4 px-3 py-2 border rounded border-white hover:text-blue-400 hover:border-blue-400"
          onClick={() => {
            setMenuOpen(isMenuOpen => !isMenuOpen)
          }}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      <div className={visibility()}>
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-end">
          <MobileNavigationItem
            to="/sessions"
            label="Sessions"
          ></MobileNavigationItem>
        </div>
      </div>
    </div>
  )
}

const NavbarDesktop = ({ data }) => {
  return (
    <div className="w-4/5 xl:w-2/3 flex items-center justify-between">
      <VDDDLogo data={data}></VDDDLogo>
      <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-end">
        <DesktopNavigationItem
          to="/sessions"
          label="Sessions"
        ></DesktopNavigationItem>
        <SocialMenu data={data}></SocialMenu>
      </div>
    </div>
  )
}

const NavBar = ({}: Props): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      vdddLogoTp: file(relativePath: { eq: "logo/vddd_logo_tp.png" }) {
        childImageSharp {
          fixed(height: 32, width: 135) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      slackLogo: file(relativePath: { eq: "logo/slack_icon.png" }) {
        childImageSharp {
          fixed(height: 24, width: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitterLogo: file(relativePath: { eq: "logo/twitter.png" }) {
        childImageSharp {
          fixed(height: 24, width: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="navbar">
      <NavbarMobile data={data}></NavbarMobile>
      <div className="hidden lg:flex flex-row items-center justify-center">
        <NavbarDesktop data={data}></NavbarDesktop>
      </div>
    </div>
  )
}

export default NavBar
