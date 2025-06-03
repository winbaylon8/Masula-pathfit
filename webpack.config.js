const path = require('path');

module.exports = {
  // ... other webpack configurations
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|heic)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      Images: path.resolve(__dirname, 'Images/'),
    },
  },
}; 