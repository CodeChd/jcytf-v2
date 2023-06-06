/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*',
        // You can add these as well
        // port: '',
        protocol: 'https',
        // pathname: 'arifscloud/image/upload/**',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
