import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'
import React from 'react'

function MyApp() {
  return(
    <div>
      <h1>Custom React App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   Children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google'
)

ReactDom.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <MyApp/>
  //   <App />
  //   <Chai/>
  // </StrictMode>,
  // anotherElement
  reactElement
)
