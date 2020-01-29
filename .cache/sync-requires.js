const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blogpost-js": hot(preferDefault(require("/home/michael/Desktop/gatsby-contentul-blog/src/templates/blogpost.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/michael/Desktop/gatsby-contentul-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/michael/Desktop/gatsby-contentul-blog/src/pages/404.js"))),
  "component---src-pages-blogposts-js": hot(preferDefault(require("/home/michael/Desktop/gatsby-contentul-blog/src/pages/blogposts.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/michael/Desktop/gatsby-contentul-blog/src/pages/index.js")))
}

