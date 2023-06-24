import type webpack from 'webpack'
import {type BuildOptions} from './types/config'
import {buildLoaders} from './loaders'
import {buildPlugins} from './plugins'
import {buildResolvers} from './resolvers'
import {buildDevServer} from './dev-server'

export const buildWebpackConfig = (
	options: BuildOptions,
): webpack.Configuration => {
	const {paths, mode, isDev} = options

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}
