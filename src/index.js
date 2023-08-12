const { readFile } = require('node:fs/promises')
const { transform } = require('@svgr/core')

const svgrPlugin = (options = {}) => ({
    name: 'svgr',
    setup(build) {
        build.onResolve({ filter: /\.svg$/ }, async (args) => {
            switch (args.kind) {
                case 'import-statement':
                case 'require-call':
                case 'dynamic-import':
                case 'require-resolve':
                    return
                default:
                    return {
                        external: true,
                    }
            }
        })

        build.onLoad({ filter: /\.svg$/ }, async (args) => {
            const svg = await readFile(args.path, { encoding: 'utf8' })

            if (options.plugins && !options.plugins.includes('@svgr/plugin-jsx')) {
                options.plugins.push('@svgr/plugin-jsx')
            } else if (!options.plugins) {
                options.plugins = ['@svgr/plugin-jsx']
            }

            const contents = await transform(svg, { ...options }, { filePath: args.path })

            if (args.suffix === '?url') {
                return {
                    contents: args.path,
                    loader: 'text',
                }
            }

            return {
                contents,
                loader: options.typescript ? 'tsx' : 'jsx',
            }
        })
    },
})

module.exports = svgrPlugin
