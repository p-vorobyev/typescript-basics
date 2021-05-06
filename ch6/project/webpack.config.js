const {resolve} = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.bundle.js',
        path: resolve(__dirname, 'dist')
    },
    target: 'node',
    mode: 'production'
}
