const removeImports = require('next-remove-imports')()
/** @type {import('next').NextConfig} */
module.exports = removeImports({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hips.hearstapps.com', 'awcdn1.ahmad.works'],
  },
})
