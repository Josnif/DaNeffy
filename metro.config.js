const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname)

// const { transformer, resolver } = defaultConfig;

// defaultConfig.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

// // defaultConfig.resolver = [...resolver];
// defaultConfig.resolver.assetExts = resolver.assetExts.filter((ext) => ext !== "svg");
// defaultConfig.resolver.sourceExts = [...resolver.sourceExts, "svg"];

defaultConfig.resolver.extraNodeModules = require('node-libs-react-native');

module.exports = defaultConfig;

