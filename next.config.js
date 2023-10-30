/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdlxkuzvjlyvwgzgcdro.supabase.co",
      },
      {
        hostname: "kxoneskwkgrjredodsfx.supabase.co",
      },
      {
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "mundo-tours.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "adviserholidays.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "april-tours.s3.me-central-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "placekitten.com",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "placekitten.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

module.exports = nextConfig;
