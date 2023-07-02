/** @type {import('next').NextConfig} */

const withExportImages = require("next-export-optimize-images");

const nextConfig = withExportImages({
  output: "export",
  // images: {
  //   domains: ["images.microcms-assets.io"],
  // },
});

module.exports = nextConfig;
