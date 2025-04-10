import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'

import '../../../css/ddhost.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('ddh-ost')
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept()
}
