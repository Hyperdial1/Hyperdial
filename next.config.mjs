/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // LP URL renames (2026-07): old slugs -> new platform-positioning slugs
      { source: "/automate-support", destination: "/ai-customer-service-platform", permanent: true },
      { source: "/omnichannel", destination: "/ai-service-automation-platform", permanent: true },
      { source: "/smart-calling", destination: "/ai-business-communication-platform", permanent: true },
    ];
  },
};

export default nextConfig;
