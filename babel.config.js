module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, not dead',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel',
  ],
  env: {
    production: {
      presets: ['minify'],
      plugins: ['transform-react-remove-prop-types', {
        ignoreFilenames: ['node_modules'],
      }],
    },
  },
};
