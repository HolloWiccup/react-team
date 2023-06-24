import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
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
  ]
  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    )
  }
  return plugins
}
