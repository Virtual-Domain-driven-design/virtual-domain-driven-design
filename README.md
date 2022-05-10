![banner](app/src/images/logo/vddd_logo_tp.png)

# Virtual Domain-Driven Design

[![Build Status](https://github.com/Virtual-Domain-driven-design/virtual-domain-driven-design/actions/workflows/main.yml/badge.svg)](https://github.com/Virtual-Domain-driven-design/virtual-domain-driven-design/actions/workflows/main.yml)
[![Coverage Status](https://coveralls.io/repos/github/Virtual-Domain-driven-design/virtual-domain-driven-design/badge.svg?branch=master)](https://coveralls.io/github/Virtual-Domain-driven-design/virtual-domain-driven-design?branch=master)

[//]: # ([![Netlify Status]&#40;https://api.netlify.com/api/v1/badges/532e8383-2c1c-4e76-b0fb-9ddeccae725e/deploy-status&#41;]&#40;https://app.netlify.com/sites/virtualddd/deploys&#41;)

An online Domain-Driven Design meetup and conference for the community by the community. Help us develop this worldwide community further!
We are continuously updating the website and functionality, if you have any ideas or bugs you want to share please feel free to add a ticket!

## Contribute

The repository contains tw projects: ./app and ./stories (for storybook tests and playground).

There are two ways to contribute:

- directly through github, creating a fork and create a PR.
- If you don't want all the Forking and PR hassle, all you need is a github account and go to the Netlify CMS on [the website](https://virtualddd.com/admin/).

The CMS now supports the following contribution:

- Communities
- Books
- Videos
- DDD Europe Videos
- KanDDDinsky Videos
- ExploreDDD Videos

More will be added later!

## Code of Conduct

See [Code of Conduct markdown](./app/Code-of-Conduct.md)

## Github Contribution

### Communities

The communities on the site are sources from `app/src/content/communities.yaml`
Fill in your own based on the following template:

```
- name: "Name of your community"
  country: "COuntry of the community"
  city: "(optional) the city the community is in"
  url: "The url to the website of the community"
  img: "An external image for your community"
```

### Books

The books on the site are sources from `app/src/content/books.yaml`
You must put the image of the book in `app/src/images/book/` and point to it in the entry img.
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

### Videos

The videos on the site are sources from `app/src/content/videos.yaml` except for DDD Europe `app/src/content/dddeu.yaml`, KanDDDinsky `app/src/content/kandddinsky.yaml` and ExploreDDD `app/src/content/exploreddd.yaml`.
Fill in your own based on the following template:

```
- title: "The title of the book"
  video: "Embedded link to the video, Example for youtube: https://youtube.com/embed/{id}"
  level: "Select one: all, beginner, intermediate or advanced"
  tags: "list of tags free to fill in, examples:"
    - essential
    - collaborative-modelling
```

### Note for no upcoming session:

Remove the old upcoming session and replace the content of the file with

```yaml
- id: "none"
  img: ./kandddinsky.jpg
```

or some existing image. Important is that the id is not a number but also not empty

## Help develop the website

We love community contribution so we built the site Virtual Domain-Driven Design with Gatsby to make it flexible and hopefully easy enough so that people can contribute on building the website.
There are a lot of Gatsby plugins already used, but don't shy away from adding any of your own.

Also included is frontawesome:

- fortawesome/fontawesome-svg-core
- fortawesome/free-brands-svg-icons
- fortawesome/free-solid-svg-icons
- fortawesome/react-fontawesome

Requirements to build:

- Node
- Yarn (or NPM)

### Start developing

Fork and check-out the master branch.
Install the Gatsby CLI to be able to call gatsby directly, without a node script:

```sh
yarn global add gatsby-cli
```

Then do a Yarn install and Gatsby develop to get you started

```sh
cd ./app
yarn

gatsby develop
# or
yarn run develop
```

You should be able to go to [localhost:8000](https://localhost:8000) to see the site or to [http://localhost:8000/\_graphql](http://localhost:8000/_graphql) to explore the graphQl scheme

**Troubleshooting**: if you encounter the error `Error: The result of this StaticQuery could not be fetched` clean the cache with `gatsby clean`. Additionally, you can remove the node-modules and reinstall them ([issue on github](https://github.com/gatsbyjs/gatsby/issues/24902))

#### Test

The tests are written with [jest](https://jestjs.io/) either as `.test.js` or as `.test.ts(x)` corresponding to the "system under test". We use

- [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
- [@testing-library/react](https://github.com/testing-library/react-testing-library)
- [gatsby-plugin-testing](https://www.gatsbyjs.com/plugins/gatsby-plugin-testing/) to test the real static queries, without mocking them

Run the tests with `yarn test`.

Important: The components using graphQl need a fresh run of `build` or `develop` so that they can generate the latest static queries

Development with TDD works like magic when using the watcher:

```sh
yarn run test:watch
```

#### Pre-Commit

Let prettier to format your files, check the linting and build the project before you commit your changes

```sh
yarn run format
yarn run lint

#and
gatsby build
# or
yarn run build

# or as one command:
yarn run pre-commit
```

You will see linting or graphql errors with a description and advice to fix them if any content is incorrect.

**The commit message** should contain the issue number and should be meaningful so that the commit can be found later, if necessary.

```git
#33 Add a build job to the pipeline
```

#### Pre-Push

Before pushing everything you should check if the packages are outdated and/or have security issues. Security warnings should not be ignored but fixed. Big leaps in versions should not be ignored but updated so that this task does not take to long and doesn't become risky.

```sh
# security checks:
yarn audit

# outdated packages
yarn outdated
```

The commit message for these updates should be `Maintenance: package updates` so that later we can filter them eventually out when using semantic release

#### Release

TODO - define the corresponding workflow with a pipeline and versioning (maybe with [semantic-release](https://github.com/semantic-release/semantic-release))

## Tasks

- create at least one test for every functionality
- enable readme-badge for coverage (for example with https://github.com/luk-schweizer/jest-code-coverage-badge-action)

## Notes

- github links work fine but when linking to a directory which does not contain a readme.md
