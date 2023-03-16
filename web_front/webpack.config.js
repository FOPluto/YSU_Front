module.exports = {
    // ...其他配置
    resolve: {
        fallback: {
        "path": require.resolve("path-browserify")
        }
    }
};
