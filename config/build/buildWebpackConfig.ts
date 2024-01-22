import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options
    
    return {
        mode,
        entry: paths.entry,
        output: {
          path: paths.build,
          filename: '[name].[contenthash].js',
          clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
          },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
      }
}