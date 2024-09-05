import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import './css/style.css'

// ReactDOM.render(React.createElement('input', {
//     placeholder: 'Help text',
//     onClick: () => console.log('Clicked'),
//     onMouseEnter: () => console.log('Mouse Over')
// }), document.getElementById('app'));


const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(<App />)
