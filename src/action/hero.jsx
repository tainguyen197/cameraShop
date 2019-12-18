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
    const bannerList = [];
    storage
      .ref("images/hero")
      .listAll()
      .then(rs => {
        rs.items.forEach(banner => {
          storage
            .ref(banner.location.path_)
            .getDownloadURL()
            .then(url => {
            //   console.log(url);
              bannerList.push(url);
              dispatch(loadHeroSuccess(bannerList));
            });
        });
      })
      .then(() => {
        console.log("33333");
        
      })
      .catch(err => {
        console.log(err);
      });
    //   .getDownloadURL()
    //   .then(url => {
    //       brands[index].src = [...item.src, url]
    //   })
    //   .finally(()=>dispatch(loadHeroSuccess(brands)))
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
};
const loadHeroRequest = () => ({ type: LOAD_HERO_LIST_REQUEST });
const loadHeroSuccess = payload => ({
  type: LOAD_HERO_LIST_SUCCESS,
  payload
});
