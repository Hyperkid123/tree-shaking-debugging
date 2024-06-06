// Generated using webpack-cli https://github.com/webpack/webpack-cli
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");



const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    mode: 'production',
    entry: './src/index.js',
    target: 'web',
    stats: {
        orphanModules: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            // {
            //     test: /\.(ts|tsx)$/i,
            //     loader: 'ts-loader',
            //     // exclude: ['/node_modules/'],
            // },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            include: /node_modules/,
            terserOptions: {
                module: true,
                mangle: false,
                compress: {
                    defaults: false,
                    unused: true,
                }
            }
        })],
    },
};

module.exports = () => {
    return config;
};
