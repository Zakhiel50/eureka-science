/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['node-edge-tts', 'ws'],
  images: {
    qualities: [40, 50, 75],
  },
};

export default nextConfig;
