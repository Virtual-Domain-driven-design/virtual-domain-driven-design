const exampleAnchor = {
  href: "#how-to-use",
  location: {
    pathname: "/learning-ddd/ddd-crew-core-domain-charts",
    href: "http://localhost:8000/learning-ddd/ddd-crew-core-domain-charts",
    origin: "http://localhost:8000",
  },
  rest: {
    "aria-label": "how to use permalink",
    className: "header-link-icon after",
  },
}

//Expect href: https://github.com/emgsilva, data-link-external
const exampleLinkPerson = {
  href: "@emgsilva",
  location: {
    pathname: "/learning-ddd/ddd-crew-core-domain-charts",
    href: "http://localhost:8000/learning-ddd/ddd-crew-core-domain-charts",
    origin: "http://localhost:8000",
  },
  rest: {
    children: "Eduardo da Silva",
  },
}

const exampleStatic = {
  href:
    "/static/67812f25072873039b0b8298f263cf04/9f108/core-domain-chart-template.jpg",
  location: {
    host: "localhost:8000",
    hostname: "localhost",
    href: "http://localhost:8000/learning-ddd/ddd-crew-core-domain-charts",
    key: "1616511070373",
    origin: "http://localhost:8000",
    pathname: "/learning-ddd/ddd-crew-core-domain-charts",
    port: "8000",
    protocol: "http:",
    search: "",
  },
  rest: {
    className: "gatsby-resp-image-link",
    rel: "noopener",
  },
}
const exampleExternalLink = {
  href:
    "https://medium.com/nick-tune-tech-strategy-blog/core-domain-patterns-941f89446af5",
  location: {
    host: "localhost:8000",
    hostname: "localhost",
    href: "http://localhost:8000/learning-ddd/ddd-crew-core-domain-charts",
    key: "1616511070373",
    origin: "http://localhost:8000",
    pathname: "/learning-ddd/ddd-crew-core-domain-charts",
    port: "8000",
    protocol: "http:",
    search: "",
  },
  rest: {
    children: "Core Domain Patterns",
  },
}

const exampleInternalLink = {
  href: "tools/html-version/instructions.md",
  location: {
    host: "localhost:8000",
    hostname: "localhost",
    href: "http://localhost:8000/learning-ddd/ddd-crew-bounded-context-canvas/",
    key: "initial",
    origin: "http://localhost:8000",
    pathname: "/learning-ddd/ddd-crew-bounded-context-canvas/",
    protocol: "http",
    port: "8000",
  },
}

const exampleMiroBackupFile = {
  href: "/cf06b31273a7a77e83422dcf4ab9366e/aggregate-design-canvas-v1.rtb",
  location: {
    host: "localhost:8000",
    hostname: "localhost",
    href: "http://localhost:8000/learning-ddd/ddd-crew-aggregate-design-canvas",
    key: "initial",
    origin: "http://localhost:8000",
    pathname: "/learning-ddd/ddd-crew-aggregate-design-canvas",
    protocol: "http",
    port: "8000",
  },
}

module.exports = {
  exampleAnchor,
  exampleExternalLink,
  exampleStatic,
  exampleMiroBackupFile,
  exampleInternalLink,
}
