import * as actionTypes from "./constants";
import { getTopBanner, getHotRecommends } from "@/services/recommend";

export const changeTopBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
  };
};
const changeRecommendAction = (res) => {
  return {
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result,
  };
};
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeRecommendAction(res));
    });
  };
};
