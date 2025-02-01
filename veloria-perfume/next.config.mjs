/** @type {import('next').NextConfig} */
const nextConfig = {};

export const imageConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
          search: '',
        },
      ],
    },
  }

export default nextConfig;
