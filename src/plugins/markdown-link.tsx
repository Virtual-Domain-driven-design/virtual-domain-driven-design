import React, { FC } from "react"

import { Link as GatsbyLink } from "gatsby"

// Checks against absolute URLs that share 👇 so we can still pass it along to Gatsby's internal link component

const domainRegex = /http[s]*:\/\/[www.]*virtualddd\.com[/]?/

// @NOTE We can use a REGEX like this for URLs we want to be treated as external which could be used for Netlify redirects

// /http[s]*:\/\/[www.]*YOURDOMAIN\.com(?!\/i-am-external|\/me-too)[/]?/

interface MarkdownLinkProps {
  location: { pathname: string }
  href: string
}

const MarkdownLink: FC<MarkdownLinkProps> = ({ location, href, ...rest }) => {
  if (!href.endsWith(".pdf")) {
    const sameDomain = domainRegex.test(href)

    if (sameDomain) {
      href = href.replace(domainRegex, "/")
    }

    if (!(href.includes("/") || href.includes("#"))) {
      return (
        <GatsbyLink
          data-link-internal
          to={location.pathname + "/" + href}
          {...rest}
        />
      )
    }

    if (href.startsWith("/")) {
      console.log(href)
      return (
        <GatsbyLink
          data-link-internal
          to={location.pathname + "/" + href}
          {...rest}
        />
      )
    }

    // Treat urls that aren't web protocols as "normal" links

    if (!href.startsWith("http")) {
      return <a href={href} {...rest} /> // eslint-disable-line jsx-a11y/anchor-has-content
    }
  }

  return (
    <a
      data-link-external
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    />
  )
}

export default MarkdownLink
