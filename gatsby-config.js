module.exports = {
  siteMetadata: {
    title: `Virtual Domain-Driven Design`,
    titleTemplate: "%s - A community of practise",
    description: `Learn, explore and collaborate with the Domain-Driven Design community`,
    url: "https://virtualddd.com",
    twitterUsername: "@virtualddd",
    image: "/images/kandddsinky.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-remark-images`,
    `gatsby-transformer-yaml`,
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
        name: `ddd-crew-starter-modelling`,
        remote: `https://github.com/ddd-crew/ddd-starter-modelling-process.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `ddd-crew-eventstorming-glossary-cheat-sheet`,
        remote: `https://github.com/ddd-crew/eventstorming-glossary-cheat-sheet.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `ddd-crew-context-mapping`,
        remote: `https://github.com/ddd-crew/context-mapping.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `ddd-crew-core-domain-charts`,
        remote: `https://github.com/ddd-crew/core-domain-charts.git`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `ddd-crew-bounded-context-canvas`,
        remote: `https://github.com/ddd-crew/bounded-context-canvas.git`,
      },
    },
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
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/index.css"],
      },
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
