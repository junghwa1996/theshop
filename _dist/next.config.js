const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);
const withCSS = require("@zeit/next-css");

const withAssets = (module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options;
      nextConfig = Object.assign({ inlineImageLimit: 8192, assetPrefix: "" }, nextConfig);

      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        );
      }

      config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif|ico|webp)$/,
        exclude: nextConfig.exclude,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: nextConfig.inlineImageLimit,
              fallback: "file-loader",
              publicPath: `${nextConfig.assetPrefix}/_next/static/images/`,
              outputPath: `${isServer ? "../" : ""}static/images/`,
              name: "[name]-[hash].[ext]"
            }
          }
        ]
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
});

module.exports = withCSS(
  withAssets({
    //assetPrefix: process.env.NODE_ENV === 'development' ? '' : 'https://s.zigbang.com/catalog/lepied2', 
    //assetPrefix: process.env.NODE_ENV === 'development' ? '' : 'https://s.zigbang.com/catalog/lepied',
    assetPrefix: './..',
    exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
      const pathMap = {
        "/zigbang": { page: "/", query: { domain: "zigbang" } },
        "/daum": { page: "/", query: { domain: "daum" } },
        "/hogangnono": { page: "/", query: { domain: "hogangnono" } },
        "/done": { page: "/done" }
      };

      if (dev) {
        return pathMap;
      }

      const htmlFiles = [ "gain_20190521_v2.html", "gain_3ja_20190521.html", "marketing_20190521.html" ];
      await Promise.all(htmlFiles.map((fileName) => copyFile(join(dir, fileName), join(outDir, fileName))));

      return pathMap;
    }
  })
);
