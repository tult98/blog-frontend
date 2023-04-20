/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'blog-admin'], // for communication between docker container
  },
}
