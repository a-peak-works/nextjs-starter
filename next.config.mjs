/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@untitledui/icons", "motion", "recharts"],
    },
};

export default nextConfig;
