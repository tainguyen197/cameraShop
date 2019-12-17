import {useDispatch} from 'react-redux'
import data from '../data/data.json'

//#region action type 
const LOAD_PRODUCT_LIST_REQUEST = 'LOAD_PRODUCT_LIST_REQUEST';
const LOAD_PRODUCT_LIST_FAIL = 'LOAD_PRODUCT_LIST_FAIL';
const LOAD_PRODUCT_LIST_SUCCESS = 'LOAD_PRODUCT_LIST_SUCCESS';
//#endregion action type

//action creator
export const loadProduct = () => {
    return dispatch => {
        dispatch(loadProductRequest())
        setTimeout(()=>{
            console.log(data);
            dispatch(loadProductSuccess(data))
        },1000)
    }
    
}
const loadProductRequest = () => ({type:LOAD_PRODUCT_LIST_REQUEST})
const loadProductSuccess = (payload) => ({type:LOAD_PRODUCT_LIST_SUCCESS,payload})
