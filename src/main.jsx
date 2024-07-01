import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App/App"
import { Provider } from 'react-redux'
// import { store } from './store'
import './style/index.scss'
import "../firebase"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
        <App />
    {/* </Provider> */}
  </React.StrictMode>,
)
