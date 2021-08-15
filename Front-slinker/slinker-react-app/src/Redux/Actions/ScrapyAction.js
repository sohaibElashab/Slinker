import { ActionTypes } from '../Contants/action-types';

export const setProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const setPages = (pages) => {
    return {
        type: ActionTypes.SET_PAGES,
        payload: pages
    }
}

export const setWebSite = (website) => {
    return {
        type: ActionTypes.SET_WEBSITE,
        payload: website
    }
}

export const setSimilar = (similar) => {
    return {
        type: ActionTypes.SET_SIMILAR,
        payload: similar
    }
}