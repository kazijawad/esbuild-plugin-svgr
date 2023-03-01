const path = require('node:path');

module.exports = (options = {}) => ({
    name: 'svgr',
    setup(build) {
        const svgr = require('@svgr/core').transform;
        const fs = require('fs');
        build.onResolve({ filter: /\.svg$/ }, async (args) => {
            switch (args.kind) {
                case 'import-statement':
                case 'require-call':
                case 'dynamic-import':
                case 'require-resolve':
                    return;
                default:
                    const absPath = path.resolve(args.resolveDir, args.path);

                    return {
                        path: absPath,
                        external: true,
                    };
            }
        });

        build.onLoad({ filter: /\.svg$/ }, async (args) => {
            const svg = await fs.promises.readFile(args.path, 'utf8');
            const contents = await svgr(
                svg,
                { ...options },
                { filePath: args.path }
            );
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
