/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['antd-mobile'],
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
