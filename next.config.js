/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'tulamthings.s3.ap-southeast-2.amazonaws.com'],
  },
}
