const isProd = process.env.NODE_ENV === "production"

/** @type {import("next").NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.dribbble.com",
                port: "",
            },
        ],
    },
    // assetPrefix: isProd ? "https://cdn.dribbble.com" : undefined,
}

module.exports = nextConfig
