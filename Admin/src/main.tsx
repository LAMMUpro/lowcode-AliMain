import React from 'react'
import ReactDOM from 'react-dom';
import App from '@/App';

/** microApp */
import microApp from "@micro-zoe/micro-app";

microApp.start({});

ReactDOM.render(
  <App />,
  document.getElementById('root')!
)
