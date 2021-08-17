import axios from 'axios';
import { ActionTypes } from '../Contants/action-types';
  
export const setWebSite = () => async (dispatch) => {
    const response = await axios
        .post(`http://127.0.0.1:8000/api/websites/ID/`, { user_id: sessionStorage.getItem("id_user")})
        .catch((err) => console.log("err", err));
    dispatch({
        type: ActionTypes.SET_WEBSITE,
        payload: response.data});
}
  
export const setProduct = () => async (dispatch) => {
    const response = await axios
        .post(`http://127.0.0.1:8000/api/products/ID/`, { user_id: sessionStorage.getItem("id_user")})
        .catch((err) => console.log("err", err));
    dispatch({
        type: ActionTypes.SET_PRODUCTS,
        payload: response.data});
}
  
export const setPages = () => async (dispatch) => {
    const response = await axios
        .post(`http://127.0.0.1:8000/api/pages/ID/`, { user_id: sessionStorage.getItem("id_user")})
        .catch((err) => console.log("err", err));
    dispatch({
        type: ActionTypes.SET_PAGES,
        payload: response.data});
}
  
export const setSimilar = () => async (dispatch) => {
    const response = await axios
        .post(`http://127.0.0.1:8000/api/similar/ID/`, { user_id: sessionStorage.getItem("id_user")})
        .catch((err) => console.log("err", err));
    dispatch({
        type: ActionTypes.SET_SIMILAR,
        payload: response.data});
}