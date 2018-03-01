import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('skutocna-cena-tepla')
);

/*setTimeout(() => {
    store.dispatch({
        type: 'UDT_ADD',
        payload: { id: 111, zdroj: 'Spolu (bez PK)', V_kWh: 10071881, V_kW: 2056, Z_kWh: 152534852, Z_kW: 31664 }
    })
}, 1000)*/