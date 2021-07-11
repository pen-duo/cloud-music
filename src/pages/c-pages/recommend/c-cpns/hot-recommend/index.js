import React, { memo } from "react";

import { HotRecommendWrapper } from "./style";
import MHThemeHeadRcm from "@/components/theme-header-rcm";
export default memo(function MHHotRecommend() {
  return (
    <HotRecommendWrapper>
      <MHThemeHeadRcm
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
    </HotRecommendWrapper>
  );
});
