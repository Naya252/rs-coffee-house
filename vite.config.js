import path from 'path'
import {resolve} from 'path'

export default {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/assets')
        }
    },
    build: {
        css: {
            devSourcemap: true // enable CSS source maps during development
        },
        sourcemap: true, // enable production source maps
        input: {
            main: resolve(__dirname, 'index.html'),
            menu: resolve(__dirname, 'menu/index.html'),
        }
    }
}