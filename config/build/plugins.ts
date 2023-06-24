import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __IS_DEV__: JSON.stringify(isDev),
  }),
  new webpack.HotModuleReplacementPlugin(),
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }),
]
