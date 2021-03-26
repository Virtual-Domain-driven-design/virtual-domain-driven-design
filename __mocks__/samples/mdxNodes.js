const allMdx = require("./allMdx.json")

const readmeMdxNodes = [{
  node: {
    id: "0120c7eb-b769-5f70-b487-5340c0a1b717",
    fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/.cache/gatsby-source-git/github-repo-ddd-crew-welcome-to-ddd/README.md",
    frontmatter: {
      "title": "",
    },
    slug: "README",
  },
}, {
    node: {
      id: "b2a05e2d-7dfe-5816-b603-cf3a900a8932",
      fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/.cache/gatsby-source-git/github-repo-saturn2019-architecture-island-workshop/outcomes/README.md",
      frontmatter: {
        "title": "",
      },
      slug: "outcomes/README",
    },
  }]

const nonRootMdxNode = [{
  node:
    {
      id: "52adaef0-a54c-506c-9168-22fd6a9bedd5",
      fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/.cache/gatsby-source-git/github-repo-ddd-crew-bounded-context-canvas/tools/html-version/instructions.md",
      frontmatter: {
        "title": "",
      },
      slug: "tools/html-version/instructions",
    },
}]

const deepResourceNode = [
  {
    node: {
      id: "c9456f4e-80ef-583a-984f-8fd3c703cb15",
      fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/.cache/gatsby-source-git/github-repo-ddd-crew-bounded-context-canvas/resources/model-traits-worksheet-FR.md",
      frontmatter: {
        "title": ""
      },
      slug: "resources/model-traits-worksheet-FR"
    }
  }
]

const licenceMdxNode = [{
  node: {
    id: "1caf20b2-6b7a-5a59-b32f-ba8f0e4fef32",
    fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/.cache/gatsby-source-git/github-repo-ddd-crew-welcome-to-ddd/LICENCE.md",
    frontmatter: {
      "title": "",
    },
    slug: "LICENCE",
  },
}]

const heuristicMdxNode = [{
  node: {
    id: "a968a5ee-d1ff-5821-aff9-bd7284921428",
    fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/src/content/heuristics/design-heuristics/eventstorming-dont-fill-in-the-gaps.md",
    frontmatter: {
      title: "EventStorming: Don't fill in the gaps",
    },
    slug: "heuristics/design-heuristics/eventstorming-dont-fill-in-the-gaps",
  },
}]

module.exports = {
  allMdx,
  licenceMdxNode,
  nonRootMdxNode,
  deepResourceNode,
  readmeMdxNodes,
  heuristicMdxNode,
}
