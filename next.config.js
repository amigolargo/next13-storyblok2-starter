/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  },
}

module.exports = nextConfig
