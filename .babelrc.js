module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '58',
          ie: '11',
        },
        useBuiltIns: 'entry',
        corejs: {
          version: '3',
          proposals: true,
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
      },
    ],
  ],
};
