module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@store': './src/store',
        }
      }
    ],
    'jest-hoist'
  ]
};
