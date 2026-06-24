import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EUREKA : L'Odyssée des Sciences v1.0.3",
    short_name: 'Eureka Science',
    description: "Apprendre les sciences en s'amusant",
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#0891b2',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: "/screenshot-mobile.png",
        sizes: "1170x2532",
        type: "image/png",
        form_factor: "narrow",
        label: "Interface mobile de EUREKA"
      },
      {
        src: "/screenshot-desktop.png",
        sizes: "1920x1080",
        type: "image/png",
        form_factor: "wide",
        label: "Interface bureau de EUREKA"
      }
    ],
  };
}
