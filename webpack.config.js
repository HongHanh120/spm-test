module.exports = {
    mode: 'development',
    entry:{
        app:['./src/index.js']
    },
    devServer: {
        contentBase: __dirname,
        port:7001,
        host: 'localhost',
    },
    output: {
        filename: "bundle.js",
        path:__dirname+"/dist"
    },
    module:{
        rules: [
            {
                test:/\.(js|jsx)$/,
                use :['babel-loader']
            },
            {
                test:/\.(css|scss)$/i,
                use: [{ loader: "style-loader" }, { loader: "css-loader"},
                    {loader: "sass-loader"}, {loader: "postcss-loader"}
                    ]
            },
            {
                test: /\.woff(2)?(\?[a-z0-9]+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
                loader: "file-loader"
            }]
    }
};
