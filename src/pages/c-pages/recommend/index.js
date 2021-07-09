import React, { memo, useEffect } from "react";
import { getTopBannerAction } from "./store/actionCreators";
import { connect } from "react-redux";
function MHRecommend(props) {
  const { getBanners, topBanners } = props;
  useEffect(() => {
    getBanners();
  }, [getBanners]);
  return (
    <div>
      <h2>recommend</h2>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    topBanners: state.recommend.topBanners,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // 发起轮播图数据网络请求
    getBanners() {
      dispatch(getTopBannerAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(memo(MHRecommend));
