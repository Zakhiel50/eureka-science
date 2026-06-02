/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['node-edge-tts', 'ws'],
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    qualities: [40, 50, 75],
  },
};

export default nextConfig;
