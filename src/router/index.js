import MHDiscover from "@/pages/discover";
import MHFriend from "@/pages/friend";
import Mine from "@/pages/mine";

const routes = [
  {
    path: "/",
    exact: true,
    component: MHDiscover,
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
