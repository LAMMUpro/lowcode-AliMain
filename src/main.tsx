import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
/** microApp */
import microApp from "@micro-zoe/micro-app";

microApp.start({});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')!
)
