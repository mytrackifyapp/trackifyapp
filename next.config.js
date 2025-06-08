const withPWA = require('next-pwa');

module.exports = withPWA({
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
});
