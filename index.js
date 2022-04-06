module.exports = (options = {}) => ({
    name: 'svgr',
    setup(build) {
        const svgr = require('@svgr/core').transform;
        const fs = require('fs');

        build.onLoad({ filter: /\.svg$/ }, async (args) => {
            const svg = await fs.promises.readFile(args.path, 'utf8');
            const contents = await svgr(svg, { ...options }, { filePath: args.path });
            return {
                contents,
                loader: options.typescript ? 'tsx' : 'jsx',
            };
        });
    },
});
