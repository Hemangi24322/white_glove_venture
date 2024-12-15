// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['localhost'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**',
//       },
//     ],
//     formats: ['image/webp'],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.ico$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//           },
//         },
//       ],
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   output: 'standalone',
//   images: {
//     domains: [], // Add any external domains if needed
//     dangerouslyAllowSVG: true,
//     contentDispositionType: 'attachment',
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.ico$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//           },
//         },
//       ],
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;


//update
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external image domains if needed.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ico$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
