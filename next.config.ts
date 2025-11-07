import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactStrictMode: true,
  // typedRoutes: true,
  reactCompiler: true,
  // enable "use cache" directive and PPR (previously dynamicIO)
  cacheComponents: true,
  experimental: {
      // MCP server
      mcpServer: true
  },
};

export default nextConfig;
