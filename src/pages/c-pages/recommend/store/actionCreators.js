import * as actionTypes from "./constants";
import { getTopBanner } from "@/services/recommend";

export const changeTopBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
  };
};
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
