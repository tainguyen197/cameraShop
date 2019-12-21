import { useDispatch } from "react-redux";
import data from "../data/data.json";
import { storage } from "../config/config";
//#region action type
const LOAD_PRODUCT_LIST_REQUEST = "LOAD_PRODUCT_LIST_REQUEST";
const LOAD_PRODUCT_LIST_FAIL = "LOAD_PRODUCT_LIST_FAIL";
const LOAD_PRODUCT_LIST_SUCCESS = "LOAD_PRODUCT_LIST_SUCCESS";

const LOAD_A_PRODUCT_REQUEST = "LOAD_A_PRODUCT_REQUEST";
const LOAD_A_PRODUCT_FAIL = "LOAD_A_PRODUCT_FAIL";
const LOAD_A_PRODUCT_SUCCESS = "LOAD_A_PRODUCT_SUCCESS";
//#endregion action type

//action creator
export const loadProduct = () => {
  return async dispatch => {
    const products = data ? data.products : [];
    dispatch(loadProductRequest());
    const productList = await Promise.all(
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
              })
            );
            return { ...product, images: listImg };
          })
          .catch(err => console.log(err));
      })
    );
    dispatch(loadProductSuccess(productList));
  };
};
const loadProductRequest = () => ({ type: LOAD_PRODUCT_LIST_REQUEST });
const loadProductSuccess = payload => ({
  type: LOAD_PRODUCT_LIST_SUCCESS,
  payload
});

const loadAProductRequest = () => ({ type: LOAD_A_PRODUCT_REQUEST });
const loadAProductSuccess = payload => ({
  type: LOAD_A_PRODUCT_SUCCESS,
  payload
});

export const loadProductWithIdAndBrand = (id, brand) => {
  return async dispatch => {
    const products = data
      ? data.products.filter(item => (item.brand === brand) && (item.id === id))[0]
      : [];
      
    dispatch(loadProductRequest());
    const productList = await storage
      .ref("images/products")
      .child(products.brand)
      .child(products.id)
      .listAll()
      .then(async rs => {
        const listImg = await Promise.all(
          rs.items.map(url => {
            return storage.ref(url.location.path).getDownloadURL();
          })
        );
        return { ...products, images: listImg };
      })
      .catch(err => console.log(err));
      // console.log(productList);
      const newArr = [productList]
    dispatch(loadProductSuccess(newArr));
  };
};
