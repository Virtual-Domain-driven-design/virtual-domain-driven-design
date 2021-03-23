const allMdx = require("./allMdx.json")
const markdownLinks = require("./markdown-links")

const upcoming = {
  id: "66",
  title: "[Live coding] Legacy live coding with Dr. Carola Lilienthal",
  date: "23th March, 2021",
  time: "18:00 CET",
  description: "In this hands-on session we will us a small legacy example that contains all the monstrosities that we find in legacy today. We will use DDD to analyze and refactor problems such as: large entities that are used all over the system and how we could divide them into smaller entities that live in different bounded contexts, the lack of value objects and what kind of value object could be introduced, and an anemic domain model and how we can improve it towards a rich domain model. In this session you will tackle a messy piece of Java code. Please be there with a running IDE for Java and download Step 1 of the example beforehand from https://github.com/lilienth/ddd-banking-example.",
  level: "intermediate",
  tags: [
    "legacy",
    "refactoring",
    "anemic domain model",
    "java",
  ],
  video: "https://www.youtube.com/embed/Ut3H8oh892A",
  links: [
    {
      label: "RSVP on meetup",
      url: "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/276866052/",
    },
    {
      label: "Join in on Zoom",
      url: "https://us02web.zoom.us/j/84469944613",
    },
  ],
  img: {
    publicURL: "/static/e751719444725da59483e4b6d6b48071/session-66.jpeg",
    childImageSharp: {
      fluid: {
        "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAMBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAba3jFdjI0RLQY//xAAaEAACAwEBAAAAAAAAAAAAAAABAgAQEhEi/9oACAEBAAEFAmis2hwxlgX1msiv/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRAAAgMBAAAAAAAAAAAAAAAAACEBECAx/9oACAEBAAY/AkOKXR5//8QAGhABAQEAAwEAAAAAAAAAAAAAAREAITFBkf/aAAgBAQABPyGy81CwzOkTm6AULqRUGRde6ANcW9+6yBv/2gAMAwEAAgADAAAAEOgoPf/EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/ECP/xAAXEQADAQAAAAAAAAAAAAAAAAABEBEh/9oACAECAQE/EMipX//EABsQAQADAQEBAQAAAAAAAAAAAAEAESExQVFh/9oACAEBAAE/ENlFUlLeZ+FXD7oizSi2vHsGMzchNjifE+M2PCgcA7zzsAFrR6wSl/CWSiXtrZY8Aez/2Q==",
        "aspectRatio": 1,
        "src": "/static/e751719444725da59483e4b6d6b48071/0f008/session-66.jpg",
        "srcSet": "/static/e751719444725da59483e4b6d6b48071/f836f/session-66.jpg 200w,\n/static/e751719444725da59483e4b6d6b48071/2244e/session-66.jpg 400w,\n/static/e751719444725da59483e4b6d6b48071/0f008/session-66.jpg 499w",
        "sizes": "(max-width: 499px) 100vw, 499px",
      },
    },
  },
}

const defaultUpcoming = {
  id: "none",
  title: "-",
  date: "-",
  time: "-",
  description: "-",
  level: ["uncategorized"],
  tags: ["uncategorized"],
  video: "-",
  links: [],
  img: {
    publicURL: "/static/91fc43e9698ab8fd654ac4531bad3969/kandddinsky.jpg",
    childImageSharp: {
      fluid: {
        "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABFV3FC6I//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECIQMQEv/aAAgBAQABBQKCeMci2ONca//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAMBAQAAAAAAAAAAAAAAAAAQIVFh/9oACAEBAAY/AqdWqn//xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhQVH/2gAIAQEAAT8hLR8vNPPRXuE+h9dPjMEpF3//2gAMAwEAAgADAAAAEJwf/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8QR//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/EKr/xAAcEAEBAAMAAwEAAAAAAAAAAAABEQAhMUFhcVH/2gAIAQEAAT8QEao1WM7LiFjEaOvrWHX+iEhlAUWrR+5s+g9P7jwEHp5z/9k=",
        "aspectRatio": 1.4814814814814814,
        src: "/static/91fc43e9698ab8fd654ac4531bad3969/14b42/kandddinsky.jpg",
        srcSet: "/static/91fc43e9698ab8fd654ac4531bad3969/f836f/kandddinsky.jpg 200w,\n/static/91fc43e9698ab8fd654ac4531bad3969/2244e/kandddinsky.jpg 400w,\n/static/91fc43e9698ab8fd654ac4531bad3969/14b42/kandddinsky.jpg 800w,\n/static/91fc43e9698ab8fd654ac4531bad3969/cf18d/kandddinsky.jpg 1186w",
        sizes: "(max-width: 800px) 100vw, 800px",
      },
    },
  },
}

const heuristicMdxNode = {
  id: "a968a5ee-d1ff-5821-aff9-bd7284921428",
  fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/src/content/heuristics/design-heuristics/eventstorming-dont-fill-in-the-gaps.md",
  frontmatter: {
    title: "EventStorming: Don't fill in the gaps",
  },
  slug: "heuristics/design-heuristics/eventstorming-dont-fill-in-the-gaps",
}

const readmeMdxNodes = [{
  id: "0120c7eb-b769-5f70-b487-5340c0a1b717",
  fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/.cache/gatsby-source-git/github-repo-ddd-crew-welcome-to-ddd/README.md",
  frontmatter: {
    "title": "",
  },
  slug: "README",
},
  {
    id: "b2a05e2d-7dfe-5816-b603-cf3a900a8932",
    fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/.cache/gatsby-source-git/github-repo-saturn2019-architecture-island-workshop/outcomes/README.md",
    frontmatter: {
      "title": "",
    },
    slug: "outcomes/README",
  }]

const nonRootMdxNode =
  {
    id: "52adaef0-a54c-506c-9168-22fd6a9bedd5",
    fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/.cache/gatsby-source-git/github-repo-ddd-crew-bounded-context-canvas/tools/html-version/instructions.md",
    frontmatter: {
      "title": "",
    },
    slug: "tools/html-version/instructions",
  }


const licenceMdxNode = {
  id: "1caf20b2-6b7a-5a59-b32f-ba8f0e4fef32",
  fileAbsolutePath: "/home/christina/sourceCode/github/Virtual-Domain-driven-design/virtual-domain-driven-design/.cache/gatsby-source-git/github-repo-ddd-crew-welcome-to-ddd/LICENCE.md",
  frontmatter: {
    "title": "",
  },
  slug: "LICENCE",
}

module.exports = {
  defaultUpcoming,
  upcoming,
  allMdx,
  readmeMdxNodes,
  licenceMdxNode,
  nonRootMdxNode,
  heuristicMdxNode,
  ...markdownLinks
}
