/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Empty turbopack config silences the Turbopack vs webpack conflict error in Next.js 16
  turbopack: {},
  webpack(config) {
    // Allow importing .glb files as URLs (used when running with --webpack flag)
    config.module.rules.push({
      test: /\.glb$/,
      type: "asset/resource",
    })
    return config
  },
}

export default nextConfig
