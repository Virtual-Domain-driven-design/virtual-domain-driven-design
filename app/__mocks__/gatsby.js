const React = require("react")
const gatsby = require("gatsby-plugin-testing/__mocks__/gatsby")

module.exports = {
  ...gatsby,
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      css,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
}
