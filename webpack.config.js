var path = require("path"),
    webpack = require("webpack");

module.exports = {
    module: {
        loaders: [
            { 
                test: /\.less$/, 
                loader: ["style", "css", "less" ] 
            }
        ]
    }
};