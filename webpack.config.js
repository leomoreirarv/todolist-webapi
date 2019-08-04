const path = require('path');
var nodeExternals = require('webpack-node-externals')
const {
    NODE_ENV = 'production',
} = process.env;
module.exports = {
    entry: './src/main.ts',
    // watch: NODE_ENV === 'development',
    watch: true,
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [
                'ts-loader',
            ]
        }]
    },
    externals: [nodeExternals()],
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}