import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { useLocation } from "@reach/router"

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        defaultKeywords
      }
    }
  }
`
interface SeoContent {
  site: {
    siteMetadata: {
      defaultTitle: string
      titleTemplate: string
      defaultDescription: string
      siteUrl: string
      defaultImage: string
      twitterUsername: string
      defaultKeywords: string
    }
  }
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  article?: boolean
  keywords?: string
}

const SEO = ({ title, description, image, article, keywords }: SEOProps) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery<SeoContent>(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    defaultKeywords,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    keywords: keywords || defaultKeywords,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO
