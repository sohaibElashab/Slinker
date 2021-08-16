import {ActionTypes} from '../Contants/action-types'

// const productState = {
//     products : []
// }
// const pageState = {
//     pages : []
// }
// const websiteState = {
//     sitewebs : []
// }
// const similarState = {
//     similars : []
// }

export const usersReducer = (state = [] , action) => {
    switch (action.type) {
        case ActionTypes.SET_USERS:
            return {...state, user : action.payload}
        default:
            return state
    }
}

export const productsReducer = (state = [] , action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products : action.payload}
        default:
            return state
    }
}

export const pagesReducer = (state = [] , action) => {
    switch (action.type) {
        case ActionTypes.SET_PAGES:
            return {...state, pages : action.payload}
        default:
            return state
    }
}

export const websitesReducer = (state = [] , action) => {
    switch (action.type) {
        case ActionTypes.SET_WEBSITE:
            return {...state, websites : action.payload}
        default:
            return state
    }
}

export const similarReducer = (state = [] , action) => {
    switch (action.type) {
        case ActionTypes.SET_SIMILAR:
            return {...state, similars : action.payload}
        default:
            return state
    }
}