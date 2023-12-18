import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import svgicon from 'vite-plugin-svgicon'

const svgFilePath = [path.join(__dirname, '../assets/svg')]

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    video: ['src', 'poster'],
                    source: ['src'],
                    img: ['src'],
                    image: ['xlink:href', 'href'],
                    use: ['xlink:href', 'href'],
                    icon: ['data'],
                },
            },
        }),
        svgicon({
            include: ['**/assets/svg/**/*.svg'],
            svgFilePath: path.join(__dirname, '../assets/svg'),
        }),
        svgicon({
            include: ['**/assets/svg/**/*.svg'],
            matchQuery: /component/,
            component: 'vue',
            svgFilePath: path.join(__dirname, '../assets/svg'),
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@icon',
                replacement: svgFilePath[0],
            },
        ],
    },
})
