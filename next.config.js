const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['vscode-oniguruma', 'shiki'],
  },
};

module.exports = withContentlayer(nextConfig);
