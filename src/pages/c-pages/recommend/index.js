import React, { memo } from "react";

import { RecommendWrapper } from "./style";

import MHTopBanner from "./c-cpns/top-banner";
function MHRecommend() {
  return (
    <RecommendWrapper>
      <MHTopBanner></MHTopBanner>
    </RecommendWrapper>
  );
}

// function MHRecommend(props) {
//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);
//   return (
//     <div>
//       <h2>recommend</h2>
//     </div>
//   );
// }
// const mapStateToProps = (state) => {
//   return {
//     topBanners: state.recommend.topBanners,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBanners() {
//       dispatch(getTopBannerAction());
//     },
//   };
// };
export default memo(MHRecommend);
