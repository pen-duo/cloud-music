import MHDiscover from "@/pages/discover";
import MHFriend from "@/pages/friend";
import Mine from "@/pages/mine";
import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="discover" />,
  },
  {
    path: "/discover",
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
