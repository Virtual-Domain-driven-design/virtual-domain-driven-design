module.exports = {
  siteMetadata: {
    siteUrl: `https://virtualddd.com`,
    title: `Virtual Domain-Driven Design`,
    titleTemplate: "%s - A community of practise",
    description: `Learn, explore and collaborate with the Domain-Driven Design community`,
    url: "https://virtualddd.com",
    twitterUsername: "@virtualddd",
    image: "/kandddinsky.jpg",
    defaultKeywords:
      "Domain-Driven Design, Domain Driven Design, Behaviour-Driven Development, Software Architecture, Socio-technical, Sociotechnical, Socio-technical architecture, Sociotechnical architecture, Microservices, cqrs/es, evenstorming, event storming, strategic design, organisational design",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vddd-site`,
        short_name: `V-DDD`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: `./static/favicon.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages/learning-ddd`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve(`./src/templates/page-layout.tsx`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `header-link-icon`,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: true,
              maxWidth: 1000,
              wrapperStyle: (result) => `width: 100%;margin-left: 0;`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [
                `md`,
                `mdx`,
                `png`,
                `jpg`,
                `jpeg`,
                `bmp`,
                `tiff`,
              ],
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-ddd-crew-welcome-to-ddd`,
        remote: `https://github.com/ddd-crew/welcome-to-ddd.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-ddd-crew-starter-modelling`,
        remote: `https://github.com/ddd-crew/ddd-starter-modelling-process.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-saturn2019-architecture-island-workshop`,
        remote: `https://github.com/michaelkeeling/saturn2019-architecture-island-workshop.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-ddd-crew-eventstorming-glossary-cheat-sheet`,
        remote: `https://github.com/ddd-crew/eventstorming-glossary-cheat-sheet.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-ddd-crew-context-mapping`,
        remote: `https://github.com/ddd-crew/context-mapping.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-ddd-crew-core-domain-charts`,
        remote: `https://github.com/ddd-crew/core-domain-charts.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-ddd-crew-bounded-context-canvas`,
        remote: `https://github.com/ddd-crew/bounded-context-canvas.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-ddd-crew-virtual-modelling-template`,
        remote: `https://github.com/ddd-crew/virtual-modelling-templates.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-ddd-crew-aggregate-design-canvas`,
        remote: `https://github.com/ddd-crew/aggregate-design-canvas.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-ddd-crew-domain-message-flow-modelling`,
        remote: `https://github.com/ddd-crew/domain-message-flow-modelling.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-sociotechnical-architecture`,
        remote: `https://github.com/matthewskelton/sociotechnical-architecture`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-awesome-ddd`,
        remote: `https://github.com/heynickc/awesome-ddd`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `github-repo-awesome-eventstorming`,
        remote: `https://github.com/mariuszgil/awesome-eventstorming`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop", "build-javascript"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/learning-ddd/`, `/learning-ddd/*`],
    //   },
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-testing`,
  ],
}
