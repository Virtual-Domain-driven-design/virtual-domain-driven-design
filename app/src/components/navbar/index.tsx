import { Link } from "gatsby"
import React, { useState } from "react"
import tw from "twin.macro"
import "styled-components/macro"
import {
  VdddLogo,
  DiscordLogo,
  MastodonLogo,
  TwitterLogo,
  NetlifyLogo,
  GithubLogo,
} from "../logos"
// @ts-ignore
import MeetupSvg from "../../images/logo/meetup.svg"

// TODO: NEEDS MAJOR REFACTORING AND DYNAMIC CONFIG, this is UGLY but it works =). The problem is that extracted components need extra effort for styling
// TODO move the social links and the contributions to separate files

const VDDDLink = () => {
  return (<Link
      to="/"
      tw="p-4 cursor-pointer flex-shrink-0 flex items-center justify-center rounded-lg hover:bg-gray-400"
    >
      <VdddLogo />
    </Link>
  )
}

const SocialSubItems = () => {
  return (
    <div>
      <a
        tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
        href="https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MeetupSvg tw="mr-2 h-8" />
      </a>
      <a
        tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center lg:justify-center"
        href="https://discord.gg/QtKQ2McGdU"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DiscordLogo />
        <div tw="pl-1">Discord</div>
      </a>
      <a
        tw="p-4 text-sm leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center lg:justify-center"
        href="https://techhub.social/@virtualddd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MastodonLogo />
        <div tw="pl-1">Mastodon</div>
      </a>
      <a
        tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center lg:justify-center"
        href="https://twitter.com/VirtualDDD"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterLogo />
        <div tw="pl-1">Twitter</div>
      </a>
    </div>
  )
}
const SocialMenu = () => {
  return (
    <button
      className="group"
      tw="relative px-2 py-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 text-blue-600 focus:outline-none"
    >
      Socials
      <div tw="absolute top-0 right-0 mt-14 w-32 bg-white rounded shadow-lg z-30 hidden group-hover:block">
        <SocialSubItems />
      </div>
    </button>
  )
}
const SocialMobileMenu = () => {
  return (
    <div tw="relative border-t border-gray-400 w-full">
      <div tw="absolute top-0 right-0 text-gray-500 pt-2 pr-4">Socials</div>
      <SocialSubItems />
    </div>
  )
}

const ContributionSubItems = () => {
  return (
    <div>
      <a
        tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
        href="https://github.com/Virtual-Domain-driven-design/virtual-domain-driven-design"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogo />
        <div tw="pl-1">Github</div>
      </a>
      <a
        tw="p-4 text-sm leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center lg:justify-center"
        href="https://virtualddd.com/admin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NetlifyLogo />
        Netlify CMS
      </a>
    </div>
  )
}
const ContributionMenu = () => {
  return (
    <button
      className="group"
      tw="relative px-2 py-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 text-blue-600 focus:outline-none"
    >
      Contribute
      <div tw="absolute top-0 right-0 mt-14 w-32 bg-white rounded shadow-lg z-30 hidden group-hover:block">
        <ContributionSubItems />
      </div>
    </button>
  )
}
const ContributionMobileMenu = () => {
  return (
    <div tw="relative border-t border-gray-400 w-full">
      <div tw="absolute top-0 right-0 text-gray-500 pt-2 pr-4">Contribute</div>
      <ContributionSubItems />
    </div>
  )
}

interface NavigationData {
  to: string
  label: string
  forDesktop: boolean
}

const NavigationItem = ({ to, label, forDesktop }: NavigationData) => {
  return forDesktop ? (<Link
      to={to}
      tw="relative px-2 py-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 text-blue-600 focus:outline-none"
    >
      {label}
    </Link>
  ) : (<Link
      to={to}
      tw="w-full p-4 text-lg leading-tight cursor-pointer flex-shrink-0 hover:bg-gray-400 hover:text-blue-700"
    >
      {label}
    </Link>
  )
}

const NavbarMobile = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const forDesktop = false
  return (
    <div tw="lg:hidden">
      <div tw="w-full flex flex-row items-center justify-between shadow-md">
        <VDDDLink />
        <button
          tw="relative flex-shrink-0 flex items-center m-4 px-3 py-2 border rounded border-white hover:text-blue-400 hover:border-blue-400"
          onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
        >
          <svg
            tw="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        tw="block bg-white w-full z-30 shadow-md"
        css={!isMenuOpen ? tw`invisible h-5` : tw`h-auto`}
      >
        <div tw="flex flex-col lg:flex-row items-start lg:items-stretch justify-end">
          <NavigationItem
            to="/sessions"
            label="Sessions"
            forDesktop={forDesktop}
          />
          <NavigationItem
            to="/learning-ddd"
            label="Learning DDD"
            forDesktop={forDesktop}
          />
          <a
            tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
            href="https://feedback.userreport.com/a15e4e61-2323-40a1-90b4-1267e010e35c/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Propose & Vote!
          </a>
          <a
            tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
            href="https://dddheuristics.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heuristics
          </a>
          <SocialMobileMenu />
          <ContributionMobileMenu />
        </div>
      </div>
    </div>
  )
}

const NavbarDesktop = () => {
  const forDesktop = true
  return (
    <div tw="w-4/5 xl:w-2/3 flex items-center justify-between">
      <VDDDLink />
      <div tw="flex flex-col lg:flex-row items-start lg:items-stretch justify-end">
        <NavigationItem
          to="/sessions"
          label="Sessions"
          forDesktop={forDesktop}
        />
        <NavigationItem
          to="/learning-ddd"
          label="Learning DDD"
          forDesktop={forDesktop}
        />
        <a
          tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
          href="https://feedback.userreport.com/a15e4e61-2323-40a1-90b4-1267e010e35c/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Propose & Vote!
        </a>
        <a
          tw="p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
          href="https://dddheuristics.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heuristics
        </a>
        <SocialMenu />
        <ContributionMenu />
      </div>
    </div>
  )
}

const NavBar = () => {
  return (
    <div tw="bg-white shadow-md text-blue-600 h-16 sticky top-0 inset-x-0 z-50">
      <NavbarMobile />
      <div tw="hidden lg:flex flex-row items-center justify-center">
        <NavbarDesktop />
      </div>
    </div>
  )
}

export default NavBar
