/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  images: {
    domains: [ 'firebasestorage.googleapis.com', 'b3ta40.myraidbox.de' ],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig
