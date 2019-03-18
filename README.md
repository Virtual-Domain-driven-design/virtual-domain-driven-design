# Virtual Domain-Driven Design

## To develop Virtual Domain-Driven Design

```
# Using Yarn
yarn
```

After that, start up Webpack Development Server:

```
yarn watch
```

Webpack Development Server will watch the F# sources as well as `/src/style.css` and `/tailwind.js` and rebuild your stylesheet on every change. You'll have a hot reloading website under 'localhost:8080'

All you need to develop is the F# Project in the src folder. All other files are maybe interesting to understand the dev-backend, but not necessary to develop and build.

![fsharp-project](./public/img/readme.png)

## Build and deploy

```
yarn build
```

After building, upload the content of the folder '/public' to the webserver.