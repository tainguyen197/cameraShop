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
  return dispatch => {
    dispatch(loadBrandRequest());
    const brands = data?data.brand:[];
     brands.forEach((item,index) => {
      storage
      .ref("images/brands")
      .child(item.id+".jpg")
      .getDownloadURL()
      .then(url => {
        console.log(url);
        
          brands[index].src = [...item.src, url]
      })
      .finally(()=>{console.log('aaaa');
       dispatch(loadBrandSuccess(brands))})
      .catch(err => {
        console.log(err);
      });
    });
    
  };
};
const loadBrandRequest = () => ({ type: LOAD_BRAND_LIST_REQUEST });
const loadBrandSuccess = payload => ({
  type: LOAD_BRAND_LIST_SUCCESS,
  payload
});
