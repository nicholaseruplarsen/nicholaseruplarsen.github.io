module.exports = {
  images: {
    domains: ["media.graphassets.com", "localhost"],
  },
  webpack: (config, options) => {
    config.module.rules.push(      {
      test: /\.(gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm)$/,
      type: 'asset',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      },
    });
      return config;
  }
};