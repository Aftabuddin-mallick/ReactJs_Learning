import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyAPP(){
    return(
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//   type: 'a', 
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'click to me visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotheruser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_balnk"},
    "Click me to visit google",
    anotheruser
)

createRoot(document.getElementById('root')).render(
 
   reactElement
 
)
