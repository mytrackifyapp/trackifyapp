import nextPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.google.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

// Merge with PWA
export default nextPWA({
  ...nextConfig,
  dest: 'public',
  register: true,
  skipWaiting: true,
});
