import {useDispatch} from 'react-redux'
import data from '../data/data.json'
import { storage } from "../config/config";

//#region action type 
const LOAD_PRODUCT_LIST_REQUEST = 'LOAD_PRODUCT_LIST_REQUEST';
const LOAD_PRODUCT_LIST_FAIL = 'LOAD_PRODUCT_LIST_FAIL';
const LOAD_PRODUCT_LIST_SUCCESS = 'LOAD_PRODUCT_LIST_SUCCESS';
//#endregion action type

//action creator
export const loadProduct = () => {
    return dispatch => {
        dispatch(loadProductRequest())
        storage
        .ref("images/A123")
        .child("40275.jpg")
        .getDownloadURL()
        .then(url => {
        
            console.log(url);
            
        //   dispatch(loadProductSuccess(data))
        }).catch(err=>{console.log(err);
        })
    }
    
}
const loadProductRequest = () => ({type:LOAD_PRODUCT_LIST_REQUEST})
const loadProductSuccess = (payload) => ({type:LOAD_PRODUCT_LIST_SUCCESS,payload})
