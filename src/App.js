import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "@/router";
import store from "./store/index";
import MHAppHeader from "@/components/app-header";
import MHAppFooter from "@/components/app-footer";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MHAppHeader />
        {renderRoutes(routes)}
        <MHAppFooter />
      </HashRouter>
    </Provider>
  );
}
export default memo(App);
