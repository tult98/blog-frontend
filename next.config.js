const removeImports = require('next-remove-imports')()
/** @type {import('next').NextConfig} */
module.exports = removeImports({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'blog-admin'], // for communication between docker container
  },
})
