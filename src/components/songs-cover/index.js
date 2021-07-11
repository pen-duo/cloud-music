import React, { memo } from "react";
import { getCount, getSizeImage } from "@/utils/data-format";
import { SongsCoverWrapper } from "./style";
export default memo(function MHSongsCover(props) {
  const { info } = props;
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source ">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  );
});
