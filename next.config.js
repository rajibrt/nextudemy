/** @type {import('@/##-node_modules/next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./base.scss";`,
  },
  // env: {
  //   GITHUB_ID: "bc8325353ca45e666fc5",
  //   GITHUB_SECRET: "6233daf80f76bd849038facf5f995d72827a4a0d",
  //   GOOGLE_ID:
  //     "162119852084-g5nmtu09gi7t6858adjoo3in4n6sd0vi.apps.googleusercontent.com",
  //   GOOGLE_SECRET: "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",
  // },
};

module.exports = nextConfig;
