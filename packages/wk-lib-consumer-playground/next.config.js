const withTM = require('next-transpile-modules')(['@weknow-network/wk-lib-playground'])
const path = require('path')
module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Will make webpack look for these modules in parent directories
      '@weknow-network/wk-lib-playground': path.resolve(__dirname, '..', 'packages', 'wk-lib-playground'),
      // ...
    };
    return config;
  },
})
