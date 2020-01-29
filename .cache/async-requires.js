// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blogpost-js": () => import("./../src/templates/blogpost.js" /* webpackChunkName: "component---src-templates-blogpost-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blogposts-js": () => import("./../src/pages/blogposts.js" /* webpackChunkName: "component---src-pages-blogposts-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

