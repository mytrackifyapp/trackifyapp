import nextPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.google.com'], // Add other domains if needed
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
};

export default nextPWA({
  ...baseConfig,
  pwa: pwaConfig, // Pass PWA-specific options here
});
