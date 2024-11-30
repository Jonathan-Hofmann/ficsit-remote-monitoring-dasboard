import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/homepage',
      },
    ];
  },
  // TODO : Have to correctly configure  SCSS for Next15, currently not possible
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
