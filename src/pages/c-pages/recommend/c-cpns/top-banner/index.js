import React, { memo, useCallback, useEffect, useRef, useState } from "react";

import { getTopBannerAction } from "@/pages/c-pages/recommend/store/actionCreators";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

import { Carousel } from "antd";
export default memo(function MHTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // redux相关
  const { topBanners } = useSelector((state) => {
    return {
      topBanners: state.getIn(["recommend", "topBanners"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  // 其他hook
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  // 其他业务逻辑
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
