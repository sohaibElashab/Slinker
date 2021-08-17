import {applyMiddleware, compose, createStore} from 'redux'
import reducers from './Reducers/index'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

export default store