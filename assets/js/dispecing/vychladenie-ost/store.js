import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/index'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(mySaga)
