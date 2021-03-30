import React, { FC } from "react"

import { Link as GatsbyLink } from "gatsby"

// Checks against absolute URLs that share 👇 so we can still pass it along to Gatsby's internal link component

const domainRegex = /(http[s]*:\/\/((www\.)*virtualddd\.com|localhost:\d{4})[/])+?/i

// @NOTE We can use a REGEX like this for URLs we want to be treated as external which could be used for Netlify redirects

// /http[s]*:\/\/[www.]*YOURDOMAIN\.com(?!\/i-am-external|\/me-too)[/]?/

type MarkdownLinkProps = {
  location: {
    pathname: string
    href: string
  }
  href: string
}

const handleCallsOnSameDomain = (href: string) =>
  domainRegex.test(href) ? href.replace(domainRegex, "/") : href

const filesToIgnore = [
  ".jpg",
  ".png",
  ".jpeg",
  ".svg",
  ".rtb",
  ".drawio",
  ".pdf",
]

const linkRemainsUnchanged = (hrefLowerCase: string) =>
  !!filesToIgnore.find((e) => hrefLowerCase.endsWith(e))

const removeTrailingSlash = (pathname: string) =>
  pathname.endsWith("/") ? pathname.slice(0, -1) : pathname

const GithubLink: FC<MarkdownLinkProps> = ({ location, href, ...rest }) => {
  const defaultLink = (
    <a
      data-link-external
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    />
  )

  if (linkRemainsUnchanged(href.toLowerCase())) return defaultLink

  const workingHref = handleCallsOnSameDomain(href)
  if (workingHref.startsWith("http")) return defaultLink
  // this works for relative paths
  if (
    domainRegex.test(location.href) &&
    !href.startsWith("/") &&
    !href.startsWith("#")
  ) {
    return (
      <GatsbyLink
        data-link-internal
        to={removeTrailingSlash(location.pathname) + "/" + workingHref}
        {...rest}
      />
    )
  }
  if (workingHref.startsWith("/"))
    return (
      <GatsbyLink
        data-link-internal
        to={removeTrailingSlash(location.pathname) + workingHref}
        {...rest}
      />
    )

  // Treat urls that aren't web protocols as "normal" links

  if (!workingHref.startsWith("http")) return <a href={workingHref} {...rest} />

  return defaultLink
}

export default GithubLink
