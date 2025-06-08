import withPWA from 'next-pwa';

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
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
};

export default withPWA(nextConfig);
