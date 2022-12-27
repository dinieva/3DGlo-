//настройки webpack
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    //путь к точке входа 
    entry: './index.js',
    //путь к точке выхода 
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    }
}