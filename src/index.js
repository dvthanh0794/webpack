import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import "./App.css"
import store from './app/store'
import { Provider } from 'react-redux'

ReactDom.render( <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))