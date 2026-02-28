import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  output: "export",        // generuje statický HTML výstup do složky /out
  trailingSlash: true,     // /blog/ místo /blog — nutné pro Apache hosting
  images: {
    unoptimized: true,     // Next.js Image optimization vyžaduje server, bez ní to funguje staticky
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
