import { useDispatch } from "react-redux";
import data from "../data/data.json";
import { storage } from "../config/config";
//#region action type
const LOAD_PRODUCT_LIST_REQUEST = "LOAD_PRODUCT_LIST_REQUEST";
const LOAD_PRODUCT_LIST_FAIL = "LOAD_PRODUCT_LIST_FAIL";
const LOAD_PRODUCT_LIST_SUCCESS = "LOAD_PRODUCT_LIST_SUCCESS";
//#endregion action type

//action creator
export const loadProduct = () => {
  return async dispatch => {
    const products = data ? data.products : [];
    dispatch(loadProductRequest());

    
     const productList = await 
     Promise.all(
     products.map((product, index) => {
        return storage
          .ref("images/products")
          .child(product.brand)
          .child(product.id)
          .listAll()
          .then(async rs => {
            const listImg = await Promise.all(
              rs.items.map(url => {
                return storage.ref(url.location.path).getDownloadURL();
              }))
            return {...product,images: listImg}
          }).then(data=>dispatch(loadProductSuccess(data)))
          .catch(err => console.log(err));
      })
     )
  }
}
const loadProductRequest = () => ({ type: LOAD_PRODUCT_LIST_REQUEST });
const loadProductSuccess = payload => ({
  type: LOAD_PRODUCT_LIST_SUCCESS,
  payload
});
