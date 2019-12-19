import { useDispatch } from "react-redux";
import data from "../data/data.json";
import { storage } from "../config/config";

//#region action type
const LOAD_BRAND_LIST_REQUEST = "LOAD_BRAND_LIST_REQUEST";
const LOAD_PRODUCT_LIST_FAIL = "LOAD_PRODUCT_LIST_FAIL";
const LOAD_BRAND_LIST_SUCCESS = "LOAD_BRAND_LIST_SUCCESS";
//#endregion action type

//action creator
export const  loadBrand = () => {
  return async dispatch => {
    dispatch(loadBrandRequest());
    const brands = data?data.brands:[];
    
     const brandsList = await Promise.all(
      brands.map((item, index)=>{
          return storage
          .ref("images/brands")
          .child(item.id+".jpg")
          .getDownloadURL()
          .then(url => {
            const newItem = {...item};
            newItem.src.push(url)
            return newItem;
          })
      })).catch(err=>dispatch(loadBrandFail(err)))
    
    dispatch(loadBrandSuccess(brandsList)) 
      
    
  };
};
const loadBrandRequest = () => ({ type: LOAD_BRAND_LIST_REQUEST });

const loadBrandSuccess = payload => ({
  type: LOAD_BRAND_LIST_SUCCESS,
  payload
});

const loadBrandFail = payload => ({
  type: LOAD_PRODUCT_LIST_FAIL,
  payload
});
