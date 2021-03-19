// @ts-nocheck

const stringListResolver = (fieldName) => (source) =>
  !source[fieldName] || (Array.isArray(source[fieldName]) && !source[fieldName][0]) ?
    ["uncategorized"] :
    source[fieldName]

const stringResolver = (fieldName) => (source) => !source[fieldName] ? "-" : source[fieldName]

const sessionLinkFields = () => ({
  label: {
    type: "String!",
    resolve: stringResolver("label"),
  },
  url: {
    type: "String!",
    resolve: stringResolver("url"),
  },
})

const upcomingSessionFields = () => ({
  id: {
    type: "String!",
    resolve: stringResolver("id"),
  },
  title: {
    type: "String!",
    resolve: stringResolver("title"),
  },
  date: {
    type: "String!",
    resolve: stringResolver("date"),
  },
  time: {
    type: "String!",
    resolve: stringResolver("time"),
  },
  video: {
    type: "String!",
    resolve: stringResolver("video"),
  },
  tags: {
    type: "[String!]",
    resolve: stringListResolver("tags"),
  },
  level: {
    type: "String!",
    resolve: stringResolver("level"),
  },
  description: {
    type: "String!",
    resolve: stringResolver("description"),
  },
  links: {
    type: "[ContentYamlUpcomingSessionsLinks]",
    resolve: source => !source.links ? [] : source.links,
  },
})

function getTypeDefs(schema) {
  return [
    "type ContentYamlUpcomingSessions implements Node",
    schema.buildObjectType({
      name: "ContentYamlUpcomingSessions",
      fields: upcomingSessionFields(),
    }),
    "type ContentYamlUpcomingSessionsLinks",
    schema.buildObjectType({
      name: "ContentYamlUpcomingSessionsLinks",
      fields: sessionLinkFields(),
    }),
  ]
}

module.exports = {
  getTypeDefs
}
