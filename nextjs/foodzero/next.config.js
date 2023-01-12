/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 60,
    deviceSizes: [480, 1280, 1920],
    imageSizes: [40, 128],
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
