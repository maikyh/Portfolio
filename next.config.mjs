/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export published to GitHub Pages at maikyh.github.io/miguel-garza
  output: "export",
  basePath: "/miguel-garza",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
