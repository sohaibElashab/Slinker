import {combineReducers} from 'redux'
import { pagesReducer, productsReducer, similarReducer, usersReducer, websitesReducer } from './ScrapyReducer'

const reducers = combineReducers({
    websites : websitesReducer,
    pages : pagesReducer,
    products : productsReducer,
    similar : similarReducer,
    user : usersReducer
})

export default reducers