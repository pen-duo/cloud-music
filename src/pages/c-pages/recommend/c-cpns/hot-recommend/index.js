import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "@/common/constants";
import { getHotRecommendAction } from "../../store/actionCreators";
import { HotRecommendWrapper } from "./style";
import MHThemeHeadRcm from "@/components/theme-header-rcm";
export default memo(function MHHotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector((state) => {
    return {
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <MHThemeHeadRcm
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <div>{item.name}</div>;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
