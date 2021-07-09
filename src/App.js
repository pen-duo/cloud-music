import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import routes from "@/router";

import MHAppHeader from "@/components/app-header";
import MHAppFooter from "@/components/app-footer";

function App() {
  return (
    <HashRouter>
      <MHAppHeader />
      {renderRoutes(routes)}
      <MHAppFooter />
    </HashRouter>
  );
}
export default memo(App);
