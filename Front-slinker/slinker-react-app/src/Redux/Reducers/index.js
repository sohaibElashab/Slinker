import {combineReducers} from 'redux'
import { pagesReducer, productsReducer, similarReducer, websitesReducer } from './ScrapyReducer'

const reducers = combineReducers({
    websites : websitesReducer,
    pages : pagesReducer,
    products : productsReducer,
    similar : similarReducer,
})

export default reducers