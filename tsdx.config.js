const images = require('@rollup/plugin-image')
const postcss = require("rollup-plugin-postcss");

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
    // This function will run for each entry/format/env combination
    rollup(config, options) {
        // config.plugins.push(image())

        config.plugins = [
            images({ incude: ['**/*.png', '**/*.jpg', '**/*.webp'] }),
            postcss({
                extensions: ['.css'],
                inject: true, // Inject the CSS into the JavaScript bundle
                extract: false, // Extract CSS to a separate file
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              }),
            ...config.plugins,
        ]

        return config
    },
};