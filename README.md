# Virtual Domain-Driven Design

An online Domain-Driven Design meetup and conference for the community by the community. Help us develop this world wide community further!
We are continuously updating the website and functionality, if you have any ideas or bugs you want to share please feel free to add a ticket!

## Contribute

There are two way to contribute:

- directly through github, creating a fork and create a PR.
- If you don't want all the Forking and PR hassle, all you need is a github account and go to the Netlify CMS on ![the website](https://virtualddd.com/admin).

The CMS now supports the following contribution:

- Communities
- Books

More will be added later!

## Github Contribution

### Communities

The communities on the site are sources from `src/content/communities.yaml`
Fill in your own based on the following template:

```
- name: "Name of your community"
  country: "COuntry of the community"
  city: "(optional) the city the community is in"
  url: "The url to the website of the community"
  img: "An external image for your community"
```

### Books

The books on the site are sources from `src/content/books.yaml`
You must put the image of the book in `src/images/book/` and point to it in the entry img.
Fill in your own based on the following template:

```
- title: "The title of the book"
  author: "The Author of the book"
  img: "location "../images/books/" + image name
  level: "Select one: all, beginner, intermediate or advanced"
  tags: "list of tags free to fill in, examples:"
    - essential
    - collaborative-modelling
```

## Help develop the website

We love community contribution and we build Virtual Domain-Driven Design with Gatsby to make it and flexible and hopefully easy enough so that people can contribute on building the website.
The following Gatsby plugins are already configured, but don't shy away from adding any of your own:

- gatsby-plugin-typescript
- gatsby-plugin-postcss, gatsby-plugin-purgecss with Tailwind
- gatsby-plugin-mdx
- gatsby-plugin-react-svg
- gatsby-plugin-netlify-cms
- gatsby-source-git

Requirements to build:

- Node
- NPM
- Yarn

### Start developing

Fork and check-out the master branch.
Install the Gatsby CLI:

```sh
npm i --global gatsby-cli
```

Then do a Yarn install and Gatbsy develop to get you started

```
yarn
gatsby develop
```

You should be able to go to ![localhost:8000](https://localhost:8000)
