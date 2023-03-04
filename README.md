# esbuild-plugin-svgr

A plugin for [esbuild](https://github.com/evanw/esbuild) that adds support for `*.svg` file imports as React components. The plugin is built on top of [SVGR](https://github.com/gregberge/svgr).

## Basic Usage

1. Install the plugin in your project:
```bash
npm install --save-dev esbuild-plugin-svgr
# or use yarn
yarn add --dev esbuild-plugin-svgr
```

2. Add this plugin to your esbuild build script:
```js
import esbuild from 'esbuild'
import svgr from 'esbuild-plugin-svgr'

await esbuild.build({
    plugins: [
        svgr(),
    ],
})
```

3. Import your `*.svg` file from JavaScript:
```js
import Icon from './icon.svg';

function App() {
    return (
        <div>
            <Icon />
        </div>
    );
}
```

4. Pass in optional [supported](https://react-svgr.com/docs/options/) configuration options:
```js
esbuild.build({
    plugins: [
        svgr({ ref: true }),
    ],
});
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/kazijawad/esbuild-plugin-svgr/blob/main/LICENSE.md) file for details.

## Acknowledgements

[SVGR](https://github.com/gregberge/svgr)
