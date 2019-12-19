import { useDispatch } from "react-redux";
import data from "../data/data.json";
import { storage } from "../config/config";

//#region action type
const LOAD_HERO_LIST_REQUEST = "LOAD_HERO_LIST_REQUEST";
const LOAD_HERO_LIST_FAIL = "LOAD_HERO_LIST_FAIL";
const LOAD_HERO_LIST_SUCCESS = "LOAD_HERO_LIST_SUCCESS";
//#endregion action type

//action creator
export const loadHero = () => {
  return dispatch => {
    dispatch(loadHeroRequest());
    storage
      .ref("images/hero")
      .listAll()
      .then(async rs => {
        const heroList = await Promise.all(
          rs.items.map(banner => {
            return storage.ref(banner.location.path).getDownloadURL();
          })
        );
        return heroList;
      })
      .then(rs => dispatch(loadHeroSuccess(rs)))
      .catch(err => dispatch(loadHeroFail(err)));
  };
};
const loadHeroRequest = () => ({ type: LOAD_HERO_LIST_REQUEST });
const loadHeroSuccess = payload => ({
  type: LOAD_HERO_LIST_SUCCESS,
  payload
});
const loadHeroFail = payload => ({
  type: LOAD_HERO_LIST_FAIL,
  payload
});
