const withPWA = require('next-pwa')({
  dest: 'public', // Specify the destination for the service worker
  register: true, // Automatically register the service worker
  skipWaiting: true, // Skip waiting and activate the service worker immediately
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.google.com'], // Add other domains if needed
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = withPWA(nextConfig);
