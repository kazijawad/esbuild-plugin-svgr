const { readFileSync } = require('fs');

const { transform } = require('@svgr/core');

module.exports = (options = {}) => ({
    name: 'svgr',
    setup(build) {
        build.onResolve({ filter: /\.svg$/ }, async (args) => {
            switch (args.kind) {
                case 'import-statement':
                case 'require-call':
                case 'dynamic-import':
                case 'require-resolve':
                    return;
                default:
                    return {
                        external: true,
                    };
            }
        });

        build.onLoad({ filter: /\.svg$/ }, async (args) => {
            const svg = readFileSync(args.path, { encoding: 'utf8' });
            const contents = await transform(svg, { ...options }, { filePath: args.path });

            if (args.suffix === '?url') {
                return {
                    contents: args.path,
                    loader: 'text',
                };
            }

            return {
                contents,
                loader: options.typescript ? 'tsx' : 'jsx',
            };
        });
    },
});
