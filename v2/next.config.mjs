/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/v2',
  assetPrefix: '/v2',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Site legado servido na raiz
        { source: '/', destination: '/index.html' },
      ],
    }
  },
}

export default nextConfig
