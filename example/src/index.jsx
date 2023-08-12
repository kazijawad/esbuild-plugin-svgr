import * as React from 'react'
import * as Server from 'react-dom/server'

import './index.css'
import Asset from './asset.svg'

function App() {
    return (
        <main>
            <h1>Hello World!</h1>
            <Asset />
        </main>
    )
}

console.log(Server.renderToString(<App />))
