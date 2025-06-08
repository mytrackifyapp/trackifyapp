const withPWA = require('next-pwa');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.google.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
};

module.exports = withPWA(nextConfig);
