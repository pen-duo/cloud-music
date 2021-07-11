import React, { memo, useEffect } from "react";
import { getTopBannerAction } from "./store/actionCreators";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
function MHRecommend() {
  const { topBanners } = useSelector((state) => {
    return {
      topBanners: state.getIn(["recommend", "topBanners"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (
    <div>
      <h2>{topBanners.length}</h2>
    </div>
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
