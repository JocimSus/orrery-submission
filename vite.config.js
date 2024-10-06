const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
            main: './index.html',
            learn_page: './learn-page.html',
            }
        }
    }
})