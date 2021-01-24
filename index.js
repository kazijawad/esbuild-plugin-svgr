module.exports = (options = {}) => ({
    name: 'svgr',
    setup(build) {
        const svgr = require('@svgr/core').default;
        const fs = require('fs');

        build.onLoad({ filter: /\.svg$/ }, async (args) => {
            const svg = await fs.promises.readFile(args.path, 'utf8');
            const contents = await svgr(svg, { ...options });
            return {
                contents,
                loader: 'jsx',
            };
        });
    },
});
