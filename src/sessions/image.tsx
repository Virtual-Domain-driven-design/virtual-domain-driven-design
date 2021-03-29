import { graphql } from "gatsby"

export const upcomingImage = graphql`
  fragment upcomingImage on ContentYamlUpcomingSessions {
    img {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const sessionImage = graphql`
  fragment sessionImage on ContentYamlSessions {
    img {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
