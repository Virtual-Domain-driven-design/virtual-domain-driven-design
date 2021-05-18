import React from "react"

import { Link as GatsbyLink } from "gatsby"

export type GithubLinkLocation = {
  host: string
  hostname: string
  href: string
  key: string
  origin?: string
  pathname: string
  port: string
  protocol: string
}

export type MarkdownLinkProps = {
  location: GithubLinkLocation
  href: string
}

// @NOTE We can use a REGEX like this for URLs we want to be treated as external which could be used for Netlify redirects
// /http[s]*:\/\/[www.]*YOURDOMAIN\.com(?!\/i-am-external|\/me-too)[/]?/
// Checks against absolute URLs that share 👇 so we can still pass it along to Gatsby's internal link component
const domainRegex = /(http[s]*:\/\/((www\.|master--)*virtualddd\.(com|netlify.app)|localhost:\d{4})[\/])+?/i

/**
 * Transform the links on the same domain in relative paths
 * @param href
 * Possible values: https://virtualddd.com/learning-ddd
 * preview on https://master--virtualddd.netlify.app/learning-ddd/ddd-crew-bounded-context-canvas
 * local development: http://localhost:8000/learning-ddd/
 */
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

const linkToResource = (hrefLowerCase: string) =>
  filesToIgnore.some((e) => hrefLowerCase.endsWith(e))

const removeTrailingSlash = (pathname: string) =>
  pathname.endsWith("/") ? pathname.slice(0, -1) : pathname

const GithubLink = ({ location, href, ...rest }: MarkdownLinkProps) => {
  const defaultLink = (
    <a
      data-link-external
      href={href.replace("http://", "https://")}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    />
  )

  //Handle external links
  if (linkToResource(href.toLowerCase())) return defaultLink

  const workingHref = handleCallsOnSameDomain(href)
  // fully defined links
  if (workingHref.startsWith("http")) return defaultLink

  // handle github user references
  if (workingHref.startsWith("@"))
    return (
      <a
        data-link-external
        href={workingHref.replace("@", "https://github.com/")}
        target="_blank"
        rel="noopener noreferrer nofollow"
        {...rest}
      />
    )

  // Relative links
  // starting with a /
  if (workingHref.startsWith("/"))
    return (
      <GatsbyLink
        data-link-internal
        to={removeTrailingSlash(location.pathname) + workingHref}
        {...rest}
      />
    )

  // anchors
  if (workingHref.startsWith("#")) return <a href={workingHref} {...rest} />

  // the rest, like "tools/html-version/instructions.md"
  return (
    <GatsbyLink
      data-link-internal
      to={removeTrailingSlash(location.pathname) + "/" + workingHref}
      {...rest}
    />
  )
}

export default GithubLink
