import nextPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.google.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextPWA({
  ...baseConfig,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});
