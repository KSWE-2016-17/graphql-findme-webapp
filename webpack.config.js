module.exports = {
    entry: {
        javascript: "./src/js/app.js",
        html: "./src/index.html",
        css: "./src/css/style.css"
    },
    output: {
        path: "./dist",
        filename: "js/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: [
                        "react",
                        "es2015"                    ]
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.css$/,
                loader: "file?name=css/[name].[ext]"
            }
        ]
    }
};
