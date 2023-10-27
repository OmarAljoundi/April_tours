/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "cdlxkuzvjlyvwgzgcdro.supabase.co",
      "kxoneskwkgrjredodsfx.supabase.co",
      "flagcdn.com",
    ],
    remotePatterns: [
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
