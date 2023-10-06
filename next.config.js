/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 's3.us-west-2.amazonaws.com', 'prod-files-secure.s3.us-west-2.amazonaws.com'],
  },
}
