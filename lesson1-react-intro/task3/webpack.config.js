const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (ebv, argv) => {
  const config = {
    output: {
      path: path.resolve(__dirname, 'review_build'),
    },
    module: {
      rules: [
        {
          test: /.js$/,
          use: ['babel-loader'],
        },
        {
          test: /.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  };

  //  if (argv.mode === 'development') {
  //    config.devtool = 'source-map';
  //  }

  // if (argv.mode === 'production') {
  //   //...
  // }

  return config;
};
