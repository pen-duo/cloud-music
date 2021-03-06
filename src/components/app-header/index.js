import React, { memo } from "react";

import { headerLinks } from "@/common/local-data";

import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from "./style";
export default memo(function MHAppFooter() {
  const showSelectedItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink exact to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      );
    }
  };
  return (
    <AppHeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectedItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          ></Input>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  );
});
