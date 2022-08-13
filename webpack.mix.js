let mix = require('laravel-mix')
const {resolve} = require("path");
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path");

mix.setPublicPath('dist');
mix.js('resources/js/nova-custom-views.js', 'js')
    .sass('resources/sass/nova-custom-views.scss', 'css')
    .vue({ version: 3 })
    .webpackConfig({
        resolve: {
            alias: {
                '@nova': path.resolve(__dirname, '../../laravel/nova/resources/js/'),
                '@': path.resolve(__dirname, '../../laravel/nova/resources/js/')
            }
        }
    })


