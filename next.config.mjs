import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  suppressHydrationWarning: true,
  reactStrictMode: true,
  images: {
    domains: ['newegrassrooter.maastrixdemo.com'], // Add other domains if needed
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
