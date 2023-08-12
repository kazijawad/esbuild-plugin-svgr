import { Config } from '@svgr/core'
import { Plugin } from 'esbuild'

declare function svgrPlugin(options?: Config): Plugin

export = svgrPlugin
