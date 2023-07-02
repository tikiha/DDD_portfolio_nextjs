/** @type {import('next').NextConfig} */

// "build": "next build && next-export-optimize-images",
// const withExportImages = require("next-export-optimize-images");
// const nextConfig = withExportImages({
//   output: "export",
// });

const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;
