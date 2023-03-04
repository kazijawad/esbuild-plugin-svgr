import { join } from 'path'

import * as esbuild from 'esbuild'
import svgr from 'esbuild-plugin-svgr'

await esbuild.build({
    entryPoints: ['app.jsx'],
    bundle: true,
    outfile: join('dist', 'out.js'),
    plugins: [
        svgr(),
    ],
})
