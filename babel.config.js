module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src'],
        alias: {
          '@Components': './src/components',
          '@Utils': './src/utils',
          '@Config': './src/config',
          '@Images': './src/images',
          '@Store': './src/store',
          '@Navigation': './src/navigation',
          '@Styles': './src/styles',
          '@Screens': './src/screens',
        },
      },
    ],
  ],
};
