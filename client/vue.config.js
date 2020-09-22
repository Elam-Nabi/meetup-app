const path = require("path");
module.exports = {
    outputDir: path.resolve(path.join(__dirname, "../api/dist")),
    devServer: {
        proxy: {
            "^/": {
                target: "http://server:5000",
            },
        },
    },
};