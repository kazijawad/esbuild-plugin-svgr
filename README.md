# esbuild-plugin-svgr

A plugin for [esbuild](https://github.com/evanw/esbuild) that adds support for `*.svg` file imports as React components. The plugin is built on top of [@svgr/core](https://react-svgr.com/docs/node-api/).

## Basic Usage

1. Install the plugin in your project:
```bash
npm install --save-dev esbuild-plugin-svgr
# or use yarn
yarn add --dev esbuild-plugin-svg
```

2. Add this plugin to your esbuild build script:
```js
const svgrPlugin = require('esbuild-plugin-svgr')

esbuild.build({
    plugins: [
        svgrPlugin(),
    ],
})
```

3. Import your `*.svg` file from JavaScript:
```js
import Icon from './icon.svg';

const App = () => (
    <div>
        <Icon />
    </div>
);
```

4. Pass in optional [supported](https://github.com/gregberge/svgr/blob/master/packages/core/src/config.js#L3) configuration options:
```js
esbuild.build({
    plugins: [
        svgrPlugin({ ref: true }),
    ],
})
```

## Author

[Kazi Jawad](https://github.com/kazijawad)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/kazijawad/esbuild-plugin-svgr/blob/main/LICENSE.md) file for details

## Acknowledgements

[@svgr/core](https://github.com/gregberge/svgr/tree/master/packages/core)
