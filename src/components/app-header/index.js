import React, { memo } from "react";

import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeadLeft, HeadRight } from "./style";
export default memo(function MHAppFooter() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeadLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
        </HeadLeft>
        <HeadLeft>Right</HeadLeft>
      </div>
      <div className="divider"></div>

      <NavLink to="/">发现音乐</NavLink>
      <NavLink to="/mine">我的音乐</NavLink>
      <NavLink to="/friend">我的朋友</NavLink>
    </HeaderWrapper>
  );
});
