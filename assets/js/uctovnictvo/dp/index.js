import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'

import '../../../css/dp.scss'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('danove-priznanie')
);

if (module.hot) {
  module.hot.accept()
}