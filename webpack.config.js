const path = require('path');

module.exports = {
    // development mode is (obviously enough) for development
    // it won't minify and allows better debugging
    // production mode for minification and shipping
    mode: 'development',
    // our input files to bundle
    entry: './src/index.js',

    output: {
        // where our output directory is
        // in this case relatively specified to output in ./dist
        path: path.resolve(__dirname, 'dist'),
        // the output file name, bundle is a good default but maybe
        // you want to include placeholders to append a hash
        // to the output name for cache invalidation
        filename: 'bundle.js',
    },

    devServer: {
        // our port to serve from
        port: 3333,
        // where our dev server root will be
        contentBase: path.join(__dirname, 'dist'),
    },

}
