import React, { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import MHTopBanner from "./c-cpns/top-banner";
import MHHotRecommend from "./c-cpns/hot-recommend";
import MHNewAlbum from "./c-cpns/new-album";
import MHRecommendRanking from "./c-cpns/recommend-ranking";

function MHRecommend() {
  return (
    <RecommendWrapper>
      <MHTopBanner></MHTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <MHHotRecommend />
          <MHNewAlbum />
          <MHRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
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
