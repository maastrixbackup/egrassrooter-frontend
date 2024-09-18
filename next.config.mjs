import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  suppressHydrationWarning: true,
  reactStrictMode: true,
  images: {
    domains: ['newegrassrooter.maastrixdemo.com', '192.168.1.47'], // Add your IP address here
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the jQuery ProvidePlugin
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
};

export default nextConfig;
