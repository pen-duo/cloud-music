import * as actionTypes from "./constants";
import { getTopBanner } from "@/services/recommend";

// 派发action
export const changeTopBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
  };
};
// 获取轮播图数据
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
