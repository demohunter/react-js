module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    // devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-1'] // 这里这个react支持必须执行 npm install babel-preset-react --save
                },
                exclude: /node_modules/
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
};