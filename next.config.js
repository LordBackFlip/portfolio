/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.starsolpty.com',
          pathname: '/star-images/**',
        },
      ],
    },
  }, nextConfig