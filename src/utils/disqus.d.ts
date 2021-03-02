declare module "gatsby-plugin-disqus" {
  import { FC } from "react"

  interface DisqusProps {
    config: {
      identifier: String
      title: string
      url: string
    }
  }
  const Disqus: FC<DisqusProps>
}
