import { Redirect } from "react-router-dom";
import MHDiscover from "@/pages/discover";
import MHFriend from "@/pages/friend";
import Mine from "@/pages/mine";
import MHRecommend from "@/pages/c-pages/recommend";
import MHArtist from "@/pages/c-pages/artist";
import MHRanking from "@/pages/c-pages/ranking";
import MHDjradio from "@/pages/c-pages/djradio";
import MHSongs from "@/pages/c-pages/songs";
import MHAlbum from "@/pages/c-pages/album";
const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="discover" />,
  },
  {
    path: "/discover",
    component: MHDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      { path: "/discover/recommend", component: MHRecommend },
      { path: "/discover/artist", component: MHArtist },
      { path: "/discover/ranking", component: MHRanking },
      { path: "/discover/djradio", component: MHDjradio },
      { path: "/discover/songs", component: MHSongs },
      { path: "/discover/album", component: MHAlbum },
    ],
  },
  {
    path: "/friend",
    component: MHFriend,
  },
  {
    path: "/mine",
    component: Mine,
  },
];
export default routes;
