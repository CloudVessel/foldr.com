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
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
  ],
  env: {
    production: {
      presets: ['minify'],
      plugins: ['transform-react-remove-prop-types'],
    },
  },
};
