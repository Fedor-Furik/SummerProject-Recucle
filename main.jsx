import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App/App.jsx'
import './style/index.scss'
import "./firebase"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
